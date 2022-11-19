import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './About.module.css';

const About = () => {
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1 className='fw-bold my-4'>About Us</h1>
            <p className='pb-4 text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut rerum quibusdam accusantium veniam consequatur quos, incidunt, cum id voluptatem beatae, nisi ullam? Natus doloremque laboriosam quae recusandae est soluta minima amet quos ullam debitis vitae at fuga, aut, velit ducimus quidem repellat molestias eos eius officia magni! Hic ullam illum eaque recusandae, eum reiciendis nam explicabo eligendi voluptatem, magni quasi. Quidem harum ab praesentium alias eius veniam deleniti culpa natus, quo, laboriosam ad quibusdam molestias ipsam obcaecati aspernatur repudiandae sequi aliquid? Perferendis pariatur asperiores sapiente?</p>
            <NavLink to="/contact" className="btn btn-outline-primary mt-2 px-3 py-2">Contact Us</NavLink>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src='/images/about/about.png' alt='about' className={style.aboutImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
