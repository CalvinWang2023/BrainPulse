import "./Navbar.css";
import { JoyStick } from "../../icons/LogoIcons";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppSelector } from "../../app/hooks";

interface NavbarProps {
    quizInProgress: boolean; // Flag to determine if quiz is in progress
}

const Navbar: React.FC<NavbarProps> = ({ quizInProgress }) => {
    const { questions, currentIndex } = useAppSelector((state) => state.quiz);
    return (
        <nav className="nav">
            <div className="nav-logo">
                <JoyStick />
                <h1>BrainPulse</h1>
            </div>
            
            {quizInProgress && 
                <div className="nav-progressbar">
                    <p>Quiz Progress: {currentIndex} / {questions.length}</p>
                    <ProgressBar total={questions.length} current={currentIndex} />
                </div>
                
            }

            <div className="nav-button">
                <button>demo</button>
            </div>
        </nav>
    );
}

export default Navbar