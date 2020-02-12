//Leer los valores y crear un array con ellos

var selectedRow = null

function Leer(){ 
  var data = {};
  data["nom"] = document.getElementById("nom").value;
  data["ape"] = document.getElementById("ape").value;
  data["pais"] = document.getElementById("pais").value;
  return data;
}

//Ir a la tabla e insertar columnas y filas en el body de la tabla

function Insertar_datos_a_tabla(datos){
  let table = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  let fila = table.insertRow(table.length);
  fila.insertCell(0).innerHTML = datos.nom;
  fila.insertCell(1).innerHTML = datos.ape;
  fila.insertCell(2).innerHTML = datos.pais;
  fila.insertCell(3).innerHTML = `<input class="submit" type="button" value="Editar" onclick="Editar(this)">
                                  <input class="submit" type="button" value="Borrar" onclick="Borrar(this)">`;
  document.getElementById("nom").focus();
}


function onFormSubmit() {
  var datos = Leer();
  Insertar_datos_a_tabla(datos);

}



//Vaciar los input despues de escribir los datos

function Vaciar(){
  document.getElementById("nom").value = '';
  document.getElementById("ape").value = '';
  document.getElementById("pais").value = '';
}

//Posicionarse en los valores para editarlos

function Editar(columna){
  filaActual = columna.parentElement.parentElement;
  document.getElementById('nom').value = filaActual.cells[0].innerHTML;
  document.getElementById('ape').value = filaActual.cells[1].innerHTML;
  document.getElementById('pais').value = filaActual.cells[2].innerHTML;
}

function Borrar(columna) {
  if (confirm('¿Desea borrar este registro?')) {
      fila = columna.parentElement.parentElement;
      document.getElementById('tabla').deleteRow(fila.rowIndex);
      Vaciar();
  }
}

function updateRecord(data) {
  selectedRow.cells[0].innerHTML = data.nom;
  selectedRow.cells[1].innerHTML = data.ape;
  selectedRow.cells[2].innerHTML = data.pais;
}










