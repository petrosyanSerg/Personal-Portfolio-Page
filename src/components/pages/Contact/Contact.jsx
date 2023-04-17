import React from 'react'
import Background from "../../UI/Background/Background"
import { contactData } from './data'
export default function Contact() {
	const { video } = contactData
	return (
		<div>
			<Background video={video} />
		</div>
	)
}
