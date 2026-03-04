import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StudentCorner from "./pages/StudentCorner";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "react-hot-toast";
import EditStudent from "./pages/EditStudent";
import ProtectedRoute from "./components/ProtectedRoute";
import HomepageDashboard from "./pages/HomepageDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import CreateStudentProfile from "./pages/CreateStudentProfile";
import EditStudentProfile from "./pages/EditStudentProfile";
import EditStudentPage from "./pages/EditStudentPage";
import ImageNoticeDashboard from "./pages/ImageNoticeDashboard";
import EventDashboard from "./pages/EventDashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import UpdateEvent from "./pages/UpdateEvent";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />

      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentCorner />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin/homepage"
          element={
            <ProtectedRoute>
              <HomepageDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/students"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/create-student"
  element={<ProtectedRoute><CreateStudentProfile /></ProtectedRoute>}
/>

<Route
  path="/admin/edit-student"
  element={<ProtectedRoute><EditStudentProfile /></ProtectedRoute>}
/>

<Route
  path="/admin/edit-profile"
  element={<ProtectedRoute><EditStudentPage /></ProtectedRoute>}
/>

<Route
  path="/admin/homepage/image-notice"
  element={<ProtectedRoute><ImageNoticeDashboard /></ProtectedRoute>}
/>

<Route
  path="/admin/homepage/events"
  element={<ProtectedRoute><EventDashboard /></ProtectedRoute>}
/>

<Route
  path="/admin/homepage/events/add"
  element={<ProtectedRoute><AddEvent /></ProtectedRoute>}
/>

<Route
  path="/admin/homepage/events/edit"
  element={<ProtectedRoute><EditEvent /></ProtectedRoute>}
/>

<Route
  path="/admin/homepage/events/update"
  element={<ProtectedRoute><UpdateEvent /></ProtectedRoute>}
/>
        
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />

    </Router>
  );
};

export default App;