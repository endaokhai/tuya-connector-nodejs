import express, { Request, Response, Router } from 'express';
import routers from './routes';
import bodyParser from 'body-parser';

// const catalogRouter = require("./routes");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use("/api",routers)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
