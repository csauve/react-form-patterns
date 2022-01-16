import React, {useState} from "react";
import PersonInput, {Person} from "./common/PersonInput";
import "./Home.scss";

export default function Home() {
    const [person, setPerson] = useState<Person>();

    return (
        <>
            <h1>Example form</h1>
            <PersonInput
                name="person"
                label="Person"
                value={person}
                onChange={setPerson}
            />

            <pre>
            {JSON.stringify(person, null, 2)}
            </pre>
        </>
    );
}