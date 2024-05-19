import React, { useEffect, useRef, useState } from "react";

const Notify = () => {
  const [events, setEvents] = useState([]);
  const [deletedEventId, setDeletedEventId] = useState(null);

  useEffect(() => {
    // Fetch events from the server
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteEvent = (id) => {
    fetch(`http://localhost:5000/events/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          // Event deleted successfully
          setDeletedEventId(id);
        } else {
          throw new Error("Failed to delete event");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredEvents = events.filter((event) => event.id !== deletedEventId);

  return (
    <div>
      {filteredEvents.map((event) => (
        <div key={event.id}>
          {/* ...event details */}
          <div className="dropdown">
            <button className="dropbtn">
              {/* Delete Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 delete-icon"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => deleteEvent(event.id)}
              >
                <path
                  d="M19 6H5L3 8V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8L19 6ZM17 19H7V9H17V19ZM9 11H11V17H9V11ZM13 11H15V17H13V11Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notify;