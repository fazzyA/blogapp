import React, { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  const [data, setdata] = useState([
    { id: 1, title: "title1", body: "dsasada", author: "JK Rolling" },
    { id: 2, title: "title2", body: "dsasada", author: "JK Rolling" },
    { id: 3, title: "title3", body: "dsasada", author: "JK Rolling" },
    { id: 4, title: "title2", body: "dsasada", author: "JK Rolling" },
    { id: 5, title: "title3", body: "dsasada", author: "JK Rolling" },
  ]);

  function handleDelete(id) {
    const newdata = data.filter((item, ind) => item.id != id);
    console.log(newdata);
    setdata(newdata);
  }
  return (
    <>
      <div>
        {/* //display */}
        <Comp2 posts  handleDelete={handleDelete} />
        {/* <button onClick={()=>handleDelete(1)}>Delete</button> */}
      </div>
    </>
  );
};
export default Comp1;
