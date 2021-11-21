import React, { useState, useContext, useEffect } from 'react';
import './Form.css';

import Progress from '../Progress/Progress';
import QuestionAudio from '../Questions/QuestionAudio/QuestionAudio';
import QuestionImage from '../Questions/QuestionImage/QuestionImage';
import QuestionText from '../Questions/QuestionText/QuestionText';
import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';
import WrongAnswer from '../WrongAnswer/WrongAnswer';
import Result from '../Result/Result';

import Context from '../../Store/Context';
import axios from 'axios';
import List from '../../Store/list'
export default function Form() {
    const { globale, actions } = useContext(Context);
    const [questions2, setQuestions] = useState([
        {
            id: "xxxxx",
            subLevelId: "xxxx",
            content: "Question Number1",
            questionType: "Normal",
            answers: []
        },
        {
            id: "xxxxx",
            subLevelId: "xxxx",
            content: "Question Number1",
            questionType: "Normal",
            answers: []
        },
        {
            id: "xxxxx",
            subLevelId: "xxxx",
            content: "Question Number1",
            questionType: "Normal",
            answers: []
        }

    ]);


    const subLevelId = (globale.subLevelId > 0) ? globale.subLevelId : localStorage.getItem('subLevelId');
    // const subLevelId = "b6c5c231-99b5-47f7-a2d5-50d70fb4b884";
    const api = "https://api-staging.languagebest.com/api/Questions/all/" + subLevelId;
    // this api used to view image and audio questions
    //const tryapi = "https://staging.languagebest.com/api/Questions/all/915e3c81-aa21-41e7-a1d2-4c057eb6024d"

    // console.log(subLevelId);

    async function getData() {
        try {
            const response = await axios.get(api);
            console.log(response);
            setMaxProgress(response.data.result.length)
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(
        () => {
            getData().then(
                response => {
                    setQuestions(response.data.result);
                }
            )
        }, []);






    // to render true answer popup
    const [IsTrue, setIsTrue] = useState("");
    const [trueAnswer, setTrueAnswer] = useState("");
    // to render False answer popup
    const [IsFalse, setIsFalse] = useState("");
    // question counter to detect which countert should we display
    const [questionToRender, setQuestionToRender] = useState(0);
    // user score counter
    const [score, setScore] = useState(0);
    // Progress counter
    const [progressValue, setProgressValue] = useState(0);
    // max score OR number of questions
    const [maxProgress, setMaxProgress] = useState();
    // to display the result in the end
    const [displyResult, setDisplayResult] = useState("");

    const [choosedAnswer, setChoosedAnswer] = useState("");
    const [audioOrder, setAudioOrder] = useState("");
    const [audioAnswer, setAudioAnswer] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    // console.log(maxProgress);
    // in case TRUE answer:
    // 1. increase score to calculate the final result
    // 2. increase question counter


    // in case PASS the question
    // 1. check if we reach end of quiz TO display the result 
    // 2. if we don not reach the end : display the next question  
    const hanldePass = () => {
        const nextQuestion = questionToRender + 1;
        let newTries = globale.tries - 1;
        actions({
            type: 'setTries',
            payload: {
                ...globale, tries: newTries,

            }
        });
        // console.log(questionToRender);
        // console.log(maxProgress);
        // console.log(nextQuestion);
        if (nextQuestion >= maxProgress)
            setDisplayResult("true");
        else
            setQuestionToRender(nextQuestion);
    }

    const handleCheck = () => {
        setIsFalse(true);
    }
    const handleAnswer = () => {

        if (choosedAnswer) {
            setScore(score + 1);
            //alert("score: " + props.score)
            setIsTrue("true");
        } else {
            setIsFalse("true");
            let newTries = globale.tries - 1;
            actions({
                type: 'setTries',
                payload: {
                    ...globale, tries: newTries,

                }
            });

        }
    }
    // function to handle which question to view
    const handleRender = (value, index) => {
        switch (value) {
            case 'WithAudios': return <QuestionAudio
                setIsFalse={setIsFalse}
                setIsTrue={setIsTrue}
                questionToRender={questionToRender}
                setQuestionToRender={setQuestionToRender}
                questionText={questions2[index].content}
                answer={questions2[index].answer}
                choices={questions2[index].answers}
                questions={questions2[index]}
                setScore={setScore}
                score={score}
                setAudioOrder={setAudioOrder}
                audioOrder={audioOrder}
                setChoosedAnswer={setChoosedAnswer}
                handleAnswer={handleAnswer}
            />;
            case 'Normal': return <QuestionText
                setIsFalse={setIsFalse}
                setIsTrue={setIsTrue}
                questionToRender={questionToRender}
                setQuestionToRender={setQuestionToRender}
                questionText={questions2[index].content}
                answer={questions2[index].answer}
                choices={questions2[index].answers}
                setScore={setScore}
                score={score}
                setChoosedAnswer={setChoosedAnswer}
                handleAnswer={handleAnswer}
            />;
            case 'WithImages': return <QuestionImage
                setIsFalse={setIsFalse}
                setIsTrue={setIsTrue}
                questionToRender={questionToRender}
                setQuestionToRender={setQuestionToRender}
                questionText={questions2[index].content}
                answer={questions2[index].answer}
                choices={questions2[index].answers}
                setScore={setScore}
                score={score}
                setChoosedAnswer={setChoosedAnswer}

                handleAnswer={handleAnswer}
            />;
            default: return <Result score={score} />

        }
    }

    return (
        <div className="form1" id="form1">
            <Progress width={progressValue} />

            <div className="question">
                {handleRender(questions2[questionToRender].questionType, questionToRender)}
            </div>

            {/* <div className="breaker"></div> */}

            <div className="footer">

                <div className="quizFooter">
                    {/* <div className={isHidden ? "hedden" : "btns"}>
                        <div className="pass"
                            onClick={hanldePass}>

                            تخط  !!
                        </div>
                        <div className="check"
                            onClick={handleAnswer}>
                            تحقق
                        </div>
                    </div> */}
                    <div className="result">
                        <div className="popup-box">
                            {IsTrue && <CorrectAnswer
                                questionToRender={questionToRender}
                                setQuestionToRender={setQuestionToRender}
                                setIsTrue={setIsTrue}
                                maxProgress={maxProgress}
                                setProgressValue={setProgressValue}
                                score={score}
                                setDisplayResult={setDisplayResult}

                            />}
                            {IsFalse && <WrongAnswer
                                questionToRender={questionToRender}
                                setQuestionToRender={setQuestionToRender}
                                setIsFalse={setIsFalse}
                                maxProgress={maxProgress}
                                setDisplayResult={setDisplayResult}

                            />}

                            {/* <h1>{questionToRender}</h1> */}
                        </div>
                    </div>

                    {/* result section */}
                    {displyResult && <Result
                        score={score}
                        maxProgress={maxProgress}
                    />}


                </div>
            </div>


        </div>
    )
}
  // const questions = [
    //     {
    //         type: 'audio',
    //         questionsText: 'audio quest',
    //         answer: 'a',
    //         choices: ["aaaaaaaaaa", "aaa", "aa", "a"]
    //     },
    //     {
    //         type: 'text',
    //         questionsText: 'Text ques',
    //         answer: 'a',
    //         choices: ["aaaa", "aaa", "aa", "a"]
    //     },
    //     {
    //         type: 'images',
    //         questionsText: 'image quest',
    //         answer: 'a',
    //         choices: ["aaaa", "aaa", "aa", "a"]
    //     }]
