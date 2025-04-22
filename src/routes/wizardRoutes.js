const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");
const upload = require("../config/upload.js"); 
const apiKeyMiddleware = require ("../config/apiKey.js")

router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Wizards
 *   description: Gerenciamento de bruxos
 */


/**
 * @swagger
 * /api/wizards:
 *   get:
 *     summary: Lista todos os bruxos
 *     tags: [Wizards]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de bruxos
 */

router.get("/wizards", wizardController.getAllWizards);
router.get("/wizards/:id", wizardController.getWizard);

router.post("/wizards", upload.single("photo"),wizardController.createWizard);
router.put("/wizards/:id", wizardController.updateWizard);
router.delete("/wizards/:id", wizardController.deleteWizard);

module.exports = router;