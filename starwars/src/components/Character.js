// Write your Character component here
import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Col } from "reactstrap";

const Character = ({ character}) => {
return (
        <Col xs="4" md="3" xl="2">
            <Card>
               <CardBody>
                   <CardTitle>{character.name}</CardTitle>
                   <CardImg>{Character.image}</CardImg>
                   <CardText>{character.status}</CardText>
                   <CardText>{character.species}</CardText>
                   <CardText>{character.gender}</CardText>
               </CardBody>
            </Card>
        </Col>
    );
};

export default Character;