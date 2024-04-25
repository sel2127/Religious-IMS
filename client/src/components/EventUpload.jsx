import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  setEventName,
  setEventDate,
  setEventDescription,
  setEventImage,
  setEventId,
} from '../app/actions/eventAction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const EventUpload = ({
  eventName,
  eventDate,
  eventDescription,
  eventImage,
  eventId,
  setEventName,
  setEventDate,
  setEventDescription,
  setEventImage,
  setEventId,
}) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [uploadInfo, setUploadInfo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Make an HTTP request to upload the event data
    try {
      const response = await axios.post('http://localhost:5000/api/events/upload', {
        eventName,
        eventDate,
        eventDescription,
        eventImage,
        eventId
      });

      // Log the upload information if the upload is successful
      console.log('Event uploaded successfully:', response.data);
      // setUploadInfo(response.data);

      // Display success message
      setSuccessMessage('Event uploaded successfully');
    } catch (error) {
      console.error('Error uploading event:', error);
    }
  };

  return (
    <div>
      <div className='mx-auto py-8 mt-16 flex justify-center items-center border border-gray-300 w-1/2 rounded rounded-3xl '>
        <form onSubmit={handleFormSubmit} className='w-full max-w-lg'>
          <div className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='eventName' className='block font-semibold'>Event Name</label>
              <input
                type='text'
                id='eventName'
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className='w-full border rounded-md py-2 px-3 mt-1'
                required
              />
            </div>
            <div>
              <label htmlFor='eventDate' className='block font-semibold'>Event Date</label>
              <DatePicker
                id='eventDate'
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                className='w-full border rounded-md py-2 px-3 mt-1'
                required
              />
            </div>
            <div>
              <label htmlFor='eventDescription' className='block font-semibold'>Event Description</label>
              <textarea
                id='eventDescription'
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className='w-full border rounded-md py-2 px-3 mt-1'
                required
              />
            </div>
            <div>
              <label htmlFor='eventImage' className='block font-semibold'>Event Image</label>
              <input
                type='file'
                id='eventImage'
                onChange={(e) => setEventImage(e.target.files[0])}
                className='mt-1'
                required
              />
            </div>
            <button type='submit' className='bg-dark-blue text-white py-2 px-4 rounded-full hover:bg-blue-600'>Upload Event</button>
          </div>
        </form>
      </div>
      {uploadInfo && <pre>{JSON.stringify(uploadInfo, null, 2)}</pre>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  eventName: state.event.eventName,
  eventDate: state.event.eventDate,
  eventDescription: state.event.eventDescription,
  eventImage: state.event.eventImage,
  eventId: state.event.eventId,
});

const mapDispatchToProps = (dispatch) => ({
  setEventName: (name) => dispatch(setEventName(name)),
  setEventDate: (date) => dispatch(setEventDate(date)),
  setEventDescription: (description) => dispatch(setEventDescription(description)),
  setEventImage: (image) => dispatch(setEventImage(image)),
  setEventId: (id) => dispatch(setEventId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventUpload);




