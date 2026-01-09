export interface RepoData {
	id: number;
	name: string;
	description: string;
	stargazers_count: number;
	html_url: string;
	owner: { login: string };
	language: string;
}
