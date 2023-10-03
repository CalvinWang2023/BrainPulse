import "./Navbar.css";
import { JoyStick } from "../../icons/LogoIcons";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearForm } from "../../slices/formSlice";
import { clearQuiz } from "../../slices/quizSlice";
import { clearTimer } from "../../slices/timerSlice";
import { setHomePage } from "../../slices/pageSlice";

const Navbar = () => {
    const { questions, currentIndex } = useAppSelector((state) => state.quiz);
    const { page } = useAppSelector((state) => state.page);
    const dispatch = useAppDispatch();

    const homeClick = () => {
        if (page === 'quiz') {
            const homeModal = document.querySelector('#HomeModal');
            (homeModal as HTMLDialogElement).showModal();
        }
        if (page === 'result') {
            dispatch(clearForm());
            dispatch(clearQuiz());
            dispatch(clearTimer());
            dispatch(setHomePage());
        }
    };

    const currentQuestion = currentIndex + 1 > questions.length ? currentIndex : currentIndex + 1;
    
    return (
        <nav className="nav">
            <div className="nav-logo">
                <JoyStick />
                <h1>BrainPulse</h1>
            </div>
            
            {questions.length > 0 && 
                <div className="nav-progressbar">
                    <p>Question: {currentQuestion} / {questions.length}</p>
                    <ProgressBar total={questions.length} current={currentQuestion} />
                </div>
            }
            <div id="home-button">              
                <button onClick={homeClick}>Home</button>             
            </div>
        </nav>
    );
}

export default Navbar