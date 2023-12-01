let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let SubmittedPropertyRequests = require("../models/SubmittedPropertyRequests.models");
let SalePropertyDetailSchema = require("../models/SalePropertyDetail.models");
let RentPropertyDetailSchema = require("../models/RentPropertyDetail.models");

//let RentPropertyDetailSchema=require("../models/RentPropertyDetailSchema.models");
router.post("/create-propertyRequest", (req, res, next) => {
  const propertyData = req.body;

  // Determine the schema based on PropertyCategory
  const PropertyDetailSchema =
    propertyData.PropertyCategory === "ForRent"
      ? RentPropertyDetailSchema
      : SalePropertyDetailSchema;
  console.log(propertyData);
  PropertyDetailSchema.create(propertyData, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("Done..");
      res.json(data);
    }
  });
});

// router.post("/create-propertyRequestRent", (req, res, next) => {
//   console.log("Hello..");
//   console.log(req.body);
//   RentPropertyDetailSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log("Done..");
//       res.json(data);
//     }
//   });
// });

router.get("/", (req, res, next) => {
  SubmittedPropertyRequests.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.delete("/delete-propertyRequest/:id", (req, res, next) => {
  SubmittedPropertyRequests.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: "Property post request removed successfully",
      });
    }
  });
});

module.exports = router;
