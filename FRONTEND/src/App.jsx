import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Learning from "./pages/Learning";
import AdminVideos from "./pages/AdminVideos";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminRoute from "./Components/AdminRoute";
import Profile from "./pages/Profile";
import CertificateRequests from "./pages/CertificateRequests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/habits"
  element={
    <ProtectedRoute>
      <Habits />
    </ProtectedRoute>
  }
/>

<Route
  path="/learning"
  element={
    <ProtectedRoute>
      <Learning />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/videos"
  element={
    <ProtectedRoute>
      <AdminRoute>
        <AdminVideos />
      </AdminRoute>
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/certificate-requests"
  element={
    <ProtectedRoute>
      <CertificateRequests />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}


export default App;