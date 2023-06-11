import React from 'react'
import "./ContactSection.scss"
const ContactSection = () => {
    const handleButtonCLick = () =>{
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
 
    const linkdin={
        border: '2px solid rgb(46, 166, 86)',
        boxShadow: 'rgb(46, 166, 86) 1px 5px 40px',
    }

    const github ={
        border: '2px solid rgba(255, 180, 0, 0.51)',
        boxShadow: 'rgba(255, 180, 0, 0.51) 1px 5px 40px',
    }
    
    const instagarm = {
        border: '2px solid rgba(219, 54, 205, 0.882)',
        boxShadow:' rgba(219, 54, 205, 0.882) 1px 5px 40px'
    }

    const twitter={
        border: '2px solid rgba(0, 128, 255, 0.51)',
        boxShadow:' rgba(0, 128, 255, 0.51) 1px 5px 40px'
    }

  return (
    <div className='contactSection'id='contact'>
        <div className="contactsContainer">
            <div className="contactDetailContainer">
            
<span>05. What's Next?</span>
<span className='GIT'>Get In Touch</span>
<p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum modi laboriosam atque in. Ullam maxime sed provident, in distinctio aut deleniti! Iure voluptas necessitatibus distinctio quod voluptate! Nisi aliquam autem, optio id error harum ratione quasi eos dolores, eligendi laborum.</p>
<div className="platformContainer">
    <a href="">
        <div className="platformTab" style={linkdin}>
            <img className='platformIconImage' src="./linkdin.png" alt="" />
        </div>
    </a>
    <a href="">
    <div className="platformTab" style={github}>
            <img className='platformIconImage' src="./github.png" alt="" />
        </div>
    </a>
    <a href=""><div className="platformTab" style={instagarm}>
            <img className='platformIconImage' src="./instagram.png" alt="" />
        </div>
        </a>
    <a href="">
    <div className="platformTab" style={twitter}>
            <img className='platformIconImage' src="./twitter.png" alt="" />
        </div>
    </a>
</div>
<a href="#" className="contactBtn">Say Hello!</a>
<span className="devBy">Developed by</span>
<span className="developer">Nova</span>
            </div>
        </div>
        <button  onClick={handleButtonCLick}>
    <div class="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <div class="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
    </div>
  )
}

export default ContactSection