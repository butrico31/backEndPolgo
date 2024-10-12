const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const winnerRoutes = require("./routes/winnerRoutes");
const cors = require('cors');

const corsOptions = {
    credentials: true,
    origin: '*'
}

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_CONEXAO);


// usando o routes
app.use("/", winnerRoutes);

app.listen(process.env.PORT, () => {
  console.log("excutando na porta 3000");
});
