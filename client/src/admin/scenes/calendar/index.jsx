import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import "../../adminCss/admin.css";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/calendarevents");
      const events = await response.json();
      const formattedEvents = events.map((event) => ({
        id: event.id,
        title: event.todo,
        start: event.tododate,
        formattedDate: formatDate(event.tododate, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      }));
      setCurrentEvents(formattedEvents);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDateClick = async (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/calendarevents",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              todo: title,
              tododate: selected.startStr,
            }),
          }
        );
        const event = await response.json();
        const formattedEvent = {
          id: event.id,
          title: event.todo,
          start: event.tododate,
          formattedDate: formatDate(event.tododate, {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
        };
        // calendarApi.addEvent({
        //   id: event.id,
        //   title: event.todo,
        //   start: event.tododate,
        // });
        calendarApi.addEvent(formattedEvent);
        setCurrentEvents((prevEvents) => [...prevEvents, formattedEvent]);
      } catch (error) {
        console.error("Failed to create event:", error);
      }
    }
    // calendarApi.addEvent({
    //   id: `${selected.dateStr}-${title}`,
    //   title,
    //   start: selected.startStr,
    //   end: selected.endStr,
    //   allDay: selected.allDay,
    // });
  };

  const handleEventClick = async (selected) => {
    const eventId = selected.event.id;
    const updatedEvents = currentEvents.filter((event) => event.id !== eventId);
    setCurrentEvents(updatedEvents);
    
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      try {
        await fetch(
          `http://localhost:5000/api/calendarevents/${selected.event.id}`,
          {
            method: "DELETE",
          }
        );
        selected.event.remove();

      } catch (error) {
        console.error("Failed to delete event: ", error);
      }
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR} */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents.map((event) => ({
              ...event,
              end: event.start,
              allDay: true,
              // id: event.id,
              // title: event.todo,
              // start: event.tododate,
            }))}
            eventContent={({ event }) => (
              <>
                <b>{event.title}</b>
                <p>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;