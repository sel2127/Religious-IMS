import { event } from "jquery";
import {
  SET_FEEDBACK,
  SET_ERROR,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_ERROR,
  UPDATE_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_REQUEST,
  FETCH_FEEDBACK_BY_NAME_SUCCESS,
  FETCH_FEEDBACK_BY_NAME_FAILURE,
  FETCH_FEEDBACK_BY_NAME_REQUEST,
  SET_FEEDBACK_COUNT,
  SET_USERS_COUNT,
  SET_EVENTS_COUNT,
  SET_DONATION_COUNT,
  SET_EVENTS,
  SET_MEMBERS_COUNT,
} from "../actions/feedbackAction";

const initialState = {
  feedbackData: [],
  event:[],
  fcount: 0, // intial value for feedback count
  ucount:0,
  ecount:0,
  dcount:0,
  membercount:0,
  error: "",
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDBACK:
      return {
        ...state,
        feedbackData: action.payload,
        error: "",
      };
      case SET_EVENTS:
        return{
          ...state,
          event:action.payload,

        }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedbackData: state.feedbackData.filter(
          (feedback) => feedback.feedbackId !== action.payload
        ),
      };
    case DELETE_FEEDBACK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UPDATE_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_FEEDBACK_BY_NAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FEEDBACK_BY_NAME_SUCCESS:
      return {
        ...state,
        feedbackData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_FEEDBACK_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_FEEDBACK_COUNT:
      return {
        ...state,
        fcount: action.payload,
      };
      case SET_USERS_COUNT:
      return{
        ...state,
        ucount:action.payload
      }
      case SET_EVENTS_COUNT:
        return{
          ...state,
          ecount:action.payload
        }
        case SET_DONATION_COUNT:
          return{
            ...state,
            dcount:action.payload
          }
          case SET_MEMBERS_COUNT:
            return{
              ...state,
              membercount:action.payload
            }
    default:
      return state;
  }
};

export default feedbackReducer;
