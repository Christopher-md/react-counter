import React, {FC} from "react";

interface IValue {
    count: number
    handleIncrement: () => void
    handleDecrement: () => void
}

interface Props {
    children: React.ReactNode
    value: IValue
}

const CounterContext = React.createContext<IValue>({
    count: 0,
    handleIncrement: () => {},
    handleDecrement: () => {}
});

const CounterProvider: FC<Props> = ({ children, value }) => (
    <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
);

function useCounterContext() {
    const context = React.useContext(CounterContext);

    if (context) return context;

    throw new Error("useCounterContext must be used within a CounterProvider");
}

export { CounterProvider, useCounterContext };
