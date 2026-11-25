const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
let player_x_pos = 10;
let player_y_pos = 10;
let player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);

document.addEventListener("keydown",(button)=>{
    console.log(button.key.toLowerCase())
    switch(button.key.toLowerCase()){
        case "w":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_y_pos-=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "a":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_x_pos-=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "s":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_y_pos+=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
        case "d":
            ctx.clearRect(player_x_pos, player_y_pos, 10, 10);
            player_x_pos+=10;
            player = ctx.fillRect(player_x_pos, player_y_pos, 10, 10);
            break
    }
})

// game.js
import { createInitailGameState } from "./state.js";

let gameState = null;

/**
 * Purpose: Initialize a new game round state and start the main animation loop.
 * Parameters: username (String)
 * Return: void
 * Calls: createInitailGameState(), requestAnimationFrame()
 */
export function startGame(username) {
    gameState = createInitailGameState(username);
    requestAnimationFrame(mainTimeContainer);
}

/**
 * Purpose: Calculate remaining and elapsed time in milliseconds and update gameState.playerData.
 * Parameters: None
 * Return: void
 * Calls: Date.now()
 */
function updateTime() {
    const now = Date.now();
    const remainingMs = gameState.endTime - now;

    if (remainingMs > 0) {
        gameState.playerData.timeLeftMs = remainingMs;
    } else {
        gameState.playerData.timeLeftMs = 0;
    }

    gameState.playerData.timePlayedMs = now - gameState.startTime;
}

/**
 * Purpose: Main 60 FPS heartbeat loop that checks time expiration and drives active game steps.
 * Parameters: None
 * Return: void
 * Calls: updateTime(), handleGameOver(), runActiveGameStep(), requestAnimationFrame()
 */
function mainTimeContainer() {
    if (!gameState.isRunning) {
        return;
    }

    updateTime();

    if (gameState.playerData.timeLeftMs <= 0) {
        gameState.isRunning = false;
        handleGameOver();
        return;
    }

    runActiveGameStep();

    requestAnimationFrame(mainTimeContainer);
}

/**
 * Purpose: Execute one frame of active gameplay (move character, spawn/move belt items, update timer UI, render canvas).
 * Parameters: None
 * Return: void
 * Calls: getMovementDirection(), calculateCharacterPosition(), updateTimerDisplay(), clearCanvas(), drawEnvironment(), drawConveyorItems(), drawCharacter()
 */
function runActiveGameStep() {

}

/**
 * Purpose: Handle the E key action to pick up a nearby conveyor item or drop a carried item into a matching bin.
 * Parameters: None
 * Return: void
 * Calls: findNearbyConveyorItem(), findNearbyBin(), calculateBonusTime(), addBonusTime()
 */
export function handleCharacterInteract() {

}

/**
 * Purpose: Extend the round's target endTime when the player sorts an item into the correct bin.
 * Parameters: bonusMs (Number)
 * Return: void
 * Calls: None
 */
export function addBonusTime(bonusMs) {

}

/**
 * Purpose: Execute post-game actions once time expires (show Game Over modal and POST playerData to backend).
 * Parameters: None
 * Return: Promise<void>
 * Calls: showGameOverModal(), postPlayerResultAPI()
 */
async function handleGameOver() {

}
