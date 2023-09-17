
import { useAppSelector } from "../../app/hooks";

const Results = () => {
    const { questions } = useAppSelector((state) => state.quiz);
    const totalScore: number = questions.reduce(
                                    (acc, curr) => { 
                                        return acc + curr.score 
                                    }, 0);

    return (
        <div className="results-container">
            <h1>Result Score: {totalScore}</h1>
        </div>
    );
}

export default Results