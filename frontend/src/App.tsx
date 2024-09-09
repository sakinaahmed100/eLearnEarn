
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage'; // Separate pages
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* Layout component will always render */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


