import { style } from '@mui/system';
import React, { useState } from 'react';
import './QuestionText.css';

export default function QuestionText(props) {
    // const handleAnswersssssss = (value) => {
    //     // console.log(props.answer);
    //     if (value.isCorrect) {
    //         props.setScore(props.score + 1);
    //         //alert("score: " + props.score)
    //         props.setIsTrue("true");
    //     } else
    //         props.setIsFalse("true");
    // }

    return (
        <div className="quizeQuestion">
            <div className="cont">
                <div className="formContainer">
                    <div className="right">
                        <h1>{props.questionText}</h1>
                        {
                            (props.choices) ?
                                props.choices.map(
                                    (value, index) => (
                                        <div className="box"
                                            onClick={() => {
                                                props.setChoosedAnswer(value.isCorrect);
                                                props.handleAnswer();

                                            }
                                            }>
                                            {value.content}
                                        </div>
                                    )
                                )
                                :
                                <div className="aaa"></div>
                        }
                    </div>
                    <div className="left">
                        <img
                            src="assets/Questions.svg" alt="" />

                    </div>
                </div> {/* end of formcontainer */}



            </div>


        </div>
    )
}
