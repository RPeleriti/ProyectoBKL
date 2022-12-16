const mongoose=require('mongoose');
const {Schema}=require('mongoose');


const ReservasSchema=new Schema({
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

const Reservas = mongoose.model('reservas', ReservasSchema)

module.exports = Reservas; 