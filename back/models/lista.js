const mongoose=require('mongoose');
const {Schema}=require('mongoose');


const ListaSchema=new Schema({
    Nombre:{
        type:'string',
    },
    Precio:{
        type:'number',
    },    
    Cantidad:{
        type:'number',
    },
    
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Lista = mongoose.model('lista', ListaSchema)

module.exports = Lista; 