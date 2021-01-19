import React from 'react'
import { Button } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import './MenuPage.css'

const MenuPage = (props) => {
    const { username, days, strength, completion, onclick } = props;

    let contents = [];
    for (let i = 0; i < days; ++i){
        if (i < completion)
            contents.push(100);
        else
            contents.push(0);
    }


    return (
        <>
            <div className="MenuPage-title">
                <h1 id="h1">Let's workout!</h1>
                <p>{"Strength level : " + strength + " intensity"}</p>
            </div>
            <div className="MenuPage-body">
                {contents.map((e, index) => {
                    console.log(index);
                    if (index === completion)
                        return (
                            <Button variant="secondary" key={index} id={index} onClick={onclick}>
                                <p id="p">{"Day " + (index + 1)}</p>
                                <CircularProgressbar id="cb" value={e} text={`${e}%`} styles={buildStyles({
                                    textColor: "gold",
                                    pathColor: "gold"
                                })} />
                            </Button>
                        );
                    else
                        return (
                            <Button variant="secondary" key={index} id={index} onClick={onclick} disabled>
                                <p id="p">{"Day " + (index + 1)}</p>
                                <CircularProgressbar id="cb" value={e} text={`${e}%`} styles={buildStyles({
                                    textColor: "gold",
                                    pathColor: "gold"
                                })} />
                            </Button>
                        );
                })}
            </div>
        </>
    )
}

export default MenuPage;