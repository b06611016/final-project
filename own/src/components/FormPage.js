import React, { useState, useRef, useEffect } from 'react'
import './LoginPage.css'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'
import { Input, message, Tag } from 'antd'
import './FormPage.css'

const FormPage = (props) => {
    const bodyRef = useRef(null);
    const { username, password,onChange1, onChange2, onChange3, onChange4, onClick1 } = props;
    const contents = [
        {
            options: [ "high intensity", "medium intesity", "low intensity"],
            question: "What level do you want to choose to work out?"
        },
        {
            options: [ "man", "women" ],
            question: "What is your gender?"
        }
    ];
    return (
        <>
            <div className="LoginPage-title">
                <h1>Fill in the following information to create your own account!</h1>
            </div>
            <div className="LoginPage-body">
                <div className="LoginPage-row">
                    <h1>Account:</h1>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={onChange1}
                        style={{ marginBottom: 10 }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                bodyRef.current.focus()
                            }
                        }}
                    ></Input>
                </div>
                <div className="LoginPage-row">
                    <h1>Password:</h1>
                    <Input
                        rows={4}
                        value={password}
                        ref={bodyRef}
                        onChange={onChange2}
                        placeholder="Password"
                        onKeyDown={(e) => {
                            console.log("Key")
                        }}
                    ></Input>
                </div>
                <div id="quiz-container">
                    { contents.map((e, index) => {
                        return(
                            <React.Fragment>
                                <div id="question-box">
                                    <div className="question-box-inner">
                                        {"Question " + (index + 1) + " of " + contents.length}
                                    </div>
                                </div>
                                <div id="question-title">
                                    {e.question}
                                </div>
                                <div id="options">
                                    {e.options.map((e, index) => {
                                        if (e === "high intensity")
                                            return (
                                                <div className="each-option" key = {`q${1 + 1}_${index + 1}`}>
                                                    <input type = "radio" id = {`q${1 + 1}_${index + 1}`} name = {`option-${1}`} onChange = {onChange3}/>
                                                    <span>{e}</span>
                                                    <p>Suggestion: for person who exercise at least 15 days per month</p>
                                                </div>
                                            );
                                        else if (e === "medium intensity")
                                            return (
                                                <div className="each-option" key = {`q${1 + 1}_${index + 1}`}>
                                                    <input type = "radio" id = {`q${1 + 1}_${index + 1}`} name = {`option-${1}`} onChange = {onChange3}/>
                                                    <span>{e}</span>
                                                    <p>Suggestion: for person who exercise 5~10 days per month</p>
                                                </div>
                                            );
                                        else if (e === "low intensity")
                                            return (
                                                <div className="each-option" key = {`q${1 + 1}_${index + 1}`}>
                                                    <input type = "radio" id = {`q${1 + 1}_${index + 1}`} name = {`option-${1}`} onChange = {onChange3}/>
                                                    <span>{e}</span>
                                                    <p>Suggestion: for person who exercise fewer than 5 days per month</p>
                                                </div>
                                            );
                                        else
                                            return (
                                                <div className="each-option" key = {`q${2 + 1}_${index + 1}`}>
                                                    <input type = "radio" id = {`q${2 + 1}_${index + 1}`} name = {`option-${2}`} onChange = {onChange4}/>
                                                    <span>{e}</span>
                                                </div>
                                            );
                                    })}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="LoginPage-row">
                    <Button variant="primary" onClick={onClick1}>
                        Create account
                    </Button>
                </div>
            </div>
        </>
    );
}

export default FormPage;