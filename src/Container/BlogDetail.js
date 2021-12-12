import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    id: 1,
    title: "Hp",
    description: "dsasada",
    author: "JK Rolling",
  });
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      });
  }, [id]);
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
