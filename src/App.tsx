import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetupForm from './components/SetupForm/SetupForm';
import Quiz from './components/Quiz/Quiz';
import Layout from './Layout';

function App() {
    return (
        <div className="App">
            <Navbar quizInProgress={true} />
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route path='/' element={ <SetupForm /> } />
                    <Route path='/Quiz' element={ <Quiz /> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App
