import React, { useEffect, useRef, useState } from 'react'

import './Intro.css'
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';
export default function Intro() {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    }
    const toggleSignup = () => {
        setIsSignupOpen(!isSignupOpen);
    }
    // const textRef = useRef();
    // useEffect(
    //     () => {
    //         init(textRef.current, {
    //             showCursor: false,
    //             backDelay: 700,
    //             strings: ['Lorem', 'ipsoum', 'ahmad']
    //         })
    //     }, []
    // )

    return (
        <div className="intro" dir="ltr"
            style={{ backgroundImage: "url(assets/BG2.png)" }}>
            <div className="imgContainer">

                <img className="intro_img"
                    src="assets/websiteImage.png" alt="" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="text">

                        <h1>Languague <span>Best</span> </h1>
                        <h4> !! أسهل و أمتع طريقة لتعلم لغة جديدة بدون عناء </h4>
                        {/* <h3 id="h2Text"> !! أسهل و أمتع طريقة لتعلم لغة جديدة بدون عناء </h3> */}
                        {/* <h3>text <span ref={textRef} className="ityped-cursor"></span></h3> */}
                    </div>

                    <div className="btn">

                        <div className="intro_button start"
                            onClick={toggleSignup}
                        >هيا نبدأ
                        </div>
                        <div className="intro_button"
                            onClick={toggleLogin}
                        >لدي حساب مسبقا
                        </div>
                    </div>
                    {/* <div className="downloadBtns">
                        <a href="">appstore</a>
                        <a href="">goolge</a>
                    </div> */}

                    <div className="btns">
                        {/* <h2> يمكنك تحميل التطبيق مباشرة من خلال الروابط</h2> */}
                        <a href="#home">
                            <img src="assets/app-store-badge.svg"
                                className="downloadBtn"
                                id="apple"
                                alt="" />
                        </a>
                        <a href="#home">
                            <img src="assets/google-play-badge.svg"
                                className="download_button downloadBtn"
                                alt="" />
                        </a>
                    </div>
                </div>
                {/* <a href="#whyLb"
                    id="arrow">
                    <img src="assets/icons8-expand-arrow-50.png" alt="" />
                </a> */}
            </div>
            {isLoginOpen && <Login handleClose={toggleLogin}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
            />}
            {isSignupOpen && <Signup handleClose={toggleSignup}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen} />}

        </div>
    )
}
