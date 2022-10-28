import React, { useState } from 'react';

function CreateMC() {
    let [question, setQuestion] = useState("Add poll question");
    let [showResponseBuidler, setShowResponseBuilder] = useState(false);
    let [responses, setResponses] = useState([]);
    
    function handleEnter(e) {
        if (e.key === "Enter") {
            setQuestion(e.target.value)
        }

        console.log("New question: ", question)
    }

    function handleEnterRes(e) {
        if (e.key === "Enter") {
            setResponses(responses => [...responses, e.taget.innerHTML])
            console.log(responses);
        }
    }

    function showResponseBuilder() {
        setShowResponseBuilder(true);
    }

    return (
        <div>
            <h1>Multiple Choice</h1>

            <input
            type="text"
            placeholder={ question }
            onKeyDown={ handleEnter }
            >
            
            </input>

            <br></br>

            <button onClick={ showResponseBuilder }>Add Response</button>

            {
                showResponseBuidler &&
                <div>
                    <br></br>
                    <input
                    placeholder='Add response text'
                    onKeyDown={ handleEnterRes }
                    >
                    </input>
                </div>
            }
        </div>

    )

}

export default CreateMC;