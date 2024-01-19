import ProfileImage from "../components/profile/profileImage"

const Profile = () => {
    return (
        <div id="profile-base" className="flex flex-col justify-center items-center shadow-2xl h-screen w-300px">
            <ProfileImage/>
            <h1>Janghun Lee (Isaac)</h1>
            <h2>@Bingsu-kun</h2>
            <br/>
            <h3>Backend-engineer</h3>
            <h4>Golfer, Fisher and Mead brewer</h4>
            {/* TODO: 깃허브, 인스타, 이메일 링크 여기에 추가 예정 */}
        </div>
    )
}

export default Profile
