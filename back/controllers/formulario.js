const Formulario = require("../models/formulario");

class FormularioControllers{

   

    
    async create(formulario){
        try {
            return await Formulario.create(formulario);
            
        } catch (error) {
          throw error;  
        }
        
    }
    
}

module.exports = new FormularioControllers;