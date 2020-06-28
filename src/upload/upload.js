import React from "react";
import { Card, Button } from "react-bootstrap";

export function Upload() {
    return (
        <Card>
            <Card.Header>Téléchargez une photo</Card.Header>
            <Card.Body>
                <Card.Title>Télécharger le fichier :</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Taille maximum : 5MO mais recommandée : 1MO max.</li>
                        <li>Formats autorisés: "jpeg", "jpg", "gif"</li>
                    </ul>
                </Card.Text>
                <Button variant="primary">Envoyer</Button>
            </Card.Body>
        </Card>
    );
}