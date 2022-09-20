const dataSource = require("../utils");
const Skill = require("../entity/Skill");
const repository = dataSource.getRepository(Skill);

module.exports = {
  create: async (req, res) => {
    try {
      const savedSkill = await repository.save(req.body);
      console.log("Skill created !");
      res.status(201).json({ savedSkill });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error while creating skill" });
    }
  },

  readAll: async (req, res) => {
    try {
      const allSkills = await repository.find();
      console.log("Skills found");
      res.status(200).json({ allSkills });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error skills not found" });
    }
  },

  readOne: async (req, res) => {
    try {
      const oneSkill = await repository.findOneByOrFail({
        id: req.params.skillId,
      });
      console.log("Skill found");
      res.status(200).json({ oneSkill });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error skill not found" });
    }
  },

  update: async (req, res) => {
    try {
      const oneSkill = await repository.findOneByOrFail({ id: req.params.skillId })
      console.log("Skill found");
      oneSkill.name = req.body.name;
      try {
        const savedSkill = await repository.save(oneSkill);
        console.log("Skill updated");
        res.status(201).json({ savedSkill });
      } catch (error) {
        console.error(error);
        res
          .status(404)
          .json({ succes: false, message: "Error while updating skill" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error skill not found" });
    }
  },

  delete: async (req, res) => {
    try {
      const oneSkill = await repository.findOneByOrFail({
        id: req.params.skillId,
      });
      console.log("Skill found");
      try {
        const deletedSkill = await repository.remove(oneSkill);
        console.log("Skill removed");
        res.status(201).json({ succes: true });
      } catch (error) {
        console.error(error);
        res.json({ succes: false, message: "Error skill not removed" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error skill not found" });
    }
  },
};
