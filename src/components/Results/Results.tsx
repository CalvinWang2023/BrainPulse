import './Results.css';
import { useAppSelector } from "../../app/hooks";
import { htmlDecoder } from '../Utils';

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
                <h1>Final Score: {totalScore}</h1>
                <h1>Correct: {correct_number}</h1>
                <h1>Wrong: {questions.length - correct_number - unAnswered}</h1>
                <h1>Unanswered: {unAnswered}</h1>
            </div>
            <table>
                <tr>
                    <th># Question</th>
                    <th>Correct Answer</th>
                    <th>Your Answer</th>
                    <th>Score</th>
                </tr>
                {questions.map((questionSmy, index) => {
                    return (
                        <tr key={index}>
                            <td>{htmlDecoder(questionSmy.question)}</td>
                            <td>{htmlDecoder(questionSmy.correct_answer)}</td>
                            <td>{htmlDecoder(questionSmy.picked)}</td>
                            <td>{questionSmy.score}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
}

export default Results