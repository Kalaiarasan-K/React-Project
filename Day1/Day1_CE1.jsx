import React from "react";

let alertMsg = () => {
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}

const Button = () => {
    return (
        <>
        <h1>Let we see the output of JAVASCRIPT</h1>
        <div>
            <button onClick={alertMsg}>Submit</button>
        </div>
        </>
    );
}

export default Button;