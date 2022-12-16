const reservaControllers = require('./reserva')


const traerReserva = async (req, res) =>{
    res.json({
        reserva: await reservaControllers.findAll()
    });
}

const altaReserva = async (req, res) =>{
        await reservaControllers.create(req.body);
        res.json('Reserva creada!!')
    }
    
    const buscarUno = async (req, res) => {
        const { 
            params: { id }
        } = req;    
        res.json({
            lista: await reservaControllers.buscarReserva()
        });
    }
    
    const actualizarReserva = async (req, res) => {
        const { 
            body,
            params: { id }
        } = req;
        const reservaActualizada = await reservaControllers.modificarReserva(id, body);
        res.json('¡Carrito Actualizado');
    }
    
    const borrarReserva = async (req, res) => {
        const { 
            params: { id }
        } = req;
        await reservaControllers.eliminarReserva(id);
        res.json({
            mensaje: '¡Reserva eliminada!'
        });
    }
    
    module.exports = {traerReserva,altaReserva,buscarUno,actualizarReserva,borrarReserva};