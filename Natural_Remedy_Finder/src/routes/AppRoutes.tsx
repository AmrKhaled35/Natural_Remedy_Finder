import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Landing from '../pages/landing'
import AuthPage from '../pages/auth/AuthPage'
import ChatPage from '../pages/chat/ChatPage'
import Profile from '../pages/Profile'
import SettingsPage from '../pages/settings'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      }    
      , 
      {
        path: '/chatbot',
        element: <ChatPage />,
      } ,
      {
        path: '/profile',
        element: <Profile />,
      } 
      , 
      {
        path: '/settings',
        element: <SettingsPage />,
      } 

    ],
  },
])

const AppRouters = () => {
  return <RouterProvider router={Router} />
}

export default AppRouters
