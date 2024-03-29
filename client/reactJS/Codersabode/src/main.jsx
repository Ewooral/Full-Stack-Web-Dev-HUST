import React from 'react';
import ReactDOM from 'react-dom/client';

// ROUTES
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root';
import ErrorPage from './pages/errors/ErrorPage';
import Contact from './routes/Contact';
import Search from './routes/Search.jsx';
import TodoApp from './routes/Todo';
import Welcome from './components/Welcome';
// import Header from './components/Header';

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
        path: 'welcome/',
        element: <Welcome />
      },

      {
        path: 'contacts/:contactId',
        element: <Contact />
      },
      {
        path: 'search/',
        element: <Search />
      },
      {
        path: 'todo/',
        element: <TodoApp />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
