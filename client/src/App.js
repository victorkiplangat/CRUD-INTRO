import React, { useState} from "react"; //8.3K (gzipped: 3.3K)
import './App.css';
import Axios from 'axis'


function App() {

  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  Const submitReview = () =>{
    
  }

  return <div className="App">
    <h1>CRUD APPLICATION</h1>

  <div className="Form">

    <label>MovieName:</label>
  <input 
     type="text"
     name="movieName" 
     onChange={(e)=>{
       setMovieName(e.target.value);
  }}
/>

  <label>Review:</label>
  <input 
  type="text" 
  name="review" 
  onChange={(e)=>{
    setReview(e.target.value);
    }}
  />

  <button>Submit</button>
  </div>
  </div>;
}


export default App;
