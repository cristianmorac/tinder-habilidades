const { Router } = require("express");
const { validarCampos } = require('../middlewares/validar-campos')
const { login } = require('../controllers/authControllers')

const router = Router();

router.post('/login', login);


module.exports = router;