import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'
import { Input, message, Tag } from 'antd'



function showNotImplemented() {
    console.warn('This function is not implemented yet.');
}

const LoginPage = (props) => {
    const bodyRef = useRef(null)
    const { onChange1, onChange2, onClick1, onClick2, username, password } = props;
    return (
        <>
            <div className="App-title">
                <h1>Fitting App</h1>
            </div>
            <div className="App-body">
                <div className="App-row">
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

                <div className="App-row">
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
                <div className="App-row">
                    <Button variant="success" onClick={onClick1}>
                        Log in
                    </Button>
                    <Button variant="primary" onClick={onClick2}>
                        Create
                    </Button>
                </div>
            </div>
        </>
    );
};


LoginPage.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onChange1: PropTypes.func,
    onChange2: PropTypes.func,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
};

LoginPage.defaultProps = {
    onChange1: showNotImplemented,
    onChange2: showNotImplemented,
    onClick1: showNotImplemented,
    onClick2: showNotImplemented,
};

export default LoginPage;
