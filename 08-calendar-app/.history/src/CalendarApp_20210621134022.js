import React from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppRouter } from './router/AppRouter'
export const CalendarApp = () => {
    return (
        <div>
            <AppRouter/>
        </div>
    )
}
