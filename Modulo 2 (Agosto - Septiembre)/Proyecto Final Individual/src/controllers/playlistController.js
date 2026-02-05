const Playlist = require("../models/Playlist");
const AppError = require("../utils/errorHandler");

// Crear playlist
exports.createPlaylist = async (req, res, next) => {
  try {
    const { titulo, descripcion, canciones } = req.body;

    const playlist = await Playlist.create({
      titulo,
      descripcion,
      canciones,
      autor: req.user._id
    });

    res.status(201).json(playlist);
  } catch (error) {
    next(error);
  }
};

// Listar playlists
exports.getPlaylists = async (req, res, next) => {
  try {
    const playlists = await Playlist.find().populate("autor", "username");
    res.json(playlists);
  } catch (error) {
    next(error);
  }
};

// Obtener playlist por ID
exports.getPlaylistById = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate("autor", "username");
    if (!playlist) 
      throw new AppError("Playlist no encontrada", 404);

    res.json(playlist);
  } catch (error) {
    next(error);
  }
};

// Actualizar playlist propia
exports.updatePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) 
      throw new AppError("Playlist no encontrada", 404);
    if (playlist.autor.toString() !== req.user._id.toString()) {
      throw new AppError("No puedes editar esta playlist, no eres el autor", 403);
    }

    Object.assign(playlist, req.body);
    await playlist.save();

    res.json(playlist);
  } catch (error) {
    next(error);
  }
};

// Eliminar playlist propia
exports.deletePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) 
      throw new AppError("Playlist no encontrada", 404);
    if (playlist.autor.toString() !== req.user._id.toString()) {
      throw new AppError("No puedes eliminar esta playlist, no eres el autor", 403);
    }

    await playlist.deleteOne();
    res.json({ message: "Playlist eliminada" });
  } catch (error) {
    next(error);
  }
};

// Votar por una playlist
exports.votePlaylist = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) 
      throw new AppError("Playlist no encontrada", 404);

    if (playlist.votantes.includes(req.user._id)) {
      throw new AppError("Ya votaste esta playlist", 400);
    }

    playlist.votos += 1;
    playlist.votantes.push(req.user._id);
    await playlist.save();

    res.json({ message: "Voto registrado", votos: playlist.votos });
  } catch (error) {
    next(error);
  }
};

// Ranking de playlists
exports.getRanking = async (req, res, next) => {
  try {
    const ranking = await Playlist.find()
      .sort({ votos: -1 })
      .limit(10)
      .populate("autor", "username");

    res.json(ranking);
  } catch (error) {
    next(error);
  }
};