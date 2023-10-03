import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setForm } from "../../../slices/formSlice";

interface InputProps {
    label: string;
    choices: Array<FormValue>;
    FormKey: keyof FormState;
    altChoiceName?: Array<string>; 
}

const SetupInput: React.FC<InputProps> = ({ label, choices, FormKey, altChoiceName = null }) => {
    const dispatch = useAppDispatch();
    const form = useAppSelector((state) => state.form);

    const handleClick = (e: React.MouseEvent) => {
        const selectedChoice = e.target as HTMLButtonElement;
        dispatch(setForm({
            name: FormKey,
            value: selectedChoice.value
        }));
    };

    return (
        <div className="setup-container">
            <label>{`Select ${label}:`}</label>
            <ul>
                {choices?.map((choice, index) => {
                    return (
                        <li key={index}>
                            <button 
                                type="button"
                                className={form[FormKey] === choice ? `active` : `inactive`}
                                value={choice} 
                                onClick={handleClick}
                            >
                                {altChoiceName === null ? 
                                    choice 
                                    : altChoiceName[index]
                                }
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SetupInput;