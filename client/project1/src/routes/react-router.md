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

`js

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

/_ existing imports _/
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

The app should look something like this now
![](https://reactrouter.com/_docs/tutorial/01.webp)

............................................................................................

# Handling Not Found Errors

It's always a good idea to know how your app responds to errors early in the project because we all write far more bugs than features when building a new app! Not only will your users get a good experience when this happens, but it helps you during development as well.

We added some links to this app, let's see what happens when we click them?

👉 Click one of the sidebar names
![](https://reactrouter.com/_docs/tutorial/02.webp)

screenshot of default React Router error element
Gross! This is the default error screen in React Router, made worse by our flex box styles on the root element in this app 😂.

Anytime your app throws an error while rendering, loading data, or performing data mutations, React Router will catch it and render an error screen. Let's make our own error page.

👉 Create an error page component

- touch src/error-page.jsx

`
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError();
console.error(error);

return (
<div id="error-page">
<h1>Oops!</h1>
<p>Sorry, an unexpected error has occurred.</p>
<p>
<i>{error.statusText || error.message}</i>
</p>
</div>
);
}
`
👉 Set the <ErrorPage> as the errorElement on the root route

/_ previous imports _/
import ErrorPage from "./error-page";

const router = createBrowserRouter([
{
path: "/",
element: <Root />,
errorElement: <ErrorPage />,
},
]);

![](https://reactrouter.com/_docs/tutorial/03.webp)

.....................................................................................................

# The Contact Route UI

Instead of a 404 "Not Found" page, we want to actually render something at the URLs we've linked to. For that, we need to make a new route.

👉 Create the contact route module

touch src/routes/contact.jsx

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

......................................................................
# Nested Routes
We want the contact component to render inside of the <Root> layout like this.
![](https://reactrouter.com/_docs/tutorial/05.webp)


We do it by making the contact route a child of the root route.

👉 Move the contacts route to be a child of the root route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
You'll now see the root layout again but a blank page on the right. We need to tell the root route where we want it to render its child routes. We do that with <Outlet>.

Find the <div id="detail"> and put an outlet inside

👉 Render an <Outlet>

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
