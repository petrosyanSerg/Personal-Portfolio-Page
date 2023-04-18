import React, { useRef } from 'react'
import Background from "../../UI/Background/Background"
import { contactData } from './data'

import emailjs from "@emailjs/browser";

import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./Contact.module.scss"



export default function Contact() {
	const { video, addres, title, fullName, phone, email, links } = contactData
	const form = useRef(null)
	const handleSubmit = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_0i702f6",
				"template_1tvf1ij",
				form.current,
				"KIlb60Fq47C0o1GDt"
			)
			.then(
				(result) => {
					console.log("message sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset()
	}


	return (
		<section className={styles.Section}>
			<div className={styles.Section_FormCont}>
				<form ref={form} className={styles.Section_Form} onSubmit={handleSubmit}>
					<div className={styles.Section_InputDiv}>
						<label htmlFor="username" className={styles.Section_Label}>
							Name
						</label>
						<input
							placeholder="Your Name"
							name="username"
							id="username"
							className={styles.Section_Input}
							required
						/>
					</div>
					<div className={styles.Section_InputDiv}>
						<label htmlFor="email" className={styles.Section_Label}>
							E-mail
						</label>
						<input
							placeholder="Your Email"
							name="email"
							id="email"
							className={styles.Section_Input}
							type='email'
							required
						/>
					</div>
					<div className={styles.Section_InputDiv}>
						<label htmlFor="message" className={styles.Section_Label}>
							Message
						</label>
						<textarea
							placeholder="Your Message"
							name="message"
							id="message"
							className={styles.Section_Area}
							required
						/>
					</div>
					<button className={styles.Section_Button} type="submit">Send</button>
				</form>
			</div>
			<div className={styles.Section_Info} >
				<div className={styles.Section_Media}>
					<a href={links.linkedin} target='_blank' className={styles.Section_IconLink}>
						<AiFillLinkedin className={styles.Section_IconSvg} />
					</a>
					<a href={links.github} target='_blank' className={styles.Section_IconLink}>
						<FaGithubSquare className={styles.Section_IconSvg} />
					</a>
					<a href={links.instagram} target='_blank' className={styles.Section_IconLink}>
						<AiFillInstagram className={styles.Section_IconSvg} />
					</a>
					<a href={links.facebook} target='_blank' className={styles.Section_IconLink}>
						<AiFillFacebook className={styles.Section_IconSvg} />
					</a>
				</div>
				<h1 className={styles.Section_Text}>{title}</h1>
				<h3 className={styles.Section_Text}>{fullName}</h3>
				<h3 className={styles.Section_Text}>{addres}</h3>
				<h3 className={styles.Section_Text}>{email}</h3>
				<h3 className={styles.Section_Text}>
					<a href="tel:+37494320272" className={styles.Section_TextLink}>{phone}</a>
				</h3>
			</div>
			<Background video={video} />
		</section >
	)
}