var galeria = require("./data.json");
var carta = require("./carta.json");
var contacos = [];

function getGalleryData(){
    return galeria;
}

function getAllCarta(){
    return carta;
}

function getItemCarta(id){
    const item =carta.filter( (a) => { return(a.id==id)})
    return item[0];
}

function getAllContactos(){
    return contacos;
}

function addContactos(nombre, email, mensaje, info){
    contacos.push(
        {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: new Date(),
            info: info
        }
    )
}


module.exports = {
    getGalleryData,
    getAllCarta,
    getItemCarta,
    getAllContactos,
    addContactos
}