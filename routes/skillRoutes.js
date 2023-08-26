const { Router } = require("express");
const { validarCampos } = require('../middlewares/validar-campos')
const { getSkill } = require('../controllers/skillControllers')

const router = Router();

router.post('/', getSkill);


module.exports = router;