// Code Keypad Component Here
import React from "react";

function Keypad (){
    function print () {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" name="" value="" onChange={print}/>

        </div>
    )
}

export default Keypad;