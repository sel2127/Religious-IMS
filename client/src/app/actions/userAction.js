export function setUserData(userData) {
    return {
      type: 'SET_USER_DATA',
      payload: userData,
    };
  }