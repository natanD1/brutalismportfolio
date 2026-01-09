import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../services/github.service";
import type { RepoData } from "../types";

export const useGitHubRepos = () => {
	const [repos, setRepos] = useState<RepoData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const loadRepos = async () => {
			try {
				const data = await fetchGitHubRepos();
				setRepos(data);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		loadRepos();
	}, []);

	return { repos, loading, error };
};
