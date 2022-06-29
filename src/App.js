import "./App.css";
import { Routes, Route } from "react-router-dom";
import PokemonsList from "./Pages/PokemonsList";
import LoginButton from "./Pages/Login";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { PrivateRoute } from "./PrivateRoute";
import LogoutButton from "./Pages/Logout";
import { useGoogleAuth } from "./context/GoogleAuthContext";
import { Searchbar } from "./Pages/Searchbar";
function App() {
	// const [token, setToken] = useState("");
	// useEffect(() => {
	// 	function start() {
	// 		gapi.client.init({
	// 			clientId: process.env.REACT_APP_CLIENT_ID,
	// 			scope: "",
	// 		});
	// 	}
	// 	gapi.load("client:auth2", start);
	// 	setToken(gapi?.auth?.getToken()?.access_token);
	// }, [token]);
	// console.log(token);
	const { googleAuth } = useGoogleAuth();
	const token = googleAuth?.googleUser?.accessToken;
	const name = googleAuth?.googleUser?.profileObj?.name;
	const email = googleAuth?.googleUser?.profileObj?.email;
	return (
		<div className="App">
			<h1>Pokemon App</h1>
			<p>{name}</p>
			<p>{email}</p>
			{token && <Searchbar />}
			{!token && <LoginButton />}
			{token && <LogoutButton />}
			{token && <PokemonsList />}
			{/* <Routes>
				<Route
					path="/"
					element={
						
							<PokemonsList />
					
					}
				/>

				<Route path="/login" element={<LoginButton />} />
			</Routes> */}
		</div>
	);
}

export default App;
