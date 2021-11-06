import React, { useContext, useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios';
import Context from '../../Store/Context';
import { signInWithGoogle } from '../../service/firebase';

function Login(props) {
    const { globale, actions } = useContext(Context);

    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });
    const [token, setToken] = useState("");
    let token1 = "";
    const changeEmailHandler = (e) => {

        // console.log(e.target.name);
        setInputData(prevState => ({
            ...prevState,
            email: e.target.value
        }));
        // console.log(inputData.email);
    }
    const changePasswordHandler = (e) => {

        // console.log(e.target.name);
        setInputData(prevState => ({
            ...prevState,
            password: e.target.value
        }));
        //   console.log(inputData.email);
    }
    console.log(inputData)

    const submitHandler = e => {
        e.preventDefault();

        axios.post('https://staging.languagebest.com/api/Authentication/login', inputData)
            .then(response => {
                if (response.data.isResultExist === true) {
                    // welcoming 
                    alert("Welcome " + response.data.result.token);
                    // clode popup
                    props.handleClose();
                    // save token to globale state
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
                }

                // console.log(token1);
                // console.log(response);
                // console.log(globale.token);
            })
            .catch(error => {
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