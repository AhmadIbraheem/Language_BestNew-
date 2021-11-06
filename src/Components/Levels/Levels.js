import React, { Component } from 'react';
import './Levels.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Form from '../Form/Form';
import Context from '../../Store/Context';

const api = "https://staging.languagebest.com/api/Levels/all";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1ZmY0YjlkMC1hMzIwLTQ4YjMtOTQ3OC1iMTY5NTAxZGE0YmUiLCJleHAiOjE2MzUwMTg2OTgsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.NiKQ843LojH1-Fblu1o8tuiryEHMjaozWhDuN1ljKA8"


async function getData() {

    try {
        // console.log("ahmaddddddddddddddddd");
        const response = await axios.get(api, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    }
    catch (error) {
        console.error("the error is :" + error);
    }
}

class Levels extends Component {

    state = {
        levels: []
    }
    componentDidMount = () => {
        getData().then(
            response => {
                this.setState(
                    { levels: response.data.result }
                );
            }
        );
        // console.log("aasas");

    }

    render() {
        // const navStyle = {
        //     textDecoration: 'none',
        //     color: "red"
        // };
        let sublevelId = "";
        console.log(this.state.levels);
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


                {/* BEGIN of levels --> center part */}
                <div className="levels">
                    <h1>المستويات</h1>
                    {/* new Begin */}
                    {this.state.levels.map(level =>
                        <div className="level">
                            <div className="header">
                                <Link to="form" style={{ textDecoration: "none" }}>
                                    <img src={level.image.url} alt="" />
                                    <h1>{level.name}</h1>
                                </Link>
                            </div>
                            <div className="subLevels">
                                {level.subLevels.map(subLevel =>
                                    <>
                                        <div className="subLevel "
                                            onClick={
                                                () => {
                                                    sublevelId = subLevel.id;
                                                    console.log(sublevelId);
                                                    // <Form />
                                                }}>

                                            <Link to="form"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <img src={subLevel.image.url} alt="" />
                                                <h3
                                                >{subLevel.name}</h3>
                                            </Link>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    )}

                    {/* new End */}

                    {/* old */}
                    {/* <div className="level ">

                        <div className="header">
                            <Link to="form" style={{ navStyle }}>
                                <h3>المستوى</h3>
                                <h3> الأول</h3>
                            </Link>
                        </div>

                        <div className="subLevels">
                            <div className="subLevel ">
                                <Link to="form">
                                    <img src="assets/level1.png" alt="" />
                                </Link>
                            </div>
                            <div className="line"></div>
                            <div className="subLevel " >
                                <Link to="form">
                                    <img src="assets/lesson_egg.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="subLevels">
                            <div className="subLevel closed">
                                <img src="assets/level3.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <div className="subLevel closed" >
                                <img src="assets/lesson_sock.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="level ">
                        <div className="header closed">
                            <h3>المستوى</h3>
                            <h3> الثاني</h3>
                        </div>
                        <div className="subLevels">
                            <div className="subLevel closed ">
                                <img src="assets/level2.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <div className="subLevel closed " >
                                <img src="assets/level4.png" alt="" />
                            </div>
                        </div>
                    </div> */}
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
}
export default Levels;