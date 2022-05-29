const express = require("express");
const app = express();
const cors = require("cors");


//middleware
app.use(express.json()); //reg.body
app.use(cors());

//ROUTES//

//register and login routes

app.use("/auth", require("./routes/jwtAuth"))

app.use("/dashboard", require("./routes/dashboard"))

app.use("/book", require("./routes/bookReq"))

app.use("/user", require("./routes/userReq"))

app.use("/recom", require("./routes/recommendation"))

app.use("/order", require("./routes/orderBooks"))

app.use("/advert", require("./routes/advertBooks"))

app.use("/publish", require("./routes/publishBook"))

app.listen(5000, () => {
  console. log("server is running on port 5000");
});