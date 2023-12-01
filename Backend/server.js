const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");
const SalePropertyDetailSchema = require("./models/SalePropertyDetail.models");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
const port = 5000;

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  exposedHeaders: [
    "Content-Length",
    "Authorization",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Headers",
  ],
};
app.use(cors(corsOptions));
app.use(cookieParser());
const DB_uri = process.env.ATLAS_URI;
moongoose.connect(DB_uri);
const connection = moongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection established sucessfully");
});

const jsonData = [
  {
    _id: "62aa078518019fef46369882",
    PropertyTitle: "Orchard Homes",
    Address: "Kampala",
    DatePosted: "2022-06-14T21:11:23.000Z",
    Description:
      "10 Marla House Is Available For Sale In Bahira Orchard Phase 1 Lahore\n",
    Price: 270000000,
    PropertyTagline: "You choose what you deserve",
    Amenities: [
      "Drawing Room\n",
      "Laundry Room",
      "Dining Room",
      "2 Parking Spaces",
      "Electricity Backup",
      "Flooring",
    ],
    AreaSqFt: 2722.51,
    Bathrooms: 3,
    Bedrooms: 4,
    Kitchens: 2,
    MainImage: "https://media.zameen.com/thumbnails/17307397-800x600.jpeg",
    Owner: "kelly Rowland",
    Places: ["Lahore", "Bahria Orchard", "Bahria", "Orchard Homes"],
    PopularTags: ["Bahria", "10 Marla", "Lahore", "Modern"],
    TotalRooms: 5,
    TypeOfProperty: "House",
    YearBuilt: "1970-01-01T00:00:02.020Z",
    City: "Kampala",
    "Images:": [
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
    ],
    Livingrooms: 2,
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    Images: [],
    updatedAt: "2022-06-14T21:11:24.096Z",
    PropertyCategory: "ForSale",
  },
  {
    _id: "62aa07d618019fef4636d0ca",
    PropertyTitle: "Cavalary Homes",
    Address: "Kampala",
    DatePosted: "2022-06-14T21:11:23.000Z",
    Description:
      "10 Marla House Is Available For Sale In Cantt Phase 1 Lahore\n",
    Price: 270000000,
    PropertyTagline: "You choose what you deserve",
    Amenities: [
      "Drawing Room\n",
      "Laundry Room",
      "Dining Room",
      "2 Parking Spaces",
      "Electricity Backup",
      "Flooring",
    ],
    AreaSqFt: 2522.51,
    Bathrooms: 3,
    Bedrooms: 4,
    Kitchens: 2,
    MainImage: "https://media.zameen.com/thumbnails/17307397-800x600.jpeg",
    Owner: "Hania",
    Places: ["Lahore", "Cantt", "Cantt", "Homes"],
    PopularTags: ["Cantt", "10 Marla", "Lahore", "Modern"],
    TotalRooms: 5,
    TypeOfProperty: "House",
    YearBuilt: "1970-01-01T00:00:02.020Z",
    City: "Kampala",
    "Images:": [
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
    ],
    Livingrooms: 2,
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    Images: [],
    updatedAt: "2022-06-14T21:11:24.096Z",
    PropertyCategory: "ForSale",
  },
  {
    _id: "62aa0b3f18019fef46398458",
    PropertyTitle: "Orchard Homes",
    Address: "Kampala",
    DatePosted: "2022-06-14T21:11:23.000Z",
    Description:
      "10 Marla House Is Available For Rent In Bahira Orchard Phase 1 Lahore\n",
    Price: 270000000,
    PropertyTagline: "You choose what you deserve",
    Amenities: [
      "Drawing Room\n",
      "Laundry Room",
      "Dining Room",
      "2 Parking Spaces",
      "Electricity Backup",
      "Flooring",
    ],
    AreaSqFt: 2722.51,
    Bathrooms: 3,
    Bedrooms: 4,
    Kitchens: 2,
    MainImage: "https://media.zameen.com/thumbnails/17307397-800x600.jpeg",
    Owner: "kelly Rowland",
    Places: ["Lahore", "Bahria Orchard", "Bahria", "Orchard Homes"],
    PopularTags: ["Bahria", "10 Marla", "Lahore", "Modern"],
    TotalRooms: 5,
    TypeOfProperty: "House",
    YearBuilt: "1970-01-01T00:00:02.020Z",
    City: "Kampala",
    "Images:": [
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
    ],
    Livingrooms: 2,
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    Images: [],
    updatedAt: "2022-06-14T21:11:24.096Z",
    PropertyCategory: "ForRent",
  },
  {
    _id: "62aa1a8cb2a69fe4f6a4015e",
    PropertyTitle: "Home in Valencia",
    Address: "Kampala",
    DatePosted: "2022-06-14T21:11:23.000Z",
    Description:
      "1 Canal House Is Available For Sale In Valencia Phase 1 Lahore\n",
    Price: 270000000,
    PropertyTagline: "You choose what you deserve",
    Amenities: [
      "Drawing Room\n",
      "Laundry Room",
      "Dining Room",
      "2 Parking Spaces",
      "Electricity Backup",
      "Flooring",
    ],
    AreaSqFt: 3222.51,
    Bathrooms: 3,
    Bedrooms: 4,
    Kitchens: 1,
    MainImage: "https://media.zameen.com/thumbnails/17307397-800x600.jpeg",
    Owner: "kelly Rowland",
    Places: ["Lahore", "Valencia", "Valencia", "Homes"],
    PopularTags: ["valencia", "1 Canal", "Lahore", "Modern"],
    TotalRooms: 5,
    TypeOfProperty: "House",
    YearBuilt: "1970-01-01T00:00:02.020Z",
    City: "Kampala",
    "Images:": [
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
    ],
    Livingrooms: 2,
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    Images: [],
    updatedAt: "2022-06-14T21:11:24.096Z",
    PropertyCategory: "ForSale",
  },
  {
    _id: "62aae8e218019fef46d4cd2e",
    PropertyTitle: "Orchard Homes",
    Address: "Kampala",
    DatePosted: "2022-06-14T21:11:23.000Z",
    Description:
      "10 Marla House Is Available For Sale In Bahira Orchard Phase 1 Lahore\n",
    Price: 270000000,
    PropertyTagline: "You choose what you deserve",
    Amenities: [
      "Drawing Room\n",
      "Laundry Room",
      "Dining Room",
      "2 Parking Spaces",
      "Electricity Backup",
      "Flooring",
    ],
    AreaSqFt: 2722.51,
    Bathrooms: 3,
    Bedrooms: 4,
    Kitchens: 2,
    MainImage: "https://media.zameen.com/thumbnails/17307397-800x600.jpeg",
    Owner: "Test",
    Places: ["Lahore", "Bahria Orchard", "Bahria", "Orchard Homes"],
    PopularTags: ["Bahria", "10 Marla", "Lahore", "Modern"],
    TotalRooms: 5,
    TypeOfProperty: "House",
    YearBuilt: "1970-01-01T00:00:02.020Z",
    City: "Kampala",
    "Images:": [
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
      "https://media.zameen.com/thumbnails/27714301-800x600.webp",
      "https://media.zameen.com/thumbnails/89882733-800x600.webp",
    ],
    Livingrooms: 2,
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    Images: [],
    updatedAt: "2022-06-14T21:11:24.096Z",
    PropertyCategory: "ForSale",
  },
  {
    _id: "62dcb1070bd481076b82d1b0",
    PropertyTitle: "Nepal House",
    PropertyTagline: "This is good house ",
    Address: "Kampala",
    City: "ktm",
    Price: 200000,
    DatePosted: "2022-07-24T02:40:06.000Z",
    Description: "This is good house",
    PropertyMapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6890455805496!2d80.62142521478305!3d16.440611588652438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f108f59638dd%3A0xbc39f2ad782670bd!2sR%26D%20Block!5e0!3m2!1sen!2sin!4v1665822905368!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 2,
    Livingrooms: 3,
    TypeOfProperty: "House",
    Bathrooms: 21,
    TotalRooms: 31,
    YearBuilt: "2010-01-01T00:00:00.000Z",
    Kitchens: 3,
    AreaSqFt: 5,
    Owner: "kelly Rowland",
    Amenities: [],
    Places: [],
    PopularTags: [],
    PropertyCategory: "House",
    createdAt: "2022-07-24T02:40:07.030Z",
    updatedAt: "2022-07-24T02:40:07.030Z",
    __v: 0,
  },
  {
    _id: "655b33cd606f7a1aef6f1fa3",
    PropertyTitle: "Akamwesi",
    PropertyTagline: "hostel",
    Address: "new portbell",
    City: "kampala",
    Price: 250000,
    DatePosted: "2023-11-20T10:24:13.000Z",
    Description: "big rooms and good friends",
    PropertyMapLocation:
      "https://www.google.com/maps/place/Akamwesi+Hostel/@0.3235218,32.6168689,17z/data=!4m14!1m7!3m6!1s0x177dbbfb2aeb1313:0xe9034b6fb199e506!2sAkamwesi+Hostel!8m2!3d0.3235218!4d32.6194438!16s%2Fg%2F1tf0swhp!3m5!1s0x177dbbfb2aeb1313:0xe9034b6fb199e506!8m2!3d0.3235218!4d32.6194438!16s%2Fg%2F1tf0swhp?entry=ttu",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 1,
    Livingrooms: 1,
    TypeOfProperty: "hostel",
    Bathrooms: 1,
    TotalRooms: 100,
    YearBuilt: "2020-01-01T00:00:00.000Z",
    Kitchens: 1,
    AreaSqFt: 100,
    Owner: "bahati",
    Amenities: ["lounge"],
    Places: ["lounge"],
    PopularTags: ["lounge"],
    PropertyCategory: "ForRent",
    createdAt: "2023-11-20T10:24:13.765Z",
    updatedAt: "2023-11-20T10:24:13.765Z",
    __v: 0,
  },
  {
    _id: "655b365c606f7a1aef6f1fb9",
    PropertyTitle: "Akamwesi hostel",
    PropertyTagline: "hostel",
    Address: "new portbell road",
    City: "Kampala",
    Price: 250000,
    DatePosted: "2023-11-20T10:35:08.000Z",
    Description: "aka hostel, bright and filled with life",
    PropertyMapLocation:
      "https://www.google.com/maps/place/Akamwesi+Hostel/@0.3235218,32.6168689,17z/data=!4m14!1m7!3m6!1s0x177dbbfb2aeb1313:0xe9034b6fb199e506!2sAkamwesi+Hostel!8m2!3d0.3235218!4d32.6194438!16s%2Fg%2F1tf0swhp!3m5!1s0x177dbbfb2aeb1313:0xe9034b6fb199e506!8m2!3d0.3235218!4d32.6194438!16s%2Fg%2F1tf0swhp?entry=ttu",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 1,
    Livingrooms: 1,
    TypeOfProperty: "hostel",
    Bathrooms: 1,
    TotalRooms: 100,
    YearBuilt: "2020-01-01T00:00:00.000Z",
    Kitchens: 1,
    AreaSqFt: 100,
    Owner: "bahati",
    Amenities: ["lounge"],
    Places: ["lounge"],
    PopularTags: ["lounge"],
    PropertyCategory: "ForRent",
    createdAt: "2023-11-20T10:35:08.085Z",
    updatedAt: "2023-11-20T10:35:08.085Z",
    __v: 0,
  },
  {
    _id: "655b7e9f606f7a1aef6f2061",
    PropertyTitle: "Margret's BnB",
    PropertyTagline: "bed and breakfast",
    Address: "Kiwatule valley",
    City: "Kampala",
    Price: 300000,
    DatePosted: "2023-11-20T15:43:27.000Z",
    Description: "margret's famous Bed and Breakfast",
    PropertyMapLocation: "Http:embedded googgle api link",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 2,
    Livingrooms: 1,
    TypeOfProperty: "Air BnB",
    Bathrooms: 1,
    TotalRooms: 100,
    YearBuilt: "3000-01-01T00:00:00.000Z",
    Kitchens: 1,
    AreaSqFt: 200,
    Owner: "Mary margret",
    Amenities: ["lounge"],
    Places: ["spa"],
    PopularTags: [],
    PropertyCategory: "ForRent",
    createdAt: "2023-11-20T15:43:27.620Z",
    updatedAt: "2023-11-20T15:43:27.620Z",
    __v: 0,
  },
  {
    _id: "655bcc071bf672c4d732e924",
    PropertyTitle: "DNDHJHJ",
    PropertyTagline: "DNDHJHJ",
    Address: "DNDHJHJ",
    City: "DNDHJHJ",
    Price: 26726776,
    DatePosted: "2023-11-20T21:13:43.000Z",
    Description: "DNDHJHJDNDHJHJ",
    PropertyMapLocation: "DNDHJHJ",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 4,
    Livingrooms: 3,
    TypeOfProperty: "DNDHJHJ",
    Bathrooms: 3,
    TotalRooms: 3,
    YearBuilt: "2016-01-01T00:00:00.000Z",
    Kitchens: 3,
    AreaSqFt: 27277,
    Owner: "DNDHJHJ",
    Amenities: ["DNDHJHJ"],
    Places: ["DNDHJHJ"],
    PopularTags: ["DNDHJHJ"],
    PropertyCategory: "For Sale Property",
    createdAt: "2023-11-20T21:13:43.973Z",
    updatedAt: "2023-11-20T21:13:43.973Z",
    __v: 0,
  },
  {
    _id: "655bcdc0ecd8bd1923e927ce",
    PropertyTitle: "DMNFJKJN",
    PropertyTagline: "KJFJKNFJB",
    Address: "JNFJJHFBFJHJFDJFDJ",
    City: "NJNDJNJFFJNJNQULN",
    Price: 227277,
    DatePosted: "2023-11-20T21:21:04.000Z",
    Description: "DNDHJHJDNDHJHJ",
    PropertyMapLocation: "DNDHJHJDNDHJHJ",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 3,
    Livingrooms: 2,
    TypeOfProperty: "DNDHJHJDNDHJHJ",
    Bathrooms: 3,
    TotalRooms: 3,
    YearBuilt: "2016-01-01T00:00:00.000Z",
    Kitchens: 3,
    AreaSqFt: 87727727,
    Owner: "DNDHJHJDNDHJHJ",
    Amenities: ["DNDHJHJDNDHJHJ"],
    Places: ["DNDHJHJDNDHJHJ"],
    PopularTags: ["DNDHJHJDNDHJHJ"],
    PropertyCategory: "For Sale Property",
    createdAt: "2023-11-20T21:21:04.199Z",
    updatedAt: "2023-11-20T21:21:04.199Z",
    __v: 0,
  },
  {
    _id: "655ced6fd62d3628be8a982b",
    PropertyTitle: "ewretewtwer",
    PropertyTagline: "ewretewtwer",
    Address: "ewretewtwer",
    City: "ewretewtwer",
    Price: 34343,
    DatePosted: "2023-11-21T17:48:31.000Z",
    Description: "ewretewtwer",
    PropertyMapLocation: "ewretewtwer",
    MainImage:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Images: ["Images"],
    Bedrooms: 45,
    Livingrooms: 43,
    TypeOfProperty: "ewretewtwer",
    Bathrooms: 4,
    TotalRooms: 3,
    YearBuilt: "2017-01-01T00:00:00.000Z",
    Kitchens: 1,
    AreaSqFt: 23422,
    Owner: "ewretewtwer",
    Amenities: ["ewretewtwer"],
    Places: ["ewretewtwer"],
    PopularTags: ["ewretewtwer"],
    PropertyCategory: "ForSale",
    createdAt: "2023-11-21T17:48:31.111Z",
    updatedAt: "2023-11-21T17:48:31.111Z",
    __v: 0,
  },
];

app.post("/savedata", async (req, res) => {
  try {
    console.log("hello..");
    const result = await SalePropertyDetailSchema.insertMany(jsonData);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (error) {
    console.error("Error:", error);
  }
});

const AdminRouter = require("./routes/Admin");
const ContactUsRouter = require("./routes/ContactUs");
const AboutUsRouter = require("./routes/AboutUs");
const TeamRouter = require("./routes/Team");
const GalleryRouter = require("./routes/Gallery");
const VideoRouter = require("./routes/Video");
const MapsRouter = require("./routes/Maps");
const RentPropertyDetailRouter = require("./routes/RentPropertyDetail");
const SalePropertyDetailRouter = require("./routes/SalePropertyDetail");
const SubmittedPropertyRequestsRouter = require("./routes/SubmittedPropertyRequests");

app.use("/Admin", AdminRouter);
app.use("/ContactUs", ContactUsRouter);
app.use("/AboutUs", AboutUsRouter);
app.use("/Team", TeamRouter);
app.use("/Gallery", GalleryRouter);
app.use("/Video", VideoRouter);
app.use("/Maps", MapsRouter);
app.use("/RentPropertyDetail", RentPropertyDetailRouter);
app.use("/SalePropertyDetail", SalePropertyDetailRouter);
app.use("/SubmittedPropertyRequests", SubmittedPropertyRequestsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
