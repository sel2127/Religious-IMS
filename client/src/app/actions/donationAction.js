//donationAction.js
export const DONATE_SUCCESS = 'DONATE_SUCCESS';
export const DONATE_FAILURE = 'DONATE_FAILURE';

export const donateSuccess = (data) => ({
  type: DONATE_SUCCESS,
  payload: data,
});

export const donateFailure = (error) => ({
  type: DONATE_FAILURE,
  payload: error,
});