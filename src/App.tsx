import Home from "./home/home";
import Sorry from "./sorry";

const inConstruction = true

const App = () => {
  return inConstruction ? (
    <>
      <Sorry/>
    </>
  ) : (
    <>
      <Home/>
    </>
  );
}

export default App;
