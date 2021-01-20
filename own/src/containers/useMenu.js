import React, { useState, useEffect, useCallback } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { EXERCISES_QUERY } from '../graphql'
import { UPDATE_COMPLETION } from '../graphql'
import { RESET_COMPLETION } from '../graphql'
import { CHANGE_STRENGTH } from '../graphql'
import { message } from 'antd'
import MenuPage from '../components/MenuPage'
import DayPage from '../components/DayPage'
import CountingPage from '../components/CountingPage'
import RelaxPage from '../components/RelaxPage'

const useMenu = () => {
    const [username, setUsername] = useState('');
    const [completion, setCompletion] = useState(0);
    const [strength, setStrength] = useState('');
    const [login, setLogin] = useState(false);
    const [days, setDays] = useState(0);
    const [day, setDay] = useState(0);
    const [click_exercise, setClick_exercise] = useState(-1);
    const [day_completion, setDay_completion] = useState([]);
    const [relax, setRelax] = useState(false);
    const [recatch, setRecatch] = useState(false);

    const { loading, data, refetch } = useQuery(EXERCISES_QUERY, {
        variables: { strength: strength }
    });
    const [updatecompletion] = useMutation(UPDATE_COMPLETION);
    const [resetcompletion] = useMutation(RESET_COMPLETION);
    const [changestrength] = useMutation(CHANGE_STRENGTH);

    const fetchExerciseSchedule = useCallback(() => {
        if (login) {
            refetch();
        }
        else if (recatch) {
            refetch();
            setRecatch(false);
        }
    }, [login, recatch])

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
        if (day !== parseInt(node.id) + 1)
            setDay_completion(Array(data.queryExercises[parseInt(node.id)].exercise.length).fill(0));
    }

    const clickexercise = (e) => {
        let node = e.target;
        while (node.tagName !== "BUTTON")
            node = node.parentNode;
        setClick_exercise(parseInt(node.id));
        let array = day_completion;
        array[parseInt(node.id)] = 0;
        setDay_completion(array);
    }

    const backtoMenu = () => {
        setClick_exercise(-1);
        let array = day_completion;
        array[click_exercise] = 1;
        setDay_completion(array);
    }

    const relaxation = () => {
        if (data.queryExercises[day - 1].exercise.length === (click_exercise + 1))
            setClick_exercise(-1);
        else {
            setClick_exercise(click_exercise + 1);
            setRelax(true);
        }
        let array = day_completion;
        array[click_exercise] = 1;
        setDay_completion(array);
    }

    const whetheraddcompletion = () => {
        console.log(day_completion)
        const found = day_completion.includes(0);
        if (!found)
            setCompletion(completion + 1);
    }

    const reset = async () => {
        await updatecompletion({
            variables: {
                username: username,
                completion: completion
            }
        })
        setUsername('');
        setCompletion(0);
        setStrength('');
        setLogin(false);
        setDays(0);
        setDay(0);
        window.location.reload();
    }

    const low = async () => {
        if (strength !== 'low') {
            await changestrength({
                variables: {
                    username: username,
                    strength: 'low'
                }
            });
            setStrength('low');
            setCompletion(0);
            setRecatch(true);
        }
        else
            message.error({
                content: "Such strength is already choosen",
                duration: 1
            })
    }

    const medium = async () => {
        if (strength !== 'medium') {
            await changestrength({
                variables: {
                    username: username,
                    strength: 'medium'
                }
            });
            setStrength('medium');
            setCompletion(0);
            setRecatch(true);
        }
        else
            message.error({
                content: "Such strength is already choosen",
                duration: 1
            })
    }


    const high = async () => {
        if (strength !== 'high') {
            await changestrength({
                variables: {
                    username: username,
                    strength: 'high'
                }
            });
            setStrength('high');
            setCompletion(0);
            setRecatch(true);
        }
        else
            message.error({
                content: "Such strength is already choosen",
                duration: 1
            })
    }

    const clearcompletion = async () => {
        await resetcompletion({ variables: { username: username } });
        setCompletion(0);
    }

    const menupage = () => {
        //console.log(day)
        if (day === 0)
            return <MenuPage username={username} days={days} strength={strength} completion={completion} onclick1={reset} onclick2={(e) => { clickday(e) }} low={low} medium={medium} high={high} clear={clearcompletion} />
        else {
            if (click_exercise === -1)
                return <DayPage exercises={data.queryExercises[day - 1].exercise} strength={strength} day={day} completion={day_completion} onclick1={() => { whetheraddcompletion(); setDay(0); }} onclick2={(e) => { clickexercise(e) }} />;
            else {
                if (!relax)
                    return <CountingPage limit={data.queryExercises[day - 1].sec[click_exercise] * 10} index={click_exercise} onclick1={backtoMenu} onclick2={relaxation} />
                else
                    return <RelaxPage onclick={() => { setRelax(false) }} />
            }
        }
    }
    return { username, setUsername, completion, setCompletion, strength, setStrength, login, setLogin, menupage };
}
//setDay(parseInt(e.target.key) + 1)
export default useMenu;