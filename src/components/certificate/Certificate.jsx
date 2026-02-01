import React from 'react';
import AWS1 from '../../assets/AWS-cloud-comp-cert.pdf';
import AWS2 from '../../assets/AWS-lab-cert.png';
import GCP1 from '../../assets/GenAI-Hackathon-cert.png';
import GCP2 from '../../assets/GCP-GenAI-lab-cert.png';
import Cert from '../../assets/AI Agents.pdf';



const Certificate = () =>{
return (
    <section id='mycertificates'>

<h5>My Achievements</h5>
<h2>Certificates</h2>

<div className="container portfolio__container">

  <article className='portfolio__item'>
      <h3>AWS Cloud Computing</h3>
      <small className='text-light'>Explored about AWS fundamental and Cloud Computing.</small>
      <div className="portfolio__item-cta">
      <a href={AWS1} download className='btn btn-primary'>Download Certificate</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>Gen AI Exchange Hackathon (Google) </h3>
      <small className='text-light'>Built a solution for AI Trip Planner under Google National-level Hackathon.</small>
      <div className="portfolio__item-cta">
      <a href={GCP1} download className='btn btn-primary'>Download Certificate</a>
      </div>
        
  </article>

  <article className='portfolio__item'>
      <h3>AWS Agentic AI</h3>
      <small className='text-light'>Completed AWS AI Agent workshop and published one documentation.</small>
      <div className="portfolio__item-cta">
      <a href={AWS2} download className='btn btn-primary'>Download Certificate</a>
      </div>   
  </article>

    <article className='portfolio__item'>
      <h3>GCP Agentic AI</h3>
      <small className='text-light'>Completed all AI labs under Gen AI Exchange Program.</small>
      <div className="portfolio__item-cta">
      <a href={GCP2} download className='btn btn-primary'>Download Certificate</a>
      </div>   
  </article>

    <article className='portfolio__item'>
      <h3> Agentic AI Hackathon</h3>
      <small className='text-light'>Built a solution for DevOps under an Agentic AI Hackathon.</small>
      <div className="portfolio__item-cta">
      <a href={Cert} download className='btn btn-primary'>Download Certificate</a>
      </div>   
  </article>
  </div>
</section>
);
}

export default Certificate;