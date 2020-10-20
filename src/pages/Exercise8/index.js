import React, { useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";
import "./index.css";

function Exercise8() {
  const [user] = useState("John");
  const [theme, setTheme] = useState("light");

  function handleThemeChange() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <div className="page-container">
      <Instruction
        topic="Posts App Theme"
        description="Change theme of posts app with Context API"
      />
      <div className="page-change-theme-button" onClick={handleThemeChange}>
        {theme === "light" ? "dark" : "light"}
      </div>
      <ThemeContext.Provider value={{ theme }}>
        <UserContext.Provider value={{ user }}>
          <PostList posts={mockedPosts} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default Exercise8;
