import React, { useState, useEffect, useCallback } from 'react'
import { Button, Nav, Navbar, DropdownButton, Dropdown } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import './MenuPage.css'
import { message } from 'antd'

const MenuPage = (props) => {
    const { username, days, strength, completion, onclick1, onclick2, low, medium, high, clear } = props;
    const [nav, setNav] = useState(false)
    const [status, setStatus] = useState('');
    const [times, setTimes] = useState(0);
    let contents = [];
    for (let i = 0; i < days; ++i) {
        if (i < completion)
            contents.push(100);
        else
            contents.push(0);
    }

    const changestatus = (e) => {
        let node = e.target
        while (node.tagName !== "BUTTON") {
            node = node.parentNode
        }
        if (node.id > completion) {
            setStatus('invalid');
            if (status === 'invalid')
                setTimes(times + 1);
            else
                setTimes(1);
        }
        else if (node.id < completion) {
            setStatus("success");
            if (status === 'success')
                setStatus(times + 1);
            else
                setTimes(1);
        }
    };

    const display = useCallback(() => {
        if (status === "invalid" && times > 0)
            message.error({
                content: "please follow instruction!",
                duration: 1
            })
        else if (status === 'success' && times > 0)
            message.success({
                content: "you have done it. Please do the newly assigned!",
                duration: 1
            })
    }, [status, times]);

    useEffect(() => {
        display();
    }, [display])

    const menu = (
        <>
            <div className="MenuPage-title">
                <h1 id="h1">Let's workout!</h1>
                <p>{"Strength level : " + strength + " intensity"}</p>
            </div>
            <div className="MenuPage-body">
                {contents.map((e, index) => {
                    if (index === completion)
                        return (
                            <Button variant="secondary" key={index} id={index} onClick={onclick2}>
                                <p className="P" id={index}>{"Day " + (index + 1)}</p>
                                <CircularProgressbar id={index} className="CB" value={e} text={`${e}%`} styles={buildStyles({
                                    textColor: "gold",
                                    pathColor: "gold"
                                })} />
                            </Button>
                        );
                    else
                        return (
                            <Button variant="secondary" key={index} id={index} onClick={(e) => { changestatus(e) }}>
                                <p id={index} className="P">{"Day " + (index + 1)}</p>
                                <CircularProgressbar id={index} className="CB" value={e} text={`${e}%`} styles={buildStyles({
                                    textColor: "gold",
                                    pathColor: "gold"
                                })} />
                            </Button>
                        );
                })}
            </div>
        </>
    )

    const setting = (
        <div className="setting">
            <p>{"Username: " + username}</p>
            <p>{"Strength: " + strength}</p>
            <Button variant="warning" onClick={clear} id="reset">
                Reset your progress to 0%
            </Button>
            <DropdownButton title="Reset your strength" id="reset">
                <Dropdown.Item onClick={low}>Low</Dropdown.Item>
                <Dropdown.Item onClick={medium}>Medium</Dropdown.Item>
                <Dropdown.Item onClick={high}>High</Dropdown.Item>
            </DropdownButton>
        </div>
    )

    return (
        <>
            <Navbar bg="" expand="lg" id="navbar">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => { setNav(false) }}>Menu</Nav.Link>
                        <Nav.Link onClick={() => { setNav(true) }}>Profile</Nav.Link>
                        <Button variant="outline-primary" onClick={onclick1} className="logout">
                            Log out
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {nav ? setting : menu}
        </>
    )
}

export default MenuPage;