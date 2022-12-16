const FormularioControllers = require('./formulario')



const altaFormulario = async (req, res) =>{
    await FormularioControllers.create(req.body);
    res.json('Formulario enviado!!')
}


 


module.exports = {altaFormulario};