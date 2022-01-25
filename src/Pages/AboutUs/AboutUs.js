import React from "react";
import { Card } from "react-bootstrap";
const AboutUs = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://avatarfiles.alphacoders.com/816/thumb-1920-81624.jpg" />
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