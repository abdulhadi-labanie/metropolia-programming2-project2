/**
 * Purpose: Bind keydown and keyup listeners for continuous W/A/S/D movement and single-press E interaction.
 * Parameters: onInteractCallback (Function - Callback executed once when E is pressed)
 * Return: void
 * Calls: document.addEventListener(), onInteractCallback()
 */
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
}
export function initKeyboardControls(onInteractCallback) {
    document.addEventListener("keydown", function(event) {
        switch (event.key.toLowerCase()) {
            case "w":
                keys.w = true;
                break
            case "a":
                keys.a = true;
                break
            case "s":
                keys.s = true;
                break
            case "d":
                keys.d = true;
                break
        }
    });
    document.addEventListener("keyup", function(event) {
        switch (event.key.toLowerCase()) {
            case "w":
                keys.w = false;
                break
            case "a":
                keys.a = false;
                break
            case "s":
                keys.s = false;
                break
            case "d":
                keys.d = false;
                break
        }
    });
}
/**
 * Purpose: Read currently pressed W/A/S/D keys and return horizontal and vertical movement directions.
 * Parameters: None
 * Return: Object ({ dx: Number (-1 | 0 | 1), dy: Number (-1 | 0 | 1) })
 * Calls: None
 */
export function getMovementDirection() {
    let dx = 0;
    let dy = 0;

    if (keys.w) {
        dy = -1;
    }
    if (keys.a) {
        dx = -1;
    }
    if (keys.s) {
        dy = 1;
    }
    if (keys.d) {
        dx = 1;
    }

    return {dx,dy};
}

