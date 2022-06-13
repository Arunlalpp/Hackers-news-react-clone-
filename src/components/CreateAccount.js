import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContex";

export default function CreateAccount() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { CreateAccount } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Password do not matches");
		}
		try {
			setError("");
			setLoading(true);
			await CreateAccount(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError("Failed to create an account");
		}
		setLoading(false);
	}

	return (
		<div>
			<div className="p-2">
				<h1>Create Account</h1>
				{error && <>{error}</>}
				<div className="p-1">
					<span className="text-[13px]">username:</span>
					<input
						onSubmit={handleSubmit}
						className="ml-1 border-2 border-black p-[1px]"
						type="email"
						ref={emailRef}
						required
					></input>
				</div>
				<div className="p-1">
					<span className="text-[13px]">password:</span>
					<input
						onSubmit={handleSubmit}
						className="ml-1 border-2 border-black p-[1px]"
						type="password"
						ref={passwordRef}
					></input>
				</div>
				<button
					disabled={loading}
					className="border-2 border-black bg-gray-200 text-[13px]"
					type="submit"
				>
					Create account
				</button>
			</div>
		</div>
	);
}
