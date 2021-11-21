import React, { useEffect, useState, useContext } from 'react';

import './Levels.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from '../../Store/Context';

import {
    CircularProgressbarWithChildren,

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 76;

function LevelsRFC() {
    const { globale, actions } = useContext(Context);

    const api = "https://api-staging.languagebest.com/api/Levels/all";
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1ZmY0YjlkMC1hMzIwLTQ4YjMtOTQ3OC1iMTY5NTAxZGE0YmUiLCJleHAiOjE2MzUwMTg2OTgsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.NiKQ843LojH1-Fblu1o8tuiryEHMjaozWhDuN1ljKA8"
    // const token = globale.token;
    //const token = (globale.token > 0) ? globale.token : localStorage.getItem('userToken');
    const token = (globale.token > 0) ? globale.token : (localStorage.getItem('userToken')) ? localStorage.getItem('userToken') : null;

    const [levels, setLevels] = useState([]);
    // const [localeScore, setLocaleScore] = useState(6);
    // console.log(levels);
    const config = (token) ?
        {
            headers: {
                Authorization: `Bearer ${token}`,
                deviceId: localStorage.getItem('id')
            }
        }
        :
        {
            headers: {
                //       Authorization: `Bearer ${token}`,
                deviceId: localStorage.getItem('id')
            }
        }

    async function getData() {
        try {
            const response = await axios.get(api, config);
            console.log(response);
            return response;
        }
        catch (error) {
            console.error("the error is : " + error);
        }
    }


    useEffect(
        () => {
            getData().then(
                response => {
                    setLevels(response.data.result);
                }
            )
        }, []
    )


    let sublevelId = "";
    console.log(levels);
    // console.log("ahmad");
    return (
        <div className="levelDemo" >
            <div className="side"
                id="oneSide">
                <div className="first_space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3>فتح قوائم المتصدرين!</h3>
                    <h5>‏ مساحة خاصة بعرض محتوى للموقع من قاعدة البيانات</h5>
                </div>
                <div className="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة  </h5>
                </div>

                <div className="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div className="first_space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>



            </div>



            {/* BEGIN of levels --> center part */}
            <div className="levels">
                <h1>المستويات</h1>
                {/* new Begin */}

                {(levels) ?

                    levels.map(level =>
                        <div
                            className={level.isOpen ? "level" : "level closedLevel"}
                        >
                            <div className="header">
                                <CircularProgressbarWithChildren
                                    value={level.score}
                                >
                                    <img
                                        src={level.image.url}
                                        alt="img"
                                    />
                                </CircularProgressbarWithChildren>
                                <h1>{level.name}: {level.score}%</h1>
                            </div>
                            <div className="subLevels">
                                {level.subLevels.map(subLevel =>
                                    <>
                                        {/* {(token === null) ? handleLocaleData(subLevel.id) : handleNoThing()} */}
                                        {level.isOpen ?
                                            <div className="subLevel "
                                                onClick={
                                                    () => {
                                                        sublevelId = subLevel.id;
                                                        actions({
                                                            type: 'setSubLevelId',
                                                            payload: {
                                                                ...globale, subLevelId: subLevel.id,
                                                                levelId: level.id
                                                            }
                                                        });
                                                        localStorage.setItem('subLevelId', subLevel.id);
                                                    }}>
                                                <Link to="form"
                                                    style={{ textDecoration: "none" }}>
                                                    <CircularProgressbarWithChildren value={subLevel.score}>
                                                        <img
                                                            // style={{ width: 100, marginTop: 50 }}
                                                            src={subLevel.image.url}
                                                            alt="img"
                                                        />
                                                    </CircularProgressbarWithChildren>
                                                </Link>
                                                <h3>{subLevel.name}:
                                                    {subLevel.score}
                                                    %</h3>
                                            </div>
                                            :
                                            <div className="subLevel">

                                                <CircularProgressbarWithChildren value={subLevel.score}>
                                                    <img
                                                        src={subLevel.image.url}
                                                        alt="doge"
                                                    />

                                                </CircularProgressbarWithChildren>
                                                <h3>{subLevel.name}: {subLevel.score}%</h3>
                                            </div>

                                        }

                                    </>
                                )}

                            </div>
                        </div>
                    )
                    :
                    <div className="aa"></div>}

                {/* new End */}

            </div>

            {/* End of levels --> center part */}

            <div className="side">
                <div className="first_space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3>فتح قوائم المتصدرين!</h3>
                    <h5>‏ مساحة خاصة بعرض محتوى للموقع من قاعدة البيانات</h5>
                </div>
                <div className="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div className="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div className="first_space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>

            {/* 
                <div className="img-line">
                    <img src="assets/car.png"

                        style={{ top: "" }}
                        alt="" />
                </div> */}
        </div>
    );
}

export default LevelsRFC;