import { useCallback, useState } from "react";
import type { WindowState, WindowType } from "../types";

const INITIAL_Z_INDEX = 3000;

export const useWindowManager = () => {
	const [windows, setWindows] = useState<WindowState[]>([]);
	const [highestZ, setHighestZ] = useState(INITIAL_Z_INDEX);

	const bringToFront = useCallback(
		(id: string) => {
			setHighestZ((prev) => prev + 1);
			setWindows((prev) =>
				prev.map((w) =>
					w.id === id ? { ...w, zIndex: highestZ + 1, isMinimized: false } : w,
				),
			);
		},
		[highestZ],
	);

	const openWindow = useCallback(
		(type: WindowType, title: string, extraData?: Record<string, unknown>) => {
			const id = `window-${type}`;

			const existing = windows.find((w) => w.id === id);
			if (existing) {
				bringToFront(id);
				return;
			}

			const basePositions: Record<WindowType, { x: number; y: number }> = {
				about: { x: 50, y: 200 },
				work: { x: 300, y: 400 },
				stack: { x: 600, y: 350 },
				contact: { x: 100, y: 600 },
			};

			const newWindow: WindowState = {
				id,
				title,
				type,
				x: basePositions[type]?.x || 100,
				y: basePositions[type]?.y || 100,
				zIndex: highestZ + 1,
				isMinimized: false,
				isMaximized: false,
				data: extraData,
				headerColor: extraData?.headerColor,
			};

			setHighestZ((prev) => prev + 1);
			setWindows((prev) => [...prev, newWindow]);
		},
		[windows, highestZ, bringToFront],
	);

	const closeWindow = useCallback((id: string) => {
		setWindows((prev) => prev.filter((w) => w.id !== id));
	}, []);

	const toggleMinimize = useCallback((id: string) => {
		setWindows((prev) =>
			prev.map((w) =>
				w.id === id ? { ...w, isMinimized: !w.isMinimized } : w,
			),
		);
	}, []);

	const toggleMaximize = useCallback((id: string) => {
		setWindows((prev) =>
			prev.map((w) =>
				w.id === id
					? { ...w, isMaximized: !w.isMaximized, isMinimized: false }
					: w,
			),
		);
	}, []);

	const updateWindowPosition = useCallback(
		(id: string, x: number, y: number) => {
			setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
		},
		[],
	);

	return {
		windows,
		openWindow,
		closeWindow,
		toggleMinimize,
		toggleMaximize,
		bringToFront,
		updateWindowPosition,
	};
};
