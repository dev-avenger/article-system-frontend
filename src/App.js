import './App.css';
import axiosConfig from "../src/services/axiosConfig";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { authActions } from "../src/redux/store/auth-slice";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ForgotPasswordPage from './pages/ForgotPassword';
import ResetPasswordPage from './pages/ResetPassword';
import ProfilePage from './pages/Profile';
import ArticlePage from './pages/Article';
import FeedPage from './pages/Feed';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);


  const updateToken = async (accessToken, refreshToken) => {
    try {
      const { data } = await axiosConfig.post(
        `/authentication/refresh`,
        {
          refreshToken: refreshToken,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      // Success
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refresh", data.refreshToken);
    } catch (err) {
      console.log(err);
      dispatch(authActions.logoutHandler());
      // navigate("/");
    }
  };

  // Update auth token every 10 minutes, restarts every time it changes either by this useEffect or user refreshing page
  useEffect(() => {
    // TODO CHANGE ME
    const fiveMinutes = 1000 * 60 * 50;

    setInterval(() => {
      if (localStorage.getItem("token")) {
        updateToken(
          localStorage.getItem("token"),
          localStorage.getItem("refresh")
        );
      }
    }, fiveMinutes);
  }, [localStorage.getItem("token")]);

  const getAccountData = async (userId, accessToken) => {
    const config = {
      method: "get",
      headers: {
        Authorization: accessToken,
      },
    };

    await axiosConfig(`/users/${userId}`, config)
      .then(function (response) {
        dispatch(
          authActions.loginHandler({
            accessToken: accessToken,
            userId: userId,
            accountType: response.data.accountType,
            market: response.data.marketType,
          })
        );
        updateToken(
          localStorage.getItem("token"),
          localStorage.getItem("refresh")
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Prevents losing account/market data if user refreshers
  if (isLoggedIn) {
    getAccountData(
      localStorage.getItem("userId"),
      localStorage.getItem("token")
    );
  }

  return (
    <div className="flex sm:px-6 lg:px-8 bg-gray-900 text-white">
    <div className="w-full">
     <Router>
        <Routes>
            {!isLoggedIn && ( <Route path="/" element={<LoginPage/>} /> )};
            {!isLoggedIn && ( <Route path="/signup" element={<SignupPage/>} /> )};
            {!isLoggedIn && ( <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> )};
            {!isLoggedIn && ( <Route path="/reset-password" element={<ResetPasswordPage/>} /> )};
            {isLoggedIn && ( <Route path="/profile" element={<ProfilePage/>} /> )};
            {isLoggedIn && ( <Route path="/articles" element={<ArticlePage/>} /> )};
            {isLoggedIn && ( <Route path="/feeds" element={<FeedPage/>} /> )};
        </Routes>
      </Router>
    </div>
  </div>
  );
}

export default App;
