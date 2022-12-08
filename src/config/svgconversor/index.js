const TextToSvg = require("text-to-svg");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/svg", (req, res) => {
    const textToSvg = TextToSvg.loadSync("../../font/f_grotesk_thin.otf");
    const svg = textToSvg.getSVG(req.body.message);
    console.log(path.join(__dirname, "/svg"));
    console.log(req.body.message.includes("\r\n"));
    fs.writeFile(path.join(__dirname, "/svg") + "/saved.svg", svg, (err)=> {
        if (err) console.error(err);
        res.send("SVG File saved");
    });
});

app.listen(8080, ()=> {
    console.log("app running on http://localhost:8080");
});