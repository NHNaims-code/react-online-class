import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const {name, author, img, price} = props.course;
    const enrolled = props.enrolled;
    return (
        <div className="body">
            <img src={img} alt=""/>
            <div>
                <h1>{name}</h1>
                <p>Instructor: <small>{author}</small></p>
                <p>Price: ${price}</p>
                <div className="button">
                    <Button variant="warning" onClick={() => enrolled(props.course)}>Enroll Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Course;