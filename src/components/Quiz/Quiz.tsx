import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useQuizFetch from "../../hooks/useQuizFetch";
import Question from "../Question/Question";
import Timer from "./components/Timer";
import './Quiz.css';
import { useEffect } from "react";
import { setCurrentIndex } from "../../slices/quizSlice";
import { setTimerStart } from "../../slices/timerSlice";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../slices/pageSlice";
import HomeModal from "./modal/HomeModal";

const Quiz = () => {    
    useQuizFetch();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLoading, questions, currentIndex, isQuizCompleted } = useAppSelector((state) => state.quiz);
    const { isTimerStop, elapsedTime } = useAppSelector((state) => state.timer);

    useEffect(() => {
        if (isTimerStop === true && elapsedTime === 10) {
            // Wait for 1 seconds before proceeding
            setTimeout(() => {
                dispatch(setTimerStart());
                dispatch(setCurrentIndex());
            }, 1000);
        }
        if (isQuizCompleted) {
            dispatch(setPage("result"));
        }
    }, [isTimerStop, isQuizCompleted, elapsedTime, dispatch, navigate]);

    return !isLoading ? !isQuizCompleted && (
        <>
            <HomeModal />
            <div className="quiz-container">
                <Question { ...questions[currentIndex] } />
                <Timer />
            </div>       
        </>
    ) : (
        <>
            <HomeModal />
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
        </>
    );
}

export default Quiz