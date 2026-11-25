/**
 * Purpose: Calculate the character's new (x, y) coordinates based on direction and speed, clamped within canvas bounds.
 * Parameters: character (Object), direction (Object), canvasBounds (Object)
 * Return: Object ({ x: Number, y: Number })
 * Calls: None
 */
//Character width??
export function calculateCharacterPosition(character, direction, canvasBounds) {
    character.x = character.x + (direction.dx * character.speed);
    character.y = character.y + (direction.dy * character.speed);

    if (character.x < 0) {
        character.x = 0;
    }
    if (character.y < 0) {
        character.y = 0;
    }
    if (character.x > canvasBounds.width) {
        character.x = canvasBounds.width;
    }
    if (character.y > canvasBounds.height) {
        character.y = canvasBounds.height;
    }
}

/**
 * Purpose: Find the array index of the closest conveyor item within pickup range of the character.
 * Parameters: character (Object), conveyorItems (Array<Object>), pickupRange (Number)
 * Return: Number (Index of the nearby item, or -1 if none is within range)
 * Calls: None
 */
export function findNearbyConveyorItem(character, conveyorItems, pickupRange) {

}

/**
 * Purpose: Check if the character is standing close enough to one of the four top sorting bins.
 * Parameters: character (Object), bins (Array<Object>), dropRange (Number)
 * Return: Object | null (The nearby bin object, or null if out of range)
 * Calls: None
 */
export function findNearbyBin(character, bins, dropRange) {

}

/**
 * Purpose: Verify if the dropped item matches the bin type and calculate bonus milliseconds to add.
 * Parameters: isCorrectBin (Boolean), currentBeltSpeed (Number)
 * Return: Number (Bonus time in milliseconds, or 0 if sorted into the wrong bin)
 * Calls: None
 */
export function calculateBonusTime(isCorrectBin, currentBeltSpeed) {

}
