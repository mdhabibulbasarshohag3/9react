import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import SubHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="backgroundImage">
                <Container>
                    <Row className="d-flex align-items-center py-5">
                        <div className="col col-md-7">
                            <h1 className="fw-bold text-light">LEARN TO PLAY <br /><span className="guitarSpan">GUITAR</span>  THE EASY <br /> FAST FUN WAY!</h1>
                            <Button variant="primary">Learn Form Today</Button>
                        </div>
                        <div className="col col-md-5 imgHover">
                            <img className="w-100" src="https://acousticlife.tv/wp-content/uploads/2019/05/Screen-Shot-2019-05-22-at-2.26.49-PM.png" alt="" />
                        </div>
                    </Row>
                </Container>
            </div>
            <SubHomeTwo></SubHomeTwo>
            <SubHome></SubHome>
        </div>
    );
};

export default Home;