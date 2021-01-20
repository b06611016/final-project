import React, { useState, useEffect } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import './CountingPage.css'
import gifarr from "../img/images"
import returnimg from "../img/return.png"


const CountingPage = (props) => {
    const { limit, index, onclick } = props;
    const worktype = ["Push ups", "Crunch"]
    var now = 0
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        now = current + 1
        if (current <= limit) {
            setTimeout(() => { setCurrent(now) }, 100)
        }
    }, [current])

    return (
        <>
            <div className="CountingPage-body">
                <img src={returnimg} className="return" type="button" style={(current > limit) ? { cursor: "pointer" } : { cursor: "not-allowed" }} onClick={console.log("1")}></img>
                <img src={gifarr[index]} className="workimg"></img>
                <div className="time">
                    <p className="current">{parseInt(current / 10, 10)}</p>
                    <p className="limit">{" / " + limit / 10}</p>
                </div>
                <p id="p">{worktype[index]}</p>
                <ProgressBar animated variant={"success"} now={current * 100 / limit} id="progressbar" ></ProgressBar>
                <Button variant={"outline-success"} style={(current > limit) ? { visibility: "visible" } : { visibility: "hidden" }} onClick={console.log("2")}>Next</Button>
            </div>
        </>
    )
}

export default CountingPage;