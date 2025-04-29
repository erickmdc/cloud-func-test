import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(8085, () => {
  console.log(`listening on port ${8085}`);
});

app.listen();
