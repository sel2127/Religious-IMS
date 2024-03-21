const initialState = {
    eventName: '',
    eventDate: new Date(),
    eventDescription: '',
    eventImage: null,
    eventId: '',
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EVENT_NAME':
        return { ...state, eventName: action.payload };
      case 'SET_EVENT_DATE':
        return { ...state, eventDate: action.payload };
      case 'SET_EVENT_DESCRIPTION':
        return { ...state, eventDescription: action.payload };
      case 'SET_EVENT_IMAGE':
        return { ...state, eventImage: action.payload };
      case 'SET_EVENT_ID':
        return { ...state, eventId: action.payload };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  