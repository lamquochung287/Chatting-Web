
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.js"
import RegisterForm from "./components/RegisterForm.js";
import ProtectedRoute from "./pages/ProtectedRoute.js";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from "./pages/HomePage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={
          // <ProtectedRoute>
          //   <HomePage />
          // </ProtectedRoute>
          <HomePage></HomePage>
        } />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
