import { setCurrentIndex } from "../../slices/quizSlice";
import { useAppDispatch } from "../../app/hooks";
import { setTimerStart } from "../../slices/timerSlice";

interface QuestionProps {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

const Question: React.FC<QuestionProps> = ({ question, correct_answer, incorrect_answers }) => {  
    const choicesList = [...incorrect_answers, correct_answer]
                                .sort(() => 0.5 - Math.random()); 

    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(setCurrentIndex());
        dispatch(setTimerStart());
    };

    return (
        <div className="question-container">
            <h1>{question}</h1>
            <ul>
                {choicesList.map((choice, index) => {
                    return (
                        <li key={index} onClick={clickHandler}>
                            {choice}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Question