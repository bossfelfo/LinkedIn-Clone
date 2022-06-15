import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

import React, { useState, useEffect } from "react";
import { db } from "@firebase";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";
import {
  collection,
  serverTimestamp,
  query,
  addDoc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postRef = collection(db, "posts");
      // const querySnapshot = await getDocs(postRef);

      const q = query(postRef, orderBy("timestamp", "desc"));

      onSnapshot(q, (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };
    fetchPosts();
  }, []);
  //   collection(db, "posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       setPosts(
  //         snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //       );
  //     });
  // }, []);
  const sendPost = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
