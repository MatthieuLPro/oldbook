import React from 'react';
import { Year } from './year';
import { Place } from './place';
import { Person } from './person';

export function Search() {
    const pathname = window.location.pathname.split('/')[2];
    return (
        <div>
            {
                pathname === 'year' ?
                    <Year/> : pathname === 'place' ?
                        <Place/> : <Person/>
            }
        </div>
    );
}
