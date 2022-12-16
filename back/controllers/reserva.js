
const Reserva = require("../models/reserva");

class reservaControllers{

    async findAll(){
        try {
            return await Reserva.find()
            
        } catch (error) {
          throw error;  
        }

    }
    async create(reserva){
        try {
            return await Reserva.create(reserva)
            
        } catch (error) {
          throw error;  
        }

    }

    async eliminarReserva(id){
        await Reserva.findByIdAndDelete(id)
    }          
    
}

module.exports = new reservaControllers;