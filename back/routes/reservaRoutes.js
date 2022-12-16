const {Router} = require('express');
const router = Router();
const{traerReserva, altaReserva, borrarReserva} =  require('../controllers/reservaControllers');


router.get('/', traerReserva)
router.post('/', altaReserva)
router.delete('/:id', borrarReserva)

module.exports = router;