import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <h3>Left side</h3>

                </Col>

                <Col lg="8">

                    <h2>
                        Right side
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;