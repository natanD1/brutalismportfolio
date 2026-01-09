/**
 * Garante que as coordenadas da janela não saiam da tela
 */
export function constrainPosition(
	x: number,
	y: number,
	maxX?: number,
	maxY?: number,
): { x: number; y: number } {
	return {
		x: Math.max(0, maxX ? Math.min(x, maxX) : x),
		y: Math.max(0, maxY ? Math.min(y, maxY) : y),
	};
}

/**
 * Calcula a diferença entre duas posições
 */
export function calculateDelta(
	startX: number,
	startY: number,
	currentX: number,
	currentY: number,
): { dx: number; dy: number } {
	return {
		dx: currentX - startX,
		dy: currentY - startY,
	};
}
