import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getContacts } from '../contacts';

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

const Root = () => {
  const { contacts } = useLoaderData();
  return (
    <>
      <div className="sidebar">
        <h1>React Router Contacts</h1>
        <div className="flex space-x-4 ">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="search contacts"
              placeholder="search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>

          <form method="post">
            <button className="hover:bg-blue-300 hover:text-white" type="submit">
              New
            </button>
          </form>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="contacts/1">Contact Page1</Link>
            </li>
            <li>
              <Link to="contacts/2">Contact Page2</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Render Contact Page here */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
