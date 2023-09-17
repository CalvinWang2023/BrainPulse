import './Question.css';
import { setCurrentIndex } from "../../slices/quizSlice";
import { useAppDispatch } from "../../app/hooks";
import { setTimerStart } from "../../slices/timerSlice";

interface QuestionProps {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

const Question: React.FC<QuestionProps> = ({ question, correct_answer, incorrect_answers }) => {  
    const dispatch = useAppDispatch();
    const choicesList = [...incorrect_answers, correct_answer]
                                .sort(() => 0.5 - Math.random()); 

    const clickHandler = () => {
        dispatch(setCurrentIndex());
        dispatch(setTimerStart());
    };

    function htmlDecoder(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.documentElement.textContent;
    }
    
    return (
        <div className="question-container">
            <h1>{htmlDecoder(question)}</h1>
            <ul>
                {choicesList.map((choice, index) => {
                    return (
                        <li key={index} onClick={clickHandler}>
                            <p>{htmlDecoder(choice)}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Question