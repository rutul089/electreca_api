const Location = require("../models/Location");

// @desc    Get all locations
// @route   GET /api/v1/locations
// @access  Private
exports.getLocations = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Show all locations" });
};

// @desc    Get single locations
// @route   GET /api/v1/locations/:id
// @access  Private
exports.getLocation = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Display location ${req.params.id}` });
};

// @desc    Create new locaton
// @route   POST /api/v1/locations/
// @access  Private
exports.createLocation = async (req, res, next) => {
  try {
    const location = await Location.create(req.body);

    res.status(200).json({
      isSucess: true,
      errorCode: 0,
      errorMessage: "Ok",
      Data: location
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
};

// @desc    Update location
// @route   PUT /api/v1/locations/:id
// @access  Private
exports.updateLocation = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update location ${req.params.id}` });
};

// @desc    Delete location
// @route   DELETE /api/v1/locations/:id
// @access  Private
exports.deleteLocation = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete location ${req.params.id}` });
};
