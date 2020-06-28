import React from 'react';
import { Year } from './year';
import { Place } from './place';
import { Person } from './person';

export function Search() {
    const pathname = window.location.pathname.split('/')[2];
    return (
        <div>
            <h2>Search</h2>
            {
                pathname === 'year' ?
                    <Year/> : pathname === 'place' ?
                        <Place/> : <Person/>
            }
        </div>
    );
}
