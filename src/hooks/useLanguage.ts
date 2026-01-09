import { useState } from "react";

export const useLanguage = () => {
	const [lang, setLang] = useState<"pt" | "en">("pt");

	return { lang, setLang };
};
