import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const API_URL = "https://api.deezer.com/search?q=";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: [] });
});

app.post("/artists", async (req, res) => {
  const artist = req.body.artistName;

  try {
    const response = await axios.get(API_URL + artist);
    const artistData = response.data.data;
    const artistInfo = artistData.map((info) => {
      return info;
    });
    res.render("index.ejs", { content: artistInfo });
  } catch (error) {
    console.error(error);
  } //
});

app.listen(port, () => {
  console.log(`Server has started in port ${port}`);
});
