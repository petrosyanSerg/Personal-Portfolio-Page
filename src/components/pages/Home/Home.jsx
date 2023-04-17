import React from 'react'
import Background from "../../UI/Background/Background"
import { homeData } from './data'
import { Link } from 'react-router-dom'

import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import { path } from '../../Routes/Pathname'

import styles from "./Home.module.scss"

export default function Home() {
	const { title, subtitle, name, profession, video, resume, links } = homeData
	return (
		<section className={styles.Section}>
			<div className={styles.Section_Icon}>
				<Link to={links.linkedin} target='_blank' className={styles.Section_IconLink}>
					<AiFillLinkedin className={styles.Section_IconSvg} />
				</Link>
				<Link to={links.github} target='_blank' className={styles.Section_IconLink}>
					<FaGithubSquare className={styles.Section_IconSvg} />
				</Link>
				<Link to={links.instagram} target='_blank' className={styles.Section_IconLink}>
					<AiFillInstagram className={styles.Section_IconSvg} />
				</Link>
				<Link to={links.facebook} target='_blank' className={styles.Section_IconLink}>
					<AiFillFacebook className={styles.Section_IconSvg} />
				</Link>
			</div>
			<div className={styles.Section_Wrapper}>
				<h1 className={styles.Section_Title}>{title}</h1>
				<h2 className={styles.Section_Subtitle}>{subtitle}</h2>
				<h2 className={styles.Section_Title}>{name}</h2>
				<h2 className={styles.Section_Subtitle}>{profession}</h2>
			</div>
			<div className={styles.Section_Buttons}>
				<Link to={path.contact} className={styles.Section_ButtonLink}>
					Contact Me
				</Link>
				<a href={resume} download="Resume(Petrosyan Sergey).pdf" className={styles.Section_ButtonLink}>
					Download Resume
				</a>
			</div>
			<Background video={video} />
		</section>
	)
}
