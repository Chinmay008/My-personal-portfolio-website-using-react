import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer having hands on skills with html,CSS and Javascript. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text I wil update it further when there is a need</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>his is a demo text I wil update it further when there is a need</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Application Design</h2>
                    <p>his is a demo text I wil update it further when there is a need</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills
