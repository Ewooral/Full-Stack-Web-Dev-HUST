/* eslint-disable prettier/prettier */
import { Form } from 'react-router-dom';

export default function Contact() {
  const contact = {
    first: null,
    last: null,
    avatar: 'https://placekitten.com/g/200/200',
    pic: 'https://i.imgur.com/gHjkgN6.jpeg',
    pic1: 'https://i.imgur.com/ZVJmUVF.png',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.pic1 || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`} rel="noreferrer">
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form action="what">
            <button type="send">What?</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Favorite({ contact }) {
  // yes, this is a `let` for later
  // eslint-disable-next-line react/prop-types
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}

const Meet = () => {
  return (
    <>
      <div className="">who</div>
      <button></button>
    </>
  );
};
