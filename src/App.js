import React from 'react';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
import CourseData from './CourseData/CourseData';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(CourseData);
  const [cart, setCart] = useState([]);
  const enrolled = (course) => {
  const newCart = [...cart, course]
  setCart(newCart)
  }
  console.log(cart);
  return (
    <div className="app-body">
      <Header className='header' cart={cart}></Header>
      <div className="shop">
        <div className="courses">
          {
            data.map(course => <Course course={course} key={course.id} enrolled={enrolled}></Course>)
          }
        </div>
        <div className="cart">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
