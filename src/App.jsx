import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './pages/login/components/Login';
import Home from './pages/home/components/Home';
import Notfound from './components/Notfound';
import Root from './routes/Root';
import Register from './pages/register/components/Register';

import Chatbot from './pages/chatbot/Chatbot.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }, 
    {
      path: "/chat",
      element: <Chatbot />,
    },{
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path:"/chatbot",
          element:<Chatbot/>
        },
        {
          path: "/*",
          element: <Notfound />,
        }
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
