

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
  const diaNormal = fechaActual.getDate();
  const dia = diaNormal < 10 ? `0${diaNormal}` : diaNormal;
  const mesNormal = fechaActual.getMonth() + 1;
  const mes = mesNormal < 10 ? `0${mesNormal}` : mesNormal;
  const anio = fechaActual.getFullYear();
  const horaNormal = fechaActual.getHours();
  const hora = horaNormal < 10 ? `0${horaNormal}` : horaNormal;
  const minutosNormal = fechaActual.getMinutes();
  const minutos = minutosNormal < 10 ? `0${minutosNormal}` : minutosNormal;

  const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}`;
  return fechaFormateada;
  //console.log(FormularioDeRegistro.fechaActual);
}

export const cargarHoraActual =  () => {
  const fechaActual = new Date();
  const horaNormal = fechaActual.getHours();
  const hora = horaNormal < 10 ? `0${horaNormal}` : horaNormal;
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

export const siAlgunaEsVerdadero = (objeto) => Object.values(objeto).some(Boolean);

export const  containsInvalidChars = (text) => /[-+e]/.test(text);
export function detectDevice() {
  var userAgent = navigator.userAgent;
  if (userAgent.match(/Android/i) || userAgent.match(/iPad|iPhone|iPod/i)) {
    return "Tablet";
  } else {
    return "Computador";
  }
}