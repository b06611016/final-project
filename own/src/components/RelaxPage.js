import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import './RelaxPage.css'
import relaximg from "../img/relax.jpeg"

const RelaxPage = (props) => {
    const { onclick } = props;
    const l = 200
    var temp_cur = 0
    var temp_limit = l
    const [current, setCurrent] = useState(0)
    const [limit, setLimit] = useState(l)

    const plus20s = useCallback(() => {
        temp_limit = limit
        setLimit(temp_limit + 200)
    }, [limit])

    useEffect(() => {
        temp_cur = current + 1
        if (current <= limit) {
            setTimeout(() => { setCurrent(temp_cur) }, 100)
        }
        else
            onclick()
    }, [current, limit])

    return (
        <>
            <div className="RelaxPage-body">
                <p id="p">{"Relax"}</p>
                <img src={relaximg} className="relaximg"></img>
                <div className="time">
                    <p className="Current">{parseInt(current / 10, 10)}</p>
                    <p className="limit">{" / " + limit / 10 + " s"}</p>
                </div>
                <div className="time">
                    <Button variant={"outline-secondary"} onClick={plus20s}>+20s</Button>
                    <Button variant={"outline-secondary"} onClick={onclick}>Skip</Button>
                </div>
            </div>
        </>
    )
}

export default RelaxPage;