import { Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="relative z-[1000] p-4 md:p-8 mb-4">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl md:text-3xl font-black tracking-tighter">
					dev.natanD1
				</h1>

				{/* Desktop Navigation */}
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

				{/* Mobile Menu Button */}
				<button
					type="button"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden border-2 border-black bg-white p-2 rounded-lg shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]"
					aria-label="Toggle menu"
				>
					{mobileMenuOpen ? (
						<X size={24} strokeWidth={2.5} />
					) : (
						<Menu size={24} strokeWidth={2.5} />
					)}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<nav className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 border-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_#000] animate-[fadeIn_0.3s_ease-out]">
					<div className="flex flex-col gap-3">
						<NeoButton
							onClick={() => {
								onOpenWindow("about", "About.exe");
								setMobileMenuOpen(false);
							}}
							className="w-full"
						>
							{t.nav.about}
						</NeoButton>
						<NeoButton
							onClick={() => {
								onOpenWindow("work", "Work.dir");
								setMobileMenuOpen(false);
							}}
							className="w-full"
						>
							{t.nav.work}
						</NeoButton>
						<NeoButton
							onClick={() => {
								onOpenWindow("stack", "Stack.cfg");
								setMobileMenuOpen(false);
							}}
							className="w-full"
						>
							{t.nav.stack}
						</NeoButton>
						<NeoButton
							disabled
							className="w-full opacity-50 cursor-not-allowed"
							onClick={() => onOpenWindow("contact", "Contact.sh")}
						>
							{t.nav.contact}
						</NeoButton>

						<div className="flex gap-3 mt-2 pt-3 border-t-2 border-black">
							<NeoButton
								onClick={() => {
									onChangeLanguage("pt");
									setMobileMenuOpen(false);
								}}
								variant={
									lang === "pt"
										? "bg-black text-white"
										: "bg-white text-black hover:bg-gray-100"
								}
								className="flex-1"
							>
								PT-BR
							</NeoButton>
							<NeoButton
								onClick={() => {
									onChangeLanguage("en");
									setMobileMenuOpen(false);
								}}
								variant={
									lang === "en"
										? "bg-black text-white"
										: "bg-white text-black hover:bg-gray-100"
								}
								className="flex-1"
							>
								ENG
							</NeoButton>
						</div>
					</div>
				</nav>
			)}
		</header>
	);
};
