const dataSource = require("../utils");
const Photo = require("../entity/Photo");
const repository = dataSource.getRepository(Photo);

module.exports = {
  create: async (req, res) => {
    try {
      const savedPhoto = await repository.save(req.body);
      console.log("Photo created !");
      res.status(201).json({ savedPhoto });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error while creating Photo" });
    }
  },

  readAll: async (req, res) => {
    try {
      const allPhotos = await repository.find();
      console.log("Photos found");
      res.status(200).json({ allPhotos });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error photos not found" });
    }
  },

  readOne: async (req, res) => {
    try {
      const onePhoto = await repository.findOneByOrFail({
        id: req.params.PhotoId,
      });
      console.log("Photo found");
      res.status(200).json({ onePhoto });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error Photo not found" });
    }
  },

  update: async (req, res) => {
    try {
      const onePhoto = await repository.findOneByOrFail({ id: req.params.PhotoId })
      console.log("Photo found");
      onePhoto.url = req.body.url;
      try {
        const savedPhoto = await repository.save(onePhoto);
        console.log("Photo updated");
        res.status(201).json({ savedPhoto });
      } catch (error) {
        console.error(error);
        res
          .status(404)
          .json({ succes: false, message: "Error while updating Photo" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error Photo not found" });
    }
  },

  delete: async (req, res) => {
    try {
      const onePhoto = await repository.findOneByOrFail({
        id: req.params.photoId,
      }); 
      console.log("Photo found");
      try {
        const deletedPhoto = await repository.remove(onePhoto);
        console.log("Photo removed");
        res.status(201).json({ succes: true });
      } catch (error) {
        console.error(error);
        res.json({ succes: false, message: "Error Photo not removed" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error Photo not found" });
    }
  },
};
