import img1 from './assets/projects/stylesync.png';
import img2 from './assets/projects/carrental.png';
import ytLite from './assets/projects/yt-lite.png';
// import img3 from './assets/projects/fooddash.png';
import Whatsapp from './assets/projects/Whatsapp.png';

export const projects = [
	{
		title: 'StyleSync',
		description: 'Book Various Products For Your Home',
		techStack: [
			'ReactJS',
			'Redux-Toolkit',
			'CSS',
			'Bootstrap',
			'Render',
			'Nodejs',
			'Express',
			'MongoDB',
		],
		imgUrl: img1,
		sourceUrl: 'https://github.com/Vivekreddyv/FoodDashfrontend',
		demoUrl: 'https://stylesync.netlify.app/',
		background: 'linear-gradient(93deg,#065af3,#53b2fe)',
	},
	{
		title: 'Whatsapp-Marketplace',
		description:
			'Whatsapp Marketplace for selling and buying products',
		techStack: ['CSS', 'JavaScript','ReactJS','Nodejs','Express','Mongodb'],
		imgUrl: Whatsapp,
		sourceUrl: 'https://github.com/Vivekreddyv/whatsappMPfel',
		demoUrl: 'https://earnest-boba-f5e730.netlify.app/',
		background: 'linear-gradient(to bottom right, #ff5722, #ff5740 90%)',
	},
	{
		title: 'Car-Rental',
		description:
			'A Clean And Simple Car Rental Site',
		techStack: ['CSS', 'JavaScript','ReactJS'],
		imgUrl: img2,
		sourceUrl: 'https://github.com/Vivekreddyv/Car-Rental',
		demoUrl: 'https://fancy-mandazi-c37834.netlify.app/',
		background:
			'linear-gradient(to bottom right, rgb(255, 127, 0), rgb(255, 175, 0) 90%)',
	},
	// {
	// 	title: 'FoodDash',
	// 	description: 'Food Ordering App',
	// 	techStack: ['ReactJS', 'Redux-Toolkit', 'Tailwind', 'Swiggy API'],
	// 	imgUrl: img3,
	// 	sourceUrl: 'https://github.com/Vivekreddyv/FoodDashfrontend',
	// 	demoUrl: 'https://fooddashv.netlify.app/',
	// 	background: 'linear-gradient(to bottom right, #ff5722, #ff5740 90%)',
	// },
	{
		title: 'YouTube Lite',
		description: 'Search and play any video',
		techStack: ['ReactJS', 'Tailwind', 'Rapid API'],
		imgUrl: ytLite,
		sourceUrl: 'https://github.com/Vivekreddyv/youtubeclone',
		demoUrl: 'https://dashing-cat-0ffa05.netlify.app/',
		background: 'linear-gradient(to bottom right, #f00, #ff4500 90%)',
	},
];
