import React from 'react';
import './intro.css';
import bg from '../../assets/imgc.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Chinmay</span> <br/>Frontend Developer</span>
            <p className='introPara'>I am a web developer with experince in creating user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>

    </section>
  )
}

export default Intro;
