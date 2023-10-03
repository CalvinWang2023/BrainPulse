import './Question.css';
import { setCurrentIndex, setPicked, setQuestionScore } from "../../slices/quizSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTimerStart, setTimerStop } from "../../slices/timerSlice";
import { htmlDecoder } from '../Utils';

interface QuestionProps {
    questionText: string;
    optionTexts: string[];
    picked: string;
    correctAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ questionText, optionTexts, picked, correctAnswer }) => {  
    const dispatch = useAppDispatch();
    const { initialTime, elapsedTime, isTimerStop } = useAppSelector((state) => state.timer);

    const clickHandler = (option: string) => {
        dispatch(setPicked(option));
        dispatch(setQuestionScore(Math.ceil(initialTime - elapsedTime)));
        dispatch(setTimerStop(true));
        // Wait for 1 seconds before proceeding
        setTimeout(() => {
            dispatch(setCurrentIndex());
            dispatch(setTimerStart());
        }, 1000);
    };

    return (
        <div className="question-container">
            <h1>{htmlDecoder(questionText)}</h1>
            <ul>
                {optionTexts?.map((optionText, index) => {
                    return (
                        <li 
                            key={index} 
                            onClick={() => clickHandler(optionText)}
                            className={`${
                                isTimerStop === true && 
                                optionText === correctAnswer 
                                ? 'correct' 
                                : picked === optionText 
                                ? 'wrong' 
                                : ''
                            }`}
                            style={{ pointerEvents: isTimerStop ? 'none' : 'auto' }}
                        >
                            <p>{htmlDecoder(optionText)}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Question;