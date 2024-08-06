import React from "react";
const Recall = () => {
    let myObject = {name:"Madras"};
    let newObject = myObject;
    myObject.name="Chennai";
    
    let myarray = ["a", "e", "i","o"];  
    let vowelArray = myarray;
    myarray.push("u");
    alert("Check the console output!");
    console.log(vowelArray);
    
}
let Calling = () => {
    return (<>
        <button onClick={Recall}>Submit</button>
    </>);
}
export default Calling;