import React, { useState } from "react";
import { UserContext } from "../../contexts/user-context";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";

function Exercise10() {
  const [user, setUser] = useState("John");
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useReducer)"
        description="Make Post App be able to Add / Edit / Delete with useReducer"
      />
      <UserContext.Provider value={{ user: user }}>
        <PostList posts={mockedPosts} />
      </UserContext.Provider>
    </div>
  );
}

export default Exercise10;
