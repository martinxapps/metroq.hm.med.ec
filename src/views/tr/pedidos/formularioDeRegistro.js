import m from "mithril";
import terapiaRespiratoriaController from "./Models/obtenerDatos";
import Pedido from "./pedido";
import Encrypt from "../../../models/encrypt";

//const obtenerDatos = terapiaRespiratoriaController;
let isEsputoSelected = false;
let isEsputoModifiedSelected = false;
let isPanelViralSelected = false;
let isRadioSelected = false;

let isEsputoSelecteModified = "";
let isPanelViralSelectedModified = "";

/* let esputo = FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO === "true" ? true : false
let esputoModified = esputo */

//let EsputoModified =

const inputOxinoterapia = {
  view: () => {
    return [
      m("input", {
        class: "form-control",
        type: "number",
        id: "inputOxinoterapia2",
        placeholder: "Oxigenoterapia",
        //readonly: "readonly",
        //disabled: obtenerDatos.habilitarCampos,
        //maxlength: 10,
        maxlength: 10,
        oncreate: (el) => {
          el.dom.value =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0]
                    .CANTIDAD_OXIGENO_TERAPIA
                : null
              : null;
        },

        /* value: FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].CANTIDAD_OXIGENO_TERAPIA : null : null, */
      }),
    ];
  },
};

const inputTerapiaExpansiva = {
  view: () => {
    return [
      m("input", {
        class: "form-control",
        type: "number",
        id: "inputTerapiaExpansiva2",
        placeholder: "Terapia Expansiva",
        readonly: "readonly",
        maxlength: 10,
        /* oninput: function (event) {
          event.target.value = event.target.value.slice(0, 10);
        }, */
        /* value: FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].TERAPIA_EXPANSIVA === 'Incentivo respiratorio' ? FormularioDeRegistro.datosPorSecuencial.data[0].CANTIDAD_TERAPIA_EXPANSIVA : null : null  : null, */
        oncreate: (el) => {
          el.dom.value =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0]
                    .TERAPIA_EXPANSIVA === "Incentivo respiratorio"
                  ? FormularioDeRegistro.datosPorSecuencial.data[0]
                      .CANTIDAD_TERAPIA_EXPANSIVA
                  : null
                : null
              : null;
        },
      }),
    ];
  },
};

const inputMonitoreoPrevio = {
  view: () => {
    return [
      m("input", {
        class: "form-control",
        type: "number",
        id: "inputMonitoreoPrevio2",
        placeholder: "Monitoreo Previo",
        readonly: "readonly",
        maxlength: 10,
        /* oninput: function (event) {
          event.target.value = event.target.value.slice(0, 10);
        }, */
        oncreate: (el) => {
          el.dom.value =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0]
                    .MONITOREO_TERAPIA === "Saturación O2(%)"
                  ? FormularioDeRegistro.datosPorSecuencial.data[0]
                      .CANTIDAD_MONITOREO_TERAPIA
                  : null
                : null
              : null;
        },
        /* value: FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].MONITOREO_TERAPIA === 'Saturación O2(%)' ? FormularioDeRegistro.datosPorSecuencial.data[0].CANTIDAD_TERAPIA_EXPANSIVA : null : null  : null, */
      }),
    ];
  },
};

const inputMonitoreoPosterior = {
  view: () => {
    return [
      m("input", {
        class: "form-control",
        type: "number",
        id: "inputMonitoreoPosterior2",
        placeholder: "Monitoreo Posterior",
        readonly: "readonly",
        maxlength: 10,
        /* oninput: function (event) {
          event.target.value = event.target.value.slice(0, 10);
        }, */
        oncreate: (el) => {
          el.dom.value =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0]
                    .MONITOREO_TERAPIA_POSTERIOR === "Saturación O2(%)"
                  ? FormularioDeRegistro.datosPorSecuencial.data[0]
                      .CANTIDAD_MONITOREO_TERAPIA_POS
                  : null
                : null
              : null;
        },
        // value: FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].MONITOREO_TERAPIA_POSTERIOR === "Saturación O2(%)" ? FormularioDeRegistro.datosPorSecuencial.data[0].CANTIDAD_MONITOREO_TERAPIA_POS : null : null  : null,
      }),
    ];
  },
};

const checkEsputo = {
  view: () => {
    return [
      m("input", {
        class: "custom-control-input",
        type: "checkbox",
        id: "checkboxEsputo",
        //disabled: obtenerDatos.habilitarCampos,
        oncreate: (el) => {
          el.dom.checked =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO ===
                  "true"
                  ? "checked"
                  : ""
                : ""
              : "";
        },
        /* checked:FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO === "true" ? "checked": "" : "" : "", */
        /* FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO === "true" ? true : false;
          isEsputoModifiedSelected = FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO === "true" ? true : false;
          isEsputoModifiedSelected = event.target.checked; */
        onclick: function (event) {
          /* isEsputoSelected = FormularioDeRegistro.datosPorSecuencial.data[0].ESPUTO === "true" ? true : false; */

          //isEsputoSelected = event.target.checked;
          isEsputoSelecteModified = event.target.checked;
          //alert(isEsputoSelecteModified);
          //checkEsputo.esputoModified = event.target.checked;
          //alert(isEsputoSelected);
          //alert(checkEsputo.esputoModified);
        },
      }),
    ];
  },
};

const checkPanelViral = {
  view: () => {
    return [
      m("input", {
        class: "custom-control-input",
        type: "checkbox",
        id: "checkboxPanelViral",
        //disabled: obtenerDatos.habilitarCampos,
        onclick: function (event) {
          isPanelViralSelectedModified = event.target.checked;
        },
        oncreate: (el) => {
          el.dom.checked =
            FormularioDeRegistro.datosPorSecuencial.data.length > 0
              ? FormularioDeRegistro.datosPorSecuencial.data[0]
                  .CD_SECUENCIAL === Pedido.data.AT_MV
                ? FormularioDeRegistro.datosPorSecuencial.data[0]
                    .PANEL_VIRAL === "true"
                  ? "checked"
                  : ""
                : ""
              : "";
        },
        /* checked:FormularioDeRegistro.datosPorSecuencial.data.length > 0 ? FormularioDeRegistro.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? FormularioDeRegistro.datosPorSecuencial.data[0].PANEL_VIRAL === "true" ? "checked": "" : "" : "", */
      }),
    ];
  },
};

const tesImout = {
  view: () => {
    return [
      m("div", { class: "form-group col-md-4" }, [
        m("label", { for: "inputUsuario" }, "Usuario"),
        m("input", {
          class: "form-control",
          type: "text",
          id: "inputUsuario",
          placeholder: "Usuario",
          readonly: "readonly",
          oncreate: (el) => {
            el.dom.value = FormularioDeRegistro.usuarioConectado.user.user;
          },
        }),
      ]),
    ];
  },
};
const FormularioDeRegistro = {
  listaDeFrecuenciaCardiaca: [],
  errorCargandoFrecuenciaCardiaca: "",
  listaDeFrecuenciaRespiratoria: [],
  errorCargandoFrecuenciaRespiratoria: "",
  listaDePeso: [],
  errorCargaDePeso: "",
  listaEscalaDelDolor: [],
  errorCargaDeEscalaDelDolor: "",
  fechaActual: "",
  horaActual: "",
  habilitarCampos: false,
  listaPrescripcion: [],
  errorPrescripcion: "",
  datosGuardados: [],
  errorGuardar: "",
  datosPorSecuencial: [],
  errorDatosPorSecuencial: "",
  datosActualizados: [],
  errorDatosActualizados: "",
  datosEliminados: [],
  errorDatosEliminados: "",
  cargarFrecuenciaCardiaca: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=FRECUENCIA_CARDIACA&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaDeFrecuenciaCardiaca = resultado;
          console.log(FormularioDeRegistro.listaDeFrecuenciaCardiaca);
          //m.redraw();
        } else {
          FormularioDeRegistro.errorCargandoFrecuenciaCardiaca +=
            "Frecuencia Cardiaca ";
          /* terapiaRespiratoriaController.listaDeFrecuenciaCardiaca = {
            data: [
              {
                VALUE: "No hay datos",
              },
            ],
          }; */
          /* FormularioDeRegistro.error = resultado.error;
          alert(FormularioDeRegistro.errorCargandoFrecuenciaCardiaca); */
        }
      })
      .catch(function (error) {
        FormularioDeRegistro.error = error;
        alert(FormularioDeRegistro.errorCargandoFrecuenciaCardiaca);
      });
  },

  cargarFrecuenciaRespiratoria: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=FRECUENCIA_RESPIRATORIA&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaDeFrecuenciaRespiratoria = resultado;
          console.log(FormularioDeRegistro.listaDeFrecuenciaRespiratoria);
        } else {
          FormularioDeRegistro.errorCargandoFrecuenciaRespiratoria +=
            "Frecuencia Respiratoria ";
        }
        /* else {
          FormularioDeRegistro.errorCargandoFrecuenciaRespiratoria = resultado.error;
          alert(FormularioDeRegistro.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorCargandoFrecuenciaRespiratoria = error;
        alert(FormularioDeRegistro.errorCargandoFrecuenciaRespiratoria);
      });
  },

  cargarPeso: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=PESO&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaDePeso = resultado;
          console.log(FormularioDeRegistro.listaDePeso);
        } else {
          FormularioDeRegistro.errorCargaDePeso += "Peso ";
        } /* else {
          terapiaRespiratoriaController.error = resultado.error;
          alert(terapiaRespiratoriaController.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorCargaDePeso = error;
        alert(FormularioDeRegistro.errorCargaDePeso);
      });
  },

  cargarEscalaDelDolor: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=ESCALA_DOLOR&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaEscalaDelDolor = resultado;
          console.log(FormularioDeRegistro.listaEscalaDelDolor);
        } else {
          FormularioDeRegistro.errorCargaDeEscalaDelDolor +=
            "Escala del Dolor ";
        } /* else {
          terapiaRespiratoriaController.error = resultado.error;
          alert(terapiaRespiratoriaController.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorCargaDeEscalaDelDolor = error;
        alert(FormularioDeRegistro.errorCargaDeEscalaDelDolor);
      });
  },

  cargarFechaActual: function () {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${anio}`;
    FormularioDeRegistro.fechaActual = fechaFormateada;
    console.log(FormularioDeRegistro.fechaActual);
  },

  cargarHoraActual: function () {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    FormularioDeRegistro.horaActual = horaFormateada;
    console.log(FormularioDeRegistro.horaActual);
  },

  cargarPrescripcion: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=PRESC&&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (resultado.status && resultado.data.length > 0) {
          FormularioDeRegistro.listaPrescripcion = resultado;
          console.log(FormularioDeRegistro.listaPrescripcion);
          //terapiaRespiratoriaController.habilitarCampos = true;
        } else {
          //FormularioDeRegistro.listaPrescripcion = [];
          FormularioDeRegistro.errorPrescripcion += "Prescripción ";
          //FormularioDeRegistro.lista = resultado;
          //terapiaRespiratoriaController.error = resultado.error;
          //FormularioDeRegistro.habilitarCampos = true;
          //return m("div", {class: "modal"}, "La lista está vacía");
          //alert(terapiaRespiratoriaController.error);
        }
      })
      .catch(function (error) {
        FormularioDeRegistro.errorPrescripcion = error;
        alert(FormularioDeRegistro.errorPrescripcion);
        //terapiaRespiratoriaController.habilitarCampos = true;
        //alert(terapiaRespiratoriaController.error);
        //alert(terapiaRespiratoriaController.error);
      });
  },

  guardar: (formularioTerapiaRespiratoria) => {
    m.request({
      method: "POST",
      url: "https://api.hospitalmetropolitano.org/t/v1/tr/formularios",
      body: formularioTerapiaRespiratoria,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (result) {
        //resultado = result;
        /* if (result.status) {
          terapiaRespiratoriaController.datosEnviadosDelFormulario = result;
        }else{
          terapiaRespiratoriaController.error = result.error;
          alert(terapiaRespiratoriaController.error);
        } */
        /* if (result.status) {
          FormularioDeRegistro.datosGuardados = result;
          window.location.href = window.location.href;
        } */
        FormularioDeRegistro.datosGuardados = result;
        //FormularioDeRegistro.bloquearCamposCuandoSeGuarda = true;
        window.location.href = window.location.href;
        //FormularioDeRegistro.bloquearCamposCuandoSeGuarda = true;
      })
      .catch(function (error) {
        //terapiaRespiratoriaController.error = `No se pudo enviar los datos ${error}`;

        FormularioDeRegistro.errorGuardar = error;
        alert(FormularioDeRegistro.errorGuardar);
      });
  },

  cargarFormularioPorCodigoSecuencial: function (codigoSecuencial) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios?CD_SECUENCIAL=${codigoSecuencial}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (resultado.status && resultado.data.length > 0) {
          FormularioDeRegistro.datosPorSecuencial = resultado;
          m.redraw();
        } /* else {
          terapiaRespiratoriaController.lista = resultado;
          //terapiaRespiratoriaController.error = resultado.error;
          terapiaRespiratoriaController.habilitarCampos = true;
          //return m("div", {class: "modal"}, "La lista está vacía");
          //alert(terapiaRespiratoriaController.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorDatosPorSecuencial +=
          "Error al cargar los datos";
        //terapiaRespiratoriaController.habilitarCampos = true;
        //alert(terapiaRespiratoriaController.error);
      });
  },

  actualizar: (formularioTerapiaRespiratoria) => {
    m.request({
      method: "PUT",
      url: "https://api.hospitalmetropolitano.org/t/v1/tr/formularios",
      body: formularioTerapiaRespiratoria, // cuerpo de los datos a enviar,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (result) {
        if (result.status) {
          FormularioDeRegistro.datosActualizados = result;
          window.location.href = window.location.href;
        } else {
          FormularioDeRegistro.errorDatosActualizados = result.message;
        }
      })
      .catch(function (error) {
        //FormularioDeRegistro.errorDatosActualizados = error;
        /* alert(FormularioDeRegistro.errorDatosActualizados);
        alert(error); */
        /* console.log(FormularioDeRegistro.errorDatosActualizados);
        console.log(error); */
        FormularioDeRegistro.errorDatosActualizados +=
          "Error al actualizar los datos";
      });
  },

  eliminar: (formularioTerapiaRespiratoria) => {
    m.request({
      method: "DELETE",
      url: "https://api.hospitalmetropolitano.org/t/v1/tr/formularios",
      body: formularioTerapiaRespiratoria, // cuerpo de los datos a enviar,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (result) {
        if (result.status) {
          FormularioDeRegistro.datosEliminados = result;
          window.location.href = window.location.href;
        } else {
          FormularioDeRegistro.errorDatosEliminados = result.message;
        }
      })
      .catch(function (error) {
        //FormularioDeRegistro.errorDatosActualizados = error;
        /* alert(FormularioDeRegistro.errorDatosActualizados);
      alert(error); */
        /* console.log(FormularioDeRegistro.errorDatosEliminados);
      console.log(error); */
        FormularioDeRegistro.errorDatosEliminados +=
          "Error al eliminar los datos";
      });
  },

  oninit: (_data) => {
    //FormularioDeRegistro.cargarFrecuenciaCardiaca(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    //FormularioDeRegistro.cargarFrecuenciaRespiratoria(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarPeso(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarEscalaDelDolor(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarFechaActual();
    FormularioDeRegistro.cargarHoraActual();
    FormularioDeRegistro.cargarPrescripcion(_data.attrs.pedido.AT_MV); // 1918 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarFormularioPorCodigoSecuencial(
      _data.attrs.pedido.AT_MV
    ); // _data.attrs.pedido.AT_MV
    //console.log(_data.attrs.pedido.AT_MV);
    //console.log(FormularioDeRegistro.listaDeFrecuenciaCardiaca.data[0].VALUE);
    /* terapiaRespiratoriaController.cargarFrecuenciaRespiratoria(_data.attrs.pedido.AT_MV);
    terapiaRespiratoriaController.cargarPeso(_data.attrs.pedido.AT_MV);
    terapiaRespiratoriaController.cargarEscalaDelDolor(_data.attrs.pedido.AT_MV);

    //terapiaRespiratoriaController.cargarPrescripcion(1); //Aqui poner el numero de atendimiento
    terapiaRespiratoriaController.cargarPrescripcion(1918); //Aqui poner el numero de atendimiento 1918
    terapiaRespiratoriaController.cargarFechaActual();
    terapiaRespiratoriaController.cargarHoraActual();
    console.log(`Emill 1  ${terapiaRespiratoriaController.habilitarCampos}`);
    console.log(`Emill 2  ${!terapiaRespiratoriaController.habilitarCampos}`);
    console.log(obtenerDatos.habilitarCampos); */
    //console.log(`Número de pedido: ${Pedido.data.AT_MV}`);

    //terapiaRespiratoriaController.cargarFormularioPorCodigoSecuencial(54563);
    // terapiaRespiratoriaController.cargarFormularioPorCodigoSecuencial(_data.attrs.pedido.AT_MV);

    FormularioDeRegistro.usuarioConectado = Encrypt.getDataUser(); // Obtener el nombre de usuario
    console.log(Pedido.examenes);
    console.log(Pedido.data.AT_MV);
    console.log(Pedido.examenes[0].EXAMEN);
  },
  /* onbeforeupdate: function (vnode) {
    return false;
}, */
  usuarioConectado: [],
  /* oncreate: (el) => {
    console.log(el)
  }, */
  view: (vnode) => {
    const printFormData = () => {
      const printWindow = window.open("", "PRINT", "height=800,width=800");
      const inputEscalaDelDolor =
        document.getElementById("inputEscalaDolor").value;
      const inputPeso = document.getElementById("inputPeso").value;
      //const inputAtencion = document.getElementById("inputAtencion").value;
      const inputUsuario = document.getElementById("inputUsuario").value;
      const inputCodigo = document.getElementById("inputCod").value;
      const inputFecha = document.getElementById("inputFecha").value;
      const inputHora = document.getElementById("inputHora").value;
      const inputNumeroPedido = document.getElementById("inputNumeroPedido").value;
      const inputFechaPedido = document.getElementById("inputFechaPedido").value;
      const inputOrigenPedido = document.getElementById("inputOrigenPedido").value;
      const inputMedicoSolicitante = document.getElementById("inputMedicoSolicitante").value;
      const inputEspecialidad = document.getElementById("inputEspecialidad").value;
      const inputApellidosYNombres = document.getElementById("inputApellidosYNombres").value;
      const inputNHC = document.getElementById("inputNHC").value;
      const inputNumeroAtencion = document.getElementById("inputNumeroAtencion").value;
      const inputUbicacion = document.getElementById("inputUbicacion").value;
      //const imgUrl = "./logo.jpg";

      const prescripcion = Pedido.examenes.map(
        ({ EXAMEN, FRECUENCIA }) => `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="inputPrescripcion">
          ${EXAMEN} - ${FRECUENCIA}
        </label>
      </div>
    `
      );

      const printContent = `
          <html>
            <head>
              <title>Print form</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
              <style type="text/css">
    @media print {
        body {
            font-size: 0.75rem;
            margin: 0.5rem;
        }
    }
</style>

            </head>
            <body>
              <fieldset>
              <form class="mx-auto">
              <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABPlBMVEX///8fm9v//v////3///v8//8LZ7L///kAl9bC3/L///j///b///T5//8AWazv+Pf/+/8AYbHv9foQZqsun9yevdkAlNYAmNUAltyWyulsuenK5PAtodcAktX6/f/b6/QWmdAAkM8hmd0Aj9wAld7j8fao2ekqpN9bsuQAjtby///3//es0+sAlc95vuQ8qeBrstxkt92Gwd+Jzuaiz+Tf7e6v3eS/4fAAkeY7qdPF5/BTqtZRpN2lzeqUzN5es+p1w+oQmcpatdByzONwuNiEvdYdl8hlrejW8/NXqtSa1ubH0tuDlbpUcadeicaMr887SHEAAVkAKGoAO3kATY4lbKYAAEcAFFcZgcACHl0GMHUWVpAAI1s4ga8AQYvU5et8iJSxxc6N1uO71/Igp8m97u9EqO/K4eVYm8je5vZ7CkflAAAL+klEQVR4nO2ZCXfjxpHHG+juaVw9hGgGAEWQAEGABw7eMkRyqBnK1Cw1SdaJY8e51tm1vYnn+3+BFKg57GQSWX5PT8pu/ea9EQQ1m/3vqq4DIARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB/r9BCeedLONE0Ideyj3BKWOWECaT6kMv5Z7gjKb5dJZzK3vopdwTnMq5pkTOwrzVhoIBsCPE/mcOzUgiBZFCreaiQqiUdHSdP7D/q0lXAcIau22kXC7rlJ4tPybZB9dMGe33rqVgPBWk2juqCrXe/hEz3yuUlDEIjLoBv21o3RslxOifryj/sL25KMM9J/1GWWmyCWOgUPMfWCEnpVPZUAtu9aWaEh8I7ccrMPz7u/TdT8oJk0SQTW9d3ZBpSh+DQpXpWqXQCW5dR13pnVHa1zaciXwzGQcqk+Xs2XDbyS6eb56NEyFa06Z40RjNTkUw9JXVOBX19oMrFDcK27crrO1GiaCltyHmC2c3ibuJ9Y0WDxuX9ND1NspIWVtle0i+20WhLw7+J8tnvT2pPbwNxY+3YRTtPCcMJySIuyl55U3JXLsQwrYOzkTSK20qSndokeftFuUGFVa6m3Qej0IvEMffOZdEpRDmiar+XTypDbTJ9fMJKMy9MTMT5aXI20qzLtWgPUlZ0vZlqf2HyTZaCfG0NR5GsZ/W40eisNE+MCGqyo0y0YGoyCiljMB/lL8Nsh3FSQkp2xPS7C0oTxSn3sk3o93CBIUdNS38WhlPGRk6OrWWo9VFXxl0Hs05DJXr6XA43FxevToIE0z481/88pf/+WkpQfB7he2EcN0FG7Zn1DiLX0phZaXrJZUNrVYPbOgMQWGhU9X36iQtBvLRKIyiSAnDMOr1Ru40MX7+q19/9pvPPzo5+SLn70pysGGlUJuQM69YH06dK5roPCh6QdAdpMkknJu6Cwqfu/M12Xi5mbmPyIZgRO1Gpe8p/i9+++Vnf/jqq6cfPTk5+ZSwNxJTd3QgIh9NiPmq6PW8TUqvvHDkzXjgKN1RfJ1aunZNaN47fylbYXfUdvxaMvKTx6HwezTc3/3+93/6w1efPwFOPi/f2bD/qkZZsM0ZtYPFJ/2UqcF2ftVPKdjw1UKXnAaLkqgyn/clS8oc6NS3uW0/MoVh2FD++OWfPrtR+OTJf8k3ElWwppBMUBOK6yomcTiHUJCrJOhOOoQYlEMQpipnVSA24YIKbpjMko9EoeO8t+Lvfv3lF3/86gT0gaP++c1QqKxVlVHJVfgnDegyOGeqwalxGDVSaCNslnXgT3AbNqID2YaqHUHt7FF4qR9fns5On+9iiDZVhfPfXJD/eVqZ8KOT/O1QwzaICYaR0BgJ8X7dIhnOO9UOQMd0h282eOI3BqqsX3ycQWqS7H66rHdVWwLNH61dxkoDfnNTbnLy6dGIJz97M7SzaDb7oIIbbNtsbr83CVhXMlDcYbc2KN/7ZlAYugNOV+fxEup2y7wfb36rUAs4B7dKtaPCsMYFZ399+gOFSeFoLyFBSnEoXHcCe/5WD3zOMpP+tW7eUaHiKSq5dLugsNaf5bd/6CfwNh9qUFRXVczYPR7EGjTqLPmhwpYWN5SAGdxsehEMgZ6fqqCTmsK2ORs7Tg5BhR/LvapQqICSSK2OLYGWUpWqCvHWhhtc2irsYeIqPsmS5jZVyUVPa5LjLlczwBW1ZXVlH+eBxozzfywk76awOgWUNLUbhdxURf2HCvMCytclEVRMI8XVzlhmS1PAgijNVMbGrveNRVSrOk6wWaCSwhaAfeGeCReUQbdlw9Itk6hww2agMGqoMMqArV16xRY+ZRrVRlNmmDxjVelI4FxAhIYtgkqSMIvxOzrzj1UIm9eMlY1yzSmD47OK2n8GXUL2x5tpMzFZshy67hTOaVouxsPhHuLRej8czgMCzUeSz6fD6WLN1Q7lrJbvV7McXOCokNCyuQjsi5kWTRd9yvQXk0HhTpapydT1q/kM5lhDaKOCredwXUJG+okKg3+pUIWsfRUXW09JuOg7xdeR9g3JRLLRXMdxwz4JRpGy07wZmbc9YM/kuBtpXlxcQDr1NU+Bm85edqh58LU4jrVdII4KKdtHo7IeamEvjKG5nnue67paPBV0PdLgU67S3afg7UvN9TytOwYH/ykK3/SHlDWdD9uQdqxhHNbdXq6ysTfUXadpGfZlHI7Lpn9eBLXLv4Bl9xdkrA02V/u12iwif76H5a0ZmYTx/uurEAZTlg1expvFZez5wjh6KTsNHT0dbyJlM7uS5npfJq91X+ke2NqL/f185kXt3LJLJ9YW828Vt3nHrPJjFYqONYgmZOLtKd/FTYgRY9Poe8qSmER3wzmjYw0WAgFH6+UQ+WuOUpxZZl/zriUdhE5LJevQ2yWk70XTzLKnrrtlQaVQnIY93TK31Q3VzqBzppa11ZyctSqfsEjTDaeZvYp3pbBa4CnJnQTeQWHWDp8TWEet5WqBaLtDLvbe7mCkMtG0Z9wYx2HOpDF2wr4ETy7cPemoMnThhA9CsCQjM0fJycb1Woa0/lcL/0KD8Eahp0uSuxBLZZYJXm/1l1PNqxRGl6qk63PvlL124xVNMzZz3fKeFKpJOxwz6JX+2uytOsQLJx3aUEI3Ltyw5/oZeQHbbkrzhaflVFpNz7uwuCGGoabTieK1oKjdhr25GITKgTOWRLuembxRGOmMLXteEyq/rL6P222nUJyctrTeEDamFe9OjdLTTqsM1Azj7S2SPqzwbaT5ZwqhkCmL3gURq6L5TBsLslHcmpgoSvOGpYTT6eSQRMeaU0ICuHK0rbAlmUWaziaK04I5lm13TAbOIIEkkLg7jyTKjcJYh2wRgw2hRds42mypzyO3UugMDVVAj31q6OH5FbiEuii85j0ppH0tfkXEwvMVrxRkpnQTMYxHGRMCcpgQ9K1CxdFhdNMLm6qw1BW4NKkU0ozOi2hBnilKAMXFwQkbJIBv+juFZezMiWn2vaPCaGiQo0Kma/EMEip74Xh3LH3eKTx7o/Cm06gUsu8rpORCGZWEBbESRjXG5lFbN+au0ycSSg8CfjcH9xTkRqFq6l1lRUyrHrrQ44PCNaUphNS1CaduCwdiGbunLHH/wYbL87CECfO3Cs0bhSLthmEKhd7EddZ361VU1oqhQlHcpCoppbrUoLeI/JQwKEaOzcWxt4Cuaeb1DkymqygcQtFxEXp9K3h5vitrrJPkqUEXnrspW9YL1+tTW3T82F3K2t6L94SuIq/sJHs39lO2hqTRyl77SlFmie/6hM0cF7rsZU95VrZYGZ2vEpm90uA06148o2ACR5lRNms7ezttOtEqvWO2YNJ3B4qzOb4/5PRQKI2Gc3Xzx+9OTp6cfFFVO6okq6pQU+n43Ombkuk994LaX4dx7PuRo7WoUflCMaPzMMwJFKLlt9H5AGLQLoF86EbFQOvFOx0mHbfjONp5I1h1EsU+JZeOBzYMujulO2H2TIudxqQRgTPqbjQTGS0dd2/SYOWNwrCrhOs76SNVubd+VoSz16xSaGei9IviRXrzgC377unTL8pjoZmRsBclEObLdnFQVWvd7U2pzXNfg8LFCbdqZn/SdZw92fd6WwLxgX7ju047vA4sgzRCpdsudquWtKFw++RlEcbFVWrxQ+G8pPTyvP0xU8WiGxdDZqRNv6pktG5T6CPn2+p1z6g347Z4PdnFXuG3WHaHBgYQtqBmUueWbZLquEF9m9RMxo6PLiSvJdKs3B6i2CE5gx6f24eACWl0krMkswmrrfO8DDoWgxGJ3qqph7NDJrLqRZRs5XkAZbWkE1crW3qSQbsAx1at6dsyIVC4Z8nhQGHiQ13NMiMp1wdT2laaJcCh3pHB2QH2vAYDpCoEb/XzlrSyh34f+SEg0gQPvYb75SYf/l9morXvGh/+zZitVoeHXsP9Uj1Ffeg13C9S3uUh3L8j6gM/2L9/+PuXkAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCID/kb5RtYRiE55+cAAAAAElFTkSuQmCC" class="img-fluid w-200" alt="...">
              </div>
              <!-- Primera Fila -->
        <div class="row">
          <div class="col">
            <div class="mb-4">
              <label for="inputPeso" class="form-label"
                ><b>Número de Pedido</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputNumeroPedido"
                value="${inputNumeroPedido}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputEscalaDolor" class="form-label"
                ><b>Fecha</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputFechaPedido"
                value="${inputFechaPedido}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputUsuario" class="form-label"><b>Origen</b></label>
              <input
                type="text"
                class="form-control"
                id="inputOrigenPedido"
                value="${inputOrigenPedido}"
              />
            </div>
          </div>
        </div>
        <!-- Segunda Fila -->
        <div class="row">
            <div class="col">
              <div class="mb-4">
                <label for="inputPeso" class="form-label"
                  ><b>Medico Solicitante</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputMedicoSolicitante"
                  value="${inputMedicoSolicitante}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputEscalaDolor" class="form-label"
                  ><b>Especialidad</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputEspecialidad"
                  value="${inputEspecialidad}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputUsuario" class="form-label"><b>Apellidos y Nombres del Paciente</b></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputApellidosYNombres"
                  value="${inputApellidosYNombres}"
                />
              </div>
            </div>
        </div>
        <!-- Tercera Fila -->
        <div class="row">
            <div class="col">
              <div class="mb-4">
                <label for="inputPeso" class="form-label"
                  ><b>NHC</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNHC"
                  value="${inputNHC}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputEscalaDolor" class="form-label"
                  ><b>Número de Atención</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNumeroAtencion"
                  value="${inputNumeroAtencion}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputUsuario" class="form-label"><b>Ubicación</b></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputUbicacion"
                  value="${inputUbicacion}"
                />
              </div>
            </div>
        </div>
            <div class="row">
                <div class="col">
                    <div class="mb-6">
                        <label for="inputEscalaDolor" class="form-label"><b>Escala del Dolor</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor" value="${inputEscalaDelDolor}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <label for="inputPeso" class="form-label"><b>Peso</b></label>
                        <input type="text" class="form-control" id="inputPeso" value="${inputPeso}" />
                    </div>
                </div>
                <div class="col">
                    <div class="mb-6">
                        <label for="inputUsuario" class="form-label"><b>Usuario</b></label>
                        <input type="text" class="form-control" id="inputUsuario" value="${inputUsuario}">
                    </div>
                </div>

            </div>
            <div class="row">
                
                
                
            </div>

            <!-- Prescripción -->
            <label for="inputPrescripcion" class="form-label"><b>Prescripción</b></label>
            ${prescripcion}
            <br>
            <!-- Código -->
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <label for="inputCod" class="form-label"><b>Código</b></label>
                        <input type="text" class="form-control" id="inputCod" value="${inputCodigo}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="inputFecha" class="form-label"><b>Fecha</b></label>
                        <input type="text" class="form-control" id="inputFecha" value="${inputFecha}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="inputHora" class="form-label"><b>Hora</b></label>
                        <input type="text" class="form-control" id="inputHora" value="${inputHora}">
                    </div>
                </div>
            </div>
            <!-- Terapia Aerosol Medicina -->
            <div><label for="inputTerapiaAerosolMedicina" class="form-label"><b> Terapia Aerosol Medicina</b></div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Salbutamol</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Hipersal (7%)</b></label>
                    </div>
                    <div class="mb-4">
                        <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor">
                    </div>
                </div>
                <div class="col">
                    <label for="inputPeso" class="form-label"><b>Terapia Aerosol Medicina</b></label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Nebulización</b></label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Bromuro de Ipatropio</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Dexametasona</b></label>
                    </div>
                    <div class="mb-4">
                        <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor">
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Ultrasonido</b></label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Clorhidrato de Ambroxol</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Solución Salina (0,9%)</b></label>
                    </div>
                    <div class="mb-4">
                        <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor">
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Inhaladores Dosis Medida</b></label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Hipersal (3,5%)</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label for="inputPeso" class="form-label"><b>Adrenalina Racénica</b></label>
                    </div>
                    <div class="mb-4">
                        <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-4">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Otros</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Dosis</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        
                    </div>
                    
                </div>
                <div class="col">
                    <div class="mb-4">
                        
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-2">
                        <label for="inputPrescripcion" class="form-label"><b>Higiene Bronco Pulmonar</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Drenaje postural
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Percusiones
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Vibraciones
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Tos efectiva
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Asistente de tos
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Chaleco Vibroprecutor
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <!-- Succión -->
                        <label for="inputPrescripcion" class="form-label"><b>Succión</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Nasotraqueal
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Traqueal
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Orotraqueal
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Lavado Nasal
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Subglótica
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <!-- Muestra -->
                        <label for="inputPrescripcion" class="form-label"><b>Muestra</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Esputo
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Isopado
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Secreción Traqueal
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <!-- Observación clinica -->
                        <label for="inputPrescripcion" class="form-label"><b>Observación Clinica</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Consciencia
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Intubado
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Estridor
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Sibilancias
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Roncus
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Crepitantes
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Localización
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Cianosis
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Ruido Respiratorio
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Disminuido
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Abolido
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Sonido de la voz
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Edema
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <label for="inputPrescripcion" class="form-label"><b>Observación Clinica</b></label>
                        <br>
                        <label for="inputPrescripcion" class="form-label"><b>&nbsp;&nbsp;&nbsp;Sintomas</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Disnea
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Tos
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Expectoración
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Dolor Torácico
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Hemoptisis
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Fiebre
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <label for="inputPrescripcion" class="form-label"><b>Observación Clinica</b></label>
                        <br>
                        <label for="inputPrescripcion" class="form-label"><b>&nbsp;&nbsp;&nbsp;Signos</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Consciencia
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Intubado
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Estridor
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Sibilancias
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Roncus
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Crepitantes
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Localización
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Cianosis
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Ruido Respiratorio
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Disminuido
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Abolido
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Sonido de la voz
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Edema
                        </div>
                    </div>
                </div>
            </div>
            <!-- Higiene Bronco Pulmonar -->

            <br>
            <div class="row">
                <div class="col">
                    <div class="mb-6">
                        <label for="inputTerapiaAerosolMedicina" class="form-label"><b> Terapia Expansiva</b>
                        </label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="inputDosisTerapiaAerosol">
                            <label class="form-check-label" for="inputDosisTerapiaAerosol">
                                Incentivo Respiratorio
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputDosisTerapiaAerosol">
                                Presión positiva continua en la vía aérea
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputDosisTerapiaAerosol">
                                Presión positiva al final de la expiración
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="inputDosisTerapiaAerosol">
                            <label class="form-check-label" for="inputDosisTerapiaAerosol">
                                Kinesioterapia del torax
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="inputDosisTerapiaAerosol">
                            <label class="form-check-label" for="inputDosisTerapiaAerosol">
                                Ejercicios respiratorios
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-6">
                        <label for="inputTerapiaAerosolMedicina" class="form-label"><b>Incentivo
                                respiratorio</b></label>
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Mililitros por segundo</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Centimetros cúbicos por segundo</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>

                    </div>
                </div>

            </div>
            <br><br>
            <!-- Oxigenoterapia -->

            <div><label for="inputTerapiaAerosolMedicina" class="form-label"><b>Oxigenoterapia</b></div>
                <div class="row">
                    <div class="col">
                        <div class="mb-4">
    
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label for="inputPeso" class="form-label"><b>Fracción inspirada de oxígeno (FiO2)%</b></label>
                            </div>
                            <div class="mb-4">
                                <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                                <input type="text" class="form-control" id="inputEscalaDolor">
                            </div>
                            <div class="mb-4">
                                <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                                <input type="text" class="form-control" id="inputEscalaDolor">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Alto flujo (litro por minuto)</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Tienda facial</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-4">
    
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label for="inputPeso" class="form-label"><b>Tubo en T</b></label>
                            </div>
                            <div class="mb-4">
                                <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                                <input type="text" class="form-control" id="inputEscalaDolor">
                            </div>
                            <div class="mb-4">
                                <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                                <input type="text" class="form-control" id="inputEscalaDolor">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Cánula nasal</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Mascarrilla</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Heliox</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Litros por minuto</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label for="inputPeso" class="form-label"><b>Aire Ambiente</b></label>
                        </div>
                        <div class="mb-4">
                            <label for="inputEscalaDolor" class="form-label"><b>Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputEscalaDolor">
                        </div>
                    </div>
                    
                </div>
            <br>
            <br>

            <!-- Monitoreo Saturación -->
            <div class="row">
                <div class="col">
                    <div class="mb-6">
                        <label for="inputPrescripcion" class="form-label"><b>Monitoreo</b></label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Saturación O2(%)
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Ventilación mecánica
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="inputPrescripcion">
                                Ventilación no invasiva
                        </div>
                        <div>
                            <!-- Criterio -->
            <label for="inputPrescripcion" class="form-label"><b>Criterio</b></label>
            <div class="form-floating">
                <textarea class="form-control" id="floatingTextarea2"
                    style="height: 100px"></textarea>
            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="mb-6">
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Saturación Previa Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Saturación Posterior Porcentaje</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>

                    </div>
                    <div class="mb-6">
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Frecuencia Cardiaca Previa Por
                                    Minuto</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Frecuencia Cardiaca Posterior Por
                                    Minuto</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>

                    </div>
                    <div class="mb-6">
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Frecuencia Respiratoria Posterior Por
                                    Minuto</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>
                        <div class="mb-6">
                            <label for="inputPeso" class="form-label"><b>Frecuencia Respiratoria Posterior Por
                                    Minuto</b></label>
                            <input type="text" class="form-control" id="inputPeso" />
                        </div>

                    </div>
                </div>

            </div>

            <br>

            
            
                <br>
        </form>
              </fieldset>
              <script>window.print();</script>
            </body>
          </html>
        `;

      printWindow.document.write(printContent);
      printWindow.document.close();
    };
    if (
      //-------------
      //FormularioDeRegistro.listaDeFrecuenciaCardiaca.length !== 0 &&
      //FormularioDeRegistro.listaDeFrecuenciaRespiratoria.length !== 0 &&
      FormularioDeRegistro.listaDePeso.length !== 0 &&
      //FormularioDeRegistro.listaPrescripcion.length !== 0 &&//&&
      FormularioDeRegistro.listaEscalaDelDolor !== 0
      //FormularioDeRegistro.datosPorSecuencial.length !== 0
    ) {
      return m("form", [
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Número de Pedido")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputNumeroPedido",
                value: Pedido.data.CD_PRE_MED,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Fecha y Hora")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputFechaPedido",
                value: Pedido.data.FECHA_PEDIDO + " " + Pedido.data.HORA_PEDIDO,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputUsuario" },
                m("b", "Origen")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputOrigenPedido",
                value: Pedido.data.SECTOR,
              }),
            ])
          ),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Medico Solicitante")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputMedicoSolicitante",
                value: Pedido.data.MED_MV,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Especialidad")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputEspecialidad",
                value: Pedido.data.ESPECIALIDAD,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputUsuario" },
                m("b", "Apellidos y Nombres del Paciente")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputApellidosYNombres",
                value: Pedido.data.NM_PACIENTE,
              }),
            ])
          ),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "NHC")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputNHC",
                readonly: "readonly",
                value: Pedido.data.CD_PACIENTE,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Número de Atención")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                readonly: "readonly",
                id: "inputNumeroAtencion",
                value: Pedido.data.AT_MV,
              }),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputUsuario" },
                m("b", "Ubicación")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputUbicacion",
                readonly: "readonly",
                value: Pedido.data.SECTOR + " " + Pedido.data.UBICACION,
              }),
            ])
          ),
        ]),
        m("div", { class: "form-row" }, [
          m("div", { class: "form-group col-md-5" }, [
            m("label", { for: "inputEscalaDolor" }, "Escala Dolor"),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputEscalaDolor",
              placeholder: "Escala Dolor",
              readonly: "readonly",
              value:
                FormularioDeRegistro.listaEscalaDelDolor.data.length > 0
                  ? FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE ===
                    null
                    ? ""
                    : FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE
                  : "",
            }),
          ]),
          m("div", { class: "form-group col-md-2" }, [
            m("label", { for: "inputPeso" }, "Peso"),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputPeso",
              placeholder: "Peso",
              readonly: "readonly",
              /* value: obtenerDatos.listaDePeso.data[0].VALUE != undefined ? obtenerDatos.listaDePeso.data[0].VALUE : '', */
              value:
                FormularioDeRegistro.listaDePeso.data.length > 0
                  ? FormularioDeRegistro.listaDePeso.data[0].VALUE == null
                    ? ""
                    : FormularioDeRegistro.listaDePeso.data[0].VALUE
                  : "",
            }),
          ]),

      
          m("div", { class: "form-group col-md-5" }, [
            m("label", { for: "inputUsuario" }, "Usuario"),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputUsuario",
              placeholder: "Usuario",
              readonly: "readonly",
              value: FormularioDeRegistro.usuarioConectado.user.user,
            }),
          ]),
        ]),
        m("div", { class: "form-row" }, [
          
        ]),
        m("div", { class: "form-group" }, [
          m("label", { for: "inputPrescripcion" }, "Prescripción"),
          m(
            "div",
            {},
            Pedido.examenes.map(function ({ EXAMEN, FRECUENCIA }) {
              return m("div", { class: "form-check" }, [
                m("input", {
                  type: "checkbox",
                  class: "form-check-input",
                  id: `${EXAMEN}`,
                  value: `${EXAMEN} ${FRECUENCIA}`,
                }),
                m(
                  "label",
                  {
                    class: "form-check-label ml-2",
                    for: `${EXAMEN} ${FRECUENCIA}`,
                  },
                  `${EXAMEN} - ${FRECUENCIA}`
                ),
              ]);
            })
          ),
        ]),

        m("div", { class: "form-group" }, [
          m("label", { for: "inputCod" }, "Cod"),
          m("input", {
            class: "form-control",
            type: "text",
            id: "inputCod",
            placeholder: "Código",
            readonly: "readonly",
            value: Pedido.data.AT_MV,
          }),
        ]),
        m("div", { class: "form-group" }, [
          m("label", { for: "inputFecha" }, "Fecha"),
          m("input", {
            class: "form-control",
            type: "text",
            id: "inputFecha",
            placeholder: "Fecha",
            value: FormularioDeRegistro.fechaActual,
            readonly: "readonly",
          }),
        ]),
        m("div", { class: "form-group" }, [
          m("label", { for: "inputHora" }, "Hora"),
          m("input", {
            class: "form-control",
            type: "text",
            id: "inputHora",
            placeholder: "Hora",
            value: FormularioDeRegistro.horaActual,
            readonly: "readonly",
          }),
        ]),
        m(
          "div",
          m(
            "label",
            { class: "form-label", for: "inputTerapiaAerosolMedicina" },
            m("b", " Terapia Aerosol Medicina")
          )
        ),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Salbutamol")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Dosis")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Hipersal (7%)")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Dosis")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m("div", { class: "col" }, [
            m(
              "label",
              { class: "form-label", for: "inputPeso" },
              m("b", "Terapia Aerosol Medicina")
            ),
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Nebulización")
              ),
            ]),
          ]),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Bromuro de Ipatropio")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Dosis")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Dexametasona")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Dosis")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m(
            "div",
            { class: "col" },
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Ultrasonido")
              ),
            ])
          ),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Clorhidrato de Ambroxol")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Dosis")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Solución Salina (0,9%)")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Dosis")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m(
            "div",
            { class: "col" },
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Inhaladores Dosis Medida")
              ),
            ])
          ),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Hipersal (3,5%)")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Dosis")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Adrenalina Racénica")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Dosis")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m("div", { class: "col" }, m("div", { class: "mb-4" })),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m(
              "div",
              { class: "mb-6" },
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Otros")
                ),
              ])
            )
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-6" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Dosis")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ])
          ),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Higiene Bronco Pulmonar")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Drenaje postural "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Percusiones "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Vibraciones "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Tos efectiva "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Asistente de tos "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Chaleco Vibroprecutor "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Succión")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Nasotraqueal "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Traqueal "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Orotraqueal "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Lavado Nasal "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Subglótica "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Muestra")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Esputo "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Isopado "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Secreción Traqueal "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Observación Clinica")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Consciencia "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Intubado "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Estridor "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Sibilancias "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Roncus "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Crepitantes "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Localización "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Cianosis "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Ruido Respiratorio "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Disminuido "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Abolido "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Sonido de la voz "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Edema "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Observación Clinica")
              ),
              m("br"),
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", [
                  m.trust("&nbsp;"),
                  m.trust("&nbsp;"),
                  m.trust("&nbsp;"),
                  "Sintomas",
                ])
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Disnea "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Tos "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Expectoración "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Dolor Torácico "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Hemoptisis "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Fiebre "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-2" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Observación Clinica")
              ),
              m("br"),
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", [
                  m.trust("&nbsp;"),
                  m.trust("&nbsp;"),
                  m.trust("&nbsp;"),
                  "Signos",
                ])
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Consciencia "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Intubado "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Estridor "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Sibilancias "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Roncus "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Crepitantes "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Localización "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Cianosis "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Ruido Respiratorio "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Disminuido "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Abolido "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Sonido de la voz "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Edema "
                ),
              ]),
            ])
          ),
        ]),
        m("br"),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-6" }, [
              m(
                "label",
                { class: "form-label", for: "inputTerapiaAerosolMedicina" },
                m("b", " Terapia Expansiva")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDosisTerapiaAerosol",
                }),
                m(
                  "label",
                  {
                    class: "form-check-label",
                    for: "inputDosisTerapiaAerosol",
                  },
                  " Incentivo Respiratorio "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  {
                    class: "form-check-label",
                    for: "inputDosisTerapiaAerosol",
                  },
                  " Presión positiva continua en la vía aérea "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  {
                    class: "form-check-label",
                    for: "inputDosisTerapiaAerosol",
                  },
                  " Presión positiva al final de la expiración "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDosisTerapiaAerosol",
                }),
                m(
                  "label",
                  {
                    class: "form-check-label",
                    for: "inputDosisTerapiaAerosol",
                  },
                  " Kinesioterapia del torax "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDosisTerapiaAerosol",
                }),
                m(
                  "label",
                  {
                    class: "form-check-label",
                    for: "inputDosisTerapiaAerosol",
                  },
                  " Ejercicios respiratorios "
                ),
              ]),
            ])
          ),
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-6" }, [
              m(
                "label",
                { class: "form-label", for: "inputTerapiaAerosolMedicina" },
                m("b", "Incentivo respiratorio")
              ),
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Mililitros por segundo")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Centimetros cúbicos por segundo")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
            ])
          ),
        ]),
        m("br"),
        m("br"),
        m(
          "div",
          m(
            "label",
            { class: "form-label", for: "inputTerapiaAerosolMedicina" },
            m("b", "Oxigenoterapia")
          )
        ),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Fracción inspirada de oxígeno (FiO2)%")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Alto flujo (litro por minuto)")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Litros por minuto")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Tienda facial")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Litros por minuto")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
        ]),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-4" }, [
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Tubo en T")
                ),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputEscalaDolor",
                }),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Cánula nasal")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Litros por minuto")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Mascarrilla")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Litros por minuto")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
        ]),
        m("div", { class: "row" }, [
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Heliox")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Litros por minuto")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
          m("div", { class: "col" }, [
            m("div", { class: "form-check" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
              }),
              m(
                "label",
                { class: "form-label", for: "inputPeso" },
                m("b", "Aire Ambiente")
              ),
            ]),
            m("div", { class: "mb-4" }, [
              m(
                "label",
                { class: "form-label", for: "inputEscalaDolor" },
                m("b", "Porcentaje")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputEscalaDolor",
              }),
            ]),
          ]),
        ]),
        m("br"),
        m("br"),
        m("div", { class: "row" }, [
          m(
            "div",
            { class: "col" },
            m("div", { class: "mb-6" }, [
              m(
                "label",
                { class: "form-label", for: "inputPrescripcion" },
                m("b", "Monitoreo")
              ),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Saturación O2(%) "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Ventilación mecánica "
                ),
              ]),
              m("div", { class: "form-check" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "flexCheckDefault",
                }),
                m(
                  "label",
                  { class: "form-check-label", for: "inputPrescripcion" },
                  " Ventilación no invasiva "
                ),
              ]),
              m("div", [
                m(
                  "label",
                  { class: "form-label", for: "inputPrescripcion" },
                  m("b", "Criterio")
                ),
                m(
                  "div",
                  { class: "form-floating" },
                  m("textarea", {
                    class: "form-control",
                    placeholder: "Criterio",
                    id: "floatingTextarea2",
                    style: { height: "100px" },
                  })
                ),
              ]),
            ])
          ),
          m("div", { class: "col" }, [
            m("div", { class: "mb-6" }, [
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Saturación Previa Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Saturación Posterior Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
            ]),
            m("div", { class: "mb-6" }, [
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Frecuencia Cardiaca Previa Por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Frecuencia Cardiaca Posterior Por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
            ]),
            m("div", { class: "mb-6" }, [
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Frecuencia Respiratoria Posterior Por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Frecuencia Respiratoria Posterior Por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "text",
                  id: "inputPeso",
                }),
              ]),
            ]),
          ]),
        ]),
        m("br"),
        m(
          "button",
          { class: "btn btn-primary", type: "button", onclick: printFormData },
          "Imprimir"
        ),
      ]);
    } else {
      return m(
        "div.pd-10.wd-100p",
        m("div.placeholder-paragraph", [m("div.line"), m("div.line")])
      );
    }
  },
};

export default FormularioDeRegistro;
