import React from 'react'
import { useEffect } from 'react';

export default function Qqqq() {
    const dataList = [
        {
            value: "ahmad",
            order: 1
        },
        {
            value: "ahmad",
            order: 2
        },
        {
            value: "ahmad",
            order: 3
        }
    ]
    const answerList = [
        {
            value: "adl",
            order: 2
        }
    ]
    return (
        <div>
            {/* {useEffect((
                () => {
                    <div className="answer">
                        {answerList.map(data =>
                            data.value
                        )
                        }
                    </div>

                }
            ), [answerList])} */}
            <div className="answer">
                {answerList.map(data =>
                    data.value
                )
                }
            </div>
            <div className="data"
            >
                {dataList.map(data =>
                    <h1
                        onClick={
                            () => {
                                answerList.push({
                                    value: data.value,
                                    order: data.order
                                });
                                console.log(answerList)
                            }
                        }
                    >{data.value}</h1>
                )
                }
            </div>
        </div>
    )
}
