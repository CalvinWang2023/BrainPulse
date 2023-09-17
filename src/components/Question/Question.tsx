import './Question.css';
import { setCurrentIndex, setPicked, setQuestionScore } from "../../slices/quizSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTimerStart } from "../../slices/timerSlice";

interface QuestionProps {
    question: string;
    options: string[];
    score: number;
}

const Question: React.FC<QuestionProps> = ({ question, options, score }) => {  
    const dispatch = useAppDispatch();
    const { initialTime, elapsedTime } = useAppSelector((state) => state.timer);

    const clickHandler = (option: string) => {
        dispatch(setPicked(option));
        dispatch(setQuestionScore(Math.ceil(initialTime - elapsedTime)));
        dispatch(setCurrentIndex());
        dispatch(setTimerStart());
    };

    const htmlDecoder = (html: string) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.documentElement.textContent;
    };
    
    return (
        <div className="question-container">
            <h1>{htmlDecoder(question)}</h1>
            <ul>
                {options.map((option, index) => {
                    return (
                        <li key={index} onClick={() => clickHandler(option)}>
                            <p>{htmlDecoder(option)}</p>
                        </li>
                    );
                })}
            </ul>
            {/* <h1>score: {score}</h1> */}
        </div>
    );
}

export default Question;