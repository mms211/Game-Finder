import React, { useState, useEffect } from 'react';
import Post from '../Post';
import API from '../../utils/API';

const Permalink = (props) => {

  const { id } = props.match.params;

  const [post, setPost] = useState({});
  const [postState, setPostState] = useState("ready");

  useEffect(() => {
    setPostState("loading post");
    API.getPostById(id)
      .then(result => {
        setPost(result.data.data);
        setPostState("resolved");
      });
  }, [id]);

  return (
    <div>
      {postState !== "resolved"
        ? postState
        : <Post
          id={id}
          title={post.title}
          username={post.user}
          body={post.body}
          postType={post.postType}
          createdAt={post.createdAt}
        />}
    </div>
  )
}

export default Permalink;
