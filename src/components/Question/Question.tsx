import './Question.css';
import { setCurrentIndex, setPicked, setQuestionScore } from "../../slices/quizSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTimerStart, setTimerStop } from "../../slices/timerSlice";
import { htmlDecoder } from '../Utils';

interface QuestionProps {
    question: string;
    options: string[];
    picked: string;
    correct_answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, options, picked, correct_answer }) => {  
    const dispatch = useAppDispatch();
    const { initialTime, elapsedTime, isTimerStop } = useAppSelector((state) => state.timer);
    const { questions } = useAppSelector((state) => state.quiz);

    const clickHandler = (option: string) => {
        dispatch(setPicked(option));
        dispatch(setQuestionScore((Math.ceil(initialTime - elapsedTime) / initialTime) * (100 / questions.length)));
        dispatch(setTimerStop(true));
        // Wait for 1 seconds before proceeding
        setTimeout(() => {
            dispatch(setCurrentIndex());
            dispatch(setTimerStart());
        }, 1000);
    };

    return (
        <div className="question-container">
            <h1>{htmlDecoder(question)}</h1>
            <ul>
                {options?.map((option, index) => {
                    return (
                        <li 
                            key={index} 
                            onClick={() => clickHandler(option)}
                            className={`${
                                isTimerStop === true && 
                                option === correct_answer 
                                ? 'correct' 
                                : picked === option 
                                ? 'wrong' 
                                : ''
                            }`}
                            style={{ pointerEvents: isTimerStop ? 'none' : 'auto' }}
                        >
                            <p>{htmlDecoder(option)}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Question;