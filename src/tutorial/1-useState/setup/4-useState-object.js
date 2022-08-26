import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Stan Keach",
    age: 70,
    message: "north pond hermit",
  });

  const [name,setName] = useState('peter')
  const [age,setAge] = useState(24)
  const [message,setMessage] = useState('north pond hermit')


  const changeMessage = () => {
   // setPerson({ ...person, message: "hello world" });
   setMessage('chritopher knight  lived alone in the maine woods for 27 years');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
