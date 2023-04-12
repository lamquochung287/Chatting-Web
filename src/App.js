
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.js"
import { Person } from "./components/Person.js"
import RegisterForm from "./components/RegisterForm.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
