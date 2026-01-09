import { useEffect, useState } from "react";
import { fetchGitHubAvatar } from "../services/github.service";

export const useGitHubAvatar = () => {
	const [avatarUrl, setAvatarUrl] = useState(
		"https://placehold.co/100x100/fecaca/000?text=NATAN",
	);

	useEffect(() => {
		fetchGitHubAvatar().then(setAvatarUrl);
	}, []);

	return avatarUrl;
};
