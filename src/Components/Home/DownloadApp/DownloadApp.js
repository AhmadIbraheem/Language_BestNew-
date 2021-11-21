import React from 'react'
import './DownloadApp.css'
export default function DownloadApp() {
    return (
        <div className="downloadApp" id="downloadApp">
            <div className="carousal_contaier">
                <img src="assets/phone.png" alt="" />
            </div>
            <div className="cont">
                <div className="content">
                    <h1>Language<span>Best</span></h1>
                    <h3>قم بتنزيل التطبيق اليوم وابدأ في تعلم اللغة لحياتك اليومية.</h3>
                    <div className="btn">
                        <div className="appsContainer">
                            <span id="appsText">  حمل التطبيق الاّن</span>
                            <a href="#home">
                                <img src="assets/google-play-badge.svg"
                                    className="download_button downloadBtn" alt="" />
                            </a>

                        </div>
                        <div className="appsContainer">
                            <span id="appsText"> قريبا على المتجر </span>
                            <a href="#home">
                                <img src="assets/app-store-badge.svg"
                                    className=" downloadBtn"
                                    id="apple"
                                    alt="" />
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
