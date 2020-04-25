import axios from "axios";

export default {
  // Gets all posts
  getAllPosts: function() {
    return axios.get("/api/posts/all");
  },
  savePost: function(postData) {
    return axios.post("/api/posts/add", postData);
  },
  deletePost: function(id) {
    return axios.delete("/api/posts/delete/" + id);
  },
  boardGameAtlasSearch: (url) => {
    return axios.put('/api/search', { url: url });
  }
};
