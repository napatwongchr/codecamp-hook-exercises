import React, { useState } from "react";
import { UserContext } from "../../contexts/user-context";
import PostList from "../../components/PostList";
import Instruction from "../../components/Instruction";
import mockedPosts from "../../mocks/posts";

function Exercise7() {
  const [user] = useState("John");
  return (
    <div className="page-container">
      <div className="theme-button"></div>
      <Instruction
        topic="Posts App"
        description="Action menu need user's state to show 'You are John' instead of 'You are ...', So Context API ?"
      />
      <UserContext.Provider value={{ user: user }}>
        <PostList posts={mockedPosts} />
      </UserContext.Provider>
    </div>
  );
}

export default Exercise7;
