import { useState, useEffect } from "react";
export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State Updated', word);
    }, [word]);

        useEffect(() => {
        console.log('State Updated', word2);
    }, [word2]);



    //Limit what useEffect cares about --> dependancy array
    //there is three cases for using dependancy arrays:
    //no dependancy array --> update for any state change
    //empty dependancy array --> execute once
    //passing in data ---> only execute when those state variables (mentioned in the array) are changed

    return (
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h2>Let's get the definition of {word}</h2>
            <input type="text" onChange={(e) => {
                setWord2(e.target.value);
            }} />
            <h2>Let's get the definition of {word2}</h2>

        </>
    );
}