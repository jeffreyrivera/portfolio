import React from 'react'

const Solution = ({solution}) =>{
    return (
        <div className="item">
            <p>{solution.description}</p>
        </div>
    );
};

export default Solution;

{/* <div className="ui segment">
    <h5>Solutions</h5>
    <p><b>Array</b>  > Greedy</p>
    
    <p>DOMPurify is written in JavaScript and works in 
        all modern browsers (Safari (10+), Opera (15+), 
        Internet Explorer (10+), Edge, Firefox and Chrome - 
        as well as almost anything else using Blink or WebKit).</p>
    <p>It doesn't break on MSIE6 or other legacy browsers. 
    It either uses a fall-back or simply does nothing.</p>
</div> */}