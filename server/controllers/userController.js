
// Function to fetch user data
async function getUserData() {
  try {
    // Fetch user data from the database
    const userData = await User.findOne();

    return userData;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    throw error;
  }
}

module.exports = {
  getUserData
};
