const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");

router.get("/houses", wizardController.getAllWizards);
router.get("/houses/:id", wizardController.getWizard);
router.post("/houses", wizardController.createWizard);
router.put("/houses/:id", wizardController.updateWizard);
router.delete("/houses/:id", wizardController.deleteWizard);

module.exports = router;
