import React, { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { EXERCISES_QUERY } from '../graphql'
import { message } from 'antd'
import MenuPage from '../components/MenuPage'
import DayPage from '../components/DayPage'

const useMenu = () => {
    const [username, setUsername] = useState('');
    const [completion, setCompletion] = useState(0);
    const [strength, setStrength] = useState('');
    const [login, setLogin] = useState(false);
    const [days, setDays] = useState(0);
    const [day, setDay] = useState(0);

    const { loading, data, refetch } = useQuery(EXERCISES_QUERY, {
        variables: { strength: strength }
    });

    const fetchExerciseSchedule = useCallback(() => {
        if (login)
            refetch();
    }, [login])

    useEffect(() => {
        fetchExerciseSchedule();
        console.log(data)
        if (data) {
            setDays(data.queryExercises.length);
            console.log(data.queryExercises)
        }
    }, [fetchExerciseSchedule, data]);

    const clickday = (e) => {
        let node = e.target
        while (node.tagName != "BUTTON") {
            node = node.parentNode
        }
        setDay(parseInt(node.id) + 1)
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
            if (data && day > 0)
                return <DayPage exercises={data.queryExercises[day - 1].exercise} strength={strength} day={day} onclick={() => {setDay(0)}}/>;
        }
    }
    //console.log("day: " + day)
    return { username, setUsername, completion, setCompletion, strength, setStrength, login, setLogin, menupage };
}
//setDay(parseInt(e.target.key) + 1)
export default useMenu;