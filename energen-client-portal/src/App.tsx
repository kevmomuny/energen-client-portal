import './index.css'; // Global styles (Tailwind)
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { isAuthenticated } from './services/authService';

function App() {
  const auth = isAuthenticated(); // Check auth status for initial redirect from "/"

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>

        {/* If root is accessed, redirect to dashboard if logged in, or login if not */}
        <Route
          path="/"
          element={auth ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
        />

        {/* Fallback route for any undefined paths - can redirect to dashboard or a 404 page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
