const express = require("express");
const port = 3000;
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);
});

//   const city = "Tegucigalpa";
//   const apiKey = "6fae9c5a9de66fe11fd8ab2ec6e7ac7b";
//   const units = "metric";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

//   https.get(url, function (response) {
//     console.log(response.statusCode);

//     response.on("data", function (data) {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const weatherDescription = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//       //   res.render();
//       res.write("<p>The weather is currently " + weatherDescription + "<p>");
//       res.write(
//         "<h1>The temperature in " +
//           city +
//           " is " +
//           temp +
//           " degrees Celcius.</h1>"
//       );
//       res.write("<img src=" + imageURL + ">");
//       res.send();
//       // console.log(weatherData);
//       //   const obj = {
//       //     name: "Abby",
//       //     favoriteFood: "🍕",
//       //   };
//     });
//   });
// });

app.listen(port, () => {
  console.log(`The server is running on port ${port}...`);
});
