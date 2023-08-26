const { Router } = require("express");
const { createCompany, getCompanyId } = require('../controllers/companyControllers')

const router = Router();

router.post('/create', createCompany);
router.get('/:id', getCompanyId);

module.exports = router;