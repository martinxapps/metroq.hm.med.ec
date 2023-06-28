export const handleCheckboxClick = (value) => {
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
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}:${segundos}`;
  return fechaFormateada;
  //console.log(FormularioDeRegistro.fechaActual);
}

export const cargarHoraActual = () => {
  const fechaActual = new Date();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const horaFormateada = `${hora}:${minutos}:${segundos}`;
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