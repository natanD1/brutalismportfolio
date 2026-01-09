import type React from "react";
import { useState } from "react";
import type { Language, Translations } from "../../types";
import { NeoButton } from "../ui/NeoButton";

interface ContactContentProps {
	lang: Language;
	translations: Translations;
}

export const ContactContent: React.FC<ContactContentProps> = ({
	lang,
	translations,
}) => {
	const t = translations[lang].contact;
	const [status, setStatus] = useState<"idle" | "success">("idle");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("success");
		setTimeout(() => setStatus("idle"), 3000);
	};

	if (status === "success") {
		return (
			<div className="text-center py-10">
				<p className="text-xl font-bold text-green-600 mb-2">
					{t.success_title}
				</p>
				<p className="font-medium">{t.success_msg}</p>
			</div>
		);
	}

	return (
		<div>
			<p className="text-lg font-medium mb-4">{t.intro}</p>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="font-bold text-sm block mb-1">
						{t.email_label}
					</label>
					<input
						required
						type="email"
						className="w-full p-2 border-2 border-black rounded-lg bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
					/>
				</div>
				<div className="mb-4">
					<label className="font-bold text-sm block mb-1">
						{t.message_label}
					</label>
					<textarea
						required
						rows={4}
						className="w-full p-2 border-2 border-black rounded-lg bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
					/>
				</div>
				<NeoButton
					type="submit"
					className="w-full"
					variant="bg-pink-500 text-white"
				>
					{t.send_btn}
				</NeoButton>
			</form>
		</div>
	);
};
