import React, { useState, useEffect } from "react";
import Post from "../Post";
import API from "../../utils/API";
import NavBar from "../NavBar";

const Permalink = (props) => {
  const { id } = props.match.params;

  const [post, setPost] = useState({});
  const [postState, setPostState] = useState("ready");
  const [comments, setComments] = useState({});
  const [commentsState, setCommentsState] = useState("ready");

  useEffect(() => {
    setPostState("loading post");
    setCommentsState("loading comments");
    API.getPostById(id).then((result) => {
      setPost(result.data.data);
      setPostState("resolved");
    });
    API.getCommentsByPost(id).then((result) => {
      setComments(result.data.data);
      setCommentsState("resolved");
    });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {postState !== "resolved" ? (
          postState
        ) : (
          <Post
            title={post.title}
            username={post.user}
            body={post.body}
            postType={post.postType}
            createdAt={post.createdAt}
          />
        )}
      </div>
    </>
  );
};

export default Permalink;
