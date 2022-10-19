import React from 'react';
import ReactDOM from 'react-dom/client';

// ROUTES
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root';
import ErrorPage from './pages/errors/ErrorPage';
import Contact from './routes/Contact';

// CSS FILES
import './index.css';
import './try.css';

// root route
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
