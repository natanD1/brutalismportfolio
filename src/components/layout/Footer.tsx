import React from "react";

const techStack = [
	"JavaScript",
	"React",
	"Node.js",
	"Tailwind CSS",
	"Figma",
	"Webflow",
	"GLSL",
	"Python",
	"MongoDB",
];

const techColors: Record<string, string> = {
	React: "text-yellow-300",
	"Tailwind CSS": "text-blue-500",
	Webflow: "text-pink-500",
	Python: "text-green-400",
};

export const Footer: React.FC = () => {
	return (
		<footer className="fixed bottom-0 left-0 w-full bg-black text-white border-t-4 border-black z-[2000]">
			<div className="overflow-hidden whitespace-nowrap py-4">
				<div className="inline-block animate-[marquee_30s_linear_infinite]">
					{[...Array(2)].map((_, i) => (
						<React.Fragment key={i}>
							{techStack.map((tech, index) => (
								<span
									key={`${i}-${index}`}
									className={`mx-4 ${techColors[tech] || ""}`}
								>
									{tech}
								</span>
							))}
						</React.Fragment>
					))}
				</div>
			</div>
		</footer>
	);
};
