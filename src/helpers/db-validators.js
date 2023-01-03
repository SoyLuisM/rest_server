const Rol = require('../models/rol');
const Usuario = require('../models/users');

const isRolValid = async(rol = '') => {
    const existRol = await Rol.findOne( { rol} );
    if(!existRol){
        throw new Error('rol no valido');
    }
}

const validEmail = async (email = '')=>{
    //verificar si el correo existe
    const existEmail = await Usuario.findOne({ email });
    if(existEmail){
        throw new Error('el Email existe');
    }
}

const userIdValid = async (id = '')=>{
    //verificar si el correo existe
    const existUser = await Usuario.findById(id);
    if(!existUser){
        throw new Error('el ID no existe');
    }
}

module.exports = {
    isRolValid,
    validEmail,
    userIdValid,
}