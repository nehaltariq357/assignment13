import React from "react";
import { useNavigate } from "react-router-dom";


function About() {
 
  const navigate = useNavigate()

  const gotocontact=()=>{
    navigate("/blog")
  }
  return (
    <>
      <h1>about page</h1>
    <button onClick={()=>gotocontact()}>go to blog page</button>
    <button onClick={()=>{navigate(-1)}}>go back</button>
 
    </>
  );
}

export default About;
