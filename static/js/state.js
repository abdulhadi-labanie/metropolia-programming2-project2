// state.js
export function createInitailGameState(savedUsername){
    const now = Date.now();

    return {
        isRunning: true,
        startTime: now,
        endTime: now + 30000,

        playerData: {
            username: savedUsername,
            timePlayedMs: 0,
            timeLeftMs: 30000,

            itemsSpawnedCount: 0,
            correctlySortedCount: 0     
        },

        character: {
            x: 400,                       
            y: 250,                       
            speed: 5,                     
            carriedItem: null
        },

        conveyorItems: []
    };
}