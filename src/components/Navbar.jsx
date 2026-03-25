import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center w-full px-4 sm:px-8 py-4 bg-white shadow-md">
			{/* Logo and Brand */}
			<div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}> 
				<img src="/vite.svg" alt="Educonnect Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
				<span className="font-bold text-xl sm:text-2xl text-gray-900">Educonnect</span>
			</div>

			{/* Desktop Navigation Links */}
			<div className="hidden md:flex items-center gap-8">
				<a href="#features" className="text-gray-700 hover:text-green-400 font-medium transition">
					Features
				</a>
				<a href="#about" className="text-gray-700 hover:text-green-400 font-medium transition">
					About
				</a>
				<a href="#contact" className="text-gray-700 hover:text-green-400 font-medium transition">
					Contact
				</a>
			</div>

			{/* Auth Buttons */}
			<div className="hidden md:flex items-center gap-4">
				<button 
					onClick={() => navigate("/auth/login")}
					className="px-6 py-2 text-gray-900 font-semibold hover:text-green-400 transition"
				>
					Login
				</button>
				<button 
					onClick={() => navigate("/auth/signup")}
					className="primary-btn px-6 py-2"
				>
					Sign Up
				</button>
			</div>

			{/* Mobile Menu Button */}
			<button 
				className="md:hidden flex flex-col gap-1"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label="Toggle menu"
			>
				<span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
				<span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
				<span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
			</button>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col gap-4 p-4">
					<a href="#features" className="text-gray-700 hover:text-green-400 font-medium">
						Features
					</a>
					<a href="#about" className="text-gray-700 hover:text-green-400 font-medium">
						About
					</a>
					<a href="#contact" className="text-gray-700 hover:text-green-400 font-medium">
						Contact
					</a>
					<div className="flex flex-col gap-2 pt-2 border-t">
						<button 
							onClick={() => {
								navigate("/auth/login");
								setIsMenuOpen(false);
							}}
							className="w-full px-4 py-2 text-gray-900 font-semibold hover:text-green-400 text-left"
						>
							Login
						</button>
						<button 
							onClick={() => {
								navigate("/auth/signup");
								setIsMenuOpen(false);
							}}
							className="w-full primary-btn py-2"
						>
							Sign Up
						</button>
					</div>
				</div>
			)}
		</nav>
	)
}
