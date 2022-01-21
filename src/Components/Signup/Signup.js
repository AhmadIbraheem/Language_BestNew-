import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import Context from '../../Store/Context';
import { signupWithGoogle } from '../../Firebase';
import { useContext } from 'react';

export default function Signup(props) {
    const { globale, actions } = useContext(Context);

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const config = {
        headers: {
            deviceId: localStorage.getItem('id')
        }
    };
    const [token, setToken] = useState("");
    let token1 = "";
    const changeFirstNameHandler = (e) => {
        setInputData(prevState => ({
            ...prevState,
            firstName: e.target.value
        }));
    }
    const changeLastNameHandler = (e) => {
        setInputData(prevState => ({
            ...prevState,
            lastName: e.target.value
        }));
    }
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
            deviceId: localStorage.getItem('id')
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

        console.log(localStorage.getItem('id'));
        console.log(localStorage.getItem(config));
        e.preventDefault();
        axios.post('https://api-staging.languagebest.com/api/Registration/register', inputData, config)
            .then(response => {
                if (response.data.isResultExist === true) {
                    alert("Welcome " + inputData.email);
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
                    localStorage.setItem('userToken', token1);
                    //   postLocaleData();
                }

            })
            .catch(error => {
                alert(error);
            })

    }
    const handleClick = () => {
        props.handleClose();
        props.setIsLoginOpen("true");
    }
    return (
        <div className="signup">
            <div className="popup-box">
                <div className="grid align__item">

                    <div className="register">

                        <img className="close"
                            onClick={props.handleClose}
                            src="assets/close2.png" alt="" />
                        <img className="logo"
                            src="assets/websiteImage.png" alt="" />

                        <h1>‏أنشئ حسابًا</h1>

                        <form onSubmit={submitHandler} className="form">

                            <div className="form__field">
                                <input type="text"
                                    placeholder="الاسم الأول"
                                    name="firstName"
                                    value={inputData.firstName}
                                    onChange={changeFirstNameHandler}
                                />
                            </div>

                            <div className="form__field">
                                <input type="text"
                                    placeholder="الاسم الأخير"
                                    name="lastName"
                                    value={inputData.lastName}
                                    onChange={changeLastNameHandler}
                                />
                            </div>

                            <div className="form__field">
                                <input type="email"
                                    placeholder="info@mailaddress.com"
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
                                <input type="password" placeholder="تأكيد كلمة المرور" />
                            </div>

                            <div className="form__field">
                                <input type="submit" value="إنشاء حساب" />
                            </div>
                            <div className="intro_button"
                                onClick={() => {
                                    signupWithGoogle();
                                    props.handleClose();
                                }}>
                                <div className="googleImage"><img src="assets/google_icon-icons.png" alt="" /></div>
                                <div className="googleText">تسجيل الدخول</div>
                            </div>
                        </form>

                        <div className="down">
                            <p> هل لديك حساب مسبقاً ؟<a href="#"
                                onClick={handleClick}
                            >تسجيل الدخول</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}