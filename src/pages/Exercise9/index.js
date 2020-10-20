import React, { useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";
import "./index.css";

function Exercise9() {
  const [user] = useState("John");
  const [theme] = useState("light");
  const [posts, setPosts] = useState(mockedPosts);

  function handleDeletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }

  function handleEditPost(id) {
    // copy new array and manipulate them,
    // we should not manipulate posts state directly
    // You can use lodash or simple Array.map trick to clone deeply
    const newPosts = posts.map((post) => {
      return { ...post };
    });
    const postIndex = newPosts.findIndex((post) => post.id === id);
    const newPostDescription = prompt("Edit new post description");
    newPosts[postIndex].description = newPostDescription;
    setPosts(newPosts);
  }

  function handleAddPost() {
    const newTitle = prompt("Add post title");
    const newDescription = prompt("Add post description");

    const newPost = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: newTitle,
      description: newDescription,
      author: "John เอง",
    };
    // We should not do posts.push(),
    // best practice is to avoid manipulate mutate states directly
    // so, we create new array and add newPost at the end of array
    setPosts([...posts, newPost]);
  }

  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useState)"
        description="Make Post App be able to Add / Edit / Delete with useState"
      />
      <div className="page-add-post-button" onClick={handleAddPost}>
        Add
      </div>
      <ThemeContext.Provider value={{ theme }}>
        <UserContext.Provider value={{ user: user }}>
          <PostList
            posts={posts}
            handleEditPost={handleEditPost}
            handleDeletePost={handleDeletePost}
          />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default Exercise9;
