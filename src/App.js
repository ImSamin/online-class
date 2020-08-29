import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Course from "./components/CourseList/Course";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourse(data);
  }, []);

  const handlebtn = (courses) => {
    const newCart = [...cart, courses];
    setCart(newCart);
  };
  return (
    <div className="main">
      <Header></Header>
      <Cart cart={cart}></Cart>
      {course.map((course) => (
        <Course courses={course} handlebtn={handlebtn}></Course>
      ))}
    </div>
  );
}

export default App;
