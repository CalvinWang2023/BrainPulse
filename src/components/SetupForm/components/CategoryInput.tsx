import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setForm } from "../../../slices/formSlice";

const CategoryInput = () => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.form.category);

    const handleClick = (e: React.ChangeEvent) => {
        const selectedCtg = e.target as HTMLOptionElement;
        dispatch(setForm({
            name: "category",
            value: selectedCtg.value
        }));
    };
    return (
        <div className="setup-container">
            <label>{`Select Category:`}</label>
            <select
                name="category"
                value={category} 
                className="ctgs-group" 
                onChange={handleClick}
            >
                <option value="1">Computer Science</option>
                <option value="2">Philosophy</option>
                <option value="3">Japanese Anime</option>
            </select>
        </div>
    )
}

export default CategoryInput;