import type React from "react";
import type { Language, Translations, WindowType } from "../../types";
import { NeoButton } from "../ui/NeoButton";

interface HeaderProps {
	lang: Language;
	translations: Translations;
	onOpenWindow: (type: WindowType, title: string) => void;
	onChangeLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
	lang,
	translations,
	onOpenWindow,
	onChangeLanguage,
}) => {
	const t = translations[lang];

	return (
		<header className="relative z-[1000] flex justify-between items-center p-4 md:p-8 mb-4">
			<h1 className="text-2xl md:text-3xl font-black tracking-tighter">
				dev.natanD1
			</h1>
			<nav className="hidden md:flex gap-2 items-center">
				<NeoButton onClick={() => onOpenWindow("about", "About.exe")}>
					{t.nav.about}
				</NeoButton>
				<NeoButton onClick={() => onOpenWindow("work", "Work.dir")}>
					{t.nav.work}
				</NeoButton>
				<NeoButton onClick={() => onOpenWindow("stack", "Stack.cfg")}>
					{t.nav.stack}
				</NeoButton>
				<NeoButton
					disabled
					className="opacity-50 cursor-not-allowed"
					onClick={() => onOpenWindow("contact", "Contact.sh")}
				>
					{t.nav.contact}
				</NeoButton>

				<div className="flex ml-4 gap-3">
					<NeoButton
						onClick={() => onChangeLanguage("pt")}
						variant={
							lang === "pt"
								? "bg-black text-white"
								: "bg-white text-black hover:bg-gray-100"
						}
					>
						PT-BR
					</NeoButton>
					<NeoButton
						onClick={() => onChangeLanguage("en")}
						variant={
							lang === "en"
								? "bg-black text-white"
								: "bg-white text-black hover:bg-gray-100"
						}
					>
						ENG
					</NeoButton>
				</div>
			</nav>
		</header>
	);
};
