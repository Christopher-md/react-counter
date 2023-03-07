import React, {useState} from 'react';
import Counter from "./Counter";
import './App.sass';

function App() {
    const [value, setValue] = useState(0)

    return (
        <div className="App">
            <Counter value={value} onChange={(value) => setValue(value)}>
                <Counter.Decrement />
                <Counter.Count />
                <Counter.Increment />
            </Counter>
        </div>
    );
}

export default App;
