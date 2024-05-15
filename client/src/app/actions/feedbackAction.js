import axios from "axios";
import { type } from "jquery";
import { toast } from "react-toastify";

export const SET_FEEDBACK='SET_FEEDBACK';
export const SET_ERROR = 'SET_ERROR';
export const  DELETE_FEEDBACK_SUCCESS='DELETE_FEEDBACK_SUCCESS';
export const DELETE_FEEDBACK_ERROR='DELETE_FEEDBACK_ERROR';
export const UPDATE_FEEDBACK_REQUEST = 'UPDATE_FEEDBACK_REQUEST';
export const UPDATE_FEEDBACK_SUCCESS = 'UPDATE_FEEDBACK_SUCCESS';
export const UPDATE_FEEDBACK_FAILURE = 'UPDATE_FEEDBACK_FAILURE';
export const FETCH_FEEDBACK_BY_NAME_REQUEST = 'FETCH_FEEDBACK_BY_NAME_REQUEST';
export const FETCH_FEEDBACK_BY_NAME_SUCCESS = 'FETCH_FEEDBACK_BY_NAME_SUCCESS';
export const FETCH_FEEDBACK_BY_NAME_FAILURE = 'FETCH_FEEDBACK_BY_NAME_FAILURE';
export const SET_FEEDBACK_COUNT='SET_FEEDBACK_COUNT';
export const SET_USERS_COUNT='SET_USERS_COUNT';
export const SET_EVENTS_COUNT='SET_EVENTS_COUNT';
export  const SET_DONATION_COUNT='SET_DONATION_COUNT'
export const SET_EVENTS='SET_EVENTS'
//  for fectch feedback
export const fetchFeedback=()=>{
    return async(dispatch)=>{
        try {
            const response=await axios.get('http://localhost:5000/api/feedback/all/8');
            dispatch({type :SET_FEEDBACK,payload:response.data});
        } catch (error) {
            dispatch({type:SET_ERROR,payload:error.message});
        }
    };
};
// fetch event
export const getEvents=()=>{
  return async(dispatch)=>{
      try {
          const response=await axios.get('http://localhost:5000/events');
          dispatch({
            type :SET_EVENTS,
            payload:response.data});
      } catch (error) {
          dispatch({type:SET_ERROR,payload:error.message});
      }
  };
};
// for deleting feedback


export const deleteFeedback = (id) => {
    return async (dispatch) => {
      try {
        await axios.delete(`http://localhost:5000/api/feedback/${id}`);
        dispatch({ type: DELETE_FEEDBACK_SUCCESS, payload: id });
        toast.success("Feedback deleted successfully");
      } catch (error) {
        if (error.response && error.response.status === 403) {
          dispatch({ type: DELETE_FEEDBACK_ERROR, payload: "Unauthorized - you are not the owner of the feedback" });
          toast.error("Unauthorized - you are not the owner of the feedback", { autoClose: 5000 });
        } else {
          dispatch({ type: DELETE_FEEDBACK_ERROR, payload: "Failed to delete feedback" });
          toast.error("Failed to delete feedback");
        }
      }
    };
  };
  // for updating feedback
  export const updateFeedback = (id, formData) => async (dispatch) => {
    dispatch({ type: UPDATE_FEEDBACK_REQUEST });
    try {
      const response = await axios.put(`http://localhost:5000/api/feedback/update/${id}`, formData, { withCredentials: true });
      dispatch({
        type: UPDATE_FEEDBACK_SUCCESS,
        payload: response.data
      });
      toast.success('Feedback updated successfully');
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({ type: UPDATE_FEEDBACK_FAILURE, payload: 'Unauthorized - you are not the owner of the feedback' });
        toast.error('Unauthorized - you are not the owner of the feedback', { autoClose: 5000 });
      } else {
        dispatch({ type: UPDATE_FEEDBACK_FAILURE, payload: 'An error occurred while updating feedback. Please try again.' });
        toast.error('An error occurred while updating feedback. Please try again.');
      }
     
    }
  };
  export const fetchFeedbackByName = (id) => async (dispatch) => {
    dispatch({ type: FETCH_FEEDBACK_BY_NAME_REQUEST });
    try {
      const response = await axios.get(`http://localhost:5000/api/feedback/byname/${id}`);
      dispatch({
        type: FETCH_FEEDBACK_BY_NAME_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FETCH_FEEDBACK_BY_NAME_FAILURE, payload: error.message });
    }
  };
  // for counting feedback
  export const fetchFeedbackCount = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedback/");
        dispatch({
          type:SET_FEEDBACK_COUNT,
          payload:response.data.length,
        });
      } catch (error) {
        console.error('Error fetching feedback count:', error);
      }
    };
  };
  // for counting number of users
  export const fetchUsersCount=()=>{
    return async(dispatch)=>{
      try {
        const response=await axios.get('http://localhost:5000/users');
        dispatch({

          type:SET_USERS_COUNT,
          payload:response.data.length,
        })
      } catch (error) {
        console.error('eror for getting number of users');
        
      }
    }
  }
  // getting number of events
  export const fetchEvents=()=>{
    return async(dispatch)=>{
  try {
    const response=await axios.get('http://localhost:5000/events/count' ,{withCredentials:true});
    dispatch({
      type:SET_EVENTS_COUNT,
      payload:response.data.length,

    })
  } catch (error) {
    console.error('error for getting the number of events');
    
  }
    }
  }
  // get number of donation
  export const fetchDonation=()=>{
    return async(dispatch)=>{
      try {
        const response=await axios.get('http://localhost:5000/api/donation',{withCredentials:true});
        dispatch({
          type:SET_DONATION_COUNT,
          payload:response.data.length,
        })
      } catch (error) {
        console.error('error for getting number of donation');
        
      }
    }
  }