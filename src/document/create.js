import React from "react";
import {Form, Button} from "react-bootstrap";

export function CreateForm() {
    return (
        <div>
            <p>Rentrez le nom de l'événement : exemple :
                Anniversaire de XXXX, Mariage de YYYY, Noël 92 à Paris etc...</p>
            <Form>
                <Form.Group controlId="eventCreate.name">
                    <Form.Label>Document</Form.Label>
                    <Form.Control type="event" placeholder="Act de mariage de Bob et Alice" />
                </Form.Group>
                <Form.Group controlId="eventCreate.year">
                    <Form.Label>Année</Form.Label>
                    <Form.Control type="year" placeholder="1900" />
                </Form.Group>
                <Form.Group controlId="eventCreate.place">
                    <Form.Label>Lieu</Form.Label>
                    <Form.Control as="select">
                        <option>Alger</option>
                        <option>Angleterre</option>
                        <option>Ardèche</option>
                        <option>Bordeaux</option>
                        <option>Calais</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="eventCreate.placeOther">
                    <Form.Label>Autre</Form.Label>
                    <Form.Control type="place_other" placeholder="Mon nouveau lieu" />
                </Form.Group>
                <Form.Group controlId="eventCreate.file">
                    <Form.Label>Cliquez sur le bouton pour télécharger les photos</Form.Label>
                    <Form.File
                        id="custom-file"
                        label="Selectionner un fichier"
                        custom
                    />
                </Form.Group>
                <Button as="input" type="submit" value="Envoyer" />
            </Form>
        </div>
    );
}