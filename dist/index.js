"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import errorMiddleware from "./middleware/error";
// unhanlded exceptions and promise rejections handling.
// import { unhandledErrors } from "./utilities/unhandle";
// unhandledErrors();
//env file configuration.
``;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import tokenMetaDataRoutes from "./routes/mutableLayer";
// // import verifyTrxRoutes from './routes/verifyTrx.js';
const characters_route_1 = __importDefault(require("./characters/characters.route"));
// import attributesRoutes from "./routes/attributes";
// import statisticsRoutes from "./routes/statistics";
// import summoningRoutes from "./routes/summoning";
// import raritiesRoutes from "./routes/rarities";
// import vouchersRoutes from "./routes/vouchers";
// import gemsRoutes from "./routes/gems";
//Database Connection...
const db_1 = require("./storage/mongodb/config/db");
(0, db_1.connectDatabase)();
// import chalk from "chalk";
const app = (0, express_1.default)();
//CROSS SITE RESOURCE SHARING....
app.use((0, cors_1.default)());
// Prevent http param pollution
// app.use(hpp());
//Body Parsing.....
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Morgan
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
//routes
app.get("/", (req, res) => {
    res.send("Good");
});
// app.use("/api/tokenmetadata", tokenMetaDataRoutes);
// // app.use('/api/verify', verifyTrxRoutes);
app.use("/api/characters", characters_route_1.default);
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
    `Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
    //   );
});
``;
