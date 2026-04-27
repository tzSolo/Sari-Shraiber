import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Courses from './components/courses/courses.tsx';
import Home from './components/home.tsx';
import Form from './components/buy-form.tsx';
import Login from './components/login.tsx';
import FAQs from './components/FAQs.tsx';

const arrRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "courses", element: <Courses /> },
      { path: "form", element: <Form /> },
      { path: "faqs", element: <FAQs /> },

      { path: '*', element: <Navigate to="/" /> }
    ]
  },
  { path: '*', element: <Navigate to="/" /> }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={arrRouters} />
)
