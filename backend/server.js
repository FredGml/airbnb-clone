import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import listingRouter from "./routes/listingRoutes.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin:[
      "https://zulucoding5223-stack.github.io"
    ],
    credentials: true,
  })
);

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/users", userRouter);
app.use("/listings", listingRouter);
app.use("/reservations", reservationRouter);
app.use('/', (req, res)=>{
  res.send('Api is running.')
})

const startServer = async () => {
  try {
    console.log('Waiting for database to connect...');
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
