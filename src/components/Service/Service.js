import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./details.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="serviceBackdround py-4 mb-5">
                <h1 className="text-center text-light "><span style={{ fontSize: '5rem' }}>All Service</span></h1>
                <p className="text-center w-50 mx-auto text-light">There are different ways people have tried and failed to learn guitar. In-person instructors and YouTube seem like great options at first, but they usually lead to slow progress and staggered results.</p>
            </div>
            <Container>

                <Row xs={1} md={3} className="g-4 pb-5">
                    {
                        services.map(service => <AllService key={service.id} service={service}></AllService>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;