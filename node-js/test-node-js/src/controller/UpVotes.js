const dataSource = require("../utils");
const UpVote = require("../entity/UpVote");
const repository = dataSource.getRepository(UpVote);

module.exports = {
  create: async (req, res) => {
    try {
      const upvote = {...req.body, vote: 0};
      const savedUpVote = await repository.save(upvote);
      console.log("Upvote created !");
      res.status(201).json({ savedUpVote });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error while creating skill" });
    }
  },
  
  readAll: async (req, res) => {
    try {
      const allUpVotes = await repository.find({});
      console.log("Upvotes found");
      res.status(200).json({ allUpVotes });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error upvotes not found" });
    }
  },

  update: async (req, res) => {
    try {
      const oneUpVote = await repository.findOneByOrFail({ id: req.params.upVoteId })
      console.log("Upvote found");
      oneUpVote.vote ++;
      try {
        const savedUpVote = await repository.save(oneUpVote);
        console.log("Upvote updated");
        res.status(201).json({ savedUpVote });
      } catch (error) {
        console.error(error);
        res
          .status(404)
          .json({ succes: false, message: "Error while upvote skill" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error upvote not found" });
    }
  },

  readAll: async (req, res) => {
    try {
      const allUpVotes = await repository.find({});
      console.log("Upvotes found");
      res.status(200).json({ allUpVotes });
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error upvotes not found" });
    }
  },

  // readOne: async (req, res) => {
  //   try {
  //     const oneUpVote = await repository.findOneByOrFail({
  //       id: req.params.upVoteId,
  //     });
  //     console.log("Upvote found");
  //     res.status(200).json({ oneUpVote });
  //   } catch (error) {
  //     console.error(error);
  //     res
  //       .status(404)
  //       .json({ succes: false, message: "Error upvote not found" });
  //   }
  // },

  delete: async (req, res) => {
    try {
      const oneUpVote = await repository.findOneByOrFail({
        id: req.params.skillId,
      });
      console.log("Upvote found");
      try {
        await repository.remove(oneUpVote);
        console.log("Upvote removed");
        res.status(201).json({ succes: true });
      } catch (error) {
        console.error(error);
        res.json({ succes: false, message: "Error upvote not removed" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(404)
        .json({ succes: false, message: "Error upvote not found" });
    }
  },
};
