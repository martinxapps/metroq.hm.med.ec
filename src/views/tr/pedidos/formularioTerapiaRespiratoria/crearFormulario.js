import m from "mithril";
import FormularioModels from "./models/formularioModels";
//import muestraValida from './muestraValida';
import Pedido from "../pedido";
import Encrypt from "../../../../models/encrypt";
import {
  //handleCheckboxClick,
  cargarFechaActual,
  cargarHoraActual,
  change,
  siAlgunaEsVerdadero,
  containsInvalidChars,
} from "./logic/formulario";

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
  usuarioConectado: "",
  valoresCheckBox: {},

  actualizarValorCheckbox: (examen, valor) => {
    CrearFormulario.valoresCheckBox[examen] = valor;
  },

  oninit: () => {
    //muestraModelo.generarSecuencial();
    formularioModelo.cargarEscalaDelDolor(Pedido.data.AT_MV);
    CrearFormulario.usuarioConectado = Encrypt.getDataUser();
  },
  view: (vnode) => {
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
            value:
              formularioModelo.listaEscalaDelDolor &&
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
          Pedido.examenes.forEach(({ EXAMEN, FRECUENCIA }) => {
            if (!CrearFormulario.valoresCheckBox[`${EXAMEN} ${FRECUENCIA}`]) {
              CrearFormulario.valoresCheckBox[`${EXAMEN} ${FRECUENCIA}`] = false;
            } 
            //const valorInicial = CrearFormulario.valoresCheckBox[`${EXAMEN} ${FRECUENCIA}`] || false;
            //CrearFormulario.valoresCheckBox[`${EXAMEN} ${FRECUENCIA}`] = false;
            
          }),
           Pedido.examenes.map(function ({ EXAMEN, FRECUENCIA }) {
            const id= `${EXAMEN} ${FRECUENCIA}`;
            return m("div", { class: "form-check" }, [
              m("input", {
                type: "checkbox",
                class: "form-check-input",
                id: `${EXAMEN} ${FRECUENCIA}`,
                value: `${EXAMEN} ${FRECUENCIA}`,
                checked: CrearFormulario.valoresCheckBox[id],
                onclick: function (e) {
                  const valor = e.target.checked;
                  console.log("valor", valor);
                  
                  CrearFormulario.valoresCheckBox[id] = valor;
                  
                  console.log(CrearFormulario.valoresCheckBox);
                }
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
                { class: "form-label", for: "inputNebulizacion" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputUltrasonido" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputInahaladorDosis" },
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
                type: "text",
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
                type: "text",
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
                type: "text",
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
                type: "text",
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
                type: "text",
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
                type: "text",
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
                m("b", "Bromuro de Ipratropio")
              ),
              m("input", {
                class: "form-control",
                type: "text",
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
                type: "text",
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
                { class: "form-label", for: "inputNAcetilcisteina" },
                m("b", "N Acetilcisteina")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputNAcetilcisteina",
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
                m("b", "Otros")
              ),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputOtros",
              }),
            ])
          ),
        ]),
      ],
      [
        m("div", { class: "container" }, [
          m("div", { class: "row justify-content-center" }, [
            m("div", { class: "col-12 col-md-6 text-center" }, [
              m("h6", "Higiene Bronco Pulmonar")
            ])
          ]),
          m("div", { class: "row justify-content-center" }, [
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputPercursiones}",
                id: "inputPercursiones",
                onclick: function (event) {
                  isPercusionesSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputPercursiones" }, "Percursiones")
            ]),
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputDrenajePostural}",
                id: "inputDrenajePostural",
                onclick: function (event) {
                  isDrenajePosturalSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputDrenajePostural" }, "Drenaje Postural")
            ]),
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputVibraciones}",
                id: "inputVibraciones",
                onclick: function (event) {
                  isVibracionesSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputVibraciones" }, "Vibraciones")
            ]),
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputTosEfectiva}",
                id: "inputTosEfectiva",
                onclick: function (event) {
                  isTosEfectivaSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputTosEfectiva" }, "Tos Efectiva")
            ]),
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputAsistenteTos}",
                id: "inputAsistenteTos",
                onclick: function (event) {
                  isAsistenteDeTosSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputAsistenteTos" }, "Asistente de Tos")
            ]),
            m("div", { class: "col-6 col-md-2 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "${inputChalecoVibroprecutor}",
                id: "inputChalecoVibroprecutor",
                onclick: function (event) {
                  isChalecoVibroprecutor = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputChalecoVibroprecutor" }, "Chaleco Vibroprecutor")
            ]),
          ]),
        ])
        
      ],
      [
        m("div", { class: "container" }, [
          m("div", { class: "d-flex justify-content-center" }, [
            m("h6", "Terapia Expansiva")
          ]),
          m("div", { class: "row justify-content-center" }, [
            m("div", { class: "col-12 col-md-4 text-center mb-1" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "inputIncentivoRespiratorio",
                onclick: function (event) {
                  isIncentivoRespiratorioSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputIncentivoRespiratorio" }, "Incentivo Respiratorio")
            ]),
            m("div", { class: "col-12 col-md-4 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "inputPresionPositivaContinuaEnLaViaAeria",
                onclick: function (event) {
                  isPresionPositivaContinuaEnLaViaAereaSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputPresionPositivaContinuaEnLaViaAeria" }, "Presión Positiva continua en la vía aérea")
            ]),
            m("div", { class: "col-12 col-md-4 text-center mb-4" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "inputPresionPositivaAlFinalDeLaExpiracion",
                onclick: function (event) {
                  isPresionPositivaAlFinalDeLaExpiracionSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputPresionPositivaAlFinalDeLaExpiracion" }, "Presión Positiva al final de la expiración")
            ]),
            m("div", { class: "col-12 col-md-4 text-center mb-1" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "inputKinesioterapiaDelTorax",
                onclick: function (event) {
                  isKinesioterapiaSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputKinesioterapiaDelTorax" }, "Kinesioterapia del tórax")
            ]),
            m("div", { class: "col-12 col-md-4 text-center mb-1" }, [
              m("input", {
                class: "form-check-input",
                type: "checkbox",
                value: "",
                id: "inputEjerciciosRespiratorios",
                onclick: function (event) {
                  isEjerciciosRespiratorioSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputEjerciciosRespiratorios" }, "Ejercicios respiratorios")
            ]),
          ]),
        ]),
        
        /*  */
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
                placeholder: "Ingrese un valor",
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
                m("b", "Centímetros cúbicos por segundo")
              ),
              m("input", {
                class: "form-control",
                type: "number",
                id: "inputCentimetrosCubicosPorSegundo",
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
              }),
            ])
          ),
        ]),
        m('br'),
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
              }),
            ])
          ),
        ]),
        m("br"),
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
              }),
            ])
          ),
        ]),
        m("br"),
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                onclick: function (event) {
                  isVentilacionMecanicaSelected = event.target.checked;
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputVentilacionMecanica" },
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
                onclick: function (event) {
                  isVentilacionNoInvasivaSelected = event.target.checked;
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputVentilacionNoInvasiva" },
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
                placeholder: "Ingrese un valor",
                oninput: function(e) {
                  // Remover caracteres inválidos durante la escritura
                  e.target.value = e.target.value.replace(/[-+e]/g, "");
                },
                onpaste: function(e) {
                  const clipboardData = e.clipboardData || window.clipboardData;
                  const pastedText = clipboardData.getData("text");
          
                  if (containsInvalidChars(pastedText)) {
                    e.preventDefault();
                  }
                },
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
                placeholder: "Ingrese un valor",
                
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                placeholder: "Ingrese un valor",
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
                onclick: function (event) {
                  isNasotraquealSelected = event.target.checked;
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputNasotraqueal" },
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
                },
              }),
              m("label", { class: "form-label", for: "inputTraqueal" }, "Traqueal"),
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputOrotraqueal" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputLavadoNasal" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputSubglotica" },
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
                  isEsputoSelected = event.target.checked;
                },
              }),
              m("label", { class: "form-label", for: "inputEsputo" }, "Esputo"),
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
                },
              }),
              m("label", { class: "form-label", for: "inputHisopado" }, "Hisopado"),
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputSecrecionTraqueal" },
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
                },
              }),
              m("label", { class: "form-label", for: "inputDisnea" }, "Disnea"),
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
                },
              }),
              m("label", { class: "form-label", for: "inputTos" }, "Tos"),
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputExpectoacion" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputDolorToracico" },
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
                },
              }),
              m(
                "label",
                { class: "form-label", for: "inputHemoptisis" },
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
                },
              }),
              m("label", { class: "form-label", for: "inputFiebre" }, "Fiebre"),
            ])
          ),
        ]),
        m("h6", "Signos"),
        m("div.row.justify-content-center", [
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputConsciencia",
                onclick: (event) => {
                  isConscienciaSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputConsciencia" }, "Consciencia"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputIntubado",
                onclick: (event) => {
                  isIntubadoSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputIntubado" }, "Intubado"),
            ]),
          ]),
          m("div.col.text-center", [
            
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputSonidoDeLaVoz",
                onclick: (event) => {
                  isSonidoDeLaVozSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputSonidoDeLaVoz" }, "Sonido de la voz"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputSibilancias",
                onclick: (event) => {
                  isSibilanciasSelected = event.target.checked;
                  console.log(isSibilanciasSelected)
                },
              }),
              m("label.form-label", { for: "inputSibilancias" }, "Sibilancias"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputRoncus",
                onclick: (event) => {
                  isRoncusSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputRoncus" }, "Roncus"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputCrepitantes",
                onclick: (event) => {
                  isCrepitantesSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputCrepitantes" }, "Crepitantes"),
            ]),
          ]),
        ]),
        
        m("div.row.justify-content-center", [
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputLocalizacion",
                onclick: (event) => {
                  isLocalizacionSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputLocalizacion" }, "Localización"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputCianosis",
                onclick: (event) => {
                  isCianosisSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputCianosis" }, "Cianosis"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputRuidoRespiratorio",
                onclick: (event) => {
                  isRuidoRespiratorioSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputRuidoRespiratorio" }, "Ruido Respiratorio"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputDisminuido",
                onclick: (event) => {
                  isDisminuidoSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputDisminuido" }, "Disminuido"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputAbolido",
                onclick: (event) => {
                  isAbolidoSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputAbolido" }, "Abolido"),
            ]),
          ]),
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputEstridor",
                onclick: (event) => {
                  isEstridorSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputEstridor" }, "Estridor"),
            ]),
          ]),
        ]),
        
        m("div.row.justify-content-center", [
          m("div.col.text-center", [
            m("div.mb-2", [
              m("input.form-check-input", {
                type: "checkbox",
                value: "",
                id: "inputEdema",
                onclick: (event) => {
                  isEdemaSelected = event.target.checked;
                },
              }),
              m("label.form-label", { for: "inputEdema" }, "Edema"),
            ]),
          ]),
        ])
        
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
      m("br"),
      m(
        "button",
        {
          class: "btn btn-primary",
          type: "button",
          //disabled: obtenerDatos.habilitarCampos,
          onclick: function () {
            const formulario = {
              NUMERODEPEDIDO: vnode.dom["inputNumeroPedido"].value,
              FECHAMV: vnode.dom["inputFechaPedido"].value,
              ORIGEN: vnode.dom["inputOrigenPedido"].value,
              MEDICOSOLICITANTE: vnode.dom["inputMedicoSolicitante"].value,
              ESPECIALIDAD: vnode.dom["inputEspecialidad"].value,
              APELLIDOSNOMBREPACIENTE: vnode.dom["inputApellidosYNombres"].value,
              NHC: vnode.dom["inputNHC"].value,
              NUMEROATENCION: vnode.dom["inputNumeroAtencion"].value,
              UBICACION: vnode.dom["inputUbicacion"].value,
              ESCALADELDOLOR: vnode.dom["inputEscalaDolor"].value,
              PESO: vnode.dom["inputPeso"].value,
              Usuario: vnode.dom["inputUsuario"].value,
              /* PRESCRIPCION: Pedido.examenes.map(
                ({ Examen, Frecuencia }) => {
                  return `${Examen} ${Frecuencia}`;
                }
              ), */
              PRESCRIPCION: change(CrearFormulario.valoresCheckBox),
              //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`,
              /* FECHAHOY:
                "To_Date(" +
                `'${vnode.dom["inputFecha"].value}'` +
                ", 'DD-MM-YYYY HH24:MI:SS')", */

              FECHAHOY:vnode.dom["inputFecha"].value,
              //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`,
              //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')",
              HORAANTES: vnode.dom["inputHora"].value,
              HORADESPUES: cargarHoraActual(),
              SALBUTAMOLDOSIS:vnode.dom["inputSalbumatol"].value,
              HIPERSAL7DOSIS:vnode.dom["inputHipersal"].value,
              BROMURODELPATROPIODOSIS:vnode.dom["inputBromuroIpatropio"].value,
              DEXAMETASONADOSIS:vnode.dom["inputDexametasona"].value,
              CLORHIDRATODEAMBROXOLDOSIS:vnode.dom["inputClorhidratoAmbroxol"].value,
              SOLUCIONSALINADOSIS:vnode.dom["inputSolucionSalina"].value,
              HIPERSAL35DOSIS:vnode.dom["inputHipersal3"].value,
              ADRENALINARACENICADOSIS:vnode.dom["inputAdrenalinaRacenica"].value,
              NAcetilcisteina: vnode.dom["inputNAcetilcisteina"].value,
              OTROSDOSIS:vnode.dom["inputOtros"].value,
              NEBULIZACION: isNebulizacionSelected ? 'true' : 'false',
              ULTRASONIDO: isUltrasonidoSelected ? 'true' : 'false',
              INHALADORESDOSISMEDIDA: isInhaladorDosisMedidaSelected
                ? 'true'
                : 'false',
              DRENAJEPOSTURAL: isDrenajePosturalSelected ? 'true' : 'false',
              PERCUSIONES: isPercusionesSelected ? 'true' : 'false',
              VIBRACIONES: isVibracionesSelected ? 'true' : 'false',
              TOSEFECTIVA: isTosEfectivaSelected ? 'true' : 'false',
              ASISTENCIADETOS: isAsistenteDeTosSelected ? 'true' : 'false',
              CHALECOVIBROPRECUTOR: isChalecoVibroprecutor
                ? 'true'
                : 'false',
              NASOTRAQUEAL: isNasotraquealSelected ? 'true' : 'false',
              TRAQUEAL: isTraquealSelected ? 'true' : 'false',
              OROTRAQUEAL: isOroTraquealSelected ? 'true' : 'false',
              LAVADONASAL: isLavadoNasalSelected ? 'true' : 'false',
              SUBGLOTICA: isSubGloticoSelected ? 'true' : 'false',
              ESPUTO: isEsputoSelected ? 'true' : 'false',
              ISOPADO: isHisopadoSelected ? 'true' : 'false',
              SECRECIONTRAQUEAL: isSecrecionTraquealSelected
                ? 'true'
                : 'false',
              CONSCIENCIA: isConscienciaSelected ? 'true' : 'false',
              INTUBADO: isIntubadoSelected ? 'true' : 'false',
              ESTRIDOR: isEstridorSelected ? 'true' : 'false',
              SIBILANCIAS: isSibilanciasSelected ? 'true' : 'false',
              RONCUS: isRoncusSelected ? 'true' : 'false',
              CREPITANTES: isCrepitantesSelected ? 'true' : 'false',
              LOCALIZACION: isLocalizacionSelected ? 'true' : 'false',
              CIANOSIS: isCianosisSelected ? 'true' : 'false',
              RUIDORESPIRATORIO: isRuidoRespiratorioSelected
                ? 'true'
                : 'false',
              DISMINUIDO: isDisminuidoSelected ? 'true' : 'false',
              ABOLIDO: isAbolidoSelected ? 'true' : 'false',
              SONIDODELAVOZ: isSonidoDeLaVozSelected ? 'true' : 'false',
              EDEMA: isEdemaSelected ? 'true' : 'false',
              DISNEA: isDisneaSelected ? 'true' : 'false',
              TOS: isTosSelected ? 'true' : 'false',
              EXPECTORACION: isExpectoracionSelected ? 'true' : 'false',
              DOLORTORACICO: isDolorToracicoSelected ? 'true' : 'false',
              HEMOPTISIS: isHemoptisisSelected ? 'true' : 'false',
              FIEBRE: isFiebreSelected ? 'true' : 'false',
              INCENTIVORESPIRATORIO: isIncentivoRespiratorioSelected
                ? 'true'
                : 'false',
              PRESIONPOSITIVAVIAAREA:
                isPresionPositivaContinuaEnLaViaAereaSelected
                  ? 'true'
                  : 'false',
              PRESIONPOSITIVAEXPIRACION:
                isPresionPositivaAlFinalDeLaExpiracionSelected
                  ? 'true'
                  : 'false',
              KINISIOTERAPIADELTORAX: isKinesioterapiaSelected
                ? 'true'
                : 'false',
              EJERCICIOSRESPIRATORIOS: isEjerciciosRespiratorioSelected
                ? 'true'
                : 'false',
              MILILITROSPORSEGUNDOINCENTIVO:vnode.dom["inputMililitrosPorSegundo"].value,
              CENTIMETROSSEGUNDOINCENTIVO:vnode.dom["inputCentimetrosCubicosPorSegundo"].value,
              FRACCIONOXIGENOPORCENTAJE:vnode.dom["inputPorcentajeFraccion"].value,
              FRACCIONIOXIGENOLITROS:vnode.dom["inputLitrosPorMinutoFraccion"].value,
              ALTOFLUJOPORCENTAJE:vnode.dom["inputPorcentajeAltoFlujo"].value,
              ALTOFLUJOLITROSPORMINUTO:vnode.dom["inputLitroAltoFlujo"].value,
              TIENDAFACIALPORCENTAJE:vnode.dom["inputPorcentajeTiendaFacial"].value,
              TIENDAFACIALLITROSPORMINUTO:vnode.dom["inputLitroPorMinutoTiendaFacial"].value,
              TUBOENTPORCENTAJE:vnode.dom["inputPorcentajeTuboEnT"].value,
              TUBOENTLITROSPORMINUTO:vnode.dom["inputLitroTuboEnT"].value,
              CANULANASALPORCENTAJE:vnode.dom["inputPorcentajeCanulaNasal"].value,
              CANULANASALLITROSPORMINUTO:vnode.dom["inputLitroPorMinutoCanulaNasal"].value,
              MASCARILLAPORCENTAJE:vnode.dom["inputPorcentajeMascarilla"].value,
              MASCARILLALITROSPORMINUTO:vnode.dom["inputLitroMascarilla"].value,
              HELIOXPORCENTAJE:vnode.dom["inputPorcentajeHeliox"].value,
              HELIOXLITROSPORMINUTO:vnode.dom["inputLitroPorMinutoHeliox"].value,
              AIREAMBIENTEPORCENTAJE:vnode.dom["inputPorcentajeAireAmbiente"].value,
              VENTILACIONMECANICA: isVentilacionMecanicaSelected
                ? 'true'
                : 'false',
              VENTILACIONNOINVASIVA: isVentilacionNoInvasivaSelected
                ? 'true'
                : 'false',
              SATURACIONPREVIA: vnode.dom["inputSaturacionPreviaPorcentaje"].value,
              SATURACIONPOSTERIOR:vnode.dom["inputSaturacionPosteriorPorcentaje"].value,
              FRECUENCIACARDIACAPREVIA:vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value,
              FRECUENCIACARDIACAPOSTERIOR:vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value,
              FRECUENCIARESPIRATORIAPREVIA:vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value,
              FRECUENCIARESPIRATORIAPOS:vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value,
              CRITERIO: vnode.dom["textareaCriterio"].value,
              ESTADO: 'Activo', //"1",
              ID: 'sec_TerapiaRespiratoria.nextval',
              //ID: 300,
            };
            if (siAlgunaEsVerdadero(CrearFormulario.valoresCheckBox)) {
              if (confirm("¿Estás seguro quieres guardar este formulario?")) {
                // Lógica de eliminación del elemento aquí
                console.log(formulario);
                console.log(Pedido.data.AT_MV);
                formularioModelo.guardar(formulario);
                m.mount(document.querySelector("#gestion-muestras"), null);
                m.mount(document.querySelector("#cerrar-gestion-muestras"), null);
                formularioModelo.listado = [];
                formularioModelo.loading = true;
              }
            } else{
              alert("Debe escoger al menos una prescripción");
            }
            

            //alert("Guardar");
            //alert("Guardar");
            //terapiaRespiratoriaController.guardar(formulario);
          },
        },
        "Guardar"
      ),
    ]);
  },
};

export default CrearFormulario;
