const { Router} = require('express');
const user = require('../controllers/user');

const router = Router();

router.get('/', user.get_function);
  
router.put('/:id', user.put_function);

router.post('/', user.post_function);

router.delete('/', user.delete_function);


module.exports = router;