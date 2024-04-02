import express from 'express'
import session from "express-session"
import { Request, Response } from 'express'
const app = express()
const port = 3000

interface MyRequest extends Request {
    session: session.Session & { user?: { id: number; username: string } }
}
   
app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
)

app.get("/set_session", (req: MyRequest, res: Response) => {
    req.session.user = {
      id: 1,
      username: "Terry",
    };
    res.send("Logged in successfully")
})

app.get("/get_session", (req: MyRequest, res: Response) => {
    if (req.session.user) {
      return res
        .status(200)
        .json({ status: "success", session: req.session.user })
    }
    return res.status(200).json({ status: "error", session: "No session" })
})

app.delete("/destroy_session", (req: Request, res: Response) => {
    req.session.destroy((error) => {
      return res
        .status(200)
        .json({ status: "success", session: "Cannot access session here" });
    })
})
   
   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})