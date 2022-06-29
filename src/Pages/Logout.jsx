import React from "react";
import { useGoogleAuth } from "../context/GoogleAuthContext";

const LogoutButton = () => {
	const { googleAuth } = useGoogleAuth();
	return <button onClick={googleAuth?.signOut}>Logout</button>;
};

export default LogoutButton;
