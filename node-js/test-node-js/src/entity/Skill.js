const typeorm = require("typeorm");

// création d'une entité Wilder (Table base de donnée)
const EntityShema = typeorm.EntitySchema;

// Export du modèle de la table Wilder
module.exports = new EntityShema({
  name: "Skill",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
      unique: true,
    },
  },
  relations: {
    upvotes: {
      target: "UpVote",
      type: "one-to-many",
      inverseSide: "skill",
    }
  },
});
