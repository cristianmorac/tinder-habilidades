const { response } = require("express");
const bcryptjs = require("bcryptjs");

const login = async (req, res = response) => {
  const { email, password, usuario } = req.body;
  const User = require(`../models/${usuario}`);
  try {
    // buscar usuario en base de datos
    const user = await User.findOne({ where: { email: email } });
    const validPass = bcryptjs.compareSync(password, user.password);
    if (!user && !validPass) {
      return res.status(500).json({
        login: false,
        msg: "Credenciales incorrectas",
      });
    }

    // SI el usuario está activo
    if (!user.estado) {
      return res.status(400).json({
        msg: "Usuario inactivo",
      });
    }

    res.json({
      login: true,
      msg: user.id,
      usuario,
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
