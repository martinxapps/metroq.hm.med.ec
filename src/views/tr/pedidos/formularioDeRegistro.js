import m from "mithril";
import terapiaRespiratoriaController from "./Models/obtenerDatos";
import Pedido from "./pedido";
import Encrypt from "../../../models/encrypt";

const obtenerDatos = terapiaRespiratoriaController;
let isEsputoSelected = false;
let isPanelViralSelected = false;
let isRadioSelected = false;


const FormularioDeRegistro = {
   listaDeFrecuenciaCardiaca: [],
   errorCargandoFrecuenciaCardiaca: "",
   listaDeFrecuenciaRespiratoria: [],
   errorCargandoFrecuenciaRespiratoria: "",
   listaDePeso: [],
   errorCargaDePeso: "",
   listaEscalaDelDolor: [],
  errorCargaDeEscalaDelDolor: "",
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
        if (resultado.status) {
          FormularioDeRegistro.listaDeFrecuenciaCardiaca = resultado;
          console.log(FormularioDeRegistro.listaDeFrecuenciaCardiaca);
          //m.redraw();
        } else {
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
        if (resultado.status) {
          FormularioDeRegistro.listaDeFrecuenciaRespiratoria =
            resultado;
            console.log(FormularioDeRegistro.listaDeFrecuenciaRespiratoria);
        } /* else {
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
        if (resultado.status) {
          FormularioDeRegistro.listaDePeso = resultado;
          console.log(FormularioDeRegistro.listaDePeso);
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
        if (resultado.status) {
          FormularioDeRegistro.listaEscalaDelDolor = resultado;
          console.log(FormularioDeRegistro.listaEscalaDelDolor)
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
    terapiaRespiratoriaController.fechaActual = fechaFormateada;
  },

  cargarHoraActual: function () {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    terapiaRespiratoriaController.horaActual = horaFormateada;
  },
  oninit: (_data) => {

    
    FormularioDeRegistro.cargarFrecuenciaCardiaca(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarFrecuenciaRespiratoria(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarPeso(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarEscalaDelDolor(54563); // 10090 // _data.attrs.pedido.AT_MV
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
  },
  usuarioConectado: [],
  view: (vnode) => {


    if(FormularioDeRegistro.listaDeFrecuenciaCardiaca.length !== 0 && FormularioDeRegistro.listaDeFrecuenciaRespiratoria.length !== 0 && FormularioDeRegistro.listaDePeso.length !== 0){
      return m("form", [
        m("div", { class: "form-row" }, [
          m("div", { class: "form-group col-md-4" }, [
            m("label", { for: "inputFrecuenciaCardiaca" }, "Frecuencia Cardiaca"),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputFrecuenciaCardiaca",
              placeholder: "Frecuencia Cardiaca",
              readonly: "readonly",
              value: FormularioDeRegistro.listaDeFrecuenciaCardiaca.length > 0 ?FormularioDeRegistro.listaDeFrecuenciaCardiaca.data[0].VALUE : '',
              /* value:
                terapiaRespiratoriaController.listaDeFrecuenciaCardiaca.data[0]
                  .VALUE, */
              //value: obtenerDatos.listaDeFrecuenciaCardiaca.data[0].VALUE != undefined ? obtenerDatos.listaDeFrecuenciaCardiaca.data[0].VALUE : '',
              /* value: function(){
                if(obtenerDatos.bloquearCamposCuandoSeGuarda){
                  obtenerDatos.datosGuardados.FRECUENCIA_CARDIACA
                }else{
                  obtenerDatos.listaDeFrecuenciaCardiaca.data[0].VALUE
                }
              } */
            }),
          ]),
          m("div", { class: "form-group col-md-4" }, [
            m(
              "label",
              { for: "inputFrecuenciaRespiratoria" },
              "Frecuencia Respiratoria"
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputFrecuenciaRespiratoria",
              placeholder: "Frecuencia Respiratoria",
              readonly: "readonly",
              /* value:
                terapiaRespiratoriaController.listaDeFrecuenciaRespiratoria
                  .data[0].VALUE, */
              //value: obtenerDatos.listaDeFrecuenciaRespiratoria.data[0].VALUE != undefined ? obtenerDatos.listaDeFrecuenciaRespiratoria.data[0].VALUE : '',
              value: FormularioDeRegistro.listaDeFrecuenciaRespiratoria.length > 0 ? FormularioDeRegistro.listaDeFrecuenciaRespiratoria.data[0].VALUE : '',
            }),
          ]),
          m("div", { class: "form-group col-md-4" }, [
            m("label", { for: "inputPeso" }, "Peso"),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputPeso",
              placeholder: "Peso",
              readonly: "readonly",
              //value: obtenerDatos.listaDePeso.data[0].VALUE != undefined ? obtenerDatos.listaDePeso.data[0].VALUE : '',
              value: FormularioDeRegistro.listaDePeso.length > 0 ? FormularioDeRegistro.listaDePeso.data[0].VALUE : '',
            }),
          ]),
        ]),
        m("div", { class: "form-row" }, [
          m("div", { class: "form-group col-md-4" }, [
            m("label", { for: "inputEscalaDolor" }, "Escala Dolor"),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputEscalaDolor",
              placeholder: "Escala Dolor",
              readonly: "readonly",
              value: FormularioDeRegistro.listaEscalaDelDolor.length > 0 ? FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE : '',
            }),
          ]),
          m("div", { class: "form-group col-md-4" }, [
            m("label", { for: "inputAtencion" }, "Atención"),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputAtencion",
              placeholder: "Atención",
              readonly: "readonly",
              value: Pedido.data.AT_MV,
            }),
          ]),
          m("div", { class: "form-group col-md-4" }, [
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
        m("div", { class: "form-group" }, [
          m("label", { for: "inputPrescripcion" }, "Prescripción"),
          m(
            "select",
            /* {
              id: "inputPrescripcion",
            }, */
            { class: "custom-select", id: "inputPrescripcion" },
            //obtenerDatos.lista.data.map(function (prescripcion) {
              //return m(
                //"option",
                // { value: `${prescripcion.CODIGO} ${prescripcion.FECHA}` },
                //`${prescripcion.CODIGO} ${prescripcion.FECHA}`
                /* " ",
                prescripcion.FECHA */
              //);
            //})
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
            value: FormularioDeRegistro.fechaActual(),
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
        m("div", { class: "form-group" }, [
          m("label", { for: "inputFrecuenciaAlDia" }, "Frecuencia al día"),
          m(
            "select",
            {
              class: "custom-select",
              disabled: obtenerDatos.habilitarCampos,
              id: "inputFrecuenciaAlDia",
            },
            [
              m("option", "Seleccione..."),
              m("option", { value: "1" }, "En este momento"),
              m("option", { value: "2" }, "Una vez"),
              m("option", { value: "3" }, "Dos veces"),
              m("option", { value: "4" }, "Tres veces"),
              m("option", { value: "5" }, "Cuatro veces"),
              m("option", { value: "6" }, "Cada hora"),
              m("option", { value: "7" }, "Cada dos horas"),
              m("option", { value: "8" }, "Cada tres horas"),
              m("option", { value: "9" }, "Cada cuatro horas"),
              m("option", { value: "10" }, "Cada sesis horas"),
              m("option", { value: "11" }, "Cada ocho horas"),
              m("option", { value: "12" }, "Cada doce horas"),
              m("option", { value: "13" }, "Set"),
              m("option", { value: "14" }, "Respetar horas de sueño"),
            ]
          ),
        ]),
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m(
              "label",
              { for: "inputTerapiaAerosolMedicina" },
              "Terapia Aerosol Medicinas"
            ),
            m("div", { class: "input-group" }, [
              m(
                "select",
                {
                  class: "custom-select",
                  disabled: obtenerDatos.habilitarCampos,
                  id: "inputTerapiaAerosolMedicina",
                },
                [
                  m("option", "Seleccione..."),
                  m("option", { value: "1" }, "Nebulización"),
                  m("option", { value: "2" }, "Ultrasonido"),
                  m("option", { value: "3" }, "Inhaladores dosis medida"),
                ]
              ),
              m(
                "select",
                {
                  class: "custom-select",
                  disabled: obtenerDatos.habilitarCampos,
                  //disabled: true,
                  id: "inputDosisTerapiaAerosol",
                },
                [
                  m("option", "Seleccione..."),
                  m("option", { value: "1" }, "Salbumatol"),
                  m("option", { value: "2" }, "Bromuro de ipratropio"),
                  m("option", { value: "3" }, "N acetilcisteina"),
                  m("option", { value: "3" }, "Clorhidrato de ambroxol"),
                  m("option", { value: "5" }, "Hipersal (3,5%)"),
                  m("option", { value: "6" }, "Hipersal (7%)"),
                  m("option", { value: "7" }, "Dexametasona"),
                  m("option", { value: "8" }, "Solución salina (0,9%)"),
                  m("option", { value: "9" }, "Adrenalina Racénica"),
                  m("option", { value: "10" }, "Otros"),
                ]
              ),
            ]),
          ])
        ),
        m("div", { class: "form-group" }, [
          m(
            "label",
            { for: "inputHigieneBroncoPulmonar" },
            "Higiene Bronco Pulmonar"
          ),
          m(
            "select",
            {
              class: "custom-select",
              disabled: obtenerDatos.habilitarCampos,
              id: "inputHigieneBroncoPulmonar",
            },
            [
              m("option", "Seleccione..."),
              m("option", { value: "1" }, "Drenaje postural"),
              m("option", { value: "2" }, "Percusiones"),
              m("option", { value: "3" }, "Vibraciones"),
              m("option", { value: "4" }, "Tos efectiva"),
              m("option", { value: "5" }, "Asistente de tos"),
              m("option", { value: "6" }, "Chaleco Vibroprecutor"),
            ]
          ),
        ]),
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m("label", { for: "inputTerapiaExpansiva" }, "Terapia Expansiva"),
            m("div", { class: "input-group" }, [
              m(
                "select",
                {
                  id: "inputTerapiaExpansiva",
                  class: "custom-select",
                  onchange: function (event) {
                    let selectValue = event.target.value;
                    let inputTerapiaExpansiva2 = document.getElementById(
                      "inputTerapiaExpansiva2"
                    );
                    if (selectValue === "1") {
                      inputTerapiaExpansiva2.removeAttribute("readonly");
                    } else {
                      inputTerapiaExpansiva2.setAttribute("readonly", "readonly");
                      inputTerapiaExpansiva2.value = "";
                    }
                  },
                  disabled: obtenerDatos.habilitarCampos,
                },
                [
                  m("option", "Seleccione..."),
                  m("option", { value: "1" }, "Incentivo respiratorio"),
                  m(
                    "option",
                    { value: "2" },
                    "Presión positiva continua en la vía aérea"
                  ),
                  m(
                    "option",
                    { value: "3" },
                    "Presión positiva al final de la expiración"
                  ),
                  m("option", { value: "4" }, "Kinesioterapia del torax"),
                  m("option", { value: "5" }, "Ejercicios respiratorios"),
                ]
              ),
  
              m("input", {
                class: "form-control",
                type: "number",
                id: "inputTerapiaExpansiva2",
                placeholder: "Terapia Expansiva",
                readonly: "readonly",
                maxlength: 10,
                oninput: function (event) {
                  event.target.value = event.target.value.slice(0, 10);
                },
              }),
            ]),
          ])
        ),
  
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m("label", { for: "inputOxinoterapia" }, "Oxinoterapia"),
            m("div", { class: "input-group" }, [
              m(
                "select",
                {
                  class: "custom-select",
                  disabled: obtenerDatos.habilitarCampos,
                  id: "Oxinoterapia",
                },
                [
                  m("option", "Seleccione..."),
                  m(
                    "option",
                    { value: "1" },
                    "Fracción inspirada de oxígeno (FiO2)%"
                  ),
                  m("option", { value: "2" }, "Alto flujo (litro por minuto)"),
                  m("option", { value: "3" }, "Tienda facial"),
                  m("option", { value: "4" }, "Tubo en T"),
                ]
              ),
              m("input", {
                class: "form-control",
                type: "number",
                id: "inputOxinoterapia2",
                placeholder: "Oxinoterapia",
                //readonly: "readonly",
                disabled: obtenerDatos.habilitarCampos,
                maxlength: 10,
                /* disabled: obtenerDatos.bloquearCamposCuandoSeGuarda, */
                oninput: function (event) {
                  event.target.value = event.target.value.slice(0, 10);
                },
                /* value: obtenerDatos.bloquearCamposCuandoSeGuarda ? obtenerDatos.datosGuardados.OXIGENO_TERAPIA : 0 */
                /* function(){
                  if(obtenerDatos.bloquearCamposCuandoSeGuarda){
                    obtenerDatos.datosGuardados.OXIGENO_TERAPIA
                  }
                }, */
              }),
            ]),
          ])
        ),
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m("label", { for: "inputMonitoreoPrevio" }, "Monitoreo Previo"),
            m("div", { class: "input-group" }, [
              m(
                "select",
                {
                  class: "custom-select",
                  disabled: obtenerDatos.habilitarCampos,
                  id: "inputMonitoreoPrevio",
                  onchange: function (event) {
                    let selectValue = event.target.value;
                    let inputMonitoreoPrevio2 = document.getElementById(
                      "inputMonitoreoPrevio2"
                    );
                    if (selectValue === "1") {
                      inputMonitoreoPrevio2.removeAttribute("readonly");
                    } else {
                      inputMonitoreoPrevio2.setAttribute("readonly", "readonly");
                      inputMonitoreoPrevio2.value = "";
                    }
                  },
                },
                [
                  m("option", "Seleccione..."),
                  m("option", { value: "1" }, "Saturación O2(%)"),
                  m("option", { value: "2" }, "Ventilación mecánica"),
                  m("option", { value: "3" }, "Ventilación no invasiva"),
                ]
              ),
              m("input", {
                class: "form-control",
                type: "number",
                id: "inputMonitoreoPrevio2",
                placeholder: "Monitoreo Previo",
                readonly: "readonly",
                maxlength: 10,
                oninput: function (event) {
                  event.target.value = event.target.value.slice(0, 10);
                },
              }),
            ]),
          ])
        ),
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m("label", { for: "inputMonitoreoPosterior" }, "Monitoreo Posterior"),
            m("div", { class: "input-group" }, [
              m(
                "select",
                {
                  class: "custom-select",
                  disabled: obtenerDatos.habilitarCampos,
                  id: "inputMonitoreoPosterior",
                  onchange: function (event) {
                    let selectValue = event.target.value;
                    let inputMonitoreoPosterior2 = document.getElementById(
                      "inputMonitoreoPosterior2"
                    );
                    if (selectValue === "1") {
                      inputMonitoreoPosterior2.removeAttribute("readonly");
                    } else {
                      inputMonitoreoPosterior2.setAttribute(
                        "readonly",
                        "readonly"
                      );
                      inputMonitoreoPosterior2.value = "";
                    }
                  },
                },
                [
                  m("option", "Seleccione..."),
                  m("option", { value: "1" }, "Saturación O2(%)"),
                  m("option", { value: "2" }, "Ventilación mecánica"),
                  m("option", { value: "3" }, "Ventilación no invasiva"),
                ]
              ),
              m("input", {
                class: "form-control",
                type: "number",
                id: "inputMonitoreoPosterior2",
                placeholder: "Monitoreo Posterior",
                readonly: "readonly",
                maxlength: 10,
                oninput: function (event) {
                  event.target.value = event.target.value.slice(0, 10);
                },
              }),
            ]),
          ])
        ),
        /* m("input", {
          class: "form-control",
          type: "number",
          id: "inputSuccion",
          placeholder: "Frecuencia Cardiaca",
          //readonly: "readonly",
          disabled: obtenerDatos.habilitarCampos
        }), */
        m(
          "div",
          { class: "form-row" },
          m("div", { class: "form-group col-md-12" }, [
            m("label", { for: "inputSuccion" }, "Succión"),
            m("div", { class: "input-group" }, [
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputSuccion",
                placeholder: "Frecuencia Cardiaca",
                //readonly: "readonly",
                disabled: obtenerDatos.habilitarCampos,
                maxlength: 50,
                oninput: function (event) {
                  event.target.value = event.target.value.slice(0, 50);
                },
              }),
            ]),
          ])
        ),
        m("div", { class: "form-group row" }, [
          m("label", { class: "col-form-label col-sm-2 pt-0" }, "Muestra"),
          m("div", { class: "col-sm-10" }, [
            m("div", { class: "custom-control custom-checkbox" }, [
              m("input", {
                class: "custom-control-input",
                type: "checkbox",
                id: "checkboxEsputo",
                disabled: obtenerDatos.habilitarCampos,
                onclick: function (event) {
                  isEsputoSelected = event.target.checked;
                },
              }),
              m(
                "label",
                { class: "custom-control-label", for: "checkboxEsputo" },
                "Esputo"
              ),
            ]),
            m("div", { class: "custom-control custom-checkbox" }, [
              m("input", {
                class: "custom-control-input",
                type: "checkbox",
                id: "checkboxPanelViral",
                disabled: obtenerDatos.habilitarCampos,
                onclick: function (event) {
                  isPanelViralSelected = event.target.checked;
                },
              }),
              m(
                "label",
                { class: "custom-control-label", for: "checkboxPanelViral" },
                "Panel Viral"
              ),
            ]),
          ]),
        ]),
        m("div", { class: "form-group" }, [
          m(
            "label",
            { class: "form-label", for: "textAreaObservacionClinica" },
            "Observación clinica"
          ),
          m("textarea", {
            class: "form-control",
            id: "textAreaObservacionClinica",
            rows: "3",
            disabled: obtenerDatos.habilitarCampos,
            /* value: terapiaRespiratoriaController.datosPorSecuencial.data[0].OBSERVACION_CLINICA != undefined ?
            terapiaRespiratoriaController.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? terapiaRespiratoriaController.datosPorSecuencial.data[0].OBSERVACION_CLINICA : '' : '', */
            //value: terapiaRespiratoriaController.datosPorSecuencial.data[0].CD_SECUENCIAL === Pedido.data.AT_MV ? terapiaRespiratoriaController.datosPorSecuencial.data[0].OBSERVACION_CLINICA : '',
            //value: terapiaRespiratoriaController.datosPorSecuencial.data[0].OBSERVACION_CLINICA,
          }),
        ]),
        m("div", { class: "form-group" }, [
          m(
            "label",
            { class: "form-label", for: "textAreaCriterio" },
            "Criterio"
          ),
          m("textarea", {
            class: "form-control",
            id: "textAreaCriterio",
            rows: "3",
            disabled: obtenerDatos.habilitarCampos,
          }),
        ]),
        m(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            disabled: obtenerDatos.habilitarCampos,
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
                CD_FORMULARIO: 25,
                CD_ATENDIMENTO: `${Pedido.data.AT_MV}`,
                FECHA_REGISTRO: `to_date('${vnode.dom["inputFecha"].value}','DD-MM-YY')`,
                USUARIO: `'${vnode.dom["inputUsuario"].value}'`,
                CD_PRE_MED: valorPrescripcion(), /* `${
                  vnode.dom["inputPrescripcion"].options[
                    vnode.dom["inputPrescripcion"].selectedIndex
                  ].text
                }` */
                // 10,
                CD_SECUENCIAL: `${vnode.dom["inputCod"].value}`, //"SEQ_TERAPIA_RESPIRATORIA.nextval",//"SEQ_TERAPIA_RESPIRATORIA.nextval", // Aqui poner un secuencial
                FRECUENCIA_CARDIACA: `${vnode.dom["inputFrecuenciaCardiaca"].value}`,
                FRECUENCIA_RESPIRATORIA: `${vnode.dom["inputFrecuenciaRespiratoria"].value}`,
                PESO: `'${vnode.dom["inputPeso"].value}'`,
                ESCALA_DOLOR: `'${vnode.dom["inputEscalaDolor"].value}'`,
                HORA_REGISTRO: `'${vnode.dom["inputHora"].value}'`,
                //FRECUENCIA_DIARIA: `'${vnode.dom['inputFrecuenciaAlDia'].text}'`,
                FRECUENCIA_DIARIA: `'${
                  vnode.dom["inputFrecuenciaAlDia"].options[
                    vnode.dom["inputFrecuenciaAlDia"].selectedIndex
                  ].text
                }'`,
  
                TERAPIA_AEROSOL: `'${
                  vnode.dom["inputTerapiaAerosolMedicina"].options[
                    vnode.dom["inputTerapiaAerosolMedicina"].selectedIndex
                  ].text
                }'`,
                DOSIS_TERAPIA_AEROSOL: `'${
                  vnode.dom["inputDosisTerapiaAerosol"].options[
                    vnode.dom["inputDosisTerapiaAerosol"].selectedIndex
                  ].text
                }'`,
                HIGIENE_BRONCO_PULMONA: `'${
                  vnode.dom["inputHigieneBroncoPulmonar"].options[
                    vnode.dom["inputHigieneBroncoPulmonar"].selectedIndex
                  ].text
                }'`,
                TERAPIA_EXPANSIVA: `'${
                  vnode.dom["inputTerapiaExpansiva"].options[
                    vnode.dom["inputTerapiaExpansiva"].selectedIndex
                  ].text
                }'`,
                CANTIDAD_TERAPIA_EXPANSIVA: `'${vnode.dom["inputTerapiaExpansiva2"].value}'`,
                OXIGENO_TERAPIA: `'${
                  vnode.dom["Oxinoterapia"].options[
                    vnode.dom["Oxinoterapia"].selectedIndex
                  ].text
                }'`,
                CANTIDAD_OXIGENO_TERAPIA: `'${vnode.dom["inputOxinoterapia2"].value}'`,
                MONITOREO_TERAPIA: `'${
                  vnode.dom["inputMonitoreoPrevio"].options[
                    vnode.dom["inputMonitoreoPrevio"].selectedIndex
                  ].text
                }'`,
                CANTIDAD_MONITOREO_TERAPIA: `'${vnode.dom["inputMonitoreoPrevio2"].value}'`,
                SUCCION_TERAPIA: `'${vnode.dom["inputSuccion"].value}'`,
                ESPUTO: isEsputoSelected ? "'true'" : "'false'",
                PANEL_VIRAL: isPanelViralSelected ? "'true'" : "'false'",
                OBSERVACION_CLINICA: `'${vnode.dom["textAreaObservacionClinica"].value}'`,
                CRITERIO_CLINICO: `'${vnode.dom["textAreaCriterio"].value}'`,
                //CD_PRE_MED: 10, // Este es la la información de la prescripción
                MONITOREO_TERAPIA_POSTERIOR: `'${
                  vnode.dom["inputMonitoreoPosterior"].options[
                    vnode.dom["inputMonitoreoPosterior"].selectedIndex
                  ].text
                }'`,
                CANTIDAD_MONITOREO_TERAPIA_POS: `'${vnode.dom["inputMonitoreoPosterior2"].value}'`,
  
                // Falta monitoreo posterior y cantidad de monitoreo posterior
              };
              console.log(formulario);
              console.log(Pedido.data.AT_MV);
              obtenerDatos.guardar(formulario);
              //alert("Guardar");
              //alert("Guardar");
              //terapiaRespiratoriaController.guardar(formulario);
            },
          },
          "Guardar"
        ),
        m(
          "button",
          {
            class: "btn btn-primary",
            //type: "submit",
            type: "button",
            disabled: obtenerDatos.habilitarCampos,
            onclick: function () {
              console.log(Pedido.data.AT_MV);
              //console.log(terapiaRespiratoriaController.datosPorSecuencial.data[0].CD_SECUENCIAL);
              console.log(FormularioDeRegistro.listaDeFrecuenciaCardiaca.data[0].VALUE);
            },
          },
          "Eliminar"
        ),
      ]);
    }else{
      return [
        m('p', 'procesandoooo-...')
      ]
    }


  },
};

export default FormularioDeRegistro;
