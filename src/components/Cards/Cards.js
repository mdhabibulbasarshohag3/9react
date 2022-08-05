import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Cards = (props) => {
    const history = useHistory()

    const {name,description,img} = props.card
    const detailsService = () => {
        history.push('/services')
    }
    return (
        <Col>
            <Card>
                <Card.Img style={{height:'10rem'}} variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description.slice(0,55)}</Card.Text>
                <Button onClick={detailsService} variant="primary">More...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;