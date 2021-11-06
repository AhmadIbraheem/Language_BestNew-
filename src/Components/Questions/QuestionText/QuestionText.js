import { style } from '@mui/system';
import React, { useState } from 'react';
import './QuestionText.css';

export default function QuestionText(props) {
    const [clicked, setClicked] = useState(false);
    const [valueClicked, setValueClicked] = useState(false);
    const [color, setColor] = useState("");

    const handleAnswer = (value) => {
        // console.log(props.answer);
        if (value.isCorrect) {
            props.setScore(props.score + 1);
            //alert("score: " + props.score)
            props.setIsTrue("true");
        } else
            props.setIsFalse("true");
    }
    const handleClick = () => {
        setClicked(!clicked);
        console.log("dfsf")
        if (clicked)
            setColor("yellow");
        else setColor("")
    }
    const handleNotClicked = () => {
        setColor("blue")
    }
    return (
        <div className="quizeQuestion">
            <div className="cont">
                <div className="formContainer">
                    <div className="right">
                        <h1>{props.questionText}</h1>
                        {
                            props.choices.map(
                                (value, index) => (
                                    <div className="box"
                                        // id={clicked ? "clicked" : ""}
                                        style={{ backgroundColor: color }}

                                        onClick={() => {
                                            props.setChoosedAnswer(value.isCorrect);
                                            setValueClicked(index);
                                            { (index === valueClicked) ? handleClick() : handleNotClicked() }
                                            console.log(index + "  " + valueClicked)
                                            //setColor("red");
                                        }
                                        }>
                                        {value.content}
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="left">
                        <img
                            src="assets/Questions.svg" alt="" />

                    </div>
                </div> {/* end of formcontainer */}



            </div>


        </div >
    )
}
