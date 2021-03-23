import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { Typography } from '@material-ui/core';

export default function CalendarPage() {
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([]);
    let eventGuid = 0
    let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

    const INITIAL_EVENTS = [
        {
          id: createEventId(),
          title: 'All-day event',
          start: todayStr
        },
        {
          id: createEventId(),
          title: 'Timed event',
          start: todayStr + 'T12:00:00'
        }
    ]
      
    function createEventId() {
        return String(eventGuid++)
    }

    function renderEventContent(eventContent) {
        return (
          <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
          </>
        )
    }

    const handleWeekends = () => {
        // setWeekendsVisible(!weekendsVisible)
        // this.setState({
        //   weekendsVisible: !this.state.weekendsVisible
        // })
      }
    
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    const handleEvents = (events) => {
        // setCurrentEvents([events])
        // this.setState({
        //     currentEvents: events
        // })
    }

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Calendar</Typography> 
            </div>

            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                    { title: 'event 1', date: '2021-04-01' },
                    { title: 'event 2', date: '2021-04-02' }
                ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}} */
            />
        </React.Fragment>
    )
}