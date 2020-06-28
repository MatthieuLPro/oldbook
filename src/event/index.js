import React from "react";
import { Button } from 'react-bootstrap';

export function Index() {
    return (
        <div>
            <Button variant="primary" href="event/create">Créer un nouvel événement</Button>
            <h2>Tous les événements classés par ordre chronologique :</h2>
            <ul>
                <li>1931 - Mariage de Henri Rigaud et Hélène Ollagnon</li>
                <li>1933 - Naissance de Charlette Rigaud </li>
                <li>1955 - Naissance de Véronique</li>
                <li>1956 - Baptême de Dominique</li>
                <li>1956 - Naissance de Dominique</li>
            </ul>
        </div>
    );
}