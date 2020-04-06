import React, {useState} from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
};


const NoStats = (props) => {
    if (props.allFeedback === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
};

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allFeedback, setAll] = useState(0)
    const [positiveFeedback, setPositive] = useState(0)

    const increaseGood = () => {
        setGood(good + 1);
        setAll(allFeedback + 1);
        setPositive(((good + neutral) / allFeedback) * 100)
    };
    const increaseNeutral = () => {
        setNeutral(neutral + 1);
        setAll(allFeedback + 1);
        setPositive(((good + neutral) / allFeedback) * 100)
    };
    const increaseBad = () => {
        setBad(bad + 1);
        setAll(allFeedback + 1)
    };

    return (
        <div>
            <h1>Give feedback</h1>
            <div>
                <Button onClick={increaseGood} text='good'/>
                <Button onClick={increaseNeutral} text='neutral'/>
                <Button onClick={increaseBad} text='bad'/>
            </div>
            <h1>Statistics</h1>
            <div>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>neutral {bad}</p>
                <p>all {allFeedback}</p>
                <p>positive {positiveFeedback}</p>
            </div>
        </div>
    )
};

ReactDOM.render(<App/>,
    document.getElementById('root')
);
