import {useState, useEffect } from "react";
import React from "react";
import "./Slider.css";
import  SliderData  from "../components/data/SliderData";


function Slider() {
  const [people] = useState(SliderData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length -1;
    if(index<0) {
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1)
    }, 5000);
    return () =>{
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const {id, name, title, quote} = item;
          let position = "nextSlide";
          if(indexPeople === index ) {
            position = "activeSlide"
          }
          if(indexPeople === index -1 || (index === 0 && indexPeople === people.length - 1)){
              position = "lastSlide"
          }
          return (
            <article className={position} key={id}>
            <h3>Reviews</h3>
            <h4>"{name}"</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            

            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Slider
