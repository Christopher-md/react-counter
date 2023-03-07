import React from 'react';
import {useCounterContext} from "../Context";

const Count = () => {
    const { count } = useCounterContext()

    return (
        <div>
            {count}
        </div>
    );
};

export default Count;
