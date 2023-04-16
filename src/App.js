
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.js"
import RegisterForm from "./components/RegisterForm.js";
import ProtectedRoute from "./pages/ProtectedRoute.js";
import Person from "./components/Person.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/person" element={
          <ProtectedRoute>
            <Person></Person>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
