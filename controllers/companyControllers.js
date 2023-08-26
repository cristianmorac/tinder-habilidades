const { request } = require("express");
const Company = require("../models/company");

// paquete para encriptar contraseñas
const bcryptjs = require("bcryptjs");

const getCompanyId = async (req = request, res) => {
  let id = req.params.id;
  console.log(id);

  try {
    let company = await Company.findOne({ where: { id: id } });
    res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createCompany = async (req, res) => {
  try {
    const { company } = req.body;
    const salt = bcryptjs.genSaltSync();
    company.password = bcryptjs.hashSync(company.password, salt);
    const newCompany = await Company.create(company);

    res.json({
      id: newCompany.name_company,
      message: "Compañia creada",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCompany,
  getCompanyId,
};
