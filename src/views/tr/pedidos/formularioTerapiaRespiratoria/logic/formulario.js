

export const handleCheckboxClick  = (value) => {
  if (selectedValues.includes(value)) {
    // Si el valor ya está en el array, lo removemos
    selectedValues = selectedValues.filter((val) => val !== value);
  } else {
    // Si el valor no está en el array, lo agregamos
    selectedValues.push(value);
  }
};

export const cargarFechaActual = () => {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mesNormal = fechaActual.getMonth() + 1;
  const mes = mesNormal < 10 ? `0${mesNormal}` : mesNormal;
  const anio = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutosNormal = fechaActual.getMinutes();
  const minutos = minutosNormal < 10 ? `0${minutosNormal}` : minutosNormal;

  const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}`;
  return fechaFormateada;
  //console.log(FormularioDeRegistro.fechaActual);
}

export const cargarHoraActual =  () => {
  const fechaActual = new Date();
  const hora = fechaActual.getHours();
  const minutosNormal = fechaActual.getMinutes();
  const minutos = minutosNormal < 10 ? `0${minutosNormal}` : minutosNormal;

  const horaFormateada = `${hora}:${minutos}`;
  return horaFormateada;
  //console.log(FormularioDeRegistro.horaActual);
}

export const change = (prescripcionAntes) => {
const newObject = {
  PRESCRIPCIONANTES: prescripcionAntes,
  DATOS: [],
};
Object.entries(prescripcionAntes).forEach(([nombre, seleccionado]) => {
  if (seleccionado === true) {
    newObject.DATOS.push({
      nombre,
      seleccionado,
    });
  }
});
return newObject;
};