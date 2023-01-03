const { response, request } = require('express');
const bcrypt = require('bcryptjs');


const Usuario = require('../models/users');


const get_function = (req = request, res = response) => {
    const {page = 1, limit = 10} = req.query;
    res.status(200).json({
        msg: "api GET",
        page,
        limit
    });
}

const put_function = async(req, res) => {
    const id = req.params.id;
    const { _id, password, google, email, ...resto} = req.body;

    const salt = bcrypt.genSaltSync();
    resto.password = bcrypt.hashSync(password,salt);

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    
    res.status(200).json({
        msg: "api PUT",
        usuario
    });
}

const post_function = async(req, res) => {

    //obtener datos enviaros del usuario
    const {nombre,email, password} = req.body;


    //encriptar contraseña
    const salt = bcrypt.genSaltSync();

    // crear instancia nuevo usuario
    const usuario = new Usuario({
        nombre,
        email,
        password: bcrypt.hashSync(password,salt),
    });

    //guardar BD
    await usuario.save();
    res.status(200).json({
        msg: "api POST",
        usuario
    });
}

const delete_function = (req, res) => {
    res.status(200).json({
        msg: "api DELETE",
    });
}

module.exports = {
    get_function,
    put_function,
    post_function,
    delete_function,
}