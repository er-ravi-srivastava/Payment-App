import { Router } from 'express';
import routeRouter from "./route"; 
import userRouter from './user';

const mainRouter: Router = Router();


mainRouter.use("/payment/v1", routeRouter);
mainRouter.use("/payment/v1", userRouter);

export default mainRouter;
