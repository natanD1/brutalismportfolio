export type WindowType = "about" | "work" | "contact" | "stack";

export interface WindowState {
	id: string;
	title: string;
	type: WindowType;
	x: number;
	y: number;
	zIndex: number;
	isMinimized: boolean;
	isMaximized: boolean;
	data?: Record<string, unknown>;
	headerColor?: string;
}
