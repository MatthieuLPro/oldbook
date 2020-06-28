import React from "react";
import {Button, Form, FormControl, Table} from "react-bootstrap";

export function Place() {
    return (
        <div>
            <div>
                <h2>Recherche par lieux</h2>
                <Form inline>
                    <FormControl type="text" placeholder="Chercher" className="mr-sm-2" />
                    <Button variant="outline-success">Chercher</Button>
                </Form>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Lieu</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Alger</td>
                        <td><Button variant="info">Modifier</Button></td>
                        <td><Button variant="danger">Supprimer</Button></td>
                    </tr>
                    <tr>
                        <td>Angleterre</td>
                        <td><Button variant="info">Modifier</Button></td>
                        <td><Button variant="danger">Supprimer</Button></td>
                    </tr>
                    <tr>
                        <td>Ardèche</td>
                        <td><Button variant="info">Modifier</Button></td>
                        <td><Button variant="danger">Supprimer</Button></td>
                    </tr>
                    <tr>
                        <td>Bordeaux</td>
                        <td><Button variant="info">Modifier</Button></td>
                        <td><Button variant="danger">Supprimer</Button></td>
                    </tr>
                    <tr>
                        <td>Calais</td>
                        <td><Button variant="info">Modifier</Button></td>
                        <td><Button variant="danger">Supprimer</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}