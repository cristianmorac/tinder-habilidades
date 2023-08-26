const { Router } = require("express");
const { createUser, getUser, getUserId } = require('../controllers/userSkillControllers')

const router = Router();

router.get('/', getUser);
router.get('/:id',getUserId)
router.post('/create', createUser);


module.exports = router;

