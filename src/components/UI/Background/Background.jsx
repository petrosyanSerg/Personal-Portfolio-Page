import React from 'react'
import styles from "./Background.module.scss"
export default function Background({ video }) {
	return (
		<div className={styles.Video}>
			<video autoPlay muted loop className={styles.Video_Cont}>
				<source src={video} />
			</video>
		</div>

	)
}
