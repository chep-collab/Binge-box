import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ComingSoon from './pages/ComingSoon';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
import StreamBuy from './pages/StreamBuy'; // Import StreamBuy component
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Use import.meta.env for environment variables in Vite
    const apiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY || "9346dda45797685183020b41bacc2d54";

    return (
        <Router>
            <div className="app">
                <Navbar user={user} />
                <HeroSection />
                <Routes>
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/" element={user ? <Home apiKey={apiKey} /> : <Navigate to="/login" />} />
                    <Route path="/catalog" element={user ? <Catalog apiKey={apiKey} /> : <Navigate to="/login" />} />
                    <Route path="/coming-soon" element={user ? <ComingSoon /> : <Navigate to="/login" />} />
                    <Route path="/about-us" element={user ? (user ? <AboutUs /> : <Navigate to="/login" />) : <Navigate to="/login"/>} /> {/* Corrected route */}
                    <Route path="/contact-us" element={user ? (user ? <ContactUs /> : <Navigate to="/login" />) : <Navigate to="/login"/>} /> {/* Corrected route */}
                    <Route path="/movie/:id" element={user ? <MovieDetails apiKey={apiKey} /> : <Login />} />
                    <Route path="/stream-buy/:id" element={user ? <StreamBuy apiKey={apiKey} /> : <Login />} /> {/* Add StreamBuy route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

