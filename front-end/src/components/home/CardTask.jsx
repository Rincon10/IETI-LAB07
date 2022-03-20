import React from 'react';
import { Card } from 'react-bootstrap';

const CardTask = ({ task }) => {
    const { name, description, dueDate, created } = task;
    return (
        <Card border="dark" style={{ width: '18rem', marginTop: '2rem' }}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{dueDate}</Card.Text>
                <Card.Text>{created}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardTask;
