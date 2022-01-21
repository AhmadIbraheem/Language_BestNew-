import React, { useContext, useEffect, useRef, useState } from 'react'

import './Intro.css'
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';
import Context from '../../../Store/Context';
import PopUp from '../../popUp/PopUp';

export default function Intro() {
    const { globale } = useContext(Context);
    const [isLoginOpen, setIsLoginOpen] = useState(globale.isOpen);
    const [isSignupOpen, setIsSignupOpen] = useState(globale.isOpen);
    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    }
    const toggleSignup = () => {
        setIsSignupOpen(!isSignupOpen);
    }
    const togglePopUp = () => {
        setPopUp(!popUp);
    }
    const [popUp, setPopUp] = useState((localStorage.getItem('popUp')) ? localStorage.getItem('popUp') : false)
    // const [popUp, setPopUp] = useState(localStorage.getItem('popUp'))

    // useEffect(() => {

    //     window.location.reload(false);
    // }, [popUp])

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
                    <div className="btns">

                        <div className="appsContainer">
                            <a href="https://play.google.com/store/apps/details?id=com.mkz.languagebest">
                                <img src="assets/google-play-badge.svg"
                                    className="download_button downloadBtn"
                                    alt="" />
                            </a>
                            <span id="appsText">  حمل التطبيق الاّن</span>
                        </div>
                        <div className="appsContainer">
                            <a href="#home">
                                <img src="assets/app-store-badge.svg"
                                    className="downloadBtn"
                                    id="apple"
                                    alt="" />
                            </a>
                            <span id="appsText"> قريبا على المتجر </span>
                        </div>
                    </div>
                </div>

            </div>
            {isLoginOpen && <Login handleClose={toggleLogin}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
            />}
            {isSignupOpen && <Signup handleClose={toggleSignup}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen} />}
            {popUp && <PopUp handleClose={togglePopUp} />}

        </div>
    )
}
