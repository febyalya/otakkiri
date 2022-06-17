import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Makanan = lazy(() => import('./Makanan'));
const Minuman = lazy(() => import('./Minuman'));
const Appetaizer = lazy(() => import('./Appetaizer'));

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Makanan" element={<Makanan />} />
        <Route path="/Minuman" element={<Minuman />} />
        <Route path="/Appetaizer" element={<Appetaizer />} />
      </Routes>
    </Suspense>
  </Router>
  );
}
export default App;
