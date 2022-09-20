const typeorm = require("typeorm");

// création d'une entité Wilder (Table base de donnée)
const EntityShema = typeorm.EntitySchema;

// Export du modèle de la table Wilder
module.exports = new EntityShema({
  name: "Photo",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    url: {
      type: "text",
      unique: true,
    },
  },
});
