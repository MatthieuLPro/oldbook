import React from "react";
import {Index} from "./index";
import {CreateForm} from "./create";

export function Event() {
    const pathname = window.location.pathname.split('/')[3];
    return (
        <div>
            {
                pathname === '' ?
                    <Index/> : pathname === 'create' ?
                    <CreateForm/> : <Index/>
            }
        </div>
    );
}