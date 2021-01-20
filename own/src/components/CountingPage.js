import React, { useState, useEffect, useCallback } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import './CountingPage.css'
import gifarr from "../img/images"
import returnimg from "../img/return.png"
import { message } from 'antd'


const CountingPage = (props) => {
    const { limit, index, onclick1, onclick2 } = props;
    const worktype = ["Push ups", "Crunch"]
    var now = 0
    const [current, setCurrent] = useState(0)
    const [status, setStatus] = useState('');
    const [times, setTimes] = useState(0);

    const setdanger = () => {
        setStatus('invalid');
        if (status === 'invalid')
            setTimes(times + 1);
        else
            setTimes(1);
    }

    const click1 = () => {
        if (current < limit)
            setdanger();
        else
            onclick1();
    }

    const displayStatus = useCallback(() => {
        if (times > 0) {
            if (status === "invalid")
                message.error({
                    content: "please complete this exercise first!",
                    duration: 1
                })
        }
    }, [times, status])

    useEffect(() => {
        displayStatus();
    }, [displayStatus])

    useEffect(() => {
        now = current + 1
        if (current <= limit) {
            setTimeout(() => { setCurrent(now) }, 100)
        }
    }, [current])

    return (
        <>
            <div className="CountingPage-body">
                <img src={returnimg} className="return" type="button" style={(current > limit) ? { cursor: "pointer" } : { cursor: "not-allowed" }} onClick={click1}></img>
                <img src={gifarr[index]} className="workimg"></img>
                <div className="time">
                    <p className="current">{parseInt(current / 10, 10)}</p>
                    <p className="limit">{" / " + limit / 10}</p>
                </div>
                <p id="p">{worktype[index]}</p>
                <ProgressBar animated variant={"success"} now={current * 100 / limit} id="progressbar" ></ProgressBar>
                <Button variant={"outline-success"} style={(current > limit) ? { visibility: "visible" } : { visibility: "hidden" }} onClick={onclick2}>Next</Button>
            </div>
        </>
    )
}

export default CountingPage;