const formElemet = document.getElementById("guardar");
formElemet.addEventListener("submit", (event) => {
    event.preventDefault();
    let nomap = document.getElementById("nomap").value;
    let correo = document.getElementById("correo").value;
    let id_produc = document.getElementById("id_produc").value;
    let describir = document.getElementById("describir").value;
    let almacenar = { datos_usuario: nomap, correo: correo, id_del_producto: id_produc, descripcion_producto: describir };
    let almacenarJSON = JSON.stringify(almacenar);
    //Mandar los datos al backend y guardarlos ahi
    fetch('http://localhost:1234/almacenar', {
        method: 'post',
        body: almacenarJSON
    })
})
fetch('http://localhost:1234/almacenar').then(x => x.json()).then(console.log)