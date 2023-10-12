import './Results.css';
import { useAppSelector } from "../../app/hooks";
import { htmlDecoder } from '../Utils';
import { FinalScore, PendingCircle, RightCircle, WrongCircle } from '../../icons/ResultIcons';

const Results = () => {
    const { questions, correct_number } = useAppSelector((state) => state.quiz);

    const totalScore: number = questions.reduce(
                                    (acc, curr) => { 
                                        return acc + curr.score 
                                    }, 0);
    const unAnswered: number = questions.reduce(
                                    (acc, curr) => { 
                                        if (curr.picked ===  '') return ++acc
                                        return acc;           
                                    }, 0);

    return (
        <div className="results-container">
            <div className="results-header">
                <div className="result">
                    <FinalScore />
                    <h1>Score: {totalScore}</h1>
                </div>
                <div className="result">
                    <RightCircle />
                    <h1>Correct: {correct_number}</h1>
                </div>
                <div className="result">
                    <WrongCircle />
                    <h1>Wrong: {questions.length - correct_number - unAnswered}</h1>
                </div>
                <div className="result">
                    <PendingCircle />
                    <h1>Unanswered: {unAnswered}</h1>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th># Question</th>
                        <th>Correct Answer</th>
                        <th>Your Answer</th>
                        <th>Score</th>
                    </tr>
                </tbody>
                {questions?.map((questionSmy, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{htmlDecoder(questionSmy.question)}</td>
                                <td>{htmlDecoder(questionSmy.correct_answer)}</td>
                                <td>{htmlDecoder(questionSmy.picked)}</td>
                                <td>{questionSmy.score}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

        </div>
    );
}

export default Results