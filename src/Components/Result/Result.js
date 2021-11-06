import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from '../../Store/Context';
import './Result.css';
export default function Result(props) {
    const { globale } = useContext(Context);

    const api = "https://staging.languagebest.com/api/users/score";
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0OTczYmJhYi1iOGU4LTQ0NzEtYWYzMS0wOTU0MGQ1MmZiNWMiLCJJc0FkbWluIjoiRmFsc2UiLCJleHAiOjE2MzU4NzQwMTUsImlzcyI6IkxhbmdhdWdlQmVzdC5jb20iLCJhdWQiOiJMYW5nYXVnZUJlc3QuY29tIn0.K_D2K6YxMltlZllxV8Ry9RpvaY8dhpKVhxJhjh42Pb0";
    const token = (globale.token > 0) ? globale.token : localStorage.getItem('userToken');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const data = {

        levelId: globale.levelId,
        subLevelId: globale.subLevelId,
        noOfAllQuestions: props.maxProgress,
        noOfCorrectQuestions: props.score
    }
    const handleProgress = (e) => {
        e.preventDefault();
        axios.post(api, data, config)
            .then(response => {
                if (response.data.isResultExist)
                    console.log(response)
                //    console.log(data);
                //  console.log(config);

            })
            .catch(error => {
                alert(error);
            })

    }

    return (
        <div className="resultComp">

            <div className="popup-box box-shadow-3d">
                <div className="content">
                    <div className="resultTop">
                        <img src="assets/websiteImage.png" alt="" />
                    </div>
                    <div className="resultDown">
                        <div className="scoreContent">
                            <p>نتيجتك هي :
                                <span> {props.score}/{props.maxProgress}</span>
                            </p>
                        </div>
                    </div>
                    <div className="btns">
                        <Link to="levelsrfc" style={{ textDecoration: 'none' }}>
                            <div className="continue box-shadow-btn"
                                onClick={handleProgress}
                            > المتابعة</div>
                        </Link>
                        <Link to="levelsrfc" style={{ textDecoration: 'none' }} >
                            <div className="retry box-shadow-btn"> إعادة المحاولة</div>
                        </Link>
                    </div>
                    {/* <div className="imgContent">
                        <img src="assets/resultGif.gif" alt="" />
                    </div>
                    <div className="scoreContent">
                        <p>نتيجتك هي :
                            <span> {props.score}/{props.maxProgress}</span>
                          
                        </p>

                    </div>
                    <div className="breaker">

                    </div>
                    <div className="btns">
                        <Link to="levels" style={{ textDecoration: 'none' }}>
                            <div className="continue box-shadow-btn"
                            > المتابعة</div>
                        </Link>
                        <Link to="levels" style={{ textDecoration: 'none' }} >
                            <div className="retry box-shadow-btn"> إعادة المحاولة</div>
                        </Link>
                    </div>
 */}


                    {/* <p>Your Result is: {props.score}/{props.maxProgress}
                    </p> */}
                </div>
            </div>
        </div>
    )
}
