const { Router} = require('express');
const user = require('../controllers/user');
const { check } = require('express-validator');
const { validar_campos } = require('../middlewares/validar_campos');

const router = Router();

router.get('/', user.get_function);
  
router.put('/:id', user.put_function);

router.post('/', [
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    check('password', 'el pasword es obligatorio y contener mas de 6 letras').isLength({min: 6}),
    check('email', 'correo no valido').isEmail(),
    //check('rol', 'correo no valido').isIn(['ADMIN','USER']),
    validar_campos,
] ,user.post_function);

router.delete('/', user.delete_function);


module.exports = router;