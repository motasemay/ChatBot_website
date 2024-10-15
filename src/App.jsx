import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './pages/login/components/Login';
import Home from './pages/home/components/Home';
import Notfound from './components/Notfound';
import Root from './routes/Root';
import Register from './pages/register/components/Register';

import Chatbot from './pages/chatbot/Chatbot.jsx';
import MiniDrawer from './components/MiniDrawer.jsx';
import Settings from './pages/settings/Settings.jsx';
import ChatHistory from './pages/chatHistory/ChatHistory';
import Report from './pages/reports/Reports.jsx';
import NotFounded from './components/NotFounded';


function App() {

  //15/10=======
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    // {  
    //   path: "/*",
    //   element: <Notfound />,
    // },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Chatbot />,
    },

    {
      path: "/",
      element: <MiniDrawer />,
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
    </>
  )
}

export default App
