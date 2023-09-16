import "./Navbar.css";
import { JoyStick } from "../../icons/LogoIcons";
import ProgressBar from "../ProgressBar/ProgressBar";

interface NavbarProps {
    quizInProgress: boolean; // Flag to determine if quiz is in progress
}

const Navbar: React.FC<NavbarProps> = ({ quizInProgress }) => {

    return (
        <nav className="nav">
            <div className="nav-logo">
                <JoyStick />
                <h1>BrainPulse</h1>
            </div>
            <div className="nav-button">
                <button>demo</button>
            </div>

            {/* {quizInProgress && <ProgressBar total={} current={} isTimer={true} />} */}

        </nav>
    );
}

export default Navbar