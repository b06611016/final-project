import React from 'react'
import { Button } from 'react-bootstrap'
import './DayPage.css'
import gifarr from "../img/images"
import imgCheck from "../img/check.png"

const DayPage = (props) => {
    const { username, password } = props;
    const contents = ["Push-ups", "Crunch"];

    return (
        <>
            <div className="DayPage-title">
                <h1 id="h1">{"Day 1"}</h1>
                <p>{"Strength level : " + "High intensity"}</p>
            </div>
            <div className="DayPage-body">
                {contents.map((e, index) => {
                    return (
                        <Button variant="light" key={index}>
                            <img src={gifarr[index]} className="img"></img>
                            <div className="inButton">
                                <p id="p">{e}</p>
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