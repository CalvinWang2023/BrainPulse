import './ProgressBar.css';

interface ProgressBarProps {
    total: number;
    current: number;
    isTimer?: boolean; // Flag to indicate progressbar used as timer (default to false)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current, isTimer = false }) => {
    const percentage = ((current / total) * 100) < 100 ? (current / total) * 100 : 100;

    return (
        <div className="progress-bar">
            <div className={`progress ${isTimer ? 'timer-bar' : '' }`} style={{ width: `${percentage}%` }}>
                {percentage > 0 && !isTimer && `${percentage}%`}
            </div>
        </div>
    )
}

export default ProgressBar