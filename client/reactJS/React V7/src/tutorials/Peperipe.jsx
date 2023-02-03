import { useState, useEffect } from "react";
const Peperipe = (props) => {
    const names = "John";
    const isNameShowing = false;
    return (
        <>
            <div className="">{isNameShowing ?
                <>
                    <p>I am {props.age}</p>
                </> :
                <>
                    <IncreDecre />
                </>
            }
            </div>
        </>
    )
}

const IncreDecre = () => {
    const [counter, setCounter] = useState(0);

    // renders when page loads
    useEffect(() => {
        console.log("Clicked! " + counter + " times")
    }, [counter])
    return (

        <>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
            <h3>{counter}</h3>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        </>
    )

}

export default Peperipe;