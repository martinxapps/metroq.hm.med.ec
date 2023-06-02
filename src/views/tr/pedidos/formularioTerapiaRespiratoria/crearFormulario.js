import m from "mithril";
import FormularioModels from './models/formularioModels';
//import muestraValida from './muestraValida';
import Pedido from "../pedido";
import Encrypt from "../../../../models/encrypt";
import { handleCheckboxClick, cargarFechaActual, cargarHoraActual } from "./logic/formulario";

let formularioModelo = FormularioModels;

//Selected
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

const CrearFormulario = {
    usuarioConectado: '',
    oninit: () => { 
        //muestraModelo.generarSecuencial();
        formularioModelo.cargarEscalaDelDolor(Pedido.data.AT_MV);
        CrearFormulario.usuarioConectado = Encrypt.getDataUser();
    },
    view: (vnode) => {
        // return m("form#crear-muestra", [
        //     m("table.table", [
        //         /* m("tr", [
        //             m("th.tx-12", "ID MUESTRA"),
        //             m("td.tx-12", [
        //                 m("input.form-control[id='inputmuestraid'][type='text']", { 
        //                     disabled: true, 
        //                     value: muestraModelo.secuencialMuestra,
        //                 }),
        //             ]),
        //         ]),
        //         m("tr.muestradescripcion", [
        //             m("th.tx-12", "Descripción de la Muestra"),
        //             m("td.tx-12", [
        //                 m("textarea.form-control[id='inputmuestradescripcion'][placeholder='Descripción de la Muestra'][title='Descripción de la Muestra']", {
        //                     style: "min-height: 100px",
        //                     rows: 4,
        //                 })
        //             ]),
        //         ]),  */                              
        //         m("tr", [
        //             //m(muestraValida),
        //             m("td.tx-12", [
        //                 m('div#observacionesnovalida'),
        //                 m("button.btn.btn-xs.btn-primary.mg-l-2.tx-semibold[type='button']", {
        //                     onclick: function() { 
        //                         /* if (vnode.dom['inputmuestradescripcion'].value.length === 0) {
        //                             muestraModelo.error = "El campo Descripción es Requerido";
        //                             alert(muestraModelo.error);
        //                             vnode.dom['inputmuestradescripcion'].focus();
        //                         } else if (!vnode.dom['checkvalida'].checked && vnode.dom['inputobservacionesnovalida'].value.length === 0) {
        //                             muestraModelo.error = "El campo Observaciones es Requerido, cuando la muestra no es válida";
        //                             alert(muestraModelo.error);
        //                             vnode.dom['inputobservacionesnovalida'].focus();
        //                         } else {
        //                             let muestra = {
        //                                 nopedidomv: parseInt(muestraModel.numeroPedido),
        //                                 noatencionmv: parseInt(muestraModel.numeroAtencion),
        //                                 nohistoriaclinicamv: parseInt(muestraModel.numeroHistoriaClinica), 
        //                                 idestadopedido: 1,                                       
        //                                 descripcion: vnode.dom['inputmuestradescripcion'].value,
        //                                 valida: vnode.dom['checkvalida'].checked ? 1 : 0,
        //                                 observacionesmuestranovalida: vnode.dom['checkvalida'].checked ? null : vnode.dom['inputobservacionesnovalida'].value
        //                             }
        //                             muestraModelo.guardar(muestra);
        //                             m.mount(document.querySelector("#gestion-muestras"), null);
        //                             m.mount(document.querySelector("#cerrar-gestion-muestras"), null);
        //                             muestraModelo.listado = [];
        //                             muestraModelo.loading = true;
        //                         } */
        //                         const formulario = {
        //                             NUMERODEPEDIDO: 555,
        //                             ESTADO: "'PENDIENTE'",
        //                             ID: "sec_TerapiaRespiratoria.nextval",
        //                         }

        //                         formularioModelo.guardar(formulario);
        //                         m.mount(document.querySelector("#gestion-muestras"), null);
        //                         m.mount(document.querySelector("#cerrar-gestion-muestras"), null);
        //                         formularioModelo.listado = [];
        //                         formularioModelo.loading = true;
        //                     },
        //                         style: {'margin': '6px 0'}
        //                 }, [
        //                     m("i.fas.fa-save.mg-r-5", )
        //                 ], "Guardar"
        //                 ),]
        //             ),
        //         ]),
        //     ]),
        // ])
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
                  /* value:
                    FormularioDeRegistro.listaEscalaDelDolor.data.length > 0
                      ? FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE ===
                        null
                        ? ""
                        : FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE
                      : "", */
                  //value: formularioModelo.listaEscalaDelDolor.data[0].VALUE,
                  value: formularioModelo.listaEscalaDelDolor &&
                  formularioModelo.listaEscalaDelDolor.data &&
                  formularioModelo.listaEscalaDelDolor.data.length > 0 &&
                  formularioModelo.listaEscalaDelDolor.data[0].VALUE !== null
                    ? formularioModelo.listaEscalaDelDolor.data[0].VALUE
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
                  value: Pedido.data.PESO,
                    
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
                  value: CrearFormulario.usuarioConectado.user.user,
                }),
              ]),
            ]),
            //
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
                        handleCheckboxClick(event.target.value);
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
    
            /* m("div", { class: "form-group" }, [
              m("label", { for: "inputCod" }, "Cod"),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputCod",
                placeholder: "Código",
                readonly: "readonly",
                value: Pedido.data.AT_MV,
              }),
            ]), */
            m("div", { class: "form-group" }, [
              m("label", { for: "inputFecha" }, "Fecha"),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputFecha",
                placeholder: "Fecha",
                value: cargarFechaActual(),
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
                value: cargarHoraActual(),
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
                    "PESO": `'${vnode.dom["inputPeso"].value}'`,
                    "Usuario": `'${vnode.dom["inputUsuario"].value}'`,
                    "PRESCRIPCION": `'${Pedido.examenes.map(({Examen, Frecuencia}) => {
                      return `${Examen} ${Frecuencia}`;
                    })}'`,
                    //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`, 
                    FECHAHOY: "To_Date(" + `'${vnode.dom["inputFecha"].value}'` + ", 'DD-MM-YYYY HH24:MI:SS')",
                    //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`, 
                    //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')", 
                    HORAANTES: `'${vnode.dom["inputHora"].value}'`,
                    "HORADESPUES": `'${cargarHoraActual()}'`,
                    SALBUTAMOLDOSIS: vnode.dom["inputSalbumatol"].value.length > 0 ? vnode.dom["inputSalbumatol"].value : 0,
                    HIPERSAL7DOSIS: vnode.dom["inputHipersal"].value.length > 0 ? vnode.dom["inputHipersal"].value : 0,
                    BROMURODELPATROPIODOSIS: vnode.dom["inputBromuroIpatropio"].value.length > 0 ? vnode.dom["inputBromuroIpatropio"].value : 0,
                    DEXAMETASONADOSIS: vnode.dom["inputDexametasona"].value.length > 0 ? vnode.dom["inputDexametasona"].value : 0,
                    CLORHIDRATODEAMBROXOLDOSIS: vnode.dom["inputClorhidratoAmbroxol"].value.length > 0 ? vnode.dom["inputClorhidratoAmbroxol"].value : 0,
                    SOLUCIONSALINADOSIS: vnode.dom["inputSolucionSalina"].value.length > 0 ? vnode.dom["inputSolucionSalina"].value : 0,
                    HIPERSAL35DOSIS: vnode.dom["inputHipersal3"].value.length > 0 ? vnode.dom["inputHipersal3"].value : 0,
                    ADRENALINARACENICADOSIS: vnode.dom["inputAdrenalinaRacenica"].value.length > 0 ? vnode.dom["inputAdrenalinaRacenica"].value : 0,
                    OTROSDOSIS: vnode.dom["inputOtros"].value.length > 0 ? vnode.dom["inputOtros"].value : 0,
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
                    "MILILITROSPORSEGUNDOINCENTIVO": vnode.dom["inputMililitrosPorSegundo"].value.length > 0 ? vnode.dom["inputMililitrosPorSegundo"].value : 0,
                    "CENTIMETROSSEGUNDOINCENTIVO": vnode.dom["inputCentimetrosCubicosPorSegundo"].value.length > 0 ? vnode.dom["inputCentimetrosCubicosPorSegundo"].value : 0,
                    "FRACCIONOXIGENOPORCENTAJE": vnode.dom["inputPorcentajeFraccion"].value.length > 0 ? vnode.dom["inputPorcentajeFraccion"].value : 0,
                    "FRACCIONIOXIGENOLITROS": vnode.dom["inputLitrosPorMinutoFraccion"].value.length > 0 ? vnode.dom["inputLitrosPorMinutoFraccion"].value : 0,
                    "ALTOFLUJOPORCENTAJE": vnode.dom["inputPorcentajeAltoFlujo"].value.length > 0 ? vnode.dom["inputPorcentajeAltoFlujo"].value : 0,
                    "ALTOFLUJOLITROSPORMINUTO": vnode.dom["inputLitroAltoFlujo"].value.length > 0 ? vnode.dom["inputLitroAltoFlujo"].value : 0,
                    "TIENDAFACIALPORCENTAJE": vnode.dom["inputPorcentajeTiendaFacial"].value.length > 0 ? vnode.dom["inputPorcentajeTiendaFacial"].value : 0,
                    "TIENDAFACIALLITROSPORMINUTO": vnode.dom["inputLitroPorMinutoTiendaFacial"].value.length > 0 ? vnode.dom["inputLitroPorMinutoTiendaFacial"].value : 0,
                    "TUBOENTPORCENTAJE": vnode.dom["inputPorcentajeTuboEnT"].value.length > 0 ? vnode.dom["inputPorcentajeTuboEnT"].value : 0,
                    "TUBOENTLITROSPORMINUTO": vnode.dom["inputLitroTuboEnT"].value.length > 0 ? vnode.dom["inputLitroTuboEnT"].value : 0,
                    "CANULANASALPORCENTAJE": vnode.dom["inputPorcentajeCanulaNasal"].value.length > 0 ? vnode.dom["inputPorcentajeCanulaNasal"].value : 0,
                    "CANULANASALLITROSPORMINUTO": vnode.dom["inputLitroPorMinutoCanulaNasal"].value.length > 0 ? vnode.dom["inputLitroPorMinutoCanulaNasal"].value : 0,
                    "MASCARILLAPORCENTAJE": vnode.dom["inputPorcentajeMascarilla"].value.length > 0 ? vnode.dom["inputPorcentajeMascarilla"].value : 0,
                    "MASCARILLALITROSPORMINUTO": vnode.dom["inputLitroMascarilla"].value.length > 0 ? vnode.dom["inputLitroMascarilla"].value : 0,
                    "HELIOXPORCENTAJE": vnode.dom["inputPorcentajeHeliox"].value.length > 0 ? vnode.dom["inputPorcentajeHeliox"].value : 0,
                    "HELIOXLITROSPORMINUTO": vnode.dom["inputLitroPorMinutoHeliox"].value.length > 0 ? vnode.dom["inputLitroPorMinutoHeliox"].value : 0,
                    "AIREAMBIENTEPORCENTAJE": vnode.dom["inputPorcentajeAireAmbiente"].value.length > 0 ? vnode.dom["inputPorcentajeAireAmbiente"].value : 0,
                    "VENTILACIONMECANICA": isVentilacionMecanicaSelected ? "'true'" : "'false'",
                    "VENTILACIONNOINVASIVA": isVentilacionNoInvasivaSelected ? "'true'" : "'false'",
                    "SATURACIONPREVIA": `${
                      isNaN(parseInt(vnode.dom["inputSaturacionPreviaPorcentaje"].value))
                        ? 0
                        : parseInt(vnode.dom["inputSaturacionPreviaPorcentaje"].value)
                    }`,
                    "SATURACIONPOSTERIOR": vnode.dom["inputSaturacionPosteriorPorcentaje"].value.length > 0 ? vnode.dom["inputSaturacionPosteriorPorcentaje"].value : 0,
                    "FRECUENCIACARDIACAPREVIA": vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value.length > 0 ? vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value : 0,
                    "FRECUENCIACARDIACAPOSTERIOR": vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value.length > 0 ? vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value : 0, 
                     "FRECUENCIARESPIRATORIAPREVIA": vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value.length > 0 ? vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value : 0,
                    "FRECUENCIARESPIRATORIAPOS": vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value.length > 0 ? vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value : 0,
                    "CRITERIO": `'${vnode.dom["textareaCriterio"].value}'`,
                    ESTADO: "'Activo'", //"1",
                    ID: "sec_TerapiaRespiratoria.nextval",
                  };
                  if (confirm("¿Estás seguro quieres guardar este formulario?")) {
                    // Lógica de eliminación del elemento aquí
                    console.log(formulario);
                    console.log(Pedido.data.AT_MV);
                    formularioModelo.guardar(formulario);
                    formularioModelo.listado= [];
                    formularioModelo.loading = true;
                  }
    
                  //alert("Guardar");
                  //alert("Guardar");
                  //terapiaRespiratoriaController.guardar(formulario);
                },
              },
              "Guardar"
            ),
          ]);
    }
}

export default CrearFormulario;