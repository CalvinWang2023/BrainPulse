import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setElapsedTime, setTimerComplete, setDelayTime } from "../slices/timerSlice";

const useTimer = () => {
    const { delay, initialTime, elapsedTime, isTimerStop } = useAppSelector((state) => state.timer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (elapsedTime >= initialTime) dispatch(setTimerComplete());
            
        let interval: ReturnType<typeof setInterval>;

        if (delay > 0) {
            interval = setInterval(() => {
                dispatch(setDelayTime(-1));
            }, 1000);
        } else if (isTimerStop === false) {
            interval = setInterval(() => {
                dispatch(setElapsedTime(0.1));
            }, 100);
        }

        return () => clearInterval(interval);
    }, [isTimerStop, elapsedTime, delay, initialTime, dispatch]);
}

export default useTimer;
