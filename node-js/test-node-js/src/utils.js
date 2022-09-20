const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");
const UpVote = require("./entity/UpVote");
const Photo = require("./entity/Photo");

// Identifiant de connexion à la base de donnée et choix des tables à récupérer
const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./test.db",
  // permet de construire le chemin et les tables si elle ne sont pas créée
  synchronize: true,
  entities: [Wilder, Skill, UpVote, Photo],
  // option d'affichage des erreur et requête SQL dans la console
  logging: ["query", "error"],
});

module.exports = dataSource;
