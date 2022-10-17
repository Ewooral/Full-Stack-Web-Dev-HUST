# Adding a Router

First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.

The main.jsx file is the entry point. Open it up and we'll put React Router on the page.

👉 Create and render a browser router in main.jsx

`jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
`

This first route is what we often call the `root route`since the rest of our routes will render inside of it. It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.




........................................................................................................
# The Root Route
Let's add the global layout for this app.

👉 Create src/routes and src/routes/root.jsx

mkdir src/routes
touch src/routes/root.jsx
(If you don't want to be a command line nerd, use your editor instead of those commands 🤓)

👉 Create the root layout component

`jsx

const Root = () => {
    return (
        <>
            <h1>This is the Root Route</h1>
            <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </>
    )
}

`

👉 Set <Root> as the root route's element

/* existing imports */
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




............................................................................................
# Handling Not Found Errors
It's always a good idea to know how your app responds to errors early in the project because we all write far more bugs than features when building a new app! Not only will your users get a good experience when this happens, but it helps you during development as well.

We added some links to this app, let's see what happens when we click them?

👉 Click one of the sidebar names

screenshot of default React Router error element
Gross! This is the default error screen in React Router, made worse by our flex box styles on the root element in this app 😂.

Anytime your app throws an error while rendering, loading data, or performing data mutations, React Router will catch it and render an error screen. Let's make our own error page.

👉 Create an error page component

touch src/error-page.jsx


