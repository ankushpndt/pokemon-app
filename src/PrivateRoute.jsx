import { Navigate } from "react-router-dom";

import React from "react";
import { useGoogleAuth } from "./context/GoogleAuthContext";
export const PrivateRoute = ({ googleAuth, children }) => {
	console.log({ googleAuth });
	return googleAuth?.isSignedIn ? children : <Navigate to="/login" />;
};
