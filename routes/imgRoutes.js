const { Router } = require("express");
const { cargarArchivo } = require("../controllers/uploadControllers");
const router = Router();

router.post('/', cargarArchivo);


module.exports = router;