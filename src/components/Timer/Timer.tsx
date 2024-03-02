import ButtonPauseContinue from "./ButtonPauseContinue/ButtonPauseContinue";
import { useState } from "react";
import ButtonStart from "./ButtonStart/ButtonStart";
import ButtonStop from "./ButtonStop/ButtonStop";

/* type TimerProps = {
    children: React.ReactNode
    className
} */




const Timer = () => {
    const [second, setSecond] = useState(0.00);
    const [timer, setTimer] = useState(undefined) as [NodeJS.Timeout | undefined, React.Dispatch<React.SetStateAction<NodeJS.Timeout | undefined>>];

    const addTime = () => {
        setSecond(prevSecond => prevSecond + 0.01)
    }

    return (
        <>
            <p>Time: {second.toFixed(2)} s</p>
            <ButtonStart addTime={addTime} setTimer={setTimer} ></ButtonStart>
            <ButtonPauseContinue timer ={timer} setTimer={setTimer} addTime= {addTime}></ButtonPauseContinue> 
            <ButtonStop timer={timer} setTimer={setTimer} setSecond = {setSecond} ></ButtonStop>
        </>
    )
}

export default Timer;