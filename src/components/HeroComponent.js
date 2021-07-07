import React from 'react'
import '../css/homePage.css'

function Hero() {
    return (
        <div className="hero-container container offset-1">
            <h1>Hi, I’m Akhilesh</h1>
            <div className="row">
                <div className="col-sm-5" >
                    <p>UX  Designer, Video Editor,
                        and  fascinated about outer space.
                    </p>
                </div>
            </div>
            <div className="row hero__portfolio">
                <div className="col">
                    <div className="d-flex">
                        <p>Portfolio</p>
                        <span className="dash"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
