import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startpage from './pages/Startpage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Startpage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};
export default App;
