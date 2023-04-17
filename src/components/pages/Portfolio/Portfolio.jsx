import React from 'react'
import Background from "../../UI/Background/Background"
import { portfolioData } from './data'
export default function Portfolio() {
	const { video } = portfolioData
	return (
		<div>
			<Background video={video} />
		</div>
	)
}
