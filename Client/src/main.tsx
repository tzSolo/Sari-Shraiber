import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Gallery from './components/gallery/gallery.tsx';
import Courses from './components/courses/courses.tsx';
import Contact from './components/contact.tsx';

const arrRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "courses", element: <Courses /> },
      { path: "gallery", element: <Gallery /> },
      { path: "photoshop", element: <Courses /> },
      { path: "albums", element: <Gallery /> },
      { path: "imageprocessing", element: <Courses /> },
      { path: "contact", element: <Contact /> },

      { path: '*', element: <Navigate to="/" /> }
    ]
  },
  { path: '*', element: <Navigate to="/" /> }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={arrRouters} />
)
