const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true,'el nombre es obligatorio'],
    },
    nickname: {
        type: String,
        required: [true,'el nickname es obligatorio'],
        default: 'no_nickname'
    },
    email: {
        type: String,
        required: [true,'el correo es obligatorio'],
        unique: true,
    },
    password: {
        type: String,
        required: [true,'la contraseña es obligatoria'],
    },
    img: {
        type: String,
        defaul: 'url_img_default'
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN', 'USER'],
        default: 'USER',
    },
    state: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

module.exports = model('Users', UsuarioSchema)