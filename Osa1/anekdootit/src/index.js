import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const point = (props) => {
    console.log(props.selected, props.points)
    copy[props.selected] += 1;
};



const App = (props) => {



    const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
    const copy = [points];
    const [selected, setSelected] = useState(0);
    const { anecdotes } = props;

    


    return (
        <div>
            <h1>Anecdotes of the day</h1>
            <p>{selected}</p>
            <p>points {props.copy}</p>
            <button onClick={() => setSelected(anecdotes[Math.floor(Math.random()*anecdotes.length)])}>
                Click me
            </button>

        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
