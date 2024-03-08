const express = require("express");
const { Data } = require("./db");
require('dotenv').config()
const cors = require("cors");
const app = express();

const PORT = 3000 || process.env.BASE_URL;

app.use(cors());

app.use(express.json());


app.post("/add_data", async (req, res) => {
  const data = req.body;
//   console.log(JSON.stringify(data));
  try {
    await Data.deleteMany({});
    Data.create({
      content: data.content,
    });

    res.json({
      msg: "Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/update_data", async (req, res) => {

  const data = req.body;
  try {
    await Data.updateOne(
      {},
      {
        $set: { content: data.content },
      }
    );
    res.json({
      msg: "Updated Succesfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  
});

app.get("/get_data", async (req, res) => {
  try {
    const documentData = await Data.findOne({});
    res.json({
      data: documentData,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`at ${PORT}`);
});
