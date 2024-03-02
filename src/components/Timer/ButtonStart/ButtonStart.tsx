
type ButtonStartProps = {
    addTime: () => void;
    setTimer: React.Dispatch<React.SetStateAction<undefined|NodeJS.Timeout>>;
}

const ButtonStart = ({ addTime, setTimer }: ButtonStartProps) => {

const startTimer = () => {setTimer(setInterval(addTime,10))}

    return (
        <button onClick={startTimer}>
            Start
        </button>
    )
}

export default ButtonStart;