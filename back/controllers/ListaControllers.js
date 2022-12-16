const ListaControllers = require('./lista')


const traerLista = async (req, res) =>{
    res.json({
        listas: await ListaControllers.findAll()
    });
}

const altaLista = async (req, res) =>{
        await ListaControllers.create(req.body);
        res.json('Lista creada!!')
    }
    
    const buscarUno = async (req, res) => {
        const { 
            params: { id }
        } = req;    
        res.json({
            lista: await ListaControllers.buscarLista()
        });
    }
    
    const actualizarLista = async (req, res) => {
        const { 
            body,
            params: { id }
        } = req;
        const listaActualizada = await ListaControllers.modificarLista(id, body);
        res.json('¡ Actualizado');
    }
    
    const borrarLista = async (req, res) => {
        const { 
            params: { id }
        } = req;
        await ListaControllers.eliminarLista(id);
        res.json({
            mensaje: '¡Reserva eliminada!'
        });
    }
    
    module.exports = {traerLista,altaLista,buscarUno,actualizarLista,borrarLista};