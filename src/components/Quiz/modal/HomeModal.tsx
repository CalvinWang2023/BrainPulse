import { useAppDispatch } from "../../../app/hooks";
import { clearForm } from "../../../slices/formSlice";
import { setHomePage } from "../../../slices/pageSlice";
import { clearQuiz } from "../../../slices/quizSlice";
import { clearTimer } from "../../../slices/timerSlice";
import './HomeModal.css';

const HomeModal = () => {
    const dispatch = useAppDispatch();
    
    const openModal = () => {
        dispatch(clearForm());
        dispatch(clearQuiz());
        dispatch(clearTimer());
        dispatch(setHomePage());
    };

    const closeModal = () => {
        const homeModal = document.querySelector('#HomeModal');
        (homeModal as HTMLDialogElement).close();
    };

    return (
        <dialog id="HomeModal">
            <div className="title">
                <h1>Leave the Quiz?</h1>
            </div>
            <div className="content">
                <p>
                    Are you sure you want to leave the quiz? 
                    This action will remove all the questions you've done and cannot be reversed.
                </p>
            </div>
            <div className="button-choices">
                <button
                    className="leave"
                    onClick={() => openModal()}
                >
                    <p>Leave</p>
                </button>
                <button
                    className="cancel"
                    onClick={() => closeModal()}
                >
                    <p>Cancel</p>
                </button>
            </div>
        </dialog>
    );
}

export default HomeModal