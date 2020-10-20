import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import "./index.css";

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  const { title, description, author } = props;
  const { theme } = useContext(ThemeContext);
  const postClass = theme === "light" ? "post" : "post post-dark";
  const postTitlteClass =
    theme === "light" ? "post-title" : "post-title post-title-dark";
  const postDescription =
    theme === "light"
      ? "post-description"
      : "post-description post-description-dark";
  const postAuthor =
    theme === "light" ? "post-author" : "post-author post-author-dark";
  return (
    <div className={postClass}>
      <h1 className={postTitlteClass}>{title}</h1>
      <p className={postDescription}>{description}</p>
      <p className={postAuthor}>Author: {author}</p>
      <ActionMenu />
    </div>
  );
}

function ActionMenu() {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const postUserClass =
    theme === "light" ? "post-user" : "post-user post-user-dark";
  const editButtonClass =
    theme === "light"
      ? "button post-edit-action-button"
      : "button post-edit-action-button post-edit-action-button-dark";
  const deleteButtonClass =
    theme === "light"
      ? "button post-delete-action-button"
      : "button post-delete-action-button post-delete-action-button-dark";
  return (
    <div className="post-actions">
      <span className={postUserClass}>You are {user.user}</span>
      <button className={editButtonClass}>Edit</button>
      <button className={deleteButtonClass}>Delete</button>
    </div>
  );
}

export default PostList;
