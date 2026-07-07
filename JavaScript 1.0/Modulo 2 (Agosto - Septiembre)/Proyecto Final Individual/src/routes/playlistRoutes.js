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
const { validateDataBase } = require ('../middlewares/dataBaseValidator')

const router = express.Router();

//Playlists CRUD
router.post("/", validateDataBase, protect, validateCreatePlaylist, createPlaylist);
router.get("/", validateDataBase, protect, getPlaylists);
router.get("/:id", validateDataBase, protect, validateGetPlaylistById, getPlaylistById);
router.put("/:id", validateDataBase, protect, validateUpdatePlaylist, updatePlaylist);
router.delete("/:id", validateDataBase, protect, validateDeletePlaylist, deletePlaylist);

//Batallas
router.post("/:id/vote", validateDataBase, protect, validateVotePlaylist, votePlaylist);
router.get("/ranking/top", validateDataBase, protect, getRanking);

module.exports = router;