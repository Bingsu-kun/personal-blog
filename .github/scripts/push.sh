#!/bin/bash

echo "Github Page CI Action start"
BUILD_DIRECTORY="build"
DESTINATION_GITHUB_USERNAME="Bingsu-kun"
DESTINATION_REPOSITORY_NAME="${DESTINATION_GITHUB_USERNAME}.github.io"
USER_EMAIL="icetime963@gmail.com"
USER_NAME="hephai"
DESTINATION_REPOSITORY_USERNAME="Bingsu-kun"
TARGET_BRANCH="main"
COMMIT_MESSAGE="Updated by Github Action"

GITHUB_SERVER="github.com"
TARGET_DIRECTORY=""

if [ -n "${API_TOKEN_GITHUB:=}" ]
then
	echo "[+] Using API_TOKEN_GITHUB"
	GIT_CMD_REPOSITORY="https://$DESTINATION_REPOSITORY_USERNAME:$API_TOKEN_GITHUB@$GITHUB_SERVER/$DESTINATION_REPOSITORY_USERNAME/$DESTINATION_REPOSITORY_NAME.git"
else
	echo "::error::API_TOKEN_GITHUB and SSH_DEPLOY_KEY are empty. Please fill one (recommended the SSH_DEPLOY_KEY)"
	exit 1
fi


CLONE_DIR=$(mktemp -d)

echo "[+] Git version"
git --version

echo "[+] Enable git lfs"
git lfs install

echo "[+] Cloning destination git repository $DESTINATION_REPOSITORY_NAME"

git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"

git config --global http.version HTTP/1.1

{
	git clone --single-branch --depth 1 --branch "$TARGET_BRANCH" "$GIT_CMD_REPOSITORY" "$CLONE_DIR"
} || {
	echo "::error::Could not clone the destination repository. Command:"
	echo "::error::git clone --single-branch --branch $TARGET_BRANCH $GIT_CMD_REPOSITORY $CLONE_DIR"
	echo "::error::(Note that if they exist USER_NAME and API_TOKEN is redacted by GitHub)"
	echo "::error::Please verify that the target repository exist AND that it contains the destination branch name, and is accesible by the API_TOKEN_GITHUB OR SSH_DEPLOY_KEY"
	exit 1

}
ls -la "$CLONE_DIR"

TEMP_DIR=$(mktemp -d)
mv "$CLONE_DIR/.git" "$TEMP_DIR/.git"

ABSOLUTE_TARGET_DIRECTORY="$CLONE_DIR/$TARGET_DIRECTORY/"

echo "[+] Deleting $ABSOLUTE_TARGET_DIRECTORY"
rm -rf "$ABSOLUTE_TARGET_DIRECTORY"

echo "[+] Creating (now empty) $ABSOLUTE_TARGET_DIRECTORY"
mkdir -p "$ABSOLUTE_TARGET_DIRECTORY"

echo "[+] Listing Current Directory Location"
ls -al

echo "[+] Listing root Location"
ls -al /

mv "$TEMP_DIR/.git" "$CLONE_DIR/.git"

echo "[+] List contents of $BUILD_DIRECTORY"
ls "$BUILD_DIRECTORY"

echo "[+] Checking if local $BUILD_DIRECTORY exist"
if [ ! -d "$BUILD_DIRECTORY" ]
then
	echo "ERROR: $BUILD_DIRECTORY does not exist"
	echo "This directory needs to exist when push-to-another-repository is executed"
	echo
	echo "In the example it is created by ./build.sh: https://github.com/cpina/push-to-another-repository-example/blob/main/.github/workflows/ci.yml#L19"
	echo
	echo "If you want to copy a directory that exist in the source repository"
	echo "to the target repository: you need to clone the source repository"
	echo "in a previous step in the same build section. For example using"
	echo "actions/checkout@v2. See: https://github.com/cpina/push-to-another-repository-example/blob/main/.github/workflows/ci.yml#L16"
	exit 1
fi

echo "[+] Copying contents of source repository folder $BUILD_DIRECTORY to folder $TARGET_DIRECTORY in git repo $DESTINATION_REPOSITORY_NAME"
cp -ra "$BUILD_DIRECTORY"/. "$CLONE_DIR/$TARGET_DIRECTORY"
cd "$CLONE_DIR"

echo "[+] Files that will be pushed"
ls -la

ORIGIN_COMMIT="https://$GITHUB_SERVER/$GITHUB_REPOSITORY/commit/$GITHUB_SHA"
COMMIT_MESSAGE="${COMMIT_MESSAGE/ORIGIN_COMMIT/$ORIGIN_COMMIT}"
COMMIT_MESSAGE="${COMMIT_MESSAGE/\$GITHUB_REF/$GITHUB_REF}"

echo "[+] Set directory is safe ($CLONE_DIR)"
git config --global --add safe.directory "$CLONE_DIR"

echo "[+] Adding git commit"
git add .

echo "[+] git status:"
git status

echo "[+] git diff-index:"
git diff-index --quiet HEAD || git commit --message "$COMMIT_MESSAGE"

echo "[+] Pushing git commit"
git push "$GIT_CMD_REPOSITORY" --set-upstream "$TARGET_BRANCH"