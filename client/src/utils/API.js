import axios from "axios";

export default {

  // === AUTHENTICATION ===
  checkTokens: () => {
    return axios.get("/api/checkToken");
  },
  getCurrentUser: () => {
    return axios.get("/api/users/current");
  },

  // === POST CRUD ===
  getAllPosts: () => {
    return axios.get("/api/posts/all");
  },
  savePost: (postData) => {
    return axios.post("/api/posts/add", postData);
  },
  deletePost: (id) => {
    return axios.delete("/api/posts/delete/" + id);
  },

  // === COMMENT CRUD ===
  saveComment: (commentData) => {
    return axios.post("/api/comments/add", commentData);
  },
  boardGameAtlasSearch: (url) => {
    return axios.put('/api/search', { url: url });
  }
}
