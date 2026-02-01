import React from 'react'
import './projects.css'


const Projects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG1} alt="" /> */}
            </div>
            <h3>Note It</h3>
            <small className='text-light'>React.js | Js | Tailwind CSS | Material Icons</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/Developer-Swati/Notes-app" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://developer-swati.github.io/Notes-app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Here</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG4} alt="" /> */}
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs | Js | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Developer-Swati/demo" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://developer-swati.github.io/demo/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                {/* <img src={IMG3} alt="" /> */}
            </div>
            <h3>Jurni</h3>
            <small className='text-light'>Python | Gemini | Google ADK | SSE | Firebase </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Developer-Swati/jurni" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="https://developer-swati.github.io/voice-maker/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Projects
