const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const Company = require('../models/company')

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });
    const company = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(500).json({
        login: false,
        msg: "Credenciales incorrectas",
      });
    }

    // SI el usuario está activo
    if ( !user.estado ) {
        return res.status(400).json({
            msg: 'Usuario inactivo'
        });
    }

    // Verificar la contraseña
    const validPass = bcryptjs.compareSync( password, user.password );
    if ( !validPass ) {
        return res.status(400).json({
            msg: '"Credenciales incorrectas"'
        });
    }

    res.json({
        login: true,
      msg: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      login: false,
      msg: "Hable con el administrador",
    });
  }
};
module.exports = {
  login,
};
