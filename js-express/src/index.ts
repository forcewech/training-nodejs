import express, { ErrorRequestHandler, Response, Request, NextFunction } from "express";
import { Router } from 'express';
import cookieParser from "cookie-parser";
const app = express()
const port = 8000;
const router = Router()
//Application-level middleware
app.use((req: Request, res: Response, next: NextFunction) => {
 console.log("Time:", Date.now());
 next();
});

app.use("/user/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log("Request Type:", req.method);
    next();
});
//Router-level middleware
app.use(router.get("/route",(req: Request, res: Response, next: NextFunction) => {
    console.log('Router-level middleware')
}))
//Error-handling middleware
app.use(
    (
      error: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      console.error(error.name);
      res.status(500).send("Some thing broke");
    }
);
//Built-in middleware
app.use(express.json())

//Third-party middleware
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})