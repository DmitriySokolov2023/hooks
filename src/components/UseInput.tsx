import React from 'react';
import useInput from "../hooks/useInput";

const UseInput = () => {
    const username = useInput('')
    const password = useInput('')

    return (
        <div>
            <h1>Хук для инпута</h1>
            <input {...username} type="text" placeholder='Username'/>
            <input {...password} type="text" placeholder='Password'/>
        </div>
    );
};

export default UseInput;