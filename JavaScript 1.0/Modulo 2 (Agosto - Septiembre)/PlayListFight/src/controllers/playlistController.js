const Playlist = require("../models/Playlist");

// Crear playlist
exports.createPlaylist = async (req, res) => {
  try {
    const { titulo, descripcion, canciones } = req.body;

    const playlist = await Playlist.create({ //crea la playlist con los datos que vienen en el cuerpo de la peticion y ademas agrega el id del usuario que la creo, create sirve para crear un nuevo documento en la base de datos
      titulo,
      descripcion,
      canciones,
      autor: req.user._id //req.user._id es el id del usuario
    });

    res.status(201).json(playlist);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

// Listar playlists
exports.getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate("autor", "username"); //esta linea busca todas las playlists en la base de datos y ademas llena el campo autor con el username del usuario que la creo, populate cambia el campo autor que es un id por el username del usuario
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener playlist por ID
exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate("autor", "username"); //esta linea guarda la playlist que tenga el id que viene en los parametros de la peticion y ademas llena el campo autor con el username del usuario que la creo, populate cambia el campo autor que es un id por el username del usuario
    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada 😞😞" });

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar playlist propia
exports.updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id); //busca la playlist por el id que viene en los parametros de la peticion

    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada 🥲🥲" }); //si no existe la playlist
    if (playlist.autor.toString() !== req.user._id.toString()) { //verifica que el id del autor de la playlist sea igual al id del usuario que hizo la peticion
      return res.status(403).json({ message: "No puedes editar esta playlist 😑😑" });
    }

    Object.assign(playlist, req.body); //actualiza la playlist con los datos que vienen en el cuerpo de la peticion
    await playlist.save(); //guarda los cambios en la base de datos

    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar playlist propia
exports.deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id); //busca la playlist por el id que viene en los parametros de la peticion

    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada 🥲🥲" }); //si no existe la playlist
    if (playlist.autor.toString() !== req.user._id.toString()) { //verifica que el id del autor de la playlist sea igual al id del usuario que hizo la peticion
      return res.status(403).json({ message: "No puedes eliminar esta playlist 😑😑" });
    }

    await playlist.deleteOne(); //elimina la playlist de la base de datos
    res.json({ message: "Playlist eliminada 😊😊" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Votar por una playlist
exports.votePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id); //busca la playlist por el id que viene en los parametros de la peticion

    if (!playlist) return res.status(404).json({ message: "Playlist no encontrada 🥲🥲" }); //si no existe la playlist

    if (playlist.votantes.includes(req.user._id)) { //verifica si el id del usuario que hizo la peticion ya esta en el array de votantes
      return res.status(400).json({ message: "Ya votaste esta playlist 😅😅" });
    }

    playlist.votos += 1; //incrementa el numero de votos en 1
    playlist.votantes.push(req.user._id); //agrega el id del usuario que hizo la peticion al array de votantes
    await playlist.save(); //guarda los cambios en la base de datos

    res.json({ message: "Voto registrado 🤑🤑", votos: playlist.votos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ranking de playlists
exports.getRanking = async (req, res) => {
  try {
    const ranking = await Playlist.find() //busca todas las playlists en la base de datos y las guarda en la variable ranking
      .sort({ votos: -1 }) //ordena las playlists por el numero de votos de mayor a menor
      .limit(10) //limita el resultado a las 10 primeras playlists
      .populate("autor", "username"); //llena el campo autor con el username del usuario que la creo, populate cambia el campo autor que es un id por el username del usuario

    res.json(ranking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
