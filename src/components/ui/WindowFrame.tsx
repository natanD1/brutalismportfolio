import { X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import type { WindowState } from "../../types";

interface WindowFrameProps {
	window: WindowState;
	titleOverride?: string;
	onClose: (id: string) => void;
	onMinimize: (id: string) => void;
	onMaximize: (id: string) => void;
	onFocus: (id: string) => void;
	updatePosition: (id: string, x: number, y: number) => void;
	children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
	window: win,
	titleOverride,
	onClose,
	onMinimize,
	onMaximize,
	onFocus,
	updatePosition,
	children,
}) => {
	const [isDragging, setIsDragging] = useState(false);
	const dragStartPos = useRef({ x: 0, y: 0 });
	const windowStartPos = useRef({ x: 0, y: 0 });

	const handleMouseDown = (e: React.MouseEvent) => {
		// Prevent dragging if clicking a button or an icon inside a button
		if ((e.target as HTMLElement).closest("button")) return;
		if (win.isMaximized) return;

		onFocus(win.id);
		setIsDragging(true);
		dragStartPos.current = { x: e.clientX, y: e.clientY };
		windowStartPos.current = { x: win.x, y: win.y };
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging) return;
			const dx = e.clientX - dragStartPos.current.x;
			const dy = e.clientY - dragStartPos.current.y;

			const newX = Math.max(0, windowStartPos.current.x + dx);
			const newY = Math.max(0, windowStartPos.current.y + dy);

			updatePosition(win.id, newX, newY);
		};

		const handleMouseUp = () => {
			setIsDragging(false);
		};

		if (isDragging) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		}
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isDragging, win.id, updatePosition]);

	// Only apply maximized styles if NOT minimized
	const isEffectiveMaximized = win.isMaximized && !win.isMinimized;

	// Check if mobile
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	const style: React.CSSProperties =
		isEffectiveMaximized || isMobile
			? {
					position: "fixed",
					top: isMobile ? "80px" : "16px",
					left: "16px",
					right: "16px",
					bottom: "16px",
					width: "auto",
					height: "auto",
					zIndex: win.zIndex + 100,
				}
			: {
					position: "absolute",
					top: win.y,
					left: win.x,
					zIndex: win.zIndex,
				};

	const maximizedClass = win.isMaximized
		? "rounded-lg shadow-[8px_8px_0px_#000]"
		: "rounded-lg shadow-[8px_8px_0px_#000]";

	// If minimized, force small width. If maximized (and not min), auto width. Else, default width.
	const dimensionsClass = win.isMinimized
		? "w-[300px]"
		: win.isMaximized || isMobile
			? ""
			: "w-full max-w-lg";

	const draggingClass = isDragging
		? "shadow-[16px_16px_0px_rgba(0,0,0,0.5)] z-[999]"
		: "";

	// Disable transition while dragging for performance
	const transitionClass = isDragging
		? "transition-none"
		: "transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1)";

	const headerBg =
		win.headerColor ||
		(win.type === "about"
			? "bg-pink-500"
			: win.type === "work"
				? "bg-blue-500"
				: win.type === "contact"
					? "bg-gray-800"
					: win.type === "stack"
						? "bg-purple-600"
						: "bg-green-500");

	return (
		<div
			className={`border-4 border-black bg-white flex flex-col overflow-hidden ${transitionClass} ${maximizedClass} ${dimensionsClass} ${draggingClass}`}
			style={style}
			onMouseDown={() => onFocus(win.id)}
		>
			{/* Window Header */}
			<div
				className={`flex justify-between items-center p-3 border-b-4 border-black text-white font-bold cursor-move select-none ${headerBg}`}
				onMouseDown={handleMouseDown}
			>
				<span className="truncate mr-2">{titleOverride || win.title}</span>
				<div className="flex gap-2 items-center flex-shrink-0">
					<button
						onClick={(e) => {
							e.stopPropagation();
							onClose(win.id);
						}}
						className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-red-500 hover:opacity-80 active:scale-90"
						title="Close"
					>
						<X
							size={12}
							strokeWidth={3}
							className="text-black pointer-events-none"
						/>
					</button>
					{!isMobile && (
						<>
							<button
								onClick={(e) => {
									e.stopPropagation();
									onMinimize(win.id);
								}}
								className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-yellow-300 hover:opacity-80 active:scale-90"
								title="Minimize"
							>
								<Minus
									size={12}
									strokeWidth={3}
									className="text-black pointer-events-none"
								/>
							</button>
							<button
								onClick={(e) => {
									e.stopPropagation();
									onMaximize(win.id);
								}}
								className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-green-400 hover:opacity-80 active:scale-90"
								title={win.isMaximized ? "Restore" : "Maximize"}
							>
								{win.isMaximized ? (
									<Minimize2
										size={10}
										strokeWidth={3}
										className="text-black pointer-events-none"
									/>
								) : (
									<Square
										size={10}
										strokeWidth={3}
										className="text-black pointer-events-none"
									/>
								)}
							</button>
						</>
					)}
				</div>
			</div>

			<div
				className={`grid transition-[grid-template-rows] duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
					win.isMinimized ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
				}`}
			>
				<div className="overflow-hidden min-h-0">
					<div
						className={`p-6 pb-8 overflow-y-auto break-words ${
							win.isMaximized || isMobile
								? "max-h-[calc(100vh-140px)]"
								: win.type === "work" || win.type === "repo-details"
									? "max-h-96"
									: "max-h-[600px]"
						}`}
						style={{
							overflowWrap: "break-word",
							wordBreak: "break-word",
							touchAction: "pan-y",
							overscrollBehavior: "contain",
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
