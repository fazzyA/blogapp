import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setblogs] = React.useState([
    { id: 1, title: "Hp", description: "dsasada", author: "JK Rolling" },
    { id: 2, title: "Hp", description: "dsasada", author: "JK Rolling" },
    { id: 3, title: "Hp", description: "dsasada", author: "JK Rolling" },
  ]);

  const [name, setname] = useState("faiza");

  useEffect(() => {
    console.log("useeffect running");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      const blogs = res.data.slice(0, 11);
      setblogs(blogs);
    });
  }, []);

  return (
    <div>
      {blogs.map((item, ind) => (
        <div key={ind} className='blog'>{item.title}</div>
      ))}
      {/* <button onClick={() => setname("Seher")}>Change state</button> */}
    </div>
  );
};

export default Home;
