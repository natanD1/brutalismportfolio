import type React from "react";
import { useEffect, useState } from "react";
import {
	AboutContent,
	ContactContent,
	StackContent,
	WorkContent,
} from "../components/content";
import {
	Footer,
	Header,
	HeroSection,
	LoadingScreen,
} from "../components/layout";
import { WindowFrame } from "../components/ui";
import { BG_TEXTURE, TRANSLATIONS } from "../constants";
import { useLanguage, useWindowManager } from "../hooks";
import { globalStyles } from "../styles/global.styles";
import type { WindowState } from "../types";

const HomeScreen: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { lang, setLang } = useLanguage();
	const {
		windows,
		openWindow,
		closeWindow,
		toggleMinimize,
		toggleMaximize,
		bringToFront,
		updateWindowPosition,
	} = useWindowManager();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	const getWindowTitle = (win: WindowState) => {
		const t = TRANSLATIONS[lang];
		if (win.type === "about") return t.about.title;
		if (win.type === "work") return t.work.title;
		if (win.type === "stack") return t.stack.title;
		if (win.type === "contact") return t.contact.title;
		return win.title;
	};

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<div
			className="relative h-screen w-screen overflow-hidden font-sans text-black bg-yellow-300"
			style={{ backgroundImage: `url("${BG_TEXTURE}")` }}
		>
			<Header
				lang={lang}
				translations={TRANSLATIONS}
				onOpenWindow={openWindow}
				onChangeLanguage={setLang}
			/>

			<HeroSection lang={lang} translations={TRANSLATIONS} />

			{windows.map((win) => (
				<WindowFrame
					key={win.id}
					window={win}
					titleOverride={getWindowTitle(win)}
					onClose={closeWindow}
					onMinimize={toggleMinimize}
					onMaximize={toggleMaximize}
					onFocus={bringToFront}
					updatePosition={updateWindowPosition}
				>
					{win.type === "about" && (
						<AboutContent lang={lang} translations={TRANSLATIONS} />
					)}
					{win.type === "work" && (
						<WorkContent lang={lang} translations={TRANSLATIONS} />
					)}
					{win.type === "stack" && (
						<StackContent lang={lang} translations={TRANSLATIONS} />
					)}
					{win.type === "contact" && (
						<ContactContent lang={lang} translations={TRANSLATIONS} />
					)}
				</WindowFrame>
			))}

			<Footer />

			<style>{globalStyles}</style>
		</div>
	);
};

export default HomeScreen;
