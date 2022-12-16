const mongoose=require('mongoose');
const {Schema}=require('mongoose');


const formularioSchema=new Schema({
    nombre: {
        type:'string'
     },
    apellido:{
        type:'string'
     },
    mail:{
        type:'string'
     },
    ciudad:{
        type:'string'
     },
    provincia:{
        type:'string'
     },
    codpostal:{
        type:'number'
     },
    mensaje:{
        type:'string'
     },
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Formulario = mongoose.model('formulario', formularioSchema)

module.exports = Formulario; 