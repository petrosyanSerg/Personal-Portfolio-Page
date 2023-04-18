import React from 'react'
import Background from "../../UI/Background/Background"
import { aboutData } from './data'

import styles from "./About.module.scss"

export default function About() {
	const { video, title, subtitle, author, text, img } = aboutData
	return (
		<section className={styles.About}>
			<div className={styles.About_ImageCont}>
				<div className={styles.About_ImageWrapper}>
					<img src={img} alt={title} className={styles.About_Image} />
				</div>
			</div>
			<div className={styles.About_Info}>
				<h1 className={styles.About_Title}>{title}</h1>
				<p className={styles.About_Subtitle}>{subtitle}</p>
				<p className={styles.About_Author}>{author}</p>
				<p className={styles.About_Text}>{text}</p>
			</div>
			<Background video={video} />
		</section>
	)
}
