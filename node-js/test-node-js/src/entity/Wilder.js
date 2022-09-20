const typeorm = require("typeorm");

// création d'une entité Wilder (Table base de donnée)
const EntityShema = typeorm.EntitySchema;

// Export du modèle de la table Wilder
module.exports = new EntityShema({
  name: "Wilder",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
    },
    description: {
      type: "text",
    },
  },
  relations: {
    // photo: {
    //   target: "Photo",
    //   type: "one-to-one",
    //   joinTable: true,
    //   joinColumn: true,
    //   eager: true,
    // },
    upvotes: {
      target: "UpVote",
      type: "one-to-many",
      inverseSide: "wilder",
    }
  },
});
