import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Courses from './components/courses/courses.tsx';
import Login from './components/login.tsx';
import FAQs from './components/FAQs.tsx';
import Home from './components/home.tsx';
import LogOut from './components/logout.tsx';
import CourseForm from './components/admin/course-form.tsx';
import Statistics from './components/admin/statistics/statistics.tsx';
import DownloadCourses from './components/download.tsx';
import BuyerForm from './components/buy-form.tsx';

const arrRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <LogOut /> },
      { path: "courses", element: <Courses /> },
      { path: "form", element: <BuyerForm /> },
      { path: "faqs", element: <FAQs /> },

      { path: "edit", element: <CourseForm /> },
      { path: "add", element: <CourseForm /> },
      { path: "statistics", element: <Statistics /> },
      { path: "download", element: <DownloadCourses /> },

      { path: '*', element: <Navigate to="/home" /> }
    ]
  },
  { path: '*', element: <Navigate to="/home" /> }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={arrRouters} />
)
