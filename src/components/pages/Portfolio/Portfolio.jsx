import React from 'react'
import Background from "../../UI/Background/Background"
import { portfolioData } from './data'
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Portfolio.module.scss"

export default function Portfolio() {
	const { video, projects, title } = portfolioData
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<section className={styles.Portfolio}>
			<h1 className={styles.Portfolio_Title}>
				{title}
			</h1>
			<div className={styles.Portfolio_Slider}>
				<Slider {...settings}>
					{
						projects.map(card => (
							<aside key={card.id} className={styles.Portfolio_Card}>
								<aside className={styles.Portfolio_ImageWrapper}>
									<img src={card.img} alt={card.title} className={styles.Portfolio_Image} />
								</aside>
								<aside className={styles.Portfolio_Body}>
									<aside className={styles.Portfolio_CardTitle}>{card.title}</aside>
									<aside className={styles.Portfolio_CardLinks}>
										<aside className={styles.Portfolio_LinkBox}>
											<BsLink45Deg className={styles.Portfolio_CardIcon} />
											<Link className={styles.Portfolio_Link} to={card.url} target='_blank'>Live Preview</Link>
										</aside>
										<aside className={styles.Portfolio_LinkBox}>
											<BsGithub className={styles.Portfolio_CardIcon} />
											<Link className={styles.Portfolio_Link} to={card.repositories} target='_blank'>View Code</Link>
										</aside>
									</aside>
								</aside>
							</aside>
						))
					}
				</Slider>
			</div>
			<Background video={video} />
		</section>
	)
}
