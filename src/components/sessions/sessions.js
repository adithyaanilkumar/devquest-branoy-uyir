import React from "react";
import './sessions.css'
const Session = ()=> {
 return(
 <div className = " nav container-fluid">
   <div className='flex-container'>
        <div>
            <div className='circle'>
              <div className='circle circle-inner'></div>
            </div>
            <div className='line'></div>
        </div>
  <div>

        <div className="courses-container">
          <div className="course">
            <div className="course-preview">
              <h6>Course</h6>
              <h2>JavaScript Fundamentals</h2>
              <a href="#">View all chapters <i className="fas fa-chevron-right" /></a>
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress" />
                <span className="progress-text">
                  6/9 Challenges
                </span>
              </div>
              <h6>Chapter 4</h6>
              <h2>Callbacks &amp; Closures</h2>
              <button className="btn">Continue</button>
            </div>
          </div>
        </div>
        {/* SOCIAL PANEL HTML */}
        <div className="social-panel-container">
          <div className="social-panel">
            <p>Created with <i className="fa fa-heart" /> by
              <a target="_blank" href="https://florin-pop.com">Florin Pop</a></p>
            <button className="close-btn"><i className="fas fa-times" /></button>
            <h4>Get in touch on</h4>
            <ul>
              <li>
                <a href="https://www.patreon.com/florinpop17" target="_blank">
                  <i className="fab fa-discord" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/florinpop1705" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/florinpop17" target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/florinpop17" target="_blank">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/florinpop17" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="floating-btn">
          Get in Touch
        </button>
        <div className="floating-text">
          Part of <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects" target="_blank">#100Days100Projects</a>
        </div>
      </div>
      </div>
 </div>)
}

export default Session;