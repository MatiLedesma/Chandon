const TextToSvg = require("text-to-svg");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/svg", (req, res) => {
  const textToSvg = TextToSvg.loadSync("../../font/f_grotesk_thin.otf");
  let svg = textToSvg.getSVG(req.body.message);
  svg = svg.replace('height="88.05600000000001"', 'height="600"');
  let svgPath = "";
  let word = "";
  let iVal = 0;
  console.log(req.body.message.length)
  if (req.body.message.length >= 17) {
    req.body.message.split(" ").map((value, index) => {
      word += value + " ";
      if (word.length >= 17 || index === req.body.message.split(" ").length - 1) {
        svgPath += textToSvg.getPath(word, {
          attributes: {
            transform: `translate(0 ${iVal})`,
          },
        });
        console.log(word.length, word);
        word = "";
        iVal += 80;
      }
    });
  } else {
    svgPath += textToSvg.getPath(req.body.message);
  }

  const complete_svg = svg.split('">')[0] + '">' + svgPath + "</svg>";
  fs.writeFile(
    path.join(__dirname, "/svg") + "/saved.svg",
    complete_svg,
    (err) => {
      if (err) console.error(err);
      res.send("SVG File saved");
    }
  );
});

app.listen(8080, () => {
  console.log("app running on http://localhost:8080");
});
