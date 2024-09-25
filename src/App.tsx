import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/home"
import Resume from "./resume/resume"
import Sorry from "./sorry"

const inConstruction = true

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={inConstruction ? <Sorry /> : <Home />}></Route>
					<Route path="/resume" element={<Resume />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
