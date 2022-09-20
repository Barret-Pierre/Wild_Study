const express = require("express");
const cors = require("cors");
const dataSource = require("./utils");
const wilderController = require("./controller/Wilders");
const skillController = require("./controller/Skills");
const upvoteController = require("./controller/Upvotes");
const photoController = require("./controller/Photos");

const app = express();

// middleware permettant la serialization JSON des requettes HTTP
app.use(express.json());
app.use(cors());

//   Requete http get sur la route d'accueil "/"
app.get("/", (req, res) => {
  res.send("Bienvenue");
});

/*
  Requete http Wilders
*/  
app.get("/api/wilders", wilderController.readAll);
app.post("/api/wilders", wilderController.create);
app.put("/api/wilders/:wilderId", wilderController.update);
app.get("/api/wilders/:wilderId", wilderController.readOne);
app.delete("/api/wilders/:wilderId", wilderController.delete);

/*
Requete http Skills
*/  
app.get("/api/skills", skillController.readAll);
app.post("/api/skills", skillController.create);
app.get("/api/skills/:skillId", skillController.readOne);
app.put("/api/skills/:skillId", skillController.update);
app.delete("/api/skills/:skillId", skillController.delete);


/*
Requete http Upvotes
*/  
app.post("/api/upvotes", upvoteController.create);
app.get("/api/upvotes", upvoteController.readAll);
app.put("/api/upvotes/:upVoteId", upvoteController.update);
// app.get("/api/upvotes/:upVoteId", upvoteController.readOne);
app.delete("/api/upvotes/:upVoteId", upvoteController.delete);

/*
Requete http Photos
*/  
// app.post("/api/photos", photoController.create);
// app.get("/api/photos", photoController.readAll);
// app.put("/api/photos/:photoId", photoController.update);
// app.get("/api/photos/:photoId", photoController.readOne);
// app.delete("/api/photos/:photoId", photoController.delete);



app.listen(3001, async () => {
  // Connexion à la base de donnée (Attente de la connexion avant de passer à la suite)
  await dataSource.initialize().then(() => {
    console.log("DB connected");
  });

  //   Démarrage du server
  console.log("Server started");
});

app.use((req, res, next) => {
  res.status(404).send("Error 404 not found !")
});
