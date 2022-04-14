import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <p>
          My name is Yin, I'm a photographer and a student at the University of Arizona, my major is Middle Estern Studies and Arabic Language. I'm glad to have you visiting my first React Portfolio!! 
     </p>

      <div className="image-holder-1">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <p>- photo by: Yin -</p>
       </div>
      
      <div className="my-2">

       

      </div>
    </section>
  )
}

export default About