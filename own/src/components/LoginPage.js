import React, { useRef } from 'react'
import './LoginPage.css'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'
import { Input } from 'antd'



function showNotImplemented() {
    console.warn('This function is not implemented yet.');
}

const LoginPage = (props) => {
    const bodyRef = useRef(null)
    const { onChange1, onChange2, onClick1, onClick2, username, password } = props;
    return (
        <>
            <div className="LoginPage-title">
                <h1>Fitting App</h1>
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
                        type="password"
                        value={password}
                        ref={bodyRef}
                        onChange={onChange2}
                        placeholder="Password"
                        onKeyDown={(e) => {
                            console.log("Key")
                        }}
                    ></Input>
                </div>
                <div className="LoginPage-row">
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
