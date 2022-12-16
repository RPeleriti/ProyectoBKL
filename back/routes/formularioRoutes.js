const {Router} = require('express');
const router = Router();
const {altaFormulario} = require('../controllers/formularioControllers');


router.post('/',altaFormulario)



module.exports = router;