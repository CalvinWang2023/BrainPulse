import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setElapsedTime, setTimerComplete } from "../slices/timerSlice";

const useTimer = () => {
    const { initialTime, elapsedTime, isTimerStop } = useAppSelector((state) => state.timer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (elapsedTime >= initialTime) {
            dispatch(setTimerComplete());
        }
        let interval: ReturnType<typeof setInterval>;
        if (isTimerStop === false) {
            interval = setInterval(() => {
                dispatch(setElapsedTime(0.1));
            }, 100);
        }

        return () => clearInterval(interval);
    }, [isTimerStop, elapsedTime]);
}

export default useTimer