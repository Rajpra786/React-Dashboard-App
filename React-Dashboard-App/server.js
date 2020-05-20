const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")

const app = express();
const testRoutes = express.Router();
require("dotenv").config()
//port and URI
const uri = process.env.Mongo_URI||"mongodb+srv://hello:zP8q1d1ohSxHamjv@mern-i2eoc.mongodb.net/products?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")))

//connect to atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handle get requests
app.get("/app", function (req, res) {
  var query1 = { stock: { available: true } };
  Query(connection, 5, res, query1);
});

//handle post requests and parse the queries
app.post("/app/filter", (req, res) => {
  filters = req.body.filters;
  var query = {};
  filters.forEach((ele) => {
    const key = String(ele.key);
    if (key === "stock_available") {
      const value = ele.value == "true";
      const opr = String(ele.opr);
      if (opr === "equals") {
        query.stock = { available: value };
      } else {
        query.stock = { available: !value };
      }
    } else if (key === "created_at") {
      var values = ele.value;
      var start_ = new Date(values[0]);
      var end_ = new Date(values[1]);
      const opr = String(ele.opr);
      query.created_at = {
        $gte: start_,
        $lt: end_,
      };
    } else if (key === "discount") {
      var value = ele.value;
      var opr = ele.opr;
      //calculate the discount
      let discount = {
        $multiply: [
          {
            $divide: [
              {
                $subtract: [
                  "$price.regular_price.value",
                  "$price.offer_price.value",
                ],
              },
              "$price.regular_price.value",
            ],
          },
          parseFloat("100"),
        ],
      };

      if (opr === "greater_than") {
        query.$expr = {
          $gt: [discount, parseFloat(value)],
        };
      } else if (opr === "smaller_than") {
        query.$expr = {
          $lt: [discount, parseFloat(value)],
        };
      } else if (opr === "equal") {
        query.$expr = {
          $eq: [discount, parseFloat(value)],
        };
      }
    } else if (key === "brand") {
      const value = String(ele.value);
      const opr = String(ele.operator);
      var regex = RegExp(".*" + value + ".*");
      query["brand.name"] = regex;
    }
  });

  Query(connection, 10, res, query);
});

//send query to atlas and get response
function Query(connection, _limit, res, query) {
  var options = {
    limit: _limit,
    skip: 10,
    sort: ["price.offer_price.value", "asc"],
    projection: {
      name: 1,
      url: 1,
      brand: 1,
      sku: 1,
      price: 1,
      stock: 1,
      description_text: 1,
      created_at: 1,
      "media.standard": { $slice: 1 },
    },
  };

  connection
    .collection("data")
    .find(query, options)
    .limit(_limit)
    .toArray(function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).json("Error: " + err);
      } else {
        res.json(result);
      }
    });
}

if(process.env.NODE_ENV === "production"){
  app.use(express.static("Client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
