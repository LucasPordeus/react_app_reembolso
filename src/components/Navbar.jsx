import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div style={{gap: '8px'}}>
			<Avatar />
			<h4>Lucas</h4>
			</div>
			
			<nav ref={navRef}>
				<Link to="/">Reembolso</Link>
				<Link to="/requisicoes">Requisições</Link>
				<Link to="/gerenciamento">Gerenciamento</Link>
				<Link to="/sobre">Sobre</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;