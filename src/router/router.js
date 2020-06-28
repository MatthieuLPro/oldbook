import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "../home/home";
import {Upload} from "../upload/upload";
import {Search} from "../search/search";
import {Document} from "../document/document";
import {Event} from "../event/event";

export default function RouterOrganization() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/upload">
                    <Upload />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/document">
                    <Document />
                </Route>
                <Route path="/event">
                    <Event />
                </Route>
            </Switch>
        </Router>
    );
}
