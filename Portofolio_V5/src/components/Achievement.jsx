import { Trophy } from "lucide-react";

const achievements = [
	{
		id: 1,
		icon: Trophy,
		img: "https://res.cloudinary.com/dyominbfs/image/upload/v1748135702/Cynosure_Group_Photo_geexos.jpg", // Place your image in public or use a URL
		title: "Cynosure National Hackathon Winner",
		description:
			"Secured 1st place among 80+ teams at National Hackathon 2025 for a real-time health monitoring system.",
		date: "March 2025",
		color: "from-[#a855f7] to-[#6366f1]",
		link: "https://www.linkedin.com/posts/shaik-mahammad-jani_hackathonwinner-cynosure-svu-activity-7312865531227725824-sMv4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADs67C8Bww3SPZQuiHuGfrL3MO3nqoQ0iZg",
	},
    	{
		id: 2,
		icon: Trophy,
		img: "https://res.cloudinary.com/dyominbfs/image/upload/v1748135745/Techzeon_Group_photo_bzzj4s.jpg",
		title: "TechZeon Hackathon Winner",
		description:
			"Secured 1st place in the Hackathon executed by TechZeon 2K25, RGUKT Ongole",
		date: "Feb 2025",
		color: "from-[#6366f1] to-[#a855f7]",
		link: "https://www.linkedin.com/posts/shaik-mahammad-jani_hackathonwinner-webdevelopment-eventmanagement-activity-7304159314259173377-z7l9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADs67C8Bww3SPZQuiHuGfrL3MO3nqoQ0iZg",
	},
	{
		id: 3,
		icon: Trophy,
		img: "https://res.cloudinary.com/dyominbfs/image/upload/v1748135711/Techxl_Group_photo_if4htx.jpg",
		title: "TechXL Hackathon Winner",
		description:
			"Secured 2nd place among 50+ teams in the TechXL Hackathon conducted by EITP Hub,IIIT Nuzvid.",
		date: "Dec 2024",
		color: "from-[#6366f1] to-[#a855f7]",
		link: "https://www.linkedin.com/posts/shaik-mahammad-jani_hackathon-techinnovation-learning-activity-7285354889151438848-JWmI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADs67C8Bww3SPZQuiHuGfrL3MO3nqoQ0iZg",
	},
	// Add more achievements as needed
    
];

const Achievement = () => (
	<section className="container mx-auto bg-gradient-to-br from-white/10 to-white/5  mb-10">
		<div className="mx-auto px-4">
			<h2
				className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
				data-aos="fade-down"
				data-aos-duration="1000"
			>
				<span
					style={{
						color: "#6366f1",
						backgroundImage:
							"linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					Achievements
				</span>
			</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
				{achievements.map((ach, idx) => (
					<div
						key={ach.id}
						className="relative  group bg-white/5 border border-white/10  p-5 flex flex-col shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300 overflow-hidden h-full"
						data-aos={
							idx % 3 === 0
								? "fade-up-right"
								: idx % 3 === 1
								? "fade-up"
								: "fade-up-left"
						}
						data-aos-duration="1200"
					>
						<div
							className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${ach.color} -z-10 rounded-2xl`}
						/>
						<div className="flex items-center gap-4 mb-2">
							<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
								<ach.icon className="w-7 h-7 text-[#a855f7]" />
							</span>
							<div>
								<h3 className="text-lg font-semibold text-white">
									{ach.title}
								</h3>
								<span className="text-xs text-gray-400">
									{ach.date}
								</span>
							</div>
						</div>
						<img
							src={ach.img}
							alt={ach.title}
							className="w-full h-40 md:h-44 lg:h-40 object-cover rounded-xl mb-2 border border-white/10"
							loading="lazy"
						/>
						<p className="text-gray-300 flex-1">{ach.description}</p>
						<a
							href={ach.link}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 inline-block text-sm font-semibold text-[#a855f7] hover:text-[#6366f1] transition-colors underline"
						>
							View Details &rarr;
						</a>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Achievement;