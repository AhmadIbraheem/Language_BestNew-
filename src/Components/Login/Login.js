import React, { useContext, useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios';
import Context from '../../Store/Context';
import { signInWithGoogle } from '../../Firebase';

function Login(props) {
    const { globale, actions } = useContext(Context);

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });
    const [token, setToken] = useState("");
    let token1 = "";
    const changeEmailHandler = (e) => {
        setInputData(prevState => ({
            ...prevState,
            email: e.target.value
        }));
    }
    const changePasswordHandler = (e) => {

        setInputData(prevState => ({
            ...prevState,
            password: e.target.value
        }));
    }
    const scoreApi = "http://api-staging.languagebest.com/api/users/score";

    const postLocaleData = () => {
        var item = JSON.parse(localStorage.getItem('progressDataNew') || "[]");
        // hereeeeeeeeeeeeeeeeeeee
        const id = localStorage.getItem('id') || "";
        const config = {
            headers: { Authorization: `Bearer ${token1}` }
        };
        if (item.length > 0) {
            item.map((data, index) =>
                axios.post(scoreApi, data, config).then(response => {
                    console.log(response);
                })
            )
            localStorage.removeItem("progressDataNew");
        }
    }
    const submitHandler = e => {
        e.preventDefault();

        axios.post('https://api-staging.languagebest.com/api/Authentication/login', inputData)
            .then(response => {
                if (response.data.isResultExist === true) {
                    props.handleClose();
                    token1 = response.data.result.token;
                    actions({
                        type: 'setToken',
                        payload: {
                            ...globale,
                            token: token1,
                            email: inputData.email
                        }
                    });
                    // save login info to local storage

                    localStorage.setItem('userToken', token1);
                    // postLocaleData();
                }


            })
            .catch(error => {

                console.log("errorrrrrrrrrrrr");
                console.log(error);
                alert(error);
            })

    }

    const handleClick = () => {
        props.handleClose();
        props.setIsSignupOpen("true");
    }

    return (
        <div className="login">
            <div className="popup-box">
                <div className="grid align__item">

                    <div className="register">
                        <img className="close"
                            onClick={props.handleClose}
                            src="assets/close2.png" alt="" />
                        <img className="logo"
                            src="assets/websiteImage.png" alt="" />

                        <h1>تسجيل الدخول</h1>


                        <form onSubmit={submitHandler} className="form">

                            <div className="form__field">
                                <input type="email"
                                    placeholder="البريد الإلكتروني"
                                    name="email"
                                    value={inputData.email}
                                    onChange={changeEmailHandler}
                                />
                            </div>

                            <div className="form__field">
                                <input type="password"
                                    placeholder="كلمة المرور"
                                    name="password"
                                    value={inputData.password}
                                    onChange={changePasswordHandler}
                                />
                            </div>
                            <div className="form__field">
                                <input type="submit" value="تسجيل الدخول" />
                            </div>
                            <div className="intro_button"
                                onClick={signInWithGoogle}>
                                <div className="googleImage"><img src="assets/google_icon-icons.png" alt="" /></div>
                                <div className="googleText">تسجيل الدخول</div>
                            </div>
                        </form>
                        <div className="down">
                            <p> ليس لديك حساب؟<a href="#"
                                onClick={handleClick}
                            >أنشئ حسابًا</a></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Login;