import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character"
import { Container, Row } from "reactstrap";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                setCharacters(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);
console.log("Characters", characters);

return (
    <Container>
        <Row>
        {characters && characters.map(character => {
            return <Character character={character} />;
        })}
        </Row>
    </Container>

)};

