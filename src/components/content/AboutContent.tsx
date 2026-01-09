import { Github } from "lucide-react";
import type React from "react";
import { useGitHubAvatar } from "../../hooks";
import type { Language, Translations } from "../../types";
import { NeoButton } from "../ui/NeoButton";

interface AboutContentProps {
	lang: Language;
	translations: Translations;
}

export const AboutContent: React.FC<AboutContentProps> = ({
	lang,
	translations,
}) => {
	const t = translations[lang].about;
	const avatarUrl = useGitHubAvatar();

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col sm:flex-row gap-6 items-center">
				<div className="flex-shrink-0">
					<img
						src={avatarUrl}
						alt="Avatar"
						className="w-40 h-40 rounded-lg border-2 border-black shadow-[4px_4px_0px_#000] object-cover"
					/>
				</div>
				<div>
					<p className="text-lg font-medium mb-2">{t.greeting}</p>
					<p className="text-gray-700 text-sm">
						{t.intro_1}
						<strong className="bg-yellow-300 px-1 mx-1 border border-black">
							{t.intro_2}
						</strong>
					</p>
				</div>
			</div>
			<p className="text-gray-700">{t.bio}</p>

			<div className="flex gap-3 mt-4">
				<a
					href="https://linkedin.com/in/natandourado"
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1"
				>
					<NeoButton className="w-full bg-[#0077b5] text-white hover:bg-[#006097] border-black flex items-center justify-center gap-2">
						<svg
							className="w-5 h-5 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
						LinkedIn
					</NeoButton>
				</a>
				<a
					href="https://github.com/natanD1"
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1"
				>
					<NeoButton className="w-full bg-gray-900 text-white hover:bg-gray-700 border-black flex items-center justify-center gap-2">
						<Github size={20} strokeWidth={2.5} />
						GitHub
					</NeoButton>
				</a>
			</div>
		</div>
	);
};
