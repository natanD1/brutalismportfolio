import type React from "react";
import { useGitHubRepos } from "../../hooks";
import type { Language, Translations } from "../../types";
import { NeoButton } from "../ui/NeoButton";

interface WorkContentProps {
	lang: Language;
	translations: Translations;
}

export const WorkContent: React.FC<WorkContentProps> = ({
	lang,
	translations,
}) => {
	const t = translations[lang].work;
	const { repos, loading, error } = useGitHubRepos();

	if (loading) {
		return (
			<div className="text-center font-bold py-10 animate-pulse">
				{t.loading}
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center font-bold text-red-500 py-10">{t.error}</div>
		);
	}

	return (
		<div>
			<p className="mb-4 text-sm text-gray-600">{t.scroll_hint}</p>
			{repos.map((repo) => (
				<div
					key={repo.id}
					className="mb-6 border-b-2 border-black pb-4 last:border-0 animate-[fadeIn_0.5s_ease-out]"
				>
					<div className="flex justify-between items-start mb-1">
						<h3 className="text-xl font-bold leading-tight">{repo.name}</h3>
						<span className="text-xs font-bold bg-yellow-300 text-black px-1 border border-black rounded flex items-center gap-1">
							★ {repo.stargazers_count}
						</span>
					</div>
					<p className="text-gray-700 mb-2 text-sm line-clamp-2">
						{repo.description || "No description provided."}
					</p>
					<a
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block"
					>
						<NeoButton variant="bg-green-400">{t.view_btn}</NeoButton>
					</a>
				</div>
			))}
		</div>
	);
};
