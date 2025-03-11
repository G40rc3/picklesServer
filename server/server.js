import express from "express";
const app = express();
//your routes will go here...

app.listen(8080, function () {
  console.log("Server is listening on port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Zdravo!Ve Like Pickled Vegetables Here!" });
});

app.post("/", function (request, response) {
  response.json({ message: "PICKLES OR DEATH!" });
});

app.use(express.json());
