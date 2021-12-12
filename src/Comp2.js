import React from "react";

const Comp2 = ({ posts, handleDelete }) => {
  return (
    <>
      <div>
        {posts.map((item, ind) => (
          <div>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Comp2;
