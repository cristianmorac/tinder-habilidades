const { Router } = require("express");
const { cargarArchivo } = require("../controllers/uploadControllers");
const router = Router();

router.post('/:model/:id', cargarArchivo);


module.exports = router;