import React, { useState } from 'react';
import './QuestionAudio.css';
import { useContext } from 'react';


export default function QuestionAudio(props) {
    const [answerList, setAnswerList] = useState([]);
    const [dataList2, setDataList2] = useState(props.questions);
    const [dataList, setDataList] = useState(dataList2.answers);
    const handleAnswer2 = () => {
        console.log("handle answer");

        for (var i = 0; i < answerList.length; i++) {
            if (answerList[i].answerOrder !== i + 1) {
                props.setChoosedAnswer(false);
            }
            else if (answerList.length === dataList.length)
                props.setChoosedAnswer(true)

        }
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
                        <div className="box answerBox">
                            {(answerList) ?
                                answerList.map(item =>
                                    <div
                                        onClick={(e) => {
                                            setAnswerList(answerList.filter(val => val.id !== item.id));
                                            setDataList((value) => [...value, item]);
                                            handleAnswer2();
                                        }}>
                                        <div className="singleValue">
                                            <span> {item.content}</span>
                                        </div>
                                    </div>
                                )
                                :
                                <div className="aaa"></div>
                            }
                        </div>

                        <div className="box">
                            {
                                (dataList) ?
                                    dataList.map(item =>
                                        <div
                                            onClick={() => {

                                                setAnswerList((value) => [...value, item]);
                                                setDataList(dataList.filter(val => val.id !== item.id));
                                                handleAnswer2();
                                            }}>
                                            <div className="singleValue">
                                                <span> {item.content}</span>
                                            </div>
                                        </div>

                                    )
                                    :
                                    <div className="aaa"></div>
                            }
                        </div>
                        <div className="btns">
                            <div className="check"
                                onClick={props.handleAnswer}>
                                تحقق
                            </div>
                        </div>


                    </div>
                    <div className="left">
                        <h4> اضفط على الصورة و استمع</h4>
                        <img onClick={playAudio}
                            src="assets/pandaAudio.gif" alt="" />

                        <audio className="audio-element">
                            <source src={props.questions.attachment.url} />
                        </audio>
                    </div>
                </div> {/* end of formcontainer */}

            </div>
        </div>
    )
}
