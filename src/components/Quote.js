import React from 'react';
import ReactDOM from 'react-dom';
import ReactUse, { useState } from 'react';

const [counterLike, setCounterLike] = React.useState(0);
const [counterDisLike, setCounterDisLike] = React.useState(0);
const Quote = (props) => {
    return ( <
        div >
        <
        li >
        <
        p > { props.citation } < /p> <
        p > { props.auteur }, { props.episode } < /p> <
        div style = "display: flex" >
        <
        button onClick = {
            () => setCounterLike(counterLike + 1) } > 👌 < /button> <p>{counterLike}</p >
        <
        button onClick = {
            () => setCounterDisLike(counterDisLike + 1) } > 👎 < /button><p>{counterDisLike}</p >
        <
        /div> <
        /li> <
        /div>
    )
};
export default Quote;