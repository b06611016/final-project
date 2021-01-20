import React, { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USER_QUERY } from '../graphql'
import CreateUser from './createUser'
import useMenu from './useMenu'
import { message } from 'antd'
import LoginPage from '../components/LoginPage'
import FormPage from '../components/FormPage'

const useLogin = () => {
    //const [username, setUsername] = useState('');
    //const [login, setLogin] = useState(false);
    const [create, setCreate] = useState(false);
    const [password, setPassword] = useState('');
    //const [strength, setStrength] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [times, setTimes] = useState(0);
    //const [completion, setCompletion] = useState(0);

    const { username, setUsername, completion, setCompletion, strength, setStrength, login, setLogin, menupage } = useMenu();
    const { loading, data, refetch } = useQuery(USER_QUERY, {
        variables: { username: username, password: password }
    });
    const { addUser, createOutcome, createLoading } = CreateUser();

    const displayStatus = useCallback(() => {
        if (times > 0) {
            if (status === 'name_err')
                message.error({
                    content: "please fill in username or password",
                    duration: 1
                })
            else if (status === 'invalid')
                message.error({
                    content: "Invalid username or account",
                    duration: 1
                })
            else if (status === 'unfilled')
                message.error({
                    content: "Please fill the below information accurately",
                    duration: 1
                })
            else if (status === "same name") {
                message.error({
                    content: "Username has been used!",
                    duration: 1
                })
            }
        }
    }, [status, times]);

    useEffect(() => {
        displayStatus();
    }, [displayStatus]);

    const setlogin = () => {
        if (!username || !password) {
            setStatus('name_err');
            if (status === 'name_err')
                setTimes(times + 1);
            else
                setTimes(1);
            return;
        }
        refetch();
        if (!data)
            return;
        if (data.userCheck._isSuccess) {
            setLogin(true);
            setStrength(data.userCheck.strength);
            setCompletion(data.userCheck.completion);
            setPassword('');
            return;
        }
        else {
            setStatus('invalid');
            if (status === 'invalid')
                setTimes(times + 1);
            else
                setTimes(1);
        }
    };


    const setaccount = useCallback(() => {
        if (!createOutcome)
            return;
        if (!createOutcome.createUser) {
            setStatus("same name")
            if (status === "same name")
                setTimes(times + 1);
            else
                setTimes(1);
            return;
        }
        else {
            //console.log(createOutcome);
            setLogin(true);
            setCreate(false);
            setPassword('');
        }
    }, [createOutcome]);

    useEffect(() => {
        setaccount();
    }, [setaccount]);

    const createaccount = async () => {
        if (!username || !password || !strength || !gender) {
            setStatus('unfilled');
            if (status === 'unfilled')
                setStatus(times + 1);
            else
                setTimes(1);
            return;
        }
        await addUser({
            variables: {
                username: username,
                password: password,
                strength: strength
            }
        })
    };

    const setstrength = (e) => {
        let index = e.target.id.substr(3);
        if (index === "1")
            setStrength("high");
        else if (index === '2')
            setStrength("medium");
        else
            setStrength("low")
    };

    const setgender = (e) => {
        let index = e.target.id.substr(3);
        if (index === '1')
            setGender('man');
        else
            setGender('woman');
    };

    const setcreate = () => {
        setCreate(true);
        setPassword('');
        setUsername('');
    };

    const returnlogin = () => {
        setCreate(false);
        setPassword('');
        setUsername('');
        setStrength('');
        setGender('');
    };

    const loginpage = (
        <LoginPage onChange1={(e) => setUsername(e.target.value)} onChange2={(e) => setPassword(e.target.value)} onClick1={setlogin} onClick2={setcreate} username={username} password={password}></LoginPage>
    )

    const formpage = (
        <FormPage username={username} password={password} onChange1={(e) => setUsername(e.target.value)} onChange2={(e) => setPassword(e.target.value)} onChange3={(e) => { setstrength(e) }} onChange4={(e) => { setgender(e) }} onClick1={createaccount} onClick2={returnlogin}></FormPage>
    )

    return { loginpage, login, create, formpage, menupage };
}

export default useLogin;