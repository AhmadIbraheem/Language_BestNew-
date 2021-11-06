import React from 'react';
import './CorrectAnswer.css';
export default function CorrectAnswer(props) {
    const handleNextQuestion = () => {
        const nextQuestion = props.questionToRender + 1;
        if (nextQuestion < props.maxProgress) {
            props.setQuestionToRender(nextQuestion);
            props.setIsTrue("");
            const percentage = (nextQuestion * 100) / props.maxProgress;
            props.setProgressValue(percentage);
            // alert(props.score);
        }
        else {
            props.setDisplayResult("true");
        }

    }
    return (

        <div className="correctAnswer">
            <div className="img">
                <img src="assets/panda-correct.svg" alt="" />
            </div>
            <div className="answer">
                <h1>أحسنت !!</h1>
                <p>هيا بنا نتعلم المزيد</p>
            </div>
            <div className="continue"
                onClick={handleNextQuestion}>
                المتابعة
            </div>
        </div>

    )
}
