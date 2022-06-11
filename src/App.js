import './App.css';
import Navbar from './components/Navbar';
import NewsContainer from "./components/NewsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NewsContainer />}></Route>
					<Route path="/news" element={<NewsContainer />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
