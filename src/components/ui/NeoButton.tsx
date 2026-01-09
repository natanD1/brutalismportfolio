import type React from "react";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
	children,
	className = "",
	variant = "bg-white",
	...props
}) => (
	<button
		className={`neo-button border-2 border-black font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer ${variant} ${className}`}
		{...props}
	>
		{children}
	</button>
);
