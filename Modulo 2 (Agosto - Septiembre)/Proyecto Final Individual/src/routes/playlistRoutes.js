const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  votePlaylist,
  getRanking
} = require("../controllers/playlistController");
const { 
  validateCreatePlaylist,
  validateGetPlaylistById,
  validateUpdatePlaylist,
  validateDeletePlaylist,
  validateVotePlaylist
} = require("../middlewares/playlistValidator");

const router = express.Router();

//Playlists CRUD
router.post("/", protect, validateCreatePlaylist, createPlaylist);
router.get("/", protect, getPlaylists);
router.get("/:id", protect, validateGetPlaylistById, getPlaylistById);
router.put("/:id", protect, validateUpdatePlaylist, updatePlaylist);
router.delete("/:id", protect, validateDeletePlaylist, deletePlaylist);

//Batallas
router.post("/:id/vote", protect, validateVotePlaylist, votePlaylist);
router.get("/ranking/top", protect, getRanking);

module.exports = router;