import m from "mithril";
import Pedido from "./pedido";
import Encrypt from "../../../models/encrypt";
import { urlTerapiaRespiratoria } from "./constants";
import Button from "./botonEstado";

let isNebulizacionSelected = false;
let isUltrasonidoSelected = false;
let isInhaladorDosisMedidaSelected = false;
// Higiene Bronco Pulmonar
let isDrenajePosturalSelected = false;
let isPercusionesSelected = false;
let isVibracionesSelected = false;
let isTosEfectivaSelected = false;
let isAsistenteDeTosSelected = false;
let isChalecoVibroprecutor = false;
// Terapia Expansiva
let isIncentivoRespiratorioSelected = false;
let isPresionPositivaContinuaEnLaViaAereaSelected = false;
let isPresionPositivaAlFinalDeLaExpiracionSelected = false;
let isKinesioterapiaSelected = false;
let isEjerciciosRespiratorioSelected = false;
// Monitoreo
let isVentilacionMecanicaSelected = false;
let isVentilacionNoInvasivaSelected = false;

// Succión
let isNasotraquealSelected = false;
let isTraquealSelected = false;
let isOroTraquealSelected = false;
let isLavadoNasalSelected = false;
let isSubGloticoSelected = false;


// Muestras
let isEsputoSelected = false;
let isHisopadoSelected = false;
let isSecrecionTraquealSelected = false;

//Observación Clínica
let isDisneaSelected = false;
let isTosSelected = false;
let isExpectoracionSelected = false;
let isDolorToracicoSelected = false;
let isHemoptisisSelected = false;
let isFiebreSelected = false;

// Signos
let isConscienciaSelected = false;
let isIntubadoSelected = false;
let isEstridorSelected = false;
let isSibilanciasSelected = false;
let isRoncusSelected = false;
let isCrepitantesSelected = false;
let isLocalizacionSelected = false;
let isCianosisSelected = false;
let isRuidoRespiratorioSelected = false;
let isDisminuidoSelected = false;
let isAbolidoSelected = false;
let isSonidoDeLaVozSelected = false;
let isEdemaSelected = false;

const botonFinalizarTurno = {
  view: function() {
    return m("button", {"class":"btn btn-danger","type":"button", onclick: methodPutButton,}, 
    "Finalizar Documento"
  )
  }
};

/* const Button = {
  estado: "",
  obtenerEstado: function (number) {
    m.request({
      method: "GET",
      url: `http://api.hospitalmetropolitano.org/t/v1/terapia-respiratoria/estados?CD_PRE_MED=${number}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (result) {
        if (result.data.length === 0) {
          Button.estado = "";
        } else {
          Button.estado = result.data[0].ESTADO;
          m.redraw();
        }
      })
      .catch(function (error) {
        alert(
          `Error al enviar los datos, intente de nuevo al recargar la página`
        );
      });
  },
  view: function () {
    let buttonText = "Finalizar Documento";
    let buttonClass = "btn";

    if (
      Button.estado === "" ||
      Button.estado.length === 0 ||
      Button.estado === ""
    ) {
      buttonText = "Iniciar Documento";
      buttonClass += " btn-primary";
    } else {
      buttonText = "Documento Inicializado";
      buttonClass += " btn-warning";
    }

    const cancelClick = function (e) {
      if (confirm("¿Estas seguro de finalizar el documento?")) {
        methodPostButton();
        //Button.estado = "1";
        buttonText = "Documento Finalizado";
        buttonClass = "btn btn-danger";
        e.target.textContent = buttonText;
        e.target.classList.remove("btn-primary");
        e.target.classList.add("btn-danger");
        e.target.disabled = true;
        m.redraw();
      } else {
        e.target.textContent = buttonText;
        e.target.classList.remove("btn-danger");
        e.target.classList.add("btn-primary");
        e.target.disabled = false;
        m.redraw();
      }
    };

    const button = m(
      "button",
      {
        onclick: cancelClick,
        class: buttonClass,
        type: "button",
        // disabled: false,
        disabled: Button.estado !== "" && Button.estado !== "0",
      },
      buttonText
    );

    return m("main", [button]);
  },
}; */

function date() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
}

function methodPostButton() {
  m.request({
    method: "POST",
    url: "http://api.hospitalmetropolitano.org/t/v1/nuevo-status-pedido-tr",
    body: {
      CD_PRE_MED: Pedido.numeroPedido,
      FECHA: date(),
      ESTADO: 1,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: localStorage.accessToken,
    },
  })
    .then(function (result) {
      window.location.reload();
      //console.log("Datos enviados con exito")
    })
    .catch(function (error) {
      alert(
        `Error al enviar los datos, intente de nuevo al recargar la página`
      );
    });
}

function methodPutButton() {
  m.request({
    method: "Put",
    url: "http://api.hospitalmetropolitano.org/t/v1/nuevo-status-pedido-tr",
    body: {
      CD_PRE_MED: Pedido.numeroPedido,
      FECHA: date(),
      ESTADO: 0,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: localStorage.accessToken,
    },
  })
    .then(function (result) {
      window.location.reload();
      //console.log("Datos enviados con exito")
    })
    .catch(function (error) {
      alert(
        `Error al enviar los datos, intente de nuevo al recargar la página`
      );
    });
}

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
          //console.log(FormularioDeRegistro.listaDePeso);
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
          //console.log(FormularioDeRegistro.listaEscalaDelDolor);
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
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}:${segundos}`;
    FormularioDeRegistro.fechaActual = fechaFormateada;
    //console.log(FormularioDeRegistro.fechaActual);
  },

  cargarHoraActual: function () {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    FormularioDeRegistro.horaActual = horaFormateada;
    return horaFormateada;
    //console.log(FormularioDeRegistro.horaActual);
  },

  ExamenYFrecuencia: function () {
    const examenes = Pedido.examenes.map(({Examen, Frecuencia}) => {
      return `${Examen} ${Frecuencia}`;
    });
    return examenes;
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
          //console.log(FormularioDeRegistro.listaPrescripcion);
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
    //throw new Error("No se ha implementado el método guardar");
    m.request({
      method: "POST",
      url: urlTerapiaRespiratoria,
      body: formularioTerapiaRespiratoria,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
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
        console.log(error);
      });
  },
  handleCheckboxClick: (value) => {
    if (selectedValues.includes(value)) {
      // Si el valor ya está en el array, lo removemos
      selectedValues = selectedValues.filter((val) => val !== value);
    } else {
      // Si el valor no está en el array, lo agregamos
      selectedValues.push(value);
    }
  },

  oninit: (_data) => {
    FormularioDeRegistro.cargarPeso(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarEscalaDelDolor(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarFechaActual();
    FormularioDeRegistro.cargarHoraActual();
    FormularioDeRegistro.cargarPrescripcion(_data.attrs.pedido.AT_MV); // 1918 //

    FormularioDeRegistro.usuarioConectado = Encrypt.getDataUser(); // Obtener el nombre de usuario
    Button.obtenerEstado(Pedido.numeroPedido);
  },
  usuarioConectado: [],
  view: (vnode) => {
    if (
      FormularioDeRegistro.listaDePeso.length !== 0 &&
      FormularioDeRegistro.listaEscalaDelDolor !== 0
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
        m("div", { class: "form-row" }, []),
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
                  onclick: function (event) {
                    FormularioDeRegistro.handleCheckboxClick(event.target.value);
                  },
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
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Terapia Aerosol")
          ),
          m("div", { class: "row d-flex justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputNebulizacion",
                  onclick: function (event) {
                    isNebulizacionSelected = event.target.checked;
                  },
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Nebulización"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputUltrasonido",
                  onclick: function (event) {
                    isUltrasonidoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Ultrasonido"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputInahaladorDosis",
                  onclick: function (event) {
                    isInhaladorDosisMedidaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Inhaladores Dosis Medida"
                ),
              ])
            ),
          ]),
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Medicinas")
          ),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Salbutamol")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputSalbumatol",
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
                  m("b", "Hipersal (7%)")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputHipersal",
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-4" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Hipersal (3,5%)")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputHipersal3",
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
                  m("b", "Dexametasona")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputDexametasona",
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
                  m("b", "Clorhidrato de Ambroxol")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputClorhidratoAmbroxol",
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
                  m("b", "Solución Salina (0,9%)")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputSolucionSalina",
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
                  { class: "form-label", for: "inputUsuario" },
                  m("b", "Bromuro de Ipatropio")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputBromuroIpatropio",
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
                  m("b", "Adrenalina Racénica")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputAdrenalinaRacenica",
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
                  m("b", "Otros")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputOtros",
                }),
              ])
            ),
          ]),
        ],
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Higiene Bronco Pulmonar")
          ),
          m("div", { class: "row d-flex justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputDrenajePostural}",
                  id: "inputDrenajePostural",
                  onclick: function (event){
                    isDrenajePosturalSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Drenaje Postural"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputPercursiones}",
                  id: "inputPercursiones",
                  onclick: function (event){
                    isPercusionesSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Percursiones"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputVibraciones}",
                  id: "inputVibraciones",
                  onclick: function (event){
                    isVibracionesSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Vibraciones"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputTosEfectiva}",
                  id: "inputTosEfectiva",
                  onclick: function (event){
                    isTosEfectivaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Tos Efectiva"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputAsistenteTos}",
                  id: "inputAsistenteTos",
                  onclick: function (event){
                    isAsistenteDeTosSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Asistente de Tos"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "${inputChalecoVibroprecutor}",
                  id: "inputChalecoVibroprecutor",
                  onclick: function (event){
                    isChalecoVibroprecutor = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Chaleco Vibroprecutor"
                ),
              ])
            ),
          ]),
        ],
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Terapia Expansiva")
          ),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-1" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputIncentivoRespiratorio",
                  onclick: function (event){
                    isIncentivoRespiratorioSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Incentivo Respiratorio"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputPresionPositivaContinuaEnLaViaAeria",
                  onclick: function (event){
                    isPresionPositivaContinuaEnLaViaAereaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Presión Positiva continua en la vía aérea"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputPresionPositivaAlFinalDeLaExpiracion",
                  onclick: function (event){
                    isPresionPositivaAlFinalDeLaExpiracionSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Presión Positiva al final de la expiración"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-1" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputKinesioterapiaDelTorax",
                  onclick: function (event){
                    isKinesioterapiaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Kinesioterapia del tórax"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-1" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputEjerciciosRespiratorios",
                  onclick: function (event){
                    isEjerciciosRespiratorioSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Ejercicios respiratorios"
                ),
              ])
            ),
          ]),
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Incentivo Respiratorio")
          ),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Mililitros por segundo")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputMililitrosPorSegundo",
                  
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Centimetros cúbicos por segundo")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputCentimetrosCubicosPorSegundo",
                }),
              ])
            ),
          ]),
        ],
        [
          m("br"),
          m("br"),
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Oxigenoterapia")
          ),
          m("h6", "Fracción inspirada de oxigeno (FiO2 %)"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeFraccion",
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
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitrosPorMinutoFraccion",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Alto Flujo (litro por minuto)"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeAltoFlujo",
                  
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Litro por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroAltoFlujo",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Tienda Facial"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeTiendaFacial",
                  
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
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroPorMinutoTiendaFacial",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Tubo en T"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeTuboEnT",
                  
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Litro por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroTuboEnT",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Canula Nasal"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeCanulaNasal",
                  
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
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroPorMinutoCanulaNasal",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Mascarilla"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeMascarilla",
                  
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Litro por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroMascarilla",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Heliox"),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeHeliox",
                  
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
                  m("b", "Litros por minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputLitroPorMinutoHeliox",
                  
                }),
              ])
            ),
          ]),
          m("h6", "Aire Ambiente"),
          m(
            "div",
            { class: "row" },
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputPorcentajeAireAmbiente",
                  
                }),
              ])
            )
          ),
        ],
        m("br"),
        m("br"),
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Monitoreo")
          ),
          m("div", { class: "row d-flex justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-1" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputVentilacionMecanica",
                  onclick: function (event){
                    isVentilacionMecanicaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Ventilación Mecánica"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-4" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputVentilacionNoInvasiva",
                  onclick: function (event){
                    isVentilacionNoInvasivaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Ventilación no invasiva"
                ),
              ])
            ),
          ]),
          m("div", { class: "row" }, [
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Previa Saturación O2(%) Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputSaturacionPreviaPorcentaje",
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Posterior Saturación O2(%) Porcentaje")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputSaturacionPosteriorPorcentaje",
                }),
              ])
            ),
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
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Previa Frecuencia Cardiaca por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputFrecuenciaCardiacaPreviaPorMinuto",
                  
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Posterior Frecuencia Cardiaca por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputFrecuenciaCardiacaPosteriorPorMinuto",
                }),
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
                  { class: "form-label", for: "inputPeso" },
                  m("b", "Previa Frecuencia Respiratoria por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputFrecuenciaRespiratoriaPreviaPorMinuto",
                }),
              ])
            ),
            m(
              "div",
              { class: "col" },
              m("div", { class: "mb-6" }, [
                m(
                  "label",
                  { class: "form-label", for: "inputEscalaDolor" },
                  m("b", "Posterior Frecuencia Respiratoria por Minuto")
                ),
                m("input", {
                  class: "form-control",
                  type: "number",
                  id: "inputFrecuenciaRespiratoriaPosteriorPorMinuto",
                }),
              ])
            ),
          ]),
        ],
        m("br"),
        m("br"),
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Succión")
          ),
          m("div", { class: "row justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputNasotraqueal",
                  onclick: function (event){
                    isNasotraquealSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Nasotraqueal"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputTraqueal",
                  onclick: (event) => {
                    isTraquealSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Traqueal"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputOrotraqueal",
                  onclick: (event) => {
                    isOroTraquealSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Orotraqueal"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputLavadoNasal",
                  onclick: (event) => {
                    isLavadoNasalSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Lavado Nasal"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-3" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputSubglotica",
                  onclick: (event) => {
                    isSubGloticoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Subglótica"
                ),
              ])
            ),
          ]),
        ],
        m("br"),
        m("br"),
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Muestras")
          ),
          m("div", { class: "row justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputEsputo",
                  onclick: (event) => {
                    isEsputoSelected = event.target.checked
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Esputo"),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputHisopado",
                  onclick: (event) => {
                    isHisopadoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Hisopado"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputSecrecionTraqueal",
                  onclick: (event) => {
                    isSecrecionTraquealSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Secreción Traqueal"
                ),
              ])
            ),
          ]),
        ],
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Observación Clínica")
          ),
          m("h6", "Síntomas"),
          m("div", { class: "row justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDisnea",
                  onclick: (event) => {
                    isDisneaSelected = event.target.checked;
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Disnea"),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputTos",
                  onclick: (event) => {
                    isTosSelected = event.target.checked;
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Tos"),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputExpectoacion",
                  onclick: (event) => {
                    isExpectoracionSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Expectoración"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDolorToracico",
                  onclick: (event) => {
                    isDolorToracicoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Dolor Torácico"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputHemoptisis",
                  onclick: (event) => {
                    isHemoptisisSelected = event.target.checked;
                  }

                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Hemoptisis"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputFiebre",
                  onclick: (event) => {
                    isFiebreSelected = event.target.checked;
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Fiebre"),
              ])
            ),
          ]),
          m("h6", "Signos"),
          m("div", { class: "row justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputConsciencia",
                  onclick: (event) => {
                    isConscienciaSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Consciencia"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputIntubado",
                  onclick: (event) => {
                    isIntubadoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Intubado"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputEstridor",
                  onclick: (event) => {
                    isEstridorSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Estridor"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputSibilancias",
                  onclick: (event) => {
                    isSibilanciasSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Sibilancias"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputRoncus",
                  onclick: (event) => {
                    isRoncusSelected = event.target.checked;
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Roncus"),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputCrepitantes",
                  onclick: (event) => {
                    isCrepitantesSelected = event.target.checked;
                  }

                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Crepitantes"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputLocalizacion",
                  onclick: (event) => {
                    isLocalizacionSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Localización"
                ),
              ])
            ),
          ]),
          m("div", { class: "row justify-content-center" }, [
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputCianosis",
                  onclick: (event) => {
                    isCianosisSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Cianosis"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputRuidoRespiratorio",
                  onclick: (event) => {
                    isRuidoRespiratorioSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Ruido Respiratorio"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputDisminuido",
                  onclick: (event) => {
                    isDisminuidoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Disminuido"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputAbolido",
                  onclick: (event) => {
                    isAbolidoSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Abolido"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputSonidoDeLaVoz",
                  onclick: (event) => {
                    isSonidoDeLaVozSelected = event.target.checked;
                  }
                }),
                m(
                  "label",
                  { class: "form-label", for: "inputPeso" },
                  "Sonido de la voz"
                ),
              ])
            ),
            m(
              "div",
              { class: "col text-center" },
              m("div", { class: "mb-2" }, [
                m("input", {
                  class: "form-check-input",
                  type: "checkbox",
                  value: "",
                  id: "inputEdema",
                  onclick: (event) => {
                    isEdemaSelected = event.target.checked;
                  }
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Edema"),
              ])
            ),
          ]),
        ],
        [
          m(
            "label",
            { class: "form-label", for: "textAreaObservacionClinica" },
            "Criterio"
          ),
          m("textarea", {
            class: "form-control",
            id: "textareaCriterio",
            rows: "3",
          }),
        ],
        m(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            //disabled: obtenerDatos.habilitarCampos,
            onclick: function () {
              const valorPrescripcion = () => {
                const valor = `${
                  vnode.dom["inputPrescripcion"].options[
                    vnode.dom["inputPrescripcion"].selectedIndex
                  ].text
                }`;
                let palabraAEnviar = "";
                for (const key in valor) {
                  if (valor[key] === " ") {
                    break;
                  }
                  palabraAEnviar += valor[key];
                }
                return parseInt(palabraAEnviar);
              };
              const formulario = {
                NUMERODEPEDIDO: vnode.dom["inputNumeroPedido"].value,
                "FECHAMV": `'${vnode.dom["inputFechaPedido"].value}'`,
                "ORIGEN": `'${vnode.dom["inputOrigenPedido"].value}'`,
                "MEDICOSOLICITANTE": `'${vnode.dom["inputMedicoSolicitante"].value}'`,
                "ESPECIALIDAD": `'${vnode.dom["inputEspecialidad"].value}'`,
                "APELLIDOSNOMBREPACIENTE": `'${vnode.dom["inputApellidosYNombres"].value}'`,
                "NHC": vnode.dom["inputNHC"].value,
                "NUMEROATENCION": vnode.dom["inputNumeroAtencion"].value,
                "UBICACION": `'${vnode.dom["inputUbicacion"].value}'`,
                "ESCALADELDOLOR": `'${vnode.dom["inputEscalaDolor"].value}'`,
                "PESO": vnode.dom["inputPeso"].value,
                "Usuario": `'${vnode.dom["inputUsuario"].value}'`,
                "PRESCRIPCION": `'${Pedido.examenes.map(({Examen, Frecuencia}) => {
                  return `${Examen} ${Frecuencia}`;
                })}'`,
                //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`, 
                FECHAHOY: "To_Date(" + `'${vnode.dom["inputFecha"].value}'` + ", 'DD-MM-YYYY HH24:MI:SS')",
                //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`, 
                //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')", 
                HORAANTES: `'${vnode.dom["inputHora"].value}'`,
                "HORADESPUES": `'${FormularioDeRegistro.cargarHoraActual()}'`,
                SALBUTAMOLDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputSalbumatol"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSalbumatol"].value)
                }`,
                HIPERSAL7DOSIS: `${
                  isNaN(parseInt(vnode.dom["inputHipersal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputHipersal"].value)
                }`,
                BROMURODELPATROPIODOSIS: `${
                  isNaN(parseInt(vnode.dom["inputBromuroIpatropio"].value))
                    ? 0
                    : parseInt(vnode.dom["inputBromuroIpatropio"].value)
                }`,
                DEXAMETASONADOSIS: `${isNaN(
                  parseInt(vnode.dom["inputDexametasona"].value)
                ) ? 0 : parseInt(vnode.dom["inputDexametasona"].value)}`,
                CLORHIDRATODEAMBROXOLDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputClorhidratoAmbroxol"].value))
                    ? 0
                    : parseInt(vnode.dom["inputClorhidratoAmbroxol"].value)
                }`,
                SOLUCIONSALINADOSIS: `${
                  isNaN(parseInt(vnode.dom["inputSolucionSalina"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSolucionSalina"].value)
                }`,
                HIPERSAL35DOSIS: `${
                  isNaN(parseInt(vnode.dom["inputHipersal3"].value))
                    ? 0
                    : parseInt(vnode.dom["inputHipersal3"].value)
                }`,
                ADRENALINARACENICADOSIS: `${isNaN(parseInt(vnode.dom["inputAdrenalinaRacenica"].value)) ? 0 : parseInt(vnode.dom["inputAdrenalinaRacenica"].value)}`,
                OTROSDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputOtros"].value))
                    ? 0
                    : parseInt(vnode.dom["inputOtros"].value)
                }`,
                "NEBULIZACION": isNebulizacionSelected ? "'true'" : "'false'",
                "ULTRASONIDO": isUltrasonidoSelected ? "'true'" : "'false'",
                "INHALADORESDOSISMEDIDA": isInhaladorDosisMedidaSelected ? "'true'" : "'false'",
                "DRENAJEPOSTURAL": isDrenajePosturalSelected ? "'true'" : "'false'",
                "PERCUSIONES": isPercusionesSelected ? "'true'" : "'false'",
                "VIBRACIONES": isVibracionesSelected ? "'true'" : "'false'",
                "TOSEFECTIVA": isTosEfectivaSelected ? "'true'" : "'false'",
                "ASISTENCIADETOS": isAsistenteDeTosSelected ? "'true'" : "'false'",
                "CHALECOVIBROPRECUTOR": isChalecoVibroprecutor ? "'true'" : "'false'",
                "NASOTRAQUEAL": isNasotraquealSelected ? "'true'" : "'false'",
                "TRAQUEAL": isTraquealSelected ? "'true'": "'false'",
                "OROTRAQUEAL": isOroTraquealSelected ? "'true'" : "'false'",
                "LAVADONASAL": isLavadoNasalSelected ? "'true'" : "'false'",
                "SUBGLOTICA": isSubGloticoSelected ? "'true'" : "'false'",
                "ESPUTO": isEsputoSelected ? "'true'" : "'false'",
                "ISOPADO": isHisopadoSelected ? "'true'" : "'false'",
                "SECRECIONTRAQUEAL": isSecrecionTraquealSelected ? "'true'" : "'false'",
                "CONSCIENCIA": isConscienciaSelected ? "'true'" : "'false'",
                "INTUBADO": isIntubadoSelected ? "'true'" : "'false'",
                "ESTRIDOR": isEstridorSelected ? "'true'" : "'false'",
                "SIBILANCIAS": isSibilanciasSelected  ? "'true'" : "'false'",
                "RONCUS": isRoncusSelected ? "'true'" : "'false'",
                "CREPITANTES": isCrepitantesSelected ? "'true'" : "'false'",
                "LOCALIZACION": isLocalizacionSelected ? "'true'" : "'false'",
                "CIANOSIS": isCianosisSelected ? "'true'" : "'false'",
                "RUIDORESPIRATORIO": isRuidoRespiratorioSelected ? "'true'" : "'false'",
                "DISMINUIDO": isDisminuidoSelected ? "'true'" : "'false'",
                "ABOLIDO": isAbolidoSelected ? "'true'" : "'false'",
                "SONIDODELAVOZ": isSonidoDeLaVozSelected ? "'true'" : "'false'",
                "EDEMA": isEdemaSelected ? "'true'" : "'false'",
                "DISNEA": isDisneaSelected ? "'true'" : "'false'",
                "TOS": isTosSelected ? "'true'" : "'false'",
                "EXPECTORACION": isExpectoracionSelected ? "'true'" : "'false'",
                "DOLORTORACICO": isDolorToracicoSelected ? "'true'" : "'false'",
                "HEMOPTISIS": isHemoptisisSelected ? "'true'" : "'false'",
                "FIEBRE": isFiebreSelected ? "'true'" : "'false'",
                "INCENTIVORESPIRATORIO": isIncentivoRespiratorioSelected ? "'true'" : "'false'",
                "PRESIONPOSITIVAVIAAREA": isPresionPositivaContinuaEnLaViaAereaSelected ? "'true'" : "'false'",
                "PRESIONPOSITIVAEXPIRACION": isPresionPositivaAlFinalDeLaExpiracionSelected ? "'true'" : "'false'",
                "KINISIOTERAPIADELTORAX": isKinesioterapiaSelected ? "'true'" : "'false'",
                "EJERCICIOSRESPIRATORIOS": isEjerciciosRespiratorioSelected ? "'true'" : "'false'",
                "MILILITROSPORSEGUNDOINCENTIVO": `${
                  isNaN(parseInt(vnode.dom["inputMililitrosPorSegundo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputMililitrosPorSegundo"].value)
                }`,
                "CENTIMETROSSEGUNDOINCENTIVO": `${
                  isNaN(parseInt(vnode.dom["inputCentimetrosCubicosPorSegundo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputCentimetrosCubicosPorSegundo"].value)
                }`,
                "FRACCIONOXIGENOPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeFraccion"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeFraccion"].value)
                }`,
                "FRACCIONIOXIGENOLITROS": `${
                  isNaN(parseInt(vnode.dom["inputLitrosPorMinutoFraccion"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitrosPorMinutoFraccion"].value)
                }`,
                "ALTOFLUJOPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeAltoFlujo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeAltoFlujo"].value)
                }`,
                "ALTOFLUJOLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroAltoFlujo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroAltoFlujo"].value)
                }`,
                "TIENDAFACIALPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeTiendaFacial"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeTiendaFacial"].value)
                }`,
                "TIENDAFACIALLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroPorMinutoTiendaFacial"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroPorMinutoTiendaFacial"].value)
                }`,
                "TUBOENTPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeTuboEnT"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeTuboEnT"].value)
                }`,
                "TUBOENTLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroTuboEnT"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroTuboEnT"].value)
                }`,
                "CANULANASALPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeCanulaNasal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeCanulaNasal"].value)
                }`,
                "CANULANASALLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroPorMinutoCanulaNasal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroPorMinutoCanulaNasal"].value)
                }`,
                "MASCARILLAPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeMascarilla"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeMascarilla"].value)
                }`,
                "MASCARILLALITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroMascarilla"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroMascarilla"].value)
                }`,
                "HELIOXPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeHeliox"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeHeliox"].value)
                }`,
                "HELIOXLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroPorMinutoHeliox"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroPorMinutoHeliox"].value)
                }`,
                "AIREAMBIENTEPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeAireAmbiente"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeAireAmbiente"].value)
                }`,
                "VENTILACIONMECANICA": isVentilacionMecanicaSelected ? "'true'" : "'false'",
                "VENTILACIONNOINVASIVA": isVentilacionNoInvasivaSelected ? "'true'" : "'false'",
                "SATURACIONPREVIA": `${
                  isNaN(parseInt(vnode.dom["inputSaturacionPreviaPorcentaje"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSaturacionPreviaPorcentaje"].value)
                }`,
                "SATURACIONPOSTERIOR": `${
                  isNaN(parseInt(vnode.dom["inputSaturacionPosteriorPorcentaje"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSaturacionPosteriorPorcentaje"].value)
                }`,
                "FRECUENCIACARDIACAPREVIA": `${
                  isNaN(parseInt(vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value))
                    ? 0
                    : parseInt(vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value)
                }`,
                "FRECUENCIACARDIACAPOSTERIOR": `${
                  isNaN(parseInt(vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value))
                    ? 0
                    : parseInt(vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value)
                }`, 
                 "FRECUENCIARESPIRATORIAPREVIA": `${
                  isNaN(parseInt(vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value))
                    ? 0
                    : parseInt(vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value)
                }`,
                "FRECUENCIARESPIRATORIAPOS": `${
                  isNaN(parseInt(vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value))
                    ? 0
                    : parseInt(vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value)
                }`,
                "CRITERIO": `'${vnode.dom["textareaCriterio"].value}'`,
                ESTADO: "'Activo'", //"1",
                ID: "sec_TerapiaRespiratoria.nextval",
              };
              if (confirm("¿Estás seguro quieres guardar este formulario?")) {
                // Lógica de eliminación del elemento aquí
                console.log(formulario);
                console.log(Pedido.data.AT_MV);
                FormularioDeRegistro.guardar(formulario);
              }

              //alert("Guardar");
              //alert("Guardar");
              //terapiaRespiratoriaController.guardar(formulario);
            },
          },
          "Guardar"
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
