import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useQuizFetch from "../../hooks/useQuizFetch";
import Question from "../Question/Question";
import Timer from "./Timer";
import './Quiz.css';
import { useEffect } from "react";
import { setCurrentIndex } from "../../slices/quizSlice";
import { setTimerStart } from "../../slices/timerSlice";
import { useNavigate } from "react-router-dom";

const Quiz = () => {    
    useQuizFetch();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLoading, questions, currentIndex, isQuizCompleted } = useAppSelector((state) => state.quiz);
    const { isTimerStop, elapsedTime } = useAppSelector((state) => state.timer);

    useEffect(() => {
        if (isTimerStop === true && elapsedTime === 10) {
            // Wait for 2 seconds before proceeding
            setTimeout(() => {
                dispatch(setTimerStart());
                dispatch(setCurrentIndex());
            }, 2000);
        }
        if (isQuizCompleted) {
            navigate('/Results');
        }
    }, [isTimerStop, isQuizCompleted, elapsedTime, dispatch, navigate]);
    
    return !isLoading ? !isQuizCompleted && (
        <div className="quiz-container">
            <Question { ...questions[currentIndex] } />
            <Timer />
        </div>
    ) : (
        <div className="loading-container">
            <h1>
                Get Ready
                <div className="dots">
                    <span className="dot-animation" />
                    <span className="dot-animation" />
                    <span className="dot-animation" />
                </div>
            </h1>
        </div>
    );
}

export default Quiz