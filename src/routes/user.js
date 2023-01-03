const { Router} = require('express');
const user = require('../controllers/user');
const { check } = require('express-validator');
const { validar_campos } = require('../middlewares/validar_campos');
const { isRolValid, validEmail, userIdValid } = require('../helpers/db-validators');
//const Rol = require('../models/rol');

const router = Router();

router.get('/', user.get_function);
  
router.put('/:id',[
    check('id', 'no es un id valido').isMongoId(),
    check('id').custom(userIdValid),
    validar_campos,
], user.put_function);

router.post('/', [
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    check('password', 'el pasword es obligatorio y contener mas de 6 letras').isLength({min: 6}),
    check('email', 'correo no valido').isEmail(),
    check('email').custom(validEmail),
    /* el primer check da un opcion para validar los roles directamente en codigo
    el segundo permite validar contra base de datos
    el tercero es una opcion moviendo la funcion para validar el rol a un helper
    */
    //check('rol', 'correo no valido').isIn(['ADMIN','USER']),
    // check('rol').custom(async(rol = '') => {
    //     const existRol = await Rol.findOne( { rol} );
    //     if(!existRol){
    //         throw new Error('rol no valido');
    //     }
    // }),
    // check('rol').custom(isRolValid),
    validar_campos,
] ,user.post_function);

router.delete('/', user.delete_function);


module.exports = router;