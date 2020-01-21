//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import LikeSection from "./LikeSection";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(p => (
        <Post postData={p}/>
      ))}
      
    </div>
  );
};

export default PostsPage;

