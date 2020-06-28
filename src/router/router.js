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
                <Route path={process.env.PUBLIC_URL + "/home"}>
                    <Home />
                </Route>
                <Route path={process.env.PUBLIC_URL + "/upload"}>
                    <Upload />
                </Route>
                <Route path={process.env.PUBLIC_URL + "/search"}>
                    <Search />
                </Route>
                <Route path={process.env.PUBLIC_URL + "/document"}>
                    <Document />
                </Route>
                <Route path={process.env.PUBLIC_URL + "/event"}>
                    <Event />
                </Route>
            </Switch>
        </Router>
    );
}
