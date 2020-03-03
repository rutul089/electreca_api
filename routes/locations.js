const express = require("express");
const router = express.Router();
const {
  getLocation,
  getLocations,
  deleteLocation,
  createLocation,
  updateLocation
} = require("../controllers/locations");

router
  .route("/")
  .get(getLocations)
  .post(createLocation);

router
  .route("/:id")
  .get(getLocation)
  .put(updateLocation)
  .delete(deleteLocation);

module.exports = router;
