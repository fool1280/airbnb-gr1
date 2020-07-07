import React from "react";
import { Card } from "react-bootstrap";

import { useHistory } from "react-router-dom";

export default function Experience({ ...exp }) {
    let history = useHistory();

    const expSelect = () => {
        history.push(`/experiences/${exp._id}`);
    };

    return (
        <Card className="expCard" onClick={() => expSelect()}>
            <Card.Img variant="top" src={exp.pictureUrl} />
            <Card.Body>
                <Card.Title>{exp.title}</Card.Title>
                <Card.Title>{exp.country}</Card.Title>

                <Card.Text>Starting from ${exp.price}</Card.Text>
                <Card.Text>{exp.duration} hours</Card.Text>
            </Card.Body>
        </Card>
    );
}
