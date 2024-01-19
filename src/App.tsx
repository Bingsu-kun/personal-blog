import Home from "./home/home";
import Blog from "./blog/blog";
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
