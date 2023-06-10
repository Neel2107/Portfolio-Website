import React from 'react'
import "./SkillsSection.scss"

const SkillsSection = () => {
  return (
    <div className='skillsSection'>
        <div className="scContainer">
            <div className="titleContainer">
                <span className="tabNames">
                    <span>03.</span>
                    Technologies I've worked with
                </span>
                <div className="titleHrLine"></div>
            </div>
           
            <div className="skillCard">
                <div className="skillName">
                <span>React Js</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div style={{width:"70%", height:"10px", backgroundColor:"rgb(25,132,197)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    7/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard">
                <div className="skillName">
                <span>Javascript</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div style={{width:"70%", height:"10px", backgroundColor:"rgb(180, 197, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    8/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard">
                <div className="skillName">
                <span>Node Js</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div style={{width:"70%", height:"10px", backgroundColor:"rgb(25, 197, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    6/10
                </span>
                    
                 
               
            </div>
            
            <div className="skillCard">
                <div className="skillName">
                <span>Tailwind CSS</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div style={{width:"70%", height:"10px", backgroundColor:"rgb(25,132,197)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    8/10
                </span>
                    
                 
               
            </div>
            
            
          
            <div className="skillCard">
                <div className="skillName">
                <span>Github</span>
                </div>
                <div className="indicatorContainer">
                    <div className="indicator">
                        <div style={{width:"70%", height:"10px", backgroundColor:"rgb(197, 51, 25)", borderRadius:"5px", zIndex:"100"}}></div>
                    </div>
                </div>
                <span className="scoreContainer">
                    7/10
                </span>
                    
                 
               
            </div>
            

        </div>
    </div>
  )
}

export default SkillsSection