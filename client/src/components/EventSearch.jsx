import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventSearch() {
  const [events, setEvents] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/events/search/${query}`);
        const data = await response.json();
        console.log('Fetched events:', data);

        setEvents(data);
      } catch (error) {
        console.log('Error searching for events:', error);
      }
    };

    fetchEvents();
  }, [query]);

  console.log('Search Query:', query);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(dateString).getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <div className='lg:w-full'>
      {events && events.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">No events found.</div>
      ) : (
        events.map((event) => (
          <div key={event.id} className="mt-10 bg-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/4 flex flex-col items-center justify-center text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-sm">{formatDate(event.eventdate)}</p>
              <p className="text-sm">{getDayOfWeek(event.eventdate)}</p>
            </div>
            <div className="w-full lg:w-2/4 flex flex-col justify-center px-4">
              <p className="text-lg mb-4 font-bold">{event.eventname}</p>
              <p className="text-lg">{event.eventDesc}</p>
            </div>
            <div className="w-full lg:w-1/4 p-5 flex items-center justify-center">
              <img src={`/assets/${event.eventImage}`} alt={`event-${event.id}`} className="w-2/3" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default EventSearch;