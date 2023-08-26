const User = require("../models/user");
const Skills = require("../models/skill");

// paquete para encriptar contraseñas
const bcryptjs = require('bcryptjs')

const getUser = async (req = request, res) => {
  try {
    let users = await User.findAll({include: Skills})
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getUserId = async ( req = request, res) => {
  let id = req.params.id

  try {
    let user = await User.findOne({where:{id:id}});
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



const createUser = async (req = request, res) => {
  try {
    let { user, skills } = req.body;
    // encriptar contraseña
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(user.password, salt)
    const newUser = await User.create(user)
    for (let skill in skills) {
       [newSkill] = await Skills.findOrCreate({
        where: { name: skills[skill].name },
      });
      await newSkill.addUser(newUser)
    }    
    res.status(200).json({
      id: newUser.id,
      msg:'Usuario Creado'});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser, getUser, getUserId
};
