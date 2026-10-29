import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/" style={{ fontSize: '18px', textDecoration: 'none', color: '#4a90e2' }}>Главная</Link>
                <Link to="/about" style={{ fontSize: '18px', textDecoration: 'none', color: '#4a90e2' }}>О нас</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;