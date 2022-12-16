const reservasController = require('./reservas')


const traerReserva = async (req, res) =>{
    res.json({
        reservas: await reservasController.findAll()
    });
}

const altaReserva = async (req, res) =>{
        await reservasController.create(req.body);
        res.json('Reserva creada!!')
    }
    
/*     const buscarUno = async (req, res) => {
        const { 
            params: { id }
        } = req;    
        res.json({
            lista: await reservasController.buscarReserva()
        });
    } */
    
/*     const actualizarReserva = async (req, res) => {
        const { 
            body,
            params: { id }
        } = req;
        const reservaActualizada = await reservasController.modificarReserva(id, body);
        res.json('¡Carrito Actualizado');
    } */
    
    const borrarReserva = async (req, res) => {
        const { 
            params: { id }
        } = req;
        await reservasController.eliminarReserva(id);
        res.json({
            mensaje: '¡Reserva eliminada!'
        });
    }
    
    module.exports = {traerReserva,altaReserva,borrarReserva};