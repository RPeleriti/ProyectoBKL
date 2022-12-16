const {Router} = require('express');
const router = Router();
const{traerReserva, altaReserva, borrarReserva} =  require('../controllers/reservasController');


router.get('/', traerReserva)
router.post('/', altaReserva)
router.delete('/:id', borrarReserva)

module.exports = router;