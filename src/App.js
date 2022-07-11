import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContex";
import "./App.css";
import NewsContainer from "./components/NewsContainer";
import LoginForm from "./components/LoginForm";
import CreateAccount from "./components/CreateAccount";
import Display from "./components/Display";

function App() {
	return (
		<div>
			<Router>
				<AuthProvider>
					<Routes>
						<Route exact path="/" element={<NewsContainer />} />
						<Route path="/news" element={<NewsContainer />} />
						<Route path="/LoginForm" element={<LoginForm />} />
						<Route path="/CreateAccount" element={<CreateAccount />} />
						<Route path="/Display" element={<Display />} />
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
