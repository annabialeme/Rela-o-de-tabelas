const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");

router.get("/houses", houseController.getAllHouses);
router.get("/houses/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.put("/:id", houseController.updateHouse);
router.delete("/:id", houseController.deleteHouse);


module.exports = router;
