const path = require('path')
const fs = require('fs')

const { response } = require('express');
const { subirArchivo } = require('../middlewares/subir-archivos');

const cargarArchivo = async (req, res = response) => {
    try {
        const {model, id} = req.params
        const User = require(`../models/${model}`);
        const user = await User.findByPk(id)
        const nombre = await subirArchivo(req.files, undefined, model)
        user.img = nombre
        await user.save()
        res.json({msg: user})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

module.exports = {
    cargarArchivo
}