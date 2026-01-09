import { GITHUB_USERNAME } from "../constants";
import type { RepoData } from "../types";

/**
 * Busca o avatar do usuário do GitHub
 */
export async function fetchGitHubAvatar(): Promise<string> {
	try {
		const response = await fetch(
			`https://api.github.com/users/${GITHUB_USERNAME}`,
		);
		const data = await response.json();
		return (
			data.avatar_url || "https://placehold.co/100x100/fecaca/000?text=NATAN"
		);
	} catch (error) {
		console.error("Failed to fetch github avatar", error);
		return "https://placehold.co/100x100/fecaca/000?text=NATAN";
	}
}

/**
 * Busca os repositórios favoritos (starred) do usuário
 * Se não houver starred repos, busca os últimos repositórios
 */
export async function fetchGitHubRepos(): Promise<RepoData[]> {
	try {
		// Primeiro tenta buscar os repos starred
		const starredResponse = await fetch(
			`https://api.github.com/users/${GITHUB_USERNAME}/starred?sort=created&direction=desc`,
		);

		if (!starredResponse.ok) {
			throw new Error("Failed to fetch starred repos");
		}

		let repos = await starredResponse.json();

		// Se não houver starred repos, busca os últimos repositórios do usuário
		if (!repos || repos.length === 0) {
			const reposResponse = await fetch(
				`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
			);
			repos = await reposResponse.json();
		}

		return repos;
	} catch (error) {
		console.error("Failed to fetch GitHub repos", error);
		throw error;
	}
}

/**
 * Busca o README de um repositório específico
 */
export async function fetchRepoReadme(
	owner: string,
	repo: string,
): Promise<string> {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/readme`,
			{
				headers: {
					Accept: "application/vnd.github.v3.raw",
				},
			},
		);

		if (!response.ok) {
			return "No README found.";
		}

		return await response.text();
	} catch (error) {
		console.error("Failed to fetch README", error);
		return "(Error fetching README)";
	}
}
