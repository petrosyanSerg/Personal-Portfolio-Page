import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from '../Routes/Pathname';

import { SiHomebridge, SiMusicbrainz } from "react-icons/si";
import { BsFillInfoCircleFill, BsFillFolderFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.scss"

export default function Navbar() {
	return (
		<nav className="Navbar">
			<ul className="Navbar_Menu">
				<li className="Navbar_MenuItem">
					<NavLink to={path.home} className="Navbar_MenuLink">
						<SiHomebridge className="Navbar_MenuIcon" />
					</NavLink>
				</li>
				<li className="Navbar_MenuItem" >
					<NavLink to={path.skills} className="Navbar_MenuLink">
						<SiMusicbrainz className="Navbar_MenuIcon" />
					</NavLink>
				</li>
				<li className="Navbar_MenuItem" >
					<NavLink to={path.about} className="Navbar_MenuLink">
						<BsFillInfoCircleFill className="Navbar_MenuIcon" />
					</NavLink>
				</li>
				<li className="Navbar_MenuItem" >
					<NavLink to={path.portfolio} className="Navbar_MenuLink">
						<BsFillFolderFill className="Navbar_MenuIcon" />
					</NavLink>
				</li>
				<li className="Navbar_MenuItem">
					<NavLink to={path.contact} className="Navbar_MenuLink">
						<FaUserCircle className="Navbar_MenuIcon" />
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
