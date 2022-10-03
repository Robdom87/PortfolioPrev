import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import projectList from './projectList';

class ProjectCont extends React.Component {
    printProject(projectList, i) {
        return (
            <Col xs={12} md={6}>
                <Card>
                    <a href={projectList[i].href} target="_blank">
                        <Card.Img variant="top" src={projectList[i].src} alt={projectList[i].alt} />
                    </a>
                    <Card.Body>
                        <Card.Title>{projectList[i].title}</Card.Title>
                        <Card.Text>
                            {projectList[i].tech}
                            <br />
                            <span className='card-subtext'>
                            {projectList[i].description}
                            </span>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    render() {
        return (
            <section className='projects'>
                <h2>
                    Recent Work
                </h2>
                <Row>
                    {this.printProject(projectList, 0)}
                    {this.printProject(projectList, 1)}
                    {this.printProject(projectList, 2)}
                </Row>
            </section>

        );
    }
}


export default ProjectCont;