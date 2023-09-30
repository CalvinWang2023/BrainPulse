import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetupForm from './components/SetupForm/SetupForm';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import Layout from './Layout';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route path='/' element={ <SetupForm /> } />
                    <Route path='/Quiz' element={ <Quiz /> } />
                    <Route path='/Results' element={ <Results /> } />
                </Route>
            </Routes>
        </div>
    );
}

export default App
