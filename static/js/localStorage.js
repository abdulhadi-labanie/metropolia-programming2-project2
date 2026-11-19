
export function saveUserJsonToStorage(userJson) {
/**
 * Purpose: Store the user JSON copy fetched from the server into browser storage (localStorage).
 * Parameters: userJson (Object - Complete user data object).
 * Return: void
 * Calls: localStorage.setItem()
 */

}


export function getUserJsonFromStorage() {
/**
 * Purpose: Read the user JSON copy stored locally in the browser.
 * Parameters: None.
 * Return: Object | null (User data object, or null if not logged in).
 * Calls: localStorage.getItem()
 */

}


export function appendRoundToLocalUserJson(roundStats) {
/**
 * Purpose: Retrieve the local user JSON, append the completed round's statistics to its rounds array, save it, and return the updated full object.
 * Parameters: roundStats (Object - Current round results: time lasted, true counter, total counter).
 * Return: Object (Complete user object after appending the new round).
 * Calls: getUserJsonFromStorage(), saveUserJsonToStorage()
 */

}
