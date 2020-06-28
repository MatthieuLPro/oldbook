import React from "react";
import {Form, Button} from "react-bootstrap";

export function CreateForm() {
    return (
        <div>
            <p>Rentrez le nom de l'événement : exemple :
                Anniversaire de XXXX, Mariage de YYYY, Noël 92 à Paris etc...</p>
            <Form>
                <Form.Group controlId="docCreate.name">
                    <Form.Label>Evénement</Form.Label>
                    <Form.Control type="event" placeholder="Mariage de Bob et Alice" />
                </Form.Group>
                <Form.Group controlId="docCreate.year">
                    <Form.Label>Année</Form.Label>
                    <Form.Control type="year" placeholder="1900" />
                </Form.Group>
                <Form.Group controlId="docCreate.place">
                    <Form.Label>Lieu</Form.Label>
                    <Form.Control as="select">
                        <option>Alger</option>
                        <option>Angleterre</option>
                        <option>Ardèche</option>
                        <option>Bordeaux</option>
                        <option>Calais</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="docCreate.placeOther">
                    <Form.Label>Autre</Form.Label>
                    <Form.Control type="place_other" placeholder="Mon nouveau lieu" />
                </Form.Group>
                <Form.Group controlId="docCreate.file">
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