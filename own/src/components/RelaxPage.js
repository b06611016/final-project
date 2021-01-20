import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import './RelaxPage.css'
import relaximg from "../img/relax.jpeg"

const RelaxPage = (props) => {
    const { onclick } = props;
    const l = 200
    var temp_cur = 0
    var temp_limit = l
    var myvar
    const [current, setCurrent] = useState(0)
    const [limit, setLimit] = useState(l)

    const plus20s = useCallback(() => {
        temp_limit = limit
        setLimit(temp_limit + 200)
    }, [limit])

    const skip = () => {
        clearTimeout(myvar)
        onclick()
    }

    useEffect(() => {
        temp_cur = current + 1
        if (current <= limit) {
            myvar = setTimeout(() => { setCurrent(temp_cur) }, 100)
        }
        else
            skip()
    }, [current, limit])

    return (
        <>
            <div className="RelaxPage-body">
                <p id="p">{"Relax for a while!"}</p>
                <img src={relaximg} className="relaximg"></img>
                <div className="time">
                    <p className="Current">{parseInt(current / 10, 10)}</p>
                    <p className="limit">{" / " + limit / 10 + " s"}</p>
                </div>
                <div className="time">
                    <Button variant={"secondary"} onClick={plus20s}>+20s</Button>
                    <Button variant={"secondary"} onClick={skip}>Skip</Button>
                </div>
            </div>
        </>
    )
}

export default RelaxPage;