import Block from "./components/body/Bodyblock";
import BodyThumbnailAndTitle from "./components/body/BodyThumbnailAndTitle";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <div id="App-header">
        <Navbar />
      </div>
      <div id="App-body" className="grid grid-cols-[25%_50%_25%]">
        <div id="App-body-left"></div>
        <div id="App-body-center">
          <Block
            blockId="1"
            isHover={true}
            contents={BodyThumbnailAndTitle()}
          />
          <Block blockId="2" />
        </div>
        <div id="App-body-right"></div>
      </div>
      <div id="App-footer"></div>
    </>
  );
}

export default App;
