import React from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import {Navbar} from './../ui/Navbar'
export const CalendarScreen = () => {
    const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

    return (
        <div>
            <Navbar />
        </div>
    )
}
