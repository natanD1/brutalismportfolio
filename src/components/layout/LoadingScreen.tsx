import type React from "react";
import { BG_TEXTURE } from "../../constants";

export const LoadingScreen: React.FC = () => {
	return (
		<div
			className="min-h-screen bg-yellow-300 flex flex-col items-center justify-center p-4 font-sans text-black"
			style={{ backgroundImage: `url("${BG_TEXTURE}")` }}
		>
			<div className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
				dev.natanD1
			</div>
			<div className="w-64 md:w-80 h-8 border-4 border-black bg-white p-1 shadow-[4px_4px_0px_#000]">
				<div
					className="h-full bg-black animate-[loading_2.5s_ease-in-out_forwards]"
					style={{ width: "0%" }}
				/>
			</div>
			<p className="mt-4 font-bold font-mono tracking-widest text-sm md:text-base">
				INITIALIZING SYSTEM...
			</p>
		</div>
	);
};
