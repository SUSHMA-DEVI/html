import React, { useState } from "react";
function Form(){
  const[rollno,setRollno]=useState('');
  const[name,setName
  
  ]=useState('');
  function handleSubmit(event){
    event.preventDefault();
    console.log("My rool no. is",rollno);
    console.log("Name is:",name);
  }
  return (
    <>
    <h1>This is Form page</h1>
    <form>
      <label>Roll no</label>
      <input/>
    </form>
    </>
  )
}