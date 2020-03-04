const Location = require("../models/Location");

// @desc    Get all locations
// @route   GET /api/v1/locations
// @access  Private
exports.getLocations = async (req, res, next) => {
  try {
    const location = await Location.find({}, { __v: 0 });
    res.status(200).json({
      isSucess: true,
      errorCode: 0,
      errorMessage: "Ok",
      count: location.length,
      Data: location
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
};

// @desc    Get single locations
// @route   GET /api/v1/locations/:id
// @access  Private
exports.getLocation = async (req, res, next) => {
  // --
  try {
    const location = await Location.findById(req.params.id, { __v: 0 });
    if (!location) {
      // it will check that id is exist or not
      return res.status(200).json({
        isSucess: false,
        errorCode: 101,
        errorMessage: "No data found"
      });
    }
    res.status(200).json({
      isSucess: true,
      errorCode: 0,
      errorMessage: "Ok",
      Data: location
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
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
    res.status(400).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
};

// @desc    Update location
// @route   PUT /api/v1/locations/:id
// @access  Private
exports.updateLocation = async (req, res, next) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!location) {
      // it will check that id is exist or not
      return res.status(200).json({
        isSucess: false,
        errorCode: 101,
        errorMessage: "No data found"
      });
    }
    res.status(200).json({
      isSucess: true,
      errorCode: 0,
      errorMessage: "Data has been updated scusessfully.",
      Data: location
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
};

// @desc    Delete location
// @route   DELETE /api/v1/locations/:id
// @access  Private
exports.deleteLocation = async (req, res, next) => {
  try {
    const location = await Location.findOneAndDelete(req.params.id);
    if (!location) {
      // it will check that id is exist or not
      return res.status(200).json({
        isSucess: false,
        errorCode: 101,
        errorMessage: "No data found"
      });
    }
    res.status(200).json({
      isSucess: true,
      errorCode: 0,
      errorMessage: "Data has been deleted sucessfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      isSucess: false,
      errorCode: 400,
      errorMessage: "Something went wrong!"
    });
  }
};
