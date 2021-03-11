import { useState, useEffect } from "react";

import { getAll } from "../../services/postService";

import PostItem from "../post-item";
import styles from "./PostList.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAll().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
