import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPassword';
import ResetPasswordPage from './pages/ResetPassword';
import ProfilePage from './pages/Profile';
import ArticlePage from './pages/Article';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-emerald-50">
    <div className="w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
            <Route path="/reset-password" element={<ResetPasswordPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/articles" element={<ArticlePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
