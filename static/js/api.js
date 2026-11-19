
export async function fetchUserJsonAPI(username) {
/**
 * Purpose: Send a GET request to the backend to retrieve the full <username>.json file if it exists.
 * Parameters: username (String - The player's username).
 * Return: Promise<Object | null> (Returns the complete JSON file content if found, or null if the server returns 404).
 * Calls: fetch()
 */

}


export async function syncUserJsonToAPI(fullUserJson) {
/**
 * Purpose: Send the complete, updated JSON object to the backend to overwrite the existing file.
 * Parameters: fullUserJson (Object - Complete user data including the newly played round).
 * Return: Promise<Boolean> (Returns true if saved successfully on the server, false on failure).
 * Calls: fetch()
 */

}
