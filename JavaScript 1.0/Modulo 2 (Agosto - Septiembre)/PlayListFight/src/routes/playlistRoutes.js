const express = require("express"); //importamos express
const { protect } = require("../middlewares/authMiddleware"); //importamos el middleware de autenticacion llamado protect
const { //importamos los controladores de playlist
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  votePlaylist,
  getRanking
} = require("../controllers/playlistController"); //la ruta de los controladores de playlist

const router = express.Router(); //creamos el router

router.get("/", getPlaylists);
router.get("/:id", getPlaylistById);
router.get("/ranking/top", getRanking);

router.post("/", protect, createPlaylist);
router.put("/:id", protect, updatePlaylist);
router.delete("/:id", protect, deletePlaylist);
router.post("/:id/vote", protect, votePlaylist);

module.exports = router; //exportamos el router para usarlo en otro lado
