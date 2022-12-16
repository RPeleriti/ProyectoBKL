const mongoose=require('mongoose');
const {Schema}=require('mongoose');


const ReservaSchema=new Schema({
    nombre: {
        type:'string'
     },
    apellido:{
        type:'string'
     },
    mail:{
        type:'string'
     },
    experiencias:{
        type:'string'
     },
     cantidad:{
        type: 'number'
     },
     timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Reserva = mongoose.model('reserva', ReservaSchema)

module.exports = Reserva; 