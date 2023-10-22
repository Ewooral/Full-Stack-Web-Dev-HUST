import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" name="" id="" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="feed__inputOptions">
        {/* INPUT OPTIONS */}
        <InputOption />
      </div>
    </div>
  );
};

export default Feed;
