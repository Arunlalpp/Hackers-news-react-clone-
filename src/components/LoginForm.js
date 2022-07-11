import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContex";
import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";

export default function LoginForm() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { LoginForm } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await LoginForm(emailRef.current.value, passwordRef.current.value);
			navigate("/Display");
		} catch {
			setError("Failed to login");
		}
		setLoading(false);
	}

	return (
		<div className="max-w-[95%] m-auto">
			<div className="p-2">
				<h1>Login</h1>
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
						className="ml-1 border-2 border-black p-[1px]"
						type="password"
						ref={passwordRef}
						required
					></input>
				</div>
				<button
					className="border-2 border-black bg-gray-200 text-[12px]"
					disabled={loading}
					type="submit"
				>
					login
				</button>
			</div>
			<a
				className="text-blue-800 underline  text-[15px] font-sans ml-2"
				href="/"
			>
				Fogot Your password ?
			</a>
			<CreateAccount />
		</div>
	);
}
