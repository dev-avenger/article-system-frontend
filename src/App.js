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
import FeedPage from './pages/Feed';

function App() {
  return (
    <div className="flex sm:px-6 lg:px-8 bg-gray-900 text-white">
    <div className="w-full">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
            <Route path="/reset-password" element={<ResetPasswordPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/articles" element={<ArticlePage/>} />
            <Route path="/feeds" element={<FeedPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
