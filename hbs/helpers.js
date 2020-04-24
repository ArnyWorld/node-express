var hbs = require('hbs');

/**  Un HELPER es una función que se dispara cuando el template lo requiere  En este caso se utilizara el año en el footer*/
hbs.registerHelper('getAnio', () =>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx]= palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
