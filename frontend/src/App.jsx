import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-brand-900 selection:bg-brand-200 selection:text-brand-900">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
