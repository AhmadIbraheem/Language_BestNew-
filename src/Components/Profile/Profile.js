import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import Context from '../../Store/Context';
export default function Profile() {
    const { globale } = useContext(Context);

    // const api = "https://staging.languagebest.com/api/Levels/all";

    const api = "https://staging.languagebest.com/api/users/info";
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0"
    //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0
    const token = (globale.token > 0) ? globale.token : localStorage.getItem('userToken');

    // console.log(token);
    const [profileInfo, setProfileInfo] = useState([]);

    async function getData() {
        try {
            const response = await axios.get(api, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(response);
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
                }
            )
        }, []
    )
    console.log(profileInfo);
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
                    {/* <div className="profilePicture">
                        <img src="assets/download.png" alt="" />
                    </div> */}
                    <div className="profileTitle">
                        {/* أحمد إبراهيم */}
                        {profileInfo.firstName} {profileInfo.lastName}
                    </div>
                    {/* <h3>{globale.value}</h3> */}
                </div>

                <div className="space tries">

                    <h3>عدد المحاولات : {globale.tries}</h3>

                    <img src="assets/heart.png" alt="" />

                </div>


                <div className="space achievementsIcons">
                    <h3>المستويات المكتملة</h3>
                    <div className="levels">
                        <div className="level">
                            <img src="assets/lesson_egg.png"
                                alt="" />
                            المستوى الثاني
                        </div>
                        <div className="level">
                            <img src="assets/lesson_baby.png"
                                alt="" />
                            المستوى الرابع
                        </div>
                    </div>
                    <div className="levels">
                        <div className="level">
                            <img src="assets/lesson_egg.png"
                                alt="" />
                            المستوى الثاني
                        </div>
                        <div className="level">
                            <img src="assets/lesson_baby.png"
                                alt="" />
                            المستوى الرابع
                        </div>
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
