import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/usersSlice";

import React from "react";

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <div>
      <span>by {author ? author.name : "Unknown author"}</span>
    </div>
  );
};

export default PostAuthor;
