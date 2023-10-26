import ReactDOM from "react-dom";
import Block from "./components/body/Bodyblock";
import Navbar from "./components/nav/Navbar";

function App() {
  const root: HTMLElement = document.getElementById("root")!;
  const init = (
    <>
      <div id="App-header">
        <Navbar />
      </div>
      <div id="App-body" className="grid grid-cols-[20%_60%_20%]">
        <div id="App-body-left"></div>
        <div id="App-body-center">
          <Block blockId="1" />
          <Block blockId="2" />
        </div>
        <div id="App-body-right"></div>
      </div>
      <div id="App-footer"></div>
    </>
  );
  ReactDOM.render(init, root);
}

export default App;
