// @ts-nocheck
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import './App.css'
import Login from './pages/login/components/Login';
import Home from './pages/home/components/Home';
import Notfound from './components/Notfound';
import Register from './pages/register/components/Register';

import Chatbot from './pages/chatbot/Chatbot.jsx';
import Root from './routes/Root.jsx';
import Settings from './pages/settings/Settings.jsx';
import ChatHistory from './pages/chatHistory/ChatHistory';
import Report from './pages/reports/Reports.jsx';
import NotFounded from './components/NotFounded';
import { useState } from 'react';
import ProtectedRoutes from './auth/ProtectedRoutes';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("userToken"));




  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <Notfound />,
    },
    {
      path: "/login",
      element: <Login setIsLogin={setIsLogin} />,
    },


    {
      path: "/",
      element:
        <ProtectedRoutes>
          <Root setIsLogin={setIsLogin} />
        </ProtectedRoutes>,
      children: [
        {
          path: "/",
          element: <Chatbot />,
        },

        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/chatbot",
          element: <Chatbot />
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/chatHistory",
          element: <ChatHistory />,
        },
        {
          path: "/reports",
          element: <Report />,
        },
        {
          path: "/*",
          element: <NotFounded />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]
    },


  ]);
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  )
}

export default App
