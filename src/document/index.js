import React from "react";
import {Button} from "react-bootstrap";

export function Index() {
    return (
        <div>
            <Button variant="primary" href="document/create">Créer un nouveau document</Button>
            <h2>Tous les documents classés par ordre chronologique :</h2>
            <ul>
                <li>1906 - Acte de naissance de Henri Rigaud</li>
                <li>1920 - Ecole Supèrieure de Commerce d'Alger</li>
                <li>1931 - Acte de mariage 8 août 1931</li>
                <li>1933 - Acte de naissance de Charlette Rigaud </li>
                <li>1940 - Citation à l'ordre de l'Armée de la 87ème DIA</li>
            </ul>
        </div>
    );
}