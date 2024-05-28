const apiRouter = require("express").Router();

const gamesRouter = require("./games.js");
const categoriesRouter = require("./categories.js");
const usersRouter = require("./users.js");
const authRouter = require("./auth.js");

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

module.exports = apiRouter;