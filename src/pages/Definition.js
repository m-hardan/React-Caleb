import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {
    const [word, setWord] = useState([]);

    useEffect(() => {
        async function fetchResponse() {
            const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/helicopter");
            const data = await response.json();
            setWord(data[0].meanings);
            console.log(data[0].meanings);
          }
        fetchResponse();
    }, []);
    return (
        <>
        <h1>Here is a definition</h1>
        {word.map((meaning) => {
            return(<p key = {uuidv4()}>
                {meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}
                </p>
                );
        })}
        </>
    );
}
