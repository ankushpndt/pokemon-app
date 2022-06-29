import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ListProvider } from "./context/ListContext";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleAuthProvider } from "./context/GoogleAuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Router>
		<GoogleAuthProvider>
			<ListProvider>
				<App />
			</ListProvider>
		</GoogleAuthProvider>
	</Router>
	// </React.StrictMode>
);
