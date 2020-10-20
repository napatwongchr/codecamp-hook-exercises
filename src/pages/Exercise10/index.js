import React, { useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { UserContext } from "../../contexts/user-context";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";

function Exercise10() {
  const [user] = useState("John");
  const [theme] = useState("light");
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useReducer)"
        description="Make Post App be able to Add / Edit / Delete with useReducer"
      />
      <ThemeContext.Provider value={{ theme }}>
        <UserContext.Provider value={{ user: user }}>
          <PostList posts={mockedPosts} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default Exercise10;
