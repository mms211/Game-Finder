import axios from "axios";

export default {
  // === AUTHENTICATION ===
  checkTokens: () => {
    return axios.get("/api/checkToken");
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
  boardGameAtlasSearch: (url) => {
    return axios.put('/api/search', { url: url });
  }
}
