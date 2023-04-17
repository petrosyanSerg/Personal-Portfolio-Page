import React from 'react'
import Slider from "react-slick";
import Background from "../../UI/Background/Background"

import { Link } from 'react-router-dom';
import { skillData } from './data'

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandJavascript, TbBrandRedux, TbBrandVscode } from "react-icons/tb";
import { FaSass, FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Skills.module.scss"
import "./slick.scss"

export default function Skills() {
	const { video, skills, texts, Links } = skillData
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	};
	return (
		<section className={styles.Section}>
			<h2 className={styles.Section_Title}>
				Skills In Front End
			</h2>
			<Slider {...settings}>
				<Link to={Links.HTMLlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont} >
						<AiOutlineHtml5 className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.HTML}</h3>
						<p className={styles.Link_Body}>{texts.HTMLText}</p>
					</div>
				</Link>
				<Link to={Links.CSSlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<TbBrandCss3 className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.CSS}</h3>
						<p className={styles.Link_Body}>{texts.CSSText}</p>
					</div>
				</Link>
				<Link to={Links.Sasslink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<FaSass className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.Sass}</h3>
						<p className={styles.Link_Body}>{texts.SassText}</p>
					</div>
				</Link>
				<Link to={Links.Bootstraplink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<FaBootstrap className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.Bootstrap}</h3>
						<p className={styles.Link_Body}>{texts.BootstrapText}</p>
					</div>
				</Link>
				<Link to={Links.JSlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<TbBrandJavascript className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.JS}</h3>
						<p className={styles.Link_Body}>{texts.JSText}</p>
					</div>
				</Link>
				<Link to={Links.Reactlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<FaReact className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.React}</h3>
						<p className={styles.Link_Body}>{texts.ReactText}</p>
					</div>
				</Link>
				<Link to={Links.Reduxlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<TbBrandRedux className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.Redux}</h3>
						<p className={styles.Link_Body}>{texts.ReduxText}</p>
					</div>
				</Link>
				<Link to={Links.Gitlink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<FaGitAlt className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.Git}</h3>
						<p className={styles.Link_Body}>{texts.GitText}</p>
					</div>
				</Link>
				<Link to={Links.GitHublink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<FaGithub className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.GitHub}</h3>
						<p className={styles.Link_Body}>{texts.GitHubText}</p>
					</div>
				</Link>
				<Link to={Links.VSCodelink} target='_blank' className={styles.Link}>
					<div className={styles.Link_IconCont}>
						<TbBrandVscode className={styles.Link_Icon} />
					</div>
					<div className={styles.Link_Texts}>
						<h3 className={styles.Link_Skill}>{skills.VSCode}</h3>
						<p className={styles.Link_Body}>{texts.VSCodeText}</p>
					</div>
				</Link>
			</Slider>
			<Background video={video} />
		</section>
	)
}
