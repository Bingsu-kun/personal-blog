#!/bin/bash

echo "Github Page CI Action start"
BUILD_DIRECTORY="dist"
DESTINATION_GITHUB_USERNAME="isaac-jh"
DESTINATION_REPOSITORY_NAME="isaac-jh.github.io"
USER_EMAIL="icetime963@gmail.com"
USER_NAME="isaac"
DESTINATION_REPOSITORY_USERNAME="isaac-jh"
TARGET_BRANCH="master"
COMMIT_MESSAGE="Updated by Github Action"

GITHUB_SERVER="github.com"
TARGET_DIRECTORY=""

if [ -n "${API_TOKEN_GITHUB:=}" ]
then
	echo "[+] Using API_TOKEN_GITHUB"
	GIT_CMD_REPOSITORY="https://isaac-jh:$API_TOKEN_GITHUB@github.com/isaac-jh/isaac-jh.github.io.git"
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

git clone https://github.com/isaac-jh/isaac-jh.github.io.git "$CLONE_DIR"

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
	exit 1
fi

echo "[+] Copying contents of source repository folder $BUILD_DIRECTORY to folder $TARGET_DIRECTORY in git repo $DESTINATION_REPOSITORY_NAME"
cp -ra "$BUILD_DIRECTORY"/. "$CLONE_DIR/$TARGET_DIRECTORY"
cd "$CLONE_DIR"

echo "[+] Files that will be pushed"
ls -la

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