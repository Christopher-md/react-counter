import React, {FC} from 'react';
import {useCounterContext} from "../Context";

const Increment: FC = () => {
    const {handleIncrement} = useCounterContext()

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Increment;
