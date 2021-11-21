import React from 'react';
import './QuestionImage.css';
export default function QuestionImage(props) {
    // const handleAnswer = (value) => {
    //     if (value.isCorrrect) {
    //         props.setScore(props.score + 1);
    //         props.setIsTrue("true");
    //     } else
    //         props.setIsFalse("true");
    // }
    return (
        <div className="question1">
            <div className="questionText">
                <h1>{props.questionText}</h1>
            </div>
            <div className="gridContainer">
                {
                    (props.choices) ?
                        props.choices.map((value) => (
                            <div className="gridItem"
                                onClick={() => {
                                    props.setChoosedAnswer(value.isCorrect);
                                    props.handleAnswer();

                                }}>
                                <img src={value.attachment.url}
                                    alt="" />
                            </div>
                        )
                        )
                        :
                        <div className="aaa"></div>
                }
            </div>
        </div>
    )
}
