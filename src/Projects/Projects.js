import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2>Projects</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Project 1</ListGroup.Item>
                            <ListGroup.Item>Project 2</ListGroup.Item>
                            <ListGroup.Item>Project 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Projects;
