import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { CalendarViewDayRounded, EventNote } from "@material-ui/icons";
import Post from "./Post";
import { db } from "../../Firebase/firebase";
import firebase from "firebase/compat/app";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Elijah Boahen",
      description: "this is a test post",
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* INPUT OPTIONS */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayRounded}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
              
        />
      ))}
    </div>
  );
};

export default Feed;
