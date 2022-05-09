import express, { Application, Request, Response, NextFunction } from "express";

import morgan from "morgan";

import cors from "cors";

// import errorMiddleware from "./middleware/error";

// unhanlded exceptions and promise rejections handling.
// import { unhandledErrors } from "./utilities/unhandle";
// unhandledErrors();
//env file configuration.
``;
import dotenv from "dotenv";
dotenv.config();

// import tokenMetaDataRoutes from "./routes/mutableLayer";
// // import verifyTrxRoutes from './routes/verifyTrx.js';
import charactersRoutes from "./characters/characters.route";
// import attributesRoutes from "./routes/attributes";
// import statisticsRoutes from "./routes/statistics";
// import summoningRoutes from "./routes/summoning";
// import raritiesRoutes from "./routes/rarities";
// import vouchersRoutes from "./routes/vouchers";
// import gemsRoutes from "./routes/gems";
//Database Connection...
import { connectDatabase } from "./storage/mongodb/config/db";
connectDatabase();

// import chalk from "chalk";

const app: Application = express();

//CROSS SITE RESOURCE SHARING....
app.use(cors());

// Prevent http param pollution
// app.use(hpp());

//Body Parsing.....
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//routes

app.get("/", (req: Request, res: Response) => {
  res.send("Good");
});

// app.use("/api/tokenmetadata", tokenMetaDataRoutes);
// // app.use('/api/verify', verifyTrxRoutes);
app.use("/api/characters", charactersRoutes);
// app.use("/api/attributes", attributesRoutes);
// app.use("/api/statistics", statisticsRoutes);
// app.use("/api/summoning", summoningRoutes);
// app.use("/api/rarities", raritiesRoutes);
// app.use("/api/vouchers", vouchersRoutes);
// app.use("/api/gems", gemsRoutes);

//Error Middleware........
// app.use(errorMiddleware);

//Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  ``;
  console.log(
    // chalk.bold.greenBright(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}!`
  );
  //   );
});
``;
