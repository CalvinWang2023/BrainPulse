import { useAppDispatch } from "../../app/hooks";
import { setPage } from "../../slices/pageSlice";
import CategoryInput from "./components/CategoryInput";
import SetupInput from "./components/SetupInput";
import './SetupForm.css';

const SetupForm = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setPage("quiz"));
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
                altChoiceName={['Multiple', 'True / False']}
            />
            <button type="submit">Start Quiz</button>
        </form>
    );
}

export default SetupForm