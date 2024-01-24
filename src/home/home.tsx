import Profile from "./profile";
import Intro from "./intro";

const Home = () => {
  return (
    <>
      <div id="Home-body" className="flex">
        <div id="Home-body-profile">
            <Profile/>
        </div>
        <div id="Home-body-intro" className="flex justify-center items-center w-full">
            <Intro/>
        </div>
      </div>
    </>
  );
}

export default Home;
