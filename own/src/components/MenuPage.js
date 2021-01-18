import React from 'react'
import { Button } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import './MenuPage.css'

const MenuPage = (props) => {
    const { username, password } = props;
    const contents = [10, 20, 30, 40, 50];

    return (
        <>
            <div className="MenuPage-title">
                <h1 id="h1">Let's workout!</h1>
                <p>{"Strength level : " + "High intensity"}</p>
            </div>
            <div className="MenuPage-body">
                {contents.map((e, index) => {
                    return (
                        <Button variant="secondary" key={index}>
                            <p id="p">{"Day " + (index + 1)}</p>
                            <CircularProgressbar id="cb" value={e} text={`${e}%`} styles={buildStyles({
                                textColor: "gold",
                                pathColor: "gold"
                            })} />
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default MenuPage;