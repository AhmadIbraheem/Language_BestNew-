import React, { useState } from 'react';
import './QuestionAudio.css';
import { useContext } from 'react';


export default function QuestionAudio(props) {
    // const [userAsnwer, setUserAnswer] = useState([]);
    const [order, setOrder] = useState([]);

    const handleAnswer = () => {
        // console.log(props.audioAnswer)
        // console.log(props.audioOrder)
        // console.log(order)
        props.setAudioOrder(props.audioOrder.sort(
            function (a, b) {
                return a - b;
            }
        ))
        props.setChoosedAnswer(props.audioOrder.join() === order.join())
    }

    const [answerList, setAnswerList] = useState([]);
    const [dataList2, setDataList2] = useState(props.questions);
    const [dataList, setDataList] = useState(dataList2.answers);
    const handleAnswer2 = () => {
        console.log("handle answer");
        // console.log(props.questions.answers)

        for (var i = 0; i < answerList.length; i++) {
            // console.log(answerList[i].answerOrder)
            // console.log(i + 1)
            if (answerList[i].answerOrder !== i + 1) {
                props.setChoosedAnswer(false);
            }
            else if (answerList.length === dataList.length)
                props.setChoosedAnswer(true)

        }
        // console.log(answerList.length)
        // console.log(dataList.answers.length)

    }
    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    return (
        <div className="questionAudio">
            <div className="cont">
                <div className="formContainer">
                    <div className="right">
                        {/* <h1>{props.questionText}</h1> */}

                        <div className="box answerBox">
                            {answerList.map(item =>
                                <div
                                    onClick={(e) => {
                                        setAnswerList(answerList.filter(val => val.id !== item.id));
                                        setDataList((value) => [...value, item]);
                                        handleAnswer2();
                                        // props.setAudioOrder(props.audioOrder.filter(val=> val!== ))
                                    }}>
                                    <div className="singleValue">
                                        <span> {item.content}</span>
                                    </div>
                                    {/* {console.log(item.content)} */}
                                </div>
                            )}
                        </div>

                        <div className="box">
                            {dataList.map(item =>
                                <div
                                    onClick={() => {

                                        setAnswerList((value) => [...value, item]);
                                        setDataList(dataList.filter(val => val.id !== item.id));
                                        handleAnswer2();
                                    }}>
                                    <div className="singleValue">
                                        <span> {item.content}</span>
                                    </div>      {/* {console.log(item.content)} */}
                                </div>

                            )}
                        </div>

                        {/* {
                            props.choices.map(
                                (value) => (
                                    <div className="box" onClick={() => handleAnswer(value)}>
                                        {value.content}
                                    </div>
                                )
                            )
                        } */}
                        {/* <div className="box">
                            <div className="singleValue"
                                onClick={(e) => {
                                    // setUserAnswer(userAsnwer.filter(answer => answer !== e.target.innerText))
                                    console.log(e.target.innerText)
                                }}>
                                {userAsnwer}
                            </div>
                        </div> */}
                        {/* <div className="box">
                            {userAsnwer.map(answer =>
                                <div className="singleValue"
                                    onClick={(e) => {
                                        setUserAnswer(userAsnwer.filter(val => val !== e.target.innerText))
                                        // props.setAudioOrder(props.audioOrder.filter(val=> val!== ))
                                    }}>
                                    <h1>{answer}</h1>
                                </div>
                            )}
                        </div> */}
                        {/* <div className="box" >
                            {props.choices.map((value) =>
                                <div className="singleValue"
                                    onClick={() => {
                                        setUserAnswer((answers) => [...answers, value.content]);
                                        props.setAudioOrder((orders) => [...orders, value.answerOrder]);
                                        setOrder((orders) => [...orders, value.answerOrder]);
                                    }}>
                                    {value.content}
                                </div>
                            )}
                        </div> */}
                        {/* <button onClick={handleAnswer2}>check</button> */}
                        {/* <button onClick={handleAnswer}>check</button> */}
                        {/* <h1> اضغط على الصورة و اختر ما تسمع</h1>

                        <div className="box" onClick={handleFalseAnswer}>
                            aaaa
                        </div>
                        <div className="box" onClick={handleFalseAnswer}>
                            aaaa
                        </div>
                        <div className="box" onClick={handleTrueAnswer}>
                            aaaa
                        </div> */}

                    </div>
                    <div className="left">
                        <h4> اضفط على الصورة و استمع</h4>
                        <img onClick={playAudio}
                            src="assets/pandaAudio.gif" alt="" />
                        {/* <button onClick={playAudio}>
                            <span>Play Audio</span>
                        </button> */}
                        <audio className="audio-element">
                            <source src={props.questions.attachment.url} />
                        </audio>
                    </div>
                </div> {/* end of formcontainer */}
            </div>
        </div >
    )
}
