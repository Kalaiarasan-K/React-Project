import React from "react";

const InlineJs = () => {
    return (
        <>
        <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
        <div style={{padding: '10px',backgroundColor:"lightblue", color:"darkblue", border:"1px solid blue", borderRadius:'5px'}}>
            <p style={{color:"darkblue", fontSize:'16px'}}>This is a paragraph with inline styles applied.</p>
        </div>
        </>
    );
}

export default InlineJs;