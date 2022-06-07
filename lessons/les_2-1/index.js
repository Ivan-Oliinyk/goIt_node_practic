require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const got = require("got");

const PORT = process.env.PORT || 8080;
const thirdPartyBaseURL = "http://api.weatherbit.io/v2.0/current";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(morgan("tiny"));
app.use(cors());

app.get("/api/weather", async (req, res) => {
  console.log("first");

  try {
    const { latitude, longitude } = req.query;

    if (!longitude) {
      return res
        .status(400)
        .json({ message: "longitude parameters is required" });
    }

    if (!latitude) {
      return res
        .status(400)
        .json({ message: "latitude parameters is required" });
    }

    const response = await got(thirdPartyBaseURL, {
      searchParams: {
        key: process.env.WEATHER_API_KEY,
        lat: latitude,
        lon: longitude,
      },
      responseType: "json",
    });

    const [weatherData] = response.body.data;
    const {
      weather: { description },
      city_name,
      temp,
    } = weatherData;

    res.status(200).json({ info: { city_name, temp, description } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error with a server launch", err);
  }

  console.log(`server run on port ${PORT} ...`);
});
