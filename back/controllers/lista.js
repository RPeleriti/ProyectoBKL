const Lista = require("../models/lista");

class ListaControllers{

    async findAll(){
        try {
            return await Lista.find()
            
        } catch (error) {
          throw error;  
        }

    }
    async create(lista){
        try {
            return await Lista.create(lista)
            
        } catch (error) {
          throw error;  
        }

    }

    async eliminarLista(id){
        await Lista.findByIdAndDelete(id)
    }          
    
}

module.exports = new ListaControllers;