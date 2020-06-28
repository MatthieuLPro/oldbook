import React from "react";
import {Button, Card, Form, FormControl} from "react-bootstrap";

export function Home() {
    return (
        <div>
            <div className={'row'}>
                <div className={'col-6'}>
                    <Card>
                        <Card.Header>Informations manquantes :</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Il existe 9 photos non datés.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={'col-6'}>
                    <Card>
                        <Card.Header>Informations générales :</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Il y a 1878 photos datées de 1880 à 2019.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={'col-12'}>
                    <Card>
                        <Card.Header>Les dernières mises-à-jour :</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p> => Liste des 10 denrières photos ajoutées ?</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className={'col-12'}>
                    <Card>
                        <Card.Header>Faire une recherche: </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Recherche d'une année, d'un nom, d'un prénom, d'un lieu ou d'une image : </p>
                                <Form inline>
                                    <FormControl type="text" placeholder="Chercher" className="mr-sm-2" />
                                    <Button variant="outline-success">Chercher</Button>
                                </Form>
                                <p>La recherche des photos et des documents se fait sur la base de la chaîne de caractères rentrée, (minium 3 caractères) et dans l'ordre suivant : </p>
                                <ol>
                                    <li>Sur les 4 chiffres d'une année</li>
                                    <li>Dans le prénom ou le nom d'une personne </li>
                                    <li>Dans le nom d'un lieu </li>
                                    <li>Dans le titre d'un document</li>
                                    <li>Dans le titre d'un événement</li>
                                    <li>Dans le titre et le commentaire d'une photo.</li>
                                </ol>
                                <p>Pour toutes les photos d'une année, voir le menu "Toutes les années". Le résultat est donné pour toute l'année, par événement,  par personne par lieu et par document. </p>
                                <p>Pour rechercher toutes les photos relatives à un lieu, voir le menu "Les lieux" qui liste tous les lieux et donne le résultat de la recherche par année, par événement et par personne et par document.</p>
                                <p>Pour rechercher toutes les photos d'une événement, voir le menu "Les événements" qui liste tous les événements par ordre chronologique. Le diaporama de l'événement mentionne si un ou plusieurs documents y sont associés.</p>
                                <p>Pour rechercher une ou plusieurs personnes "ENSEMBLES" sur une photo, voir le menu "La famille". La recherche peut être affinée en précisant une année.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}