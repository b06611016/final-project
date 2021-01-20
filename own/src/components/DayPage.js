import React from 'react'
import { Button } from 'react-bootstrap'
import './DayPage.css'
import gifarr from "../img/images"
import imgCheck from "../img/check.png"
import returnimg from "../img/return.png"

const DayPage = (props) => {
    const { day, exercises, strength, onclick } = props;
    const names = ["Push-ups", "Crunch"];

    return (
        <>
            <img src={returnimg} className="return" type="button" onClick={onclick}></img>
            <div className="DayPage-title">
                <h1 id="h1">{"Day " + day}</h1>
                <p>{"Strength level : " + strength + " intensity"}</p>
            </div>
            <div className="DayPage-body">
                {exercises.map((e, index) => {
                    return (
                        <Button variant="light" key={index}>
                            <img src={gifarr[index]} className="img"></img>
                            <div className="inButton">
                                <p id="p">{names[index]}</p>
                            </div>
                            <img src={imgCheck} className="imgCheck"></img>
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default DayPage;