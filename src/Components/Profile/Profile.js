import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import Context from '../../Store/Context';

import {
    CircularProgressbarWithChildren,

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Profile() {
    const { globale } = useContext(Context);

    // const api = "https://staging.languagebest.com/api/Levels/all";

    const api = "https://api-staging.languagebest.com/api/users/info";
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0"
    //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0
    const token = (globale.token > 0) ? globale.token : localStorage.getItem('userToken');

    // console.log(token);
    const [profileInfo, setProfileInfo] = useState([]);

    const [levelsScores, setLevelsScores] = useState([]);
    async function getData() {
        try {
            const response = await axios.get(api, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
            // setProfileInfo(response.data.result);
            return response;
        }
        catch (error) {
            console.error("the errro is:bkhbkkj" + error)
        }
    }

    useEffect(
        () => {
            getData().then(
                response => {
                    setProfileInfo(response.data.result);
                    // console.log("profileInfo")
                    // console.log(profileInfo)
                }
            )
        }, []
    )
    // console.log(profileInfo);
    return (
        <div className="profile">
            <div className="side"
                id="oneSide">
                <div className="space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3> مساحات إعلانية</h3>
                </div>
                <div className="space">
                    <div id="banner-ad">

                    </div>
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div className="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div className="space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>
            <div className="middle">
                <div className="space header">
                    <div className="profileTitle">
                        {profileInfo.firstName} {profileInfo.lastName}
                    </div>
                </div>

                <div className="space tries">

                    <h3>عدد المحاولات : {globale.tries}</h3>

                    <img src="assets/heart.png" alt="" />

                </div>


                <div className="space achievementsIcons">
                    <h3>المستويات المكتملة</h3>
                    <div className="levels">


                        {/* {
  if(myArrayOfData?.length > 0) {
     myArrayOfData.map(
        // rest of the codes ...
     )
  }
} */}

                        {
                            (profileInfo.levelsScores) ?
                                profileInfo.levelsScores.map((level) =>
                                    (level.score) ?
                                        <div className="level">
                                            <CircularProgressbarWithChildren value={level.score}>
                                                <img
                                                    src={level.imageUrl}
                                                    // src={level.image.url == "undefined" ? "assets/websiteImage.png" : "assets/websiteImage.png"}
                                                    alt="doge"
                                                />

                                            </CircularProgressbarWithChildren>
                                            <h3>{level.name} {level.score}%</h3>
                                        </div>
                                        :
                                        <div className="aaa"></div>


                                ) :
                                <div className="aa"></div>
                        }


                        {/* {profileInfo.levelsScores.map((level) =>
                            <div className="
                        ">
                                {(level.score > 0)
                                    ?
                                    <h1>ahamd</h1>
                                    :
                                    <div className="">sdf</div>
                                }
                            </div>
                        )} */}


                        {/* <div className="level">
                            <img src="assets/lesson_egg.png"
                                alt="" />
                            المستوى الثاني
                        </div>
                        <div className="level">
                            <img src="assets/lesson_baby.png"
                                alt="" />
                            المستوى الرابع
                        </div> */}
                    </div>

                </div>

            </div>
            <div className="side">
                <div className="space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3> مساحات إعلانية</h3>
                </div>
                <div className="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div className="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div className="space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>

        </div>
    )
}
