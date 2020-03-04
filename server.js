const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const logger = require("./middleware/logger"); // -- Custom logger
const connectDB = require("./config/db");
// Load env vars
dotenv.config({ path: "./config/config.env" });
// Connect to db
connectDB();
// Route files
const locations = require("./routes/locations");

const app = express();

// Body parser
app.use(express.json());

// Dev loggint middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  // app.use(logger);
}

// Mount routers
app.use("/api/v1/locations", locations);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mod on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red.bold);
  // Close server
  server.close(() => process.exit(1));
});
