import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    });

    return (
        <div>
            <div>
                {left}
                <button onClick={() => setLeft(left + 1)}>
                    left
                </button>
                <button onClick={() => setRight(right + 1)}>
                    right
                </button>
                {right}
            </div>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
