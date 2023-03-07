import React, {FC} from 'react';
import {useCounterContext} from "../Context";

const Decrement: FC = () => {
    const {handleDecrement} = useCounterContext()

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default Decrement;
