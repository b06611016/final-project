import React from 'react'
import { Button } from 'react-bootstrap'
import './DayPage.css'
import gifarr from "../img/images"
import imgCheck from "../img/check.png"
import returnimg from "../img/return.png"

const DayPage = (props) => {
    const { day, exercises, strength, onclick1, onclick2, completion } = props;
    const names = ["Push-ups", "Crunch", "Dive bomber", "Jumping jacks", "Bench Dip", "Bear crawl", "Flanks training", "Squat"];
    console.log(completion)
    return (
        <>
            <img src={returnimg} className="return" type="button" onClick={onclick1}></img>
            <div className="DayPage-title">
                <h1 id="h1">{"Day " + day}</h1>
                <p>{"Strength level : " + strength + " intensity"}</p>
            </div>
            <div className="DayPage-body">
                {exercises.map((e, index) => {
                    //console.log(e)
                    return (
                        <Button variant="light" key={index} id={e} onClick={onclick2}>
                            <img src={gifarr[e]} className="img"></img>
                            <div className="inButton">
                                <p id="p">{names[e]}</p>
                            </div>
                            {completion[index] === 0 ? "" : <img src={imgCheck} className="imgCheck"></img>}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default DayPage;