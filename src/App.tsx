import Block from "./components/body/Bodyblock";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <div id="App-header">
        <Navbar />
      </div>
      <div id="App-body" className="grid grid-cols-[20%_60%_20%]">
        <div id="App-body-left"></div>
        <div id="App-body-center">
          <Block blockId="1" isHover={true} />
          <Block blockId="2" />
        </div>
        <div id="App-body-right"></div>
      </div>
      <div id="App-footer"></div>
    </>
  );
}

export default App;
