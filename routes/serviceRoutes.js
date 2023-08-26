const { Router } = require("express");
const { createService, getService } = require('../controllers/serviceControllers')

const router = Router();

router.get('/', getService)
router.post('/create/:id', createService);


module.exports = router;

