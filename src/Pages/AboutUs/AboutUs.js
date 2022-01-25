import React from "react";
import { Card } from "react-bootstrap";
const AboutUs = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="Images/arnold.jpg" />
            <Card.Body>
                <Card.Title>Arnold Schwarzenegger</Card.Title>
                <Card.Text>
                    Here we can put some interesting info about ourselves. Hasta la vista, baby.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AboutUs;