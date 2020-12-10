import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Title from './Title.js'
import Date from './Date.js'
import Explanation from './Explanation.js'
import VideoUrl from './VideoUrl.js'

function App() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [videoURL, setVideoURL] = useState("")
  const [explanation, setExplanation] = useState("")


  useEffect(() => {
      axios
          .get (
          `https://api.nasa.gov/planetary/apod?api_key=QTu3yE2OUyP4BTP1nHE396h5ywBkCP4KyeYh78nK`
          )
          .then ( (data) => {
              setTitle(data.data.title)
              setDate(data.data.date)
              setVideoURL(data.data.url)
              setExplanation(data.data.explanation)
          })
  }, []) 

  return (
    <div className="App">

      <Title />
        
      <Date />
       
      <VideoUrl />

      <Explanation />
      
    </div>
  );
}

export default App;
