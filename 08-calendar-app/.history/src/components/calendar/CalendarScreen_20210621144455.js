import React from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import {Navbar} from './../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es';
moment.locale('es');
const localizer = momentLocalizer(moment) // or globalizeLocalizer
export const CalendarScreen = () => {
    const events=[{
        title:'Cumpleaños de mamá',
        start: moment().toDate(),
        end: moment().add( 2, 'hours' ).toDate(),
        bgcolor: '#fafafa'
    }];
    
    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
            />
        </div>
    )
}
