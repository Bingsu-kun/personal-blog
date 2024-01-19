import Profile from "./profile";
import Intro from "./intro";

const Home = () => {
  return (
    <>
      <div id="Home-body" className="grid grid-cols-[30%_70%]">
        <div id="Home-body-profile">
            <Profile/>
        </div>
        <div id="Home-body-intro">
            <Intro/>
        </div>
      </div>
    </>
  );
}

export default Home;
