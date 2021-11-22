// probando el input con listener  

function push() {

    console.log(atrapa.value); // ahora sí me agrega todo los que le digo 

};

const atrapa = document.querySelector('input');
atrapa.addEventListener('click', push);

// probando el botón con listener 

function hola() {

    alert('sirve');
}


const ver = document.querySelector('button');
ver.addEventListener('click', hola);