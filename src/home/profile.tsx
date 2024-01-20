import ProfileImage from "./profile/profileImage";
import ProfileSNS from "./profile/profileSNS";

const Profile = () => {
  return (
    <div
      id="profile-base"
      className="flex flex-col justify-center items-center shadow-2xl h-screen w-96"
    >
      <ProfileImage />
      <p className="text-3xl">Janghun Lee (Isaac)</p>
      <p className="text-xl">@Bingsu-kun 🇰🇷</p>
      <br />
      <p className="text-2xl">Backend-engineer</p>
      <p>
        #Golf #Fishing #Camping #Cooking
        <br /> #Brewing #Goalkeeper #Animation
      </p>
      <ProfileSNS />
    </div>
  );
};

export default Profile;
