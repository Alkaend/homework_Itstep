type ButtonStopProps = {
    timer: NodeJS.Timeout | undefined;
    setTimer: React.Dispatch<React.SetStateAction<undefined | NodeJS.Timeout>>;
    setSecond: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonStop = ({ timer, setTimer, setSecond }: ButtonStopProps) => {
    const stopTimer = () => {
        clearInterval(timer);
        setTimer(undefined);
        setSecond(0);
    }

    return (
        <button onClick={stopTimer}>
            Stop
        </button>
    )
}

export default ButtonStop;