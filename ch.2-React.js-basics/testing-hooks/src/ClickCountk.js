import React, { useState, useEffect } from 'react';//add use effect here 

const ClickCount = () => {
    // to use use state we make array first is variable name and the second
    // is function that goning change the variable and useState(start value to the var)
    const [counter, setCounter] = useState(0);

    // first argument is callback function that will be called 
    // second argument is array of dependencies that useEffect will run only when one of them changes
    useEffect(() => {
        if (counter === 5){
            alert('you have reached 5 times');
        }
    }, [counter])

    return (
        <div>
            <p> you pressed {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>pree me</button>
        </div>
    )
}

export default ClickCount;