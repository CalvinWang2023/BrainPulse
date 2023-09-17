import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useQuizFetch from "../../hooks/useQuizFetch";
import Question from "../Question/Question";
import Timer from "./Timer";
import './Quiz.css';
import { useEffect } from "react";
import { setCurrentIndex } from "../../slices/quizSlice";
import { setTimerStart } from "../../slices/timerSlice";

const Quiz = () => {
    useQuizFetch();
    const dispatch = useAppDispatch();
    const { isLoading, questions, currentIndex } = useAppSelector((state) => state.quiz);
    const { isTimerStop } = useAppSelector((state) => state.timer);

    useEffect(() => {
        if (isTimerStop === true) {
            dispatch(setTimerStart());
            dispatch(setCurrentIndex());
        }
    }, [isTimerStop]);
    
    return !isLoading && (
        <div className="quiz-container">
            <Question { ...questions[currentIndex] } />
            <Timer />
        </div>
    );    
}

export default Quiz