const Skill = require("../models/skill");
const User = require("../models/user");

const getSkill = async (req, res) => {
  let {name} = req.body;
  try {
    let skill = await Skill.findAll({
      where: { name: name },
      include: User,
    });
    res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  /* res.json({
    msg: name
  }) */
};

module.exports = { getSkill };
