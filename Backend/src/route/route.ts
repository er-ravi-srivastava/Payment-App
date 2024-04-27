import express, { Router } from 'express';
import cors from "cors";

const app: express.Application = express();

app.use(cors());

const router: Router = Router();

export default router;
