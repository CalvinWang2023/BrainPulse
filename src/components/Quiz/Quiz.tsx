import { useAppSelector } from "../../app/hooks";
import useQuizFetch from "../../hooks/useQuizFetch";
import Question from "../Question/Question";
import Timer from "./Timer";
import './Quiz.css';

const Quiz = () => {
    useQuizFetch();
    const { isLoading, questions, currentIndex } = useAppSelector((state) => state.quiz);
    
    return !isLoading && (
        <div className="quiz-container">
            <Question { ...questions[currentIndex] } />
            <Timer />
        </div>
    );    
}

export default Quiz