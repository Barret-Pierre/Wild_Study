const dataSource = require("../utils");
const Wilder = require("../entity/Wilder");
const repository = dataSource.getRepository(Wilder);


module.exports = {
  // Insertion d'un nouveau wilder dans le repository Wilder (table wilder)
  create: async (req, res) => {
    try {
      const savedWilder = await repository.save(req.body);
      console.log("Wilders created !");
      res.status(201).json({ savedWilder });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error while creating wilder" });
    }
  },

  readAll: async (req, res) => {
    try {
      const allWilders = await repository.find({relations: ["upvotes", "upvotes.skill"]})
      console.log("Wilders found");
      res.status(200).json({ allWilders }); 
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error wilders not found" });
    }
  },

  readOne: async (req, res) => {
    try {
      const oneWilder = await repository.findOneByOrFail({
        id: req.params.wilderId,
      });
      console.log("Wilder found");
      res.status(200).json({ oneWilder });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error wilder not found" });
    }
  },

  update: async (req, res) => {
    try {
      const oneWilder = await repository.findOneByOrFail({
        id: req.params.wilderId,
      });

      console.log("Wilder found");
      oneWilder.name = req.body.name;
      oneWilder.description = req.body.description;
      oneWilder.photos = req.body.photos
      try {
        const savedWilder = await repository.save(oneWilder);
        console.log("Wilder updated");
        res.status(201).json({ savedWilder });
      } catch (error) {
        console.error(error);
        res
          .status(404)
          .json({ succes: false, message: "Error while updating wilder" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error wilder not found" });
    }
  },

  delete: async (req, res) => {
    try {
      const oneWilder = await repository.findOneByOrFail({
        id: req.params.wilderId,
      });
      console.log("Wilder found");
      try {
        const deletedWilder = await repository.remove(oneWilder);
        console.log("Wilder removed");
        res.status(201).json({ succes: true });
      } catch (error) {
        console.error(error);
        res.json({ succes: false, message: "Error wilder not removed" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error wilder not found" });
    }
  },
};
