import type { Language } from "./language.types";

export interface TranslationContent {
	nav: {
		about: string;
		work: string;
		stack: string;
		contact: string;
	};
	hero: {
		name: string;
		creative: string;
		developer: string;
	};
	about: {
		title: string;
		greeting: string;
		intro_1: string;
		intro_2: string;
		bio: string;
	};
	stack: {
		title: string;
		intro: string;
	};
	contact: {
		title: string;
		intro: string;
		success_title: string;
		success_msg: string;
		email_label: string;
		message_label: string;
		send_btn: string;
	};
	work: {
		title: string;
		scroll_hint: string;
		loading: string;
		error: string;
		view_btn: string;
	};
	repo: {
		detected: string;
		language: string;
		stars: string;
		readme: string;
		link: string;
		no_readme: string;
		error_readme: string;
	};
}

export type Translations = Record<Language, TranslationContent>;
