import React from "react";
import { useGoogleAuth } from "../context/GoogleAuthContext";

const LoginButton = () => {
	const { googleAuth } = useGoogleAuth();
	return <button onClick={googleAuth?.signIn}>Login</button>;
};

export default LoginButton;
