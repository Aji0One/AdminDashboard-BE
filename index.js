require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//data imports
const User = require("./Models/User");
const Product = require("./Models/Product");
const ProductStat = require("./Models/ProductStat");
const Transaction = require("./Models/Transaction");
const OverallStat = require("./Models/OverallStat");
const AffiliateStat = require("./Models/AffiliateStat");

const dataUser = require("./data/index").dataUser;
const dataProduct = require("./data/index").dataProduct;
const dataProductStat = require("./data/index").dataProductStat;
const dataTransaction = require("./data/index").dataTransaction;
const dataOverallStat = require("./data/index").dataOverallStat;
const dataAffiliateStat = require("./data/index").dataAffiliateStat;

//routes directories
const clientRoutes = require("./Routes/Client");
const managenmentRoutes = require("./Routes/Management");
const salesRoutes = require("./Routes/Sales");
const generalRoutes = require("./Routes/General");

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/clients", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managenmentRoutes);
app.use("/sales", salesRoutes);

// Mongoose Connection
const port = process.env.PORT || 5003;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      app.listen(port, () =>
        console.log(`The Server Port is Running on ${port}`)
      );

      // Add only one Time

      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // User.insertMany(dataUser);
      // Transaction.insertMany(dataTransaction);
      // OverallStat.insertMany(dataOverallStat);
      // AffiliateStat.insertMany(dataAffiliateStat);
    },
    (err) => {
      console.log(err);
    }
  );
