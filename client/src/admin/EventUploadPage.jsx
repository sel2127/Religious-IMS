import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Breadcrumb from '../common/Breadcrumb';


const EventUploadPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventDescription, setEventDescription] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send file data
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDate', eventDate.toISOString()); // Convert date to ISO string
    formData.append('eventDescription', eventDescription);
    formData.append('eventImage', eventImage);

    try {
      // Send POST request to server
      const response = await fetch('/api/events/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success response
        console.log('Event uploaded successfully');
        // You can perform additional actions here, such as displaying a success message
      } else {
        // Handle error response
        console.error('Failed to upload event');
        // You can display an error message to the user
      }
    } catch (error) {
      console.error('Error uploading event:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div>
      <Breadcrumb />

      <div className='mx-auto py-8 flex justify-center items-center border border-gray-300 w-1/2 rounded rounded-3xl '>
        <form onSubmit={handleSubmit} className='w-full max-w-lg'>
          <div className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='eventName' className='block font-semibold'>
                Event Name
              </label>
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
              <label htmlFor='eventDate' className='block font-semibold'>
                Event Date
              </label>
              <DatePicker
                id='eventDate'
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                className='w-full border rounded-md py-2 px-3 mt-1'
                required
              />
            </div>
            <div>
              <label htmlFor='eventDescription' className='block font-semibold'>
                Event Description
              </label>
              <textarea
                id='eventDescription'
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className='w-full border rounded-md py-2 px-3 mt-1'
                required
              />
            </div>
            <div>
              <label htmlFor='eventImage' className='block font-semibold'>
                Event Image
              </label>
              <input
                type='file'
                id='eventImage'
                onChange={(e) => setEventImage(e.target.files[0])}
                className='mt-1'
                required
              />
            </div>
            <button type='submit' className='bg-dark-blue text-white py-2 px-4 rounded-full hover:bg-blue-600'>
              Upload Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventUploadPage;
