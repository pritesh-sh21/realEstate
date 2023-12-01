const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema(
  {
    title1: { type: String, minlength: 10 },
    title2: { type: String, minlength: 10 },
    description: { type: String, minlength: 10 },
    list1: { type: String, minlength: 10 },
    list2: { type: String, minlength: 10 },
    list3: { type: String, minlength: 10 },
    list4: { type: String, minlength: 10 },
    list5: { type: String, minlength: 10 },
    list6: { type: String, minlength: 10 },
    list7: { type: String, minlength: 10 },

    SellProperty: { type: String, minlength: 50 },
    DailyApartment: { type: String, minlength: 50 },
    FamilyHouse: { type: String, minlength: 50 },

    testimonial: { type: String, minlength: 10 },
    ClientSay: { type: String, minlength: 10 },
    line1: { type: String, minlength: 10 },
    say1: { type: String, minlength: 10 },
    say2: { type: String, minlength: 10 },

    ClientName1: { type: String, minlength: 5 },
    ClientName2: { type: String, minlength: 5 },
    ClientPosition1: { type: String, minlength: 5 },
    ClientPosition2: { type: String, minlength: 5 },
  },
  {
    timestamps: true,
  }
);

const AboutUs = mongoose.model("AboutUS", AboutUsSchema);
module.exports = AboutUs;
