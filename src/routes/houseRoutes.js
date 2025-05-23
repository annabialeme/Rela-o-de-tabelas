const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");
const apiKeyMiddleware = require("../config/apiKey")

router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas
 *     tags: [Houses]
 *     responses:
 *       200:
 *         description: Lista de casas.
 *       404:
 *         description: Casas nao encontradas.
 */
router.get("/", houseController.getAllHouses);


/**
 * @swagger
 * /api/houses/{id}:
 *   get:
 *     summary: Busca casa por ID
 *     tags: [Houses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Casa encontrada
 *       404:
 *         description: Casa não encontrada
 */
router.get("/houses", houseController.getAllHouses);
router.get("/houses/:id", houseController.getHouse);
router.post("/houses", houseController.createHouse);
router.put("/houses/:id", houseController.updateHouse);
router.delete("/houses/:id", houseController.deleteHouse);

module.exports = router;