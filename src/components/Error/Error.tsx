import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <h1>No Questions Available</h1>
            <p>Sorry, no sufficient questions currently availble for the options you selected.</p>  
            <p>Please navigate back to home page and select other options.</p>
        </div>
    );
}

export default Error