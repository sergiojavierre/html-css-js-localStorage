const showData = () => {
    var data = JSON.parse(localStorage.getItem('data'));
    if(data != null){
        data.forEach(nombre => {
            addPersonaIntoList(nombre)
        });
    }
}

window.onload = showData


const addPersonaIntoList = (nombre) => {
    var lista = document.getElementById('lista');
    var li = document.createElement('li');
    li.innerHTML = nombre;
    lista.appendChild(li);
}

function addPersona(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    addPersonaIntoList(nombre)
    document.getElementById('nombre').value = '';
    save(nombre);
}

function save(nombre){
    var data = JSON.parse(localStorage.getItem('data'));
    if(data == null) data = [];
    console.log(data)
    data.push(nombre)
    console.log(data)
    localStorage.setItem('data',JSON.stringify(data))
}

function clearData(){
    localStorage.clear();
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
}
