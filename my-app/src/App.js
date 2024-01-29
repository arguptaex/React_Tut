import './App.css';
import React, { Component, useState } from "react"
import Form from './components/Form';





function App() {
  const [count, setCount] = useState(0)
  // console.log(result)


  // ans = [things ${count}]  this will work in side functions

  function clickComp() {
    setCount("hi")
  }


  // note : -  onClick eventlistenere works only on native DOM elements and not custom Components
  //  so what we can do is we can give handleClick ={clickComp} as a prop to a component and inside the component I can use 
  // onClick  = {props.handleClick} and this way we can use this function clickComp on our not real DOM Element(custom Component)

  //  <div style={{}}></div>  in style first {} represents that i wants to wite javascript in  my jsx and second {}
  // represents that we are going to create an object


  return (
    <>
      {count}
      <button onClick={clickComp}></button>
      <Form/>
    </>
  );
}
export default App;


//8:07:00