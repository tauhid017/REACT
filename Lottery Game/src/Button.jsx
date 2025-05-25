import React, { useState } from 'react';

function Button() {
    let initial = Math.floor(Math.random() * 1000);
    let [num, setnum] = useState(initial);

    let newticket = () => {
        let numz = Math.floor(Math.random() * 1000);
        setnum(numz);
    }

    function sum(n) {
        let a = n % 10;
        let b = Math.floor(n / 10);
        let c = b % 10;
        let d = Math.floor(b / 10);
        let x = a + c + d;
        return x;
    }

    let s = sum(num);

    return (
        <>
            <h3>{s === 15 ? "Hurray you won the lottery" : "butterluck next time"}</h3>
            <p>Lottery ticket = {num}</p>
            <button onClick={newticket}>
                Get a new Ticket 
            </button>
        </>
    );
}

export default Button;
