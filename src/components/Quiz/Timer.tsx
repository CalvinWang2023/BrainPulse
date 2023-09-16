import useTimer from "../../hooks/useTimer";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppSelector } from "../../app/hooks";
import { HourglassTop, HourglassBottom } from "../../icons/TimerIcons";

const Timer = () => {
    const { initialTime, elapsedTime } = useAppSelector((state) => state.timer);
    const currentTime = initialTime - elapsedTime;

    useTimer();

    return (
        <div className="timer-container">
            {currentTime > 0 ? <HourglassTop /> : <HourglassBottom />}
            <p>{ currentTime.toFixed(1) }</p>
            <ProgressBar total={initialTime} current={currentTime} isTimer={true} />
        </div>
    )
}

export default Timer;