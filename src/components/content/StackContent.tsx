import {
	Atom,
	Bird,
	Brain,
	Code2,
	Database,
	Figma,
	Hash,
	PenTool,
	Server,
	Smartphone,
	Terminal,
	Wind,
	Zap,
} from "lucide-react";
import type React from "react";
import type { Language, Translations } from "../../types";

interface StackContentProps {
	lang: Language;
	translations: Translations;
}

const iconProps = { size: 18, strokeWidth: 2.5 };

const stackTools = [
	{ name: "Figma", icon: <Figma {...iconProps} /> },
	{ name: "TypeScript", icon: <Code2 {...iconProps} /> },
	{ name: "React", icon: <Atom {...iconProps} /> },
	{ name: "React Native", icon: <Smartphone {...iconProps} /> },
	{ name: "Tailwind CSS", icon: <Wind {...iconProps} /> },
	{ name: "Node.js", icon: <Server {...iconProps} /> },
	{ name: "Next.js", icon: <Zap {...iconProps} /> },
	{ name: "C#", icon: <Hash {...iconProps} /> },
	{ name: "SQL", icon: <Database {...iconProps} /> },
	{ name: "Linux", icon: <Terminal {...iconProps} /> },
	{ name: "Swift", icon: <Bird {...iconProps} /> },
	{ name: "IA", icon: <Brain {...iconProps} /> },
	{ name: "p5.js", icon: <PenTool {...iconProps} /> },
];

export const StackContent: React.FC<StackContentProps> = ({
	lang,
	translations,
}) => {
	const t = translations[lang].stack;

	return (
		<div>
			<p className="text-lg font-medium mb-4">{t.intro}</p>
			<div className="flex flex-wrap gap-3">
				{stackTools.map((tool) => (
					<div
						key={tool.name}
						className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_#000] hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000] transition-all cursor-default select-none"
					>
						{tool.icon}
						<span className="font-bold text-sm">{tool.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};
