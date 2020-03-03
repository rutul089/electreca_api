// @desc    Get all locations
// @route   GET /api/v1/locations
// @access  Public
exports.getLocations = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Show all locations" });
};

// @desc    Get single locations
// @route   GET /api/v1/locations/:id
// @access  Public
exports.getLocation = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Display location ${req.params.id}` });
};

// @desc    Create new locaton
// @route   POST /api/v1/locations/
// @access  Private
exports.createLocation = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "create new locations" });
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
