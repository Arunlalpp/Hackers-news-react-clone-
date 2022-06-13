import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContex = React.createContext();

export function useAuth() {
	return useContext(AuthContex);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();

	function CreateAccount(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function LoginForm(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return unsuscribe;
	}, []);

	const value = {
		currentUser,
		LoginForm,
		CreateAccount,
	};

	return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
}
