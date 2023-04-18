import PortfolioVideo from "../../../assets/video/Portfolio.mp4"
import Hydia from "../../../assets/image/Hydra.png"
import MilkyWay from "../../../assets/image/MilkyWay.png"
import SearchCountry from "../../../assets/image/SearchCountry.png"
import Shorter from "../../../assets/image/Shorter.png"
import Weather from "../../../assets/image/Weather.png"
import Sunnyside from "../../../assets/image/Sunnyside.png"

export const portfolioData = {
	title: "Bringing Ideas to Life A Showcase of My Projects",
	projects: [
		{
			id: 1,
			title: "Shorter Links & QR Code",
			url: "https://urlshortify.github.io/",
			repositories: "https://github.com/petrosyanSerg/URL_Shortener",
			img: Shorter
		},
		{
			id: 2,
			title: "Hydra Landing Page",
			url: "https://main--relaxed-brioche-26d020.netlify.app/",
			repositories: "https://github.com/petrosyanSerg/Hydra-Landing-Page",
			img: Hydia
		},
		{
			id: 3,
			title: "Milky Way",
			url: "https://onlymilkyway.github.io/",
			repositories: "https://github.com/petrosyanSerg/Milky-Way",
			img: MilkyWay
		},
		{
			id: 4,
			title: "Weather App",
			url: "https://onlyweatherapp.github.io/",
			repositories: "https://github.com/petrosyanSerg/Weather-App-in-React",
			img: Weather
		},
		{
			id: 5,
			title: "Sunnyside Landing Page",
			url: "https://onlysunnyside.github.io/",
			repositories: "https://github.com/petrosyanSerg/Sunnyside",
			img: Sunnyside
		},
		{
			id: 6,
			title: "Search Country Wiki",
			url: "https://searchcountry.github.io/",
			repositories: "https://github.com/petrosyanSerg/Search-country",
			img: SearchCountry
		}
	],
	video: PortfolioVideo
}