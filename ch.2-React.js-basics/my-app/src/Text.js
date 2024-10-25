import React from "react";// need to import react 

function Text (props){
    const {propName="مرحبا بك",children}= props;
    return (
    <div>
        <span>{propName}</span>
        <div> {children} </div>
    </div>
    );
}
// to use in another file export the function
export default Text;