const express = require("express");
const fs = require("fs");
const fsPromises = require("fs").promises;

const datafile = "server/data/clothing.json";

const router = express.Router();

/* GET all clothing */
router.route("/")
  .get(function(req, res) {
    getClothingData()
      .then(data => {
        console.log("Returning clothing data");
        res.send(data);
      })
      .catch(err => res.status(500).send(err))
      .finally(() => console.log("All done processing the promise."));

    console.log("Doing more work");
  });

function getClothingData() {

  let clothingPromise = fsPromises.readFile(datafile, "utf8")
    .then(data => JSON.parse(data));

  console.log(clothingPromise);

  return clothingPromise;

  // return new Promise((resolve, reject) => {
  //   fs.readFile(datafile, "utf8", (err, data) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       let clothingData = JSON.parse(data);
  //       resolve(clothingData);
  //     }
  //   });
  // });
}

module.exports = router;
