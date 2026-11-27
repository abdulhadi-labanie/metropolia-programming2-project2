/**
 * Purpose: Clear the entire canvas before drawing the next frame.
 * Return: void
 */
export function clearCanvas(ctx, width, height) {
    ctx.clearRect()
}

/**
 * Purpose: Draw the conveyor belt, right-side item spawner box, left-side MIXED WASTE zone, and the four top bins.
 * Parameters: ctx (CanvasRenderingContext2D), bins (Array<Object>)
 * Return: void
 * Calls: Canvas 2D drawing methods
 */
export function drawEnvironment(ctx, bins) {

}

/**
 * Purpose: Draw all active trash items currently moving along the conveyor belt.
 * Parameters: ctx (CanvasRenderingContext2D), conveyorItems (Array<Object>)
 * Return: void
 * Calls: Canvas 2D drawing methods
 */
export function drawConveyorItems(ctx, conveyorItems) {

}

/**
 * Purpose: Draw the player character at its current coordinates, including the carried item if holding one.
 * Parameters: ctx (CanvasRenderingContext2D), character (Object)
 * Return: void
 * Calls: Canvas 2D drawing methods
 */
export function drawCharacter(ctx, character) {

}
