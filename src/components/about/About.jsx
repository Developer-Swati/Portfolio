// this is about
import React from 'react'
import './about.css'
import myImage from '../../assets/my-pic.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech CSE <br /><i>Kurukshetra University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>9.07</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full stack web development</li>
                       <li>DevOps & Cloud</li>
                      <li>AI</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                  Dedicated <b>Full-Stack Developer</b> specializing in <b>Cloud</b> and <b>DevOps</b>, with hands-on experience across AWS and GCP cloud services and deployments. Passionate <b>Open-Source contributor</b> and an avid explorer of <b>Generative AI</b> and <b>Agentic AI</b> architectures.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About