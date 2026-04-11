import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
