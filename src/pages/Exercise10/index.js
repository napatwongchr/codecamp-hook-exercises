import React, { useState, useReducer } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";

import "./index.css";

function postReducer(state, action) {
  switch (action.type) {
    case "POST_ADD":
      return { ...state, posts: [...state.posts, action.payload.newPost] };
    case "POST_EDIT":
      return { ...state, posts: action.payload.newPosts };
    case "POST_DELETE":
      return { ...state, posts: [...action.payload.newPosts] };
    default:
      return state;
  }
}

const initialState = {
  posts: mockedPosts,
};

function Exercise10() {
  const [user] = useState("John");
  const [theme] = useState("light");
  const [state, dispatch] = useReducer(postReducer, initialState);

  function handleEditPost(postId) {
    const newPosts = state.posts.map((post) => {
      return { ...post };
    });
    const postIndex = newPosts.findIndex((post) => post.id === postId);
    const newPostDescription = prompt("Edit new post description");
    newPosts[postIndex].description = newPostDescription;
    dispatch({
      type: "POST_EDIT",
      payload: {
        newPosts,
      },
    });
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

    dispatch({
      type: "POST_ADD",
      payload: {
        newPost,
      },
    });
  }

  function handleDeletePost(postId) {
    const newPosts = state.posts.filter((post) => post.id !== postId);
    dispatch({
      type: "POST_DELETE",
      payload: {
        newPosts,
      },
    });
  }

  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useReducer)"
        description="Make Post App be able to Add / Edit / Delete with useReducer"
      />
      <div className="page-add-post-button" onClick={handleAddPost}>
        Add
      </div>
      <ThemeContext.Provider value={{ theme }}>
        <UserContext.Provider value={{ user: user }}>
          <PostList
            posts={state.posts}
            handleEditPost={handleEditPost}
            handleDeletePost={handleDeletePost}
          />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default Exercise10;
