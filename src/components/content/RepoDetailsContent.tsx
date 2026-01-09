import { ExternalLink, Github } from "lucide-react";
import type React from "react";
import type { Language, RepoData, Translations } from "../../types";

interface RepoDetailsContentProps {
	repo: RepoData;
	readme: string;
	lang: Language;
	translations: Translations;
}

export const RepoDetailsContent: React.FC<RepoDetailsContentProps> = ({
	repo,
	readme,
	lang,
	translations,
}) => {
	const t = translations[lang].repo;

	return (
		<div className="flex flex-col h-full">
			<div className="w-full h-32 bg-gray-900 border-2 border-black rounded-lg mb-4 flex flex-col items-center justify-center text-green-400 font-mono flex-shrink-0">
				<Github size={48} strokeWidth={1.5} className="mb-2" />
				<span className="text-sm">{t.detected}</span>
			</div>

			<div className="flex justify-between items-center mb-2">
				<h4 className="text-sm font-bold uppercase tracking-wider">
					{t.language}
				</h4>
				<div className="text-xs font-bold bg-yellow-300 text-black px-2 py-1 border-2 border-black rounded">
					★ {t.stars} {repo.stargazers_count}
				</div>
			</div>

			<div className="mb-4">
				<span className="bg-gray-200 border-2 border-black text-black text-xs font-bold px-2 py-1 rounded-md">
					{repo.language || "Unknown"}
				</span>
			</div>

			<h4 className="text-sm font-bold uppercase tracking-wider mb-2">
				{t.readme}
			</h4>
			<div className="bg-gray-100 border-2 border-black p-4 mb-6 text-gray-800 rounded font-mono text-sm whitespace-pre-wrap overflow-x-hidden">
				{readme || t.no_readme}
			</div>

			<a
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="neo-button w-full block bg-black text-white border-2 border-black font-bold py-3 px-4 rounded-lg hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2"
			>
				<ExternalLink size={18} strokeWidth={2.5} />
				{t.link}
			</a>
		</div>
	);
};
