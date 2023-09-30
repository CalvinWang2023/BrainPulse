import CategoryInput from "./components/CategoryInput";
import SetupInput from "./components/SetupInput";
import './SetupForm.css';
import { Link } from "react-router-dom";

const SetupForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <SetupInput 
                label="Number of Questions"
                choices={['5', '10', '15', '20']}
                FormKey="amount"
            />
            <CategoryInput />
            <SetupInput 
                label="Difficulty"
                choices={['easy', 'medium', 'hard']}
                FormKey="difficulty"
            />
            <SetupInput 
                label="Type"
                choices={['multiple', 'boolean']}
                FormKey="type"
                altChoiceName={['Multiple Choice', 'True / False']}
            />
            <Link to={'/Quiz'}>
                <button type="submit">Start Quiz</button>
            </Link>
        </form>
    );
}

export default SetupForm