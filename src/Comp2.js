import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ posts, handleDelete, data }) => {
  return (
    <>
      <div>
        {posts.map((item, ind) => (
          <div>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
        <Comp3 data={data} />
      </div>
    </>
  );
};
export default Comp2;
