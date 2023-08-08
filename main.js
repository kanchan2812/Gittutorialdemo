// Storing user data
function addUserDetails(userDetails) {
    const userId = userDetails.id; // Assuming id is a unique identifier for each user
    const key = `user_${userId}`;
    localStorage.setItem(key, JSON.stringify(userDetails));
}

// Retrieving user data
function getUserDetails(userId) {
    const key = `user_${userId}`;
    const userDetailsString = localStorage.getItem(key);
    if (userDetailsString) {
        return JSON.parse(userDetailsString);
    }
    return null; // User not found in local storage
}
