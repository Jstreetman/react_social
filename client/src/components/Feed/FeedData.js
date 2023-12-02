import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard";
const FeedData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/users/posts")
      .then((response) => response.json())
      .then((postData) => {
        setPosts(postData.reverse());
      })
      .catch((error) => {
        console.log("Error while fetching posts:", error);
      });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <FeedCard
          key={post.id}
          postId={post.postId}
          pDate={post.pDate}
          username={post.username}
          pText={post.pText}
        />
      ))}
    </div>
  );
};
export default FeedData;
