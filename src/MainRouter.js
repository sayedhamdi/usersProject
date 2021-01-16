import React from "react";
import {
    Switch,
    Route,
    Link 
 } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage"
import UserPage from "./pages/UserPage/UserPage"

export default function MainRouter() {
    return (
        <Switch>
            <Route exact path="/">
                Home
            </Route>
            <Route exact path="/users">
                <UsersPage />
            </Route>
            <Route  path="/user/:id">
                <UserPage />
            </Route>
        </Switch>
    )
}
