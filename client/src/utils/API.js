import axios from "axios";

export default {
  // Gets all posts
  getAllPosts: function() {
    return axios.get("/api/posts/all");
  },
  savePost: function(postData) {
    return axios.post("/api/posts/add", postData);
  }
  
};
