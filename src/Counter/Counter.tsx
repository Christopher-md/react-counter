import React, {FC} from "react";
import { CounterProvider } from "./Context";
import Count from "./components/Count";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

interface Components {
    Count: typeof Count
    Increment: typeof Increment
    Decrement: typeof Decrement
}

interface Props {
    value: number
    initialValue?: number
    children: React.ReactNode
    onChange: (value: number) => void
}

const Counter: FC<Props> & Components = ({ children, onChange, value }) => {

    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        onChange(value - 1);
    };

    return (
        <CounterProvider value={{ count: value, handleIncrement, handleDecrement }}>
            {children}
        </CounterProvider>
    );
}

Counter.Increment = Increment;
Counter.Decrement = Decrement;
Counter.Count = Count;

export default Counter;
