import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AllService.css'
const AllService = (props) => {
    const {name,img,description} = props.service
    return (
    <Col>
      <Card style={{margin:'3px'}}>
        <Card.Img style={{height:'10rem'}} variant="top" src={img} />
        <Card.Body className="cBody">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0,100)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default AllService;