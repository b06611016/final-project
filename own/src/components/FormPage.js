import React, { useState, useRef, useEffect } from 'react'
//import './LoginPage.css'
import { Button } from 'react-bootstrap'
import { Input, message, Tag } from 'antd'
import './FormPage.css'

const FormPage = (props) => {
    const bodyRef = useRef(null);
    const { username, password, onChange1, onChange2, onChange3, onChange4, onClick1 } = props;
    const contents = [
        {
            options: ["high intensity", "medium intensity", "low intensity"],
            question: "What level do you want to choose to work out?"
        },
        {
            options: ["man", "women"],
            question: "What is your gender?"
        }
    ];
    return (
        <>
            <div className="FormPage-title">
                <h1>Fill in the following information to create your own account!</h1>
            </div>
            <div className="FormPage-body">


                <div id="quiz-container">
                    <div id="question-box">
                        <div className="question-box-inner">Fill in your username and password below : </div>
                    </div>
                    <div className="FormPage-row">
                        <Input
                            placeholder="Username"
                            value={username}
                            onChange={onChange1}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    bodyRef.current.focus()
                                }
                            }}
                        ></Input>
                        <Input                           
                            value={password}
                            ref={bodyRef}
                            onChange={onChange2}
                            placeholder="Password"
                            onKeyDown={(e) => {
                                console.log("Key")
                            }}
                        ></Input>
                    </div>
                    {contents.map((e, index) => {
                        return (
                            <React.Fragment>
                                <div id="question-box">
                                    <div className="question-box-inner">
                                        {e.question}
                                    </div>
                                </div>
                                <div id="options">
                                    {e.options.map((e, index) => {
                                        if (e === "high intensity")
                                            return (
                                                <>
                                                    <div className="each-option" key={`q${1 + 1}_${index + 1}`}>
                                                        <input type="radio" id={`q${1 + 1}_${index + 1}`} name={`option-${1}`} onChange={onChange3} />
                                                        <span>{e}</span>
                                                    </div>
                                                    <span className="options-span">Suggestion: for person who exercise at least 15 days per month</span>
                                                </>
                                            );
                                        else if (e === "medium intensity")
                                            return (
                                                <>
                                                    <div className="each-option" key={`q${1 + 1}_${index + 1}`}>
                                                        <input type="radio" id={`q${1 + 1}_${index + 1}`} name={`option-${1}`} onChange={onChange3} />
                                                        <span>{e}</span>
                                                    </div>
                                                    <span className="options-span">Suggestion: for person who exercise 5~10 days per month</span>
                                                </>
                                            );
                                        else if (e === "low intensity")
                                            return (
                                                <>
                                                    <div className="each-option" key={`q${1 + 1}_${index + 1}`}>
                                                        <input type="radio" id={`q${1 + 1}_${index + 1}`} name={`option-${1}`} onChange={onChange3} />
                                                        <span>{e}</span>
                                                    </div>
                                                    <span className="options-span">Suggestion: for person who exercise fewer than 5 days per month</span>
                                                </>
                                            );
                                        else
                                            return (
                                                <div className="each-option" key={`q${2 + 1}_${index + 1}`}>
                                                    <input type="radio" id={`q${2 + 1}_${index + 1}`} name={`option-${2}`} onChange={onChange4} />
                                                    <span>{e}</span>
                                                </div>
                                            );
                                    })}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="FormPage-row">
                    <Button variant="primary" onClick={onClick1}>
                        Summit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default FormPage;