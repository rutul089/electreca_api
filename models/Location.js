const mongoose = require("mongoose");
const slugify = require("slugify");

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

const LocationSchema = new mongoose.Schema({});
