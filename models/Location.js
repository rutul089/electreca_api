const mongoose = require("mongoose");
const slugify = require("slugify");
const moment = require("moment");
const currentDate = moment().format("YYYY-MM-DD'T'hh:mm:ss");

//- yyyy-MM-ddThh:mm:ss

/* Dummy data
{
  "id": "5d713a66ec8f2b88b8f830b8",
  "category": "rooftop",
  "locationName": "Home",
  "pojectName": "ONGC Project",
  "projectID": "5d713a66ec8f2b88a2130b8",
  "isUpdate": true,
  "installedDate": "2020-02-02T00:00:00.000Z",
  "lastServiceDate": "2020-02-02T00:00:00.000Z",
  "installedBy": "Rutul Mehta",
  "userId": "312",
  "remark": "Lorem ipsum dolor sit amet.",
  "phone": "+9152525552",
  "totalCount": 2,
  "location": {
    "longitude": 72.123123,
    "latitude": 25.213123,
    "city": "Ahmedabad",
    "state": "Gujarat",
    "zipcode": "380006",
    "country": "India"
  },
  "serviceReport": [
    {
      "serviceDate": "2020-02-02T00:00:00.000Z",
      "note": "Lorem ipsum dolor sit amet.",
      "serviceBy": "Jhone Doe",
      "userID": "123123123",
      "phone": "888-555-1212",
      "photoUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
  ]
}
*/
const LocationSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Please add a locatino name"],
    trim: true,
    maxlength: [100, "Project Name can not be more than 100 characters"]
  },
  locationName: {
    type: String,
    required: [true, "Please add a locatino name"],
    trim: true,
    maxlength: [100, "Project Name can not be more than 100 characters"]
  },
  slugPrject: String,
  category: {
    type: String,
    trim: true,
    required: true
  },
  isUpdate: {
    type: Boolean,
    default: true
  },
  location: {
    longitude: { type: Number },
    latitude: { type: Number },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
    country: { type: String }
  },
  installedDate: {
    type: String,
    default: currentDate,
    required: true
  },
  lastServiceDate: {
    type: String
  },
  remark: {
    type: String,
    maxlength: [160, "Remark can not be more than 100 characters"]
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"]
  },
  serviceCount: {
    type: Number,
    default: 0
  },
  projectId: {
    type: String
  },
  photo: {
    type: String
  },
  serviceReport: []
});

module.exports = mongoose.model("Locataion", LocationSchema);
/** Pending 
 * 
 * {
  "id": "5d713a66ec8f2b88b8f830b8",
  "projectID": "5d713a66ec8f2b88a2130b8", 
  "installedBy": "Rutul Mehta",
  "userId": "312",  
  "serviceReport": [
    {
      "serviceDate": "2020-02-02T00:00:00.000Z",
      "note": "Lorem ipsum dolor sit amet.",
      "serviceBy": "Jhone Doe",
      "userID": "123123123",
      "phone": "888-555-1212",
      "photoUrl": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }
  ]
}
 */
