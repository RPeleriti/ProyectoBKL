
const Reservas = require("../models/reservas");

class reservasController{

    async findAll(){
        try {
            return await Reservas.find()
            
        } catch (error) {
          throw error;  
        }

    }
    async create(reserva){
        try {
            return await Reservas.create(reserva)
            
        } catch (error) {
          throw error;  
        }

    }

    async eliminarReserva(id){
        await Reservas.findByIdAndDelete(id)
    }          
    
}

module.exports = new reservasController;