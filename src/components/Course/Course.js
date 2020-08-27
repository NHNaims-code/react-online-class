import React from 'react';
import './Course.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const {name, author, img, price} = props.course;
    const enrolled = props.enrolled;
    return (
        <div className="course-body">
            <img src={img} alt=""/>
            <div>
                <h1>{name}</h1>
                <div className="course-info">
                    <div>
                        <p>Instructor: <small>{author}</small></p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className="button">
                        <Button variant="warning" onClick={() => enrolled(props.course)}>Enroll Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;