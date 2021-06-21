import React from 'react'
import {BigCalendar} from 'react-big-calendar'
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
