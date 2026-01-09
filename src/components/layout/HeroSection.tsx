import type React from "react";
import type { Language, Translations } from "../../types";

interface HeroSectionProps {
	lang: Language;
	translations: Translations;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
	lang,
	translations,
}) => {
	const t = translations[lang].hero;

	return (
		<section className="relative z-0 px-4 md:px-8 pointer-events-none select-none mb-8 md:mb-0">
			<h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase break-words leading-none">
				<span className="block">{t.name}</span>
				<span
					className="block text-transparent"
					style={{ WebkitTextStroke: "2px black", color: "#fde047" }}
				>
					{t.creative}
				</span>
				<span className="block">{t.developer}</span>
			</h2>
		</section>
	);
};
