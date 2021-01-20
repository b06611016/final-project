import React, { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { EXERCISES_QUERY } from '../graphql'
import { message } from 'antd'
import MenuPage from '../components/MenuPage'
import DayPage from '../components/DayPage'
import CountingPage from '../components/CountingPage'

const useMenu = () => {
    const [username, setUsername] = useState('');
    const [completion, setCompletion] = useState(0);
    const [strength, setStrength] = useState('');
    const [login, setLogin] = useState(false);
    const [days, setDays] = useState(0);
    const [day, setDay] = useState(0);
    const [click_exercise, setClick_exercise] = useState(-1);
    const [day_completion, setDay_completion] = useState([]);

    const { loading, data, refetch } = useQuery(EXERCISES_QUERY, {
        variables: { strength: strength }
    });

    const fetchExerciseSchedule = useCallback(() => {
        if (login)
            refetch();
    }, [login])

    useEffect(() => {
        fetchExerciseSchedule();
        //console.log(data)
        if (data) {
            setDays(data.queryExercises.length);
            //console.log(data.queryExercises)
        }
    }, [fetchExerciseSchedule, data]);

    const clickday = (e) => {
        let node = e.target
        while (node.tagName !== "BUTTON") {
            node = node.parentNode
        }
        console.log(day)
        setDay(parseInt(node.id) + 1)
        //console.log(data.queryExercises[parseInt(node.id)])
        //console.log(Array(data.queryExercises[parseInt(node.id)].length).fill(0))
        if (day !== parseInt(node.id) + 1)
            setDay_completion(Array(data.queryExercises[parseInt(node.id)].exercise.length).fill(0));
    }

    const clickexercise = (e) => {
        console.log(e)
        let node = e.target;
        while (node.tagName !== "BUTTON")
            node = node.parentNode;
        setClick_exercise(parseInt(node.id));
    }

    const reset = () => {
        setUsername('');
        setCompletion(0);
        setStrength('');
        setLogin(false);
        setDays(0);
        setDay(0);
    }

    const menupage = () => {
        //console.log(day)
        if (day === 0)
            return <MenuPage username={username} days={days} strength={strength} completion={completion} onclick1={reset} onclick2={(e) => {clickday(e)}} />
        else {
            if (click_exercise === -1)
                return <DayPage exercises={data.queryExercises[day - 1].exercise} strength={strength} day={day} completion={day_completion} onclick1={() => {setDay(0)}} onclick2={(e) => {clickexercise(e)}}/>;
            else
                return <CountingPage limit={data.queryExercises[day - 1].sec[click_exercise]*10} index={click_exercise}/>
        }
    }
    //console.log("day: " + day)
    return { username, setUsername, completion, setCompletion, strength, setStrength, login, setLogin, menupage };
}
//setDay(parseInt(e.target.key) + 1)
export default useMenu;