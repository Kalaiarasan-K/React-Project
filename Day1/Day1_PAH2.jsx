import React from "react";

const Display = () => {
    let print = () => {
        alert("Check the console output!");
        let age = 18;
        let name = "kiran";
        let setStatus = false;
        let userDefault = undefined;
        let responseValue = null;
        console.log(age);
        console.log(name);
        console.log(setStatus);
        console.log(userDefault);
        console.log(responseValue);
        let oldage = age;
        age = 25;
        let status = setStatus;
        setStatus = true;
        console.log(oldage);
        console.log(status);
    };
   return (
       <>
       <button onClick={print}>Submit</button>
       </>
    );
};
export default Display;