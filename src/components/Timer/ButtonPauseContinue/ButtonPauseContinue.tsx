type ButtonPauseContinueProps = {
    timer: NodeJS.Timeout | undefined;
    setTimer: React.Dispatch<React.SetStateAction<undefined | NodeJS.Timeout>>;
    addTime: () => void;
}

const ButtonPauseContinue = ({ timer, setTimer, addTime }: ButtonPauseContinueProps) => {
    const toggleTimer = () => {
        if (timer === undefined) {
            setTimer(setInterval(addTime, 10))
        }
        else {
            clearInterval(timer);
            setTimer(undefined);
        }

    }

    return (
        <button onClick={toggleTimer}>
            {timer === undefined?'continue':'pause'}
        </button>
    )
}

export default ButtonPauseContinue;