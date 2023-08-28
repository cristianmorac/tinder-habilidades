const path = require('path')
const fs = require('fs')

const { response } = require('express');

const User = require('../models/user');
const { subirArchivo } = require('../middlewares/subir-archivos');

const cargarArchivo = async (req, res = response) => {
    try {
        const nombre = await subirArchivo(req.files, undefined, 'imgs')
        res.json({nombre})
    } catch (error) {
        res.status(400).json({msg})
    }
}

module.exports = {
    cargarArchivo
}