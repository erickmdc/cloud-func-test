import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.get("/test/:name", async (req: Request, res: Response) => {
  await delay(5000);
  const { name } = req.params;
  console.log(name);
  console.log(req.params);

  if (name) res.send(`Hello ${name}. This is a test.`);
  else res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
