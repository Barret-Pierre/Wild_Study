const typeorm = require("typeorm");

// création d'une entité Wilder (Table base de donnée)
const EntityShema = typeorm.EntitySchema;

// Export du modèle de la table Wilder
module.exports = new EntityShema({
  name: "UpVote",
  indices: [
    {
      name: "skillId_wilderId_unique",
      columns: ["wilder", "skill"],
      unique: true,
    },
  ],
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    vote: {
      type: "int",
    },
  },
  relations: {
    skill: {
      target: "Skill",
      type: "many-to-one",
      inverseSide: "upvotes",
      onDelete: "CASCADE"
    },
    wilder: {
      target: "Wilder",
      type: "many-to-one",
      inverseSide: "upvotes",
      onDelete: "CASCADE"
    },
  },
});
