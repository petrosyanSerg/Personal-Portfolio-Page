import React from 'react'
import Background from "../../UI/Background/Background"
import { aboutData } from './data'
export default function About() {
	const { video } = aboutData
	return (
		<div>
			<Background video={video} />
		</div>
	)
}
