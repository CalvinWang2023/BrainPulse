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

    const clickHandler = (option: string) => {
        dispatch(setPicked(option));
        dispatch(setQuestionScore(Math.ceil(initialTime - elapsedTime)));
        dispatch(setTimerStop(true));
        // Wait for 2 seconds before proceeding
        setTimeout(() => {
            dispatch(setCurrentIndex());
            dispatch(setTimerStart());
        }, 2000);
    };

    return (
        <div className="question-container">
            <h1>{htmlDecoder(question)}</h1>
            <ul>
                {options.map((option, index) => {
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