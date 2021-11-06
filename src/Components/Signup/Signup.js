import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { signInWithGoogle } from '../../service/firebase';

export default function Signup(props) {

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
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
    console.log(inputData);
    const submitHandler = e => {
        e.preventDefault();

        axios.post('https://staging.languagebest.com/api/Registration/register', inputData)
            .then(response => {
                if (response.data.isResultExist === true) {
                    alert("Welcom " + inputData.email);
                    props.handleClose();
                    token1 = response.data.result.token;
                }

                console.log(token1);
                console.log(response);
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
                                onClick={signInWithGoogle}>
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