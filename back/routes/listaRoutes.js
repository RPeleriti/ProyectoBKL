const {Router} = require('express');
const router = Router();
const{traerLista, altaLista, borrarLista} =  require('../controllers/ListaControllers');


router.get('/', traerLista)
router.post('/', altaLista)
router.delete('/:id', borrarLista)

module.exports = router;