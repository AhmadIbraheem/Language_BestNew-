import React from 'react';
import './QuestionImage.css';
export default function QuestionImage(props) {
    const handleAnswer = (value) => {
        if (value.isCorrrect) {
            props.setScore(props.score + 1);
            props.setIsTrue("true");
        } else
            props.setIsFalse("true");
        //  alert("score: " + props.score)
    }
    return (
        <div className="question1">
            <div className="questionText">
                {/* <h1>السؤال عن الإجابة من خلال الصور ؟</h1> */}
                <h1>{props.questionText}</h1>
            </div>
            <div className="gridContainer">
                {props.choices.map((value) => (
                    <div className="gridItem"
                        onClick={() => {
                            props.setChoosedAnswer(value.isCorrect);
                            console.log(value.isCorrect);

                        }}>
                        <img src={value.attachment.url}
                            alt="" />
                    </div>
                )
                )
                }
            </div>
        </div>
    )
}
