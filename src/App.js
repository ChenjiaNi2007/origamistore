import Header from "./components/Header";
import Home from "./components/Home";
import Tracker from "./components/Tracker";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState }  from 'react';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
