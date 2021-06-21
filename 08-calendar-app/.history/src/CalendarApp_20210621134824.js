import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from './components/auth/LoginScreen';
import { AppRouter } from './router/AppRouter'
export const CalendarApp = () => {
    return (
        <Router >
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen}>
                </Switch>
            </div>
        </Router>
    )
}
