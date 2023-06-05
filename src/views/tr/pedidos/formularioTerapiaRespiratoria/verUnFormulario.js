import FormularioModels from "./models/formularioModels";
import loader from "../../../patologia/utils/loader";
import { cargarHoraActual } from "./logic/formulario";

let formularioModelo = FormularioModels;
let idFormulario = null;
//
let pruebaFormulario = null;

const VerUnFormulario = {
  oninit: (vnode) => {
    if (vnode.attrs.id !== undefined) {
      idFormulario = vnode.attrs.id;
    }
    //idFormulario = vnode.attrs.id;

    formularioModelo.cargarUnFormulario(idFormulario);
    //alert(prueba);
    //alert(formularioModelo.listadoUnitario)
    //console.log(formularioModelo.listadoUnitario);
  },
  onupdate: (vnode) => {
    if (formularioModelo.listadoUnitario !== null) {
      pruebaFormulario = formularioModelo.listadoUnitario;
    }
  },
  view: (vnode) => {
    return [
      formularioModelo.listadoUnitario !== null
        ? m("form", [
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
                    value: formularioModelo.listadoUnitario.NUMERODEPEDIDO,
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
                    value: formularioModelo.listadoUnitario.FECHAMV,
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
                    value: formularioModelo.listadoUnitario.ORIGEN,
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
                    value: formularioModelo.listadoUnitario.MEDICOSOLICITANTE,
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
                    value: formularioModelo.listadoUnitario.ESPECIALIDAD,
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
                    value:
                      formularioModelo.listadoUnitario.APELLIDOSNOMBREPACIENTE,
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
                    value: formularioModelo.listadoUnitario.NHC,
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
                    value: formularioModelo.listadoUnitario.NUMEROATENCION,
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
                    value: formularioModelo.listadoUnitario.UBICACION,
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
                  value: formularioModelo.listadoUnitario.ESCALADELDOLOR,
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
                  value: formularioModelo.listadoUnitario.PESO,
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
                  value: formularioModelo.listadoUnitario.Usuario,
                }),
              ]),
            ]),
            /* m("div", { class: "form-group" }, [
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
        ]), */

            m("div", { class: "form-group" }, [
              m("label", { for: "inputFecha" }, "Fecha"),
              m("input", {
                class: "form-control",
                type: "text",
                id: "inputFecha",
                placeholder: "Fecha",
                value: formularioModelo.listadoUnitario.FECHAHOY,
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
                value: formularioModelo.listadoUnitario.HORADESPUES,
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
                      checked:
                        formularioModelo.listadoUnitario.NEBULIZACION === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.NEBULIZACION = event
                          .target.checked
                          ? "true"
                          : "false";
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ULTRASONIDO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ULTRASONIDO = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .INHALADORESDOSISMEDIDA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.INHALADORESDOSISMEDIDA =
                          event.target.checked ? "true" : "false";
                      },
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
                      value: formularioModelo.listadoUnitario.SALBUTAMOLDOSIS,
                      //disabled: true,
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
                      value: formularioModelo.listadoUnitario.HIPERSAL7DOSIS,
                      //disabled: true,
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
                      value: formularioModelo.listadoUnitario.HIPERSAL35DOSIS,
                      //disabled: true,
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
                      value: formularioModelo.listadoUnitario.DEXAMETASONADOSIS,
                      //disabled: true,
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
                      value:
                        formularioModelo.listadoUnitario
                          .CLORHIDRATODEAMBROXOLDOSIS,
                      //disabled: true,
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
                      value:
                        formularioModelo.listadoUnitario.SOLUCIONSALINADOSIS,
                      //disabled: true,
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
                      value:
                        formularioModelo.listadoUnitario
                          .BROMURODELPATROPIODOSIS,
                      //disabled: true,
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
                      value:
                        formularioModelo.listadoUnitario
                          .ADRENALINARACENICADOSIS,
                      //disabled: true,
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
                      value: formularioModelo.listadoUnitario.OTROSDOSIS,
                      //disabled: true,
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
                      //disabled: true,
                      id: "inputDrenajePostural",
                      checked:
                        formularioModelo.listadoUnitario.DRENAJEPOSTURAL ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.DRENAJEPOSTURAL = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.PERCUSIONES === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.PERCUSIONES = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.VIBRACIONES === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.VIBRACIONES = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.TOSEFECTIVA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.TOSEFECTIVA = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ASISTENCIADETOS ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ASISTENCIADETOS = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .CHALECOVIBROPRECUTOR === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.CHALECOVIBROPRECUTOR =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .INCENTIVORESPIRATORIO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.INCENTIVORESPIRATORIO =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .PRESIONPOSITIVAVIAAREA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.PRESIONPOSITIVAVIAAREA =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .PRESIONPOSITIVAEXPIRACION === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.PRESIONPOSITIVAEXPIRACION =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .KINISIOTERAPIADELTORAX === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.KINISIOTERAPIADELTORAX =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .EJERCICIOSRESPIRATORIOS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.EJERCICIOSRESPIRATORIOS =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .MILILITROSPORSEGUNDOINCENTIVO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .CENTIMETROSSEGUNDOINCENTIVO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .FRACCIONOXIGENOPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.FRACCIONIOXIGENOLITROS,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.ALTOFLUJOPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .ALTOFLUJOLITROSPORMINUTO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.TIENDAFACIALPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .TIENDAFACIALLITROSPORMINUTO,
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
                      //disabled: true,
                      value: formularioModelo.listadoUnitario.TUBOENTPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.TUBOENTLITROSPORMINUTO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.CANULANASALPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .CANULANASALLITROSPORMINUTO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.MASCARILLAPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .MASCARILLALITROSPORMINUTO,
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
                      //disabled: true,
                      value: formularioModelo.listadoUnitario.HELIOXPORCENTAJE,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.HELIOXLITROSPORMINUTO,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.AIREAMBIENTEPORCENTAJE,
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.VENTILACIONMECANICA ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.VENTILACIONMECANICA =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario
                          .VENTILACIONNOINVASIVA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.VENTILACIONNOINVASIVA =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      value: formularioModelo.listadoUnitario.SATURACIONPREVIA,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.SATURACIONPOSTERIOR,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .FRECUENCIACARDIACAPREVIA,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .FRECUENCIACARDIACAPOSTERIOR,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .FRECUENCIARESPIRATORIAPREVIA,
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario
                          .FRECUENCIARESPIRATORIAPOS,
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.NASOTRAQUEAL === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.NASOTRAQUEAL = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.TRAQUEAL === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.TRAQUEAL = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.OROTRAQUEAL === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.OROTRAQUEAL = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.LAVADONASAL === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.LAVADONASAL = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.SUBGLOTICA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.SUBGLOTICA = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ESPUTO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ESPUTO = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Esputo"
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
                      id: "inputHisopado",
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ISOPADO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ISOPADO = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.SECRECIONTRAQUEAL ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.SECRECIONTRAQUEAL =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.DISNEA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.DISNEA = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Disnea"
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
                      id: "inputTos",
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.TOS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.TOS = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Tos"
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
                      id: "inputExpectoacion",
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.EXPECTORACION ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.EXPECTORACION = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.DOLORTORACICO ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.DOLORTORACICO = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.HEMOPTISIS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.HEMOPTISIS = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.FIEBRE === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.FIEBRE = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Fiebre"
                    ),
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.CONSCIENCIA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.CONSCIENCIA = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.INTUBADO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.INTUBADO = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ESTRIDOR === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ESTRIDOR = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      value:
                        formularioModelo.listadoUnitario.SIBILANCIAS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.SIBILANCIAS = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.RONCUS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.RONCUS = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Roncus"
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
                      id: "inputCrepitantes",
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.CREPITANTES === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.CREPITANTES = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.LOCALIZACION === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.LOCALIZACION = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.CIANOSIS === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.CIANOSIS = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.RUIDORESPIRATORIO ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.RUIDORESPIRATORIO =
                          event.target.checked ? "true" : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.DISMINUIDO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.DISMINUIDO = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.ABOLIDO === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.ABOLIDO = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.SONIDODELAVOZ ===
                        "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.SONIDODELAVOZ = event
                          .target.checked
                          ? "true"
                          : "false";
                      },
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
                      //disabled: true,
                      checked:
                        formularioModelo.listadoUnitario.EDEMA === "true"
                          ? "checked"
                          : "",
                      onclick: function (event) {
                        formularioModelo.listadoUnitario.EDEMA = event.target
                          .checked
                          ? "true"
                          : "false";
                      },
                    }),
                    m(
                      "label",
                      { class: "form-label", for: "inputPeso" },
                      "Edema"
                    ),
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
                //disabled: true,
                value: formularioModelo.listadoUnitario.CRITERIO,
              }),
            ],
            " ",
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
                    MEDICOSOLICITANTE:
                      vnode.dom["inputMedicoSolicitante"].value,
                    ESPECIALIDAD: vnode.dom["inputEspecialidad"].value,
                    APELLIDOSNOMBREPACIENTE:
                      vnode.dom["inputApellidosYNombres"].value,
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
                    PRESCRIPCION: "",
                    //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`,
                    /* FECHAHOY:
                "To_Date(" +
                `'${vnode.dom["inputFecha"].value}'` +
                ", 'DD-MM-YYYY HH24:MI:SS')", */

                    FECHAHOY: vnode.dom["inputFecha"].value,
                    //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`,
                    //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')",
                    HORAANTES: vnode.dom["inputHora"].value,
                    HORADESPUES: cargarHoraActual(),
                    SALBUTAMOLDOSIS:
                      vnode.dom["inputSalbumatol"].value.length > 0
                        ? vnode.dom["inputSalbumatol"].value
                        : 0,
                    HIPERSAL7DOSIS:
                      vnode.dom["inputHipersal"].value.length > 0
                        ? vnode.dom["inputHipersal"].value
                        : 0,
                    BROMURODELPATROPIODOSIS:
                      vnode.dom["inputBromuroIpatropio"].value.length > 0
                        ? vnode.dom["inputBromuroIpatropio"].value
                        : 0,
                    DEXAMETASONADOSIS:
                      vnode.dom["inputDexametasona"].value.length > 0
                        ? vnode.dom["inputDexametasona"].value
                        : 0,
                    CLORHIDRATODEAMBROXOLDOSIS:
                      vnode.dom["inputClorhidratoAmbroxol"].value.length > 0
                        ? vnode.dom["inputClorhidratoAmbroxol"].value
                        : 0,
                    SOLUCIONSALINADOSIS:
                      vnode.dom["inputSolucionSalina"].value.length > 0
                        ? vnode.dom["inputSolucionSalina"].value
                        : 0,
                    HIPERSAL35DOSIS:
                      vnode.dom["inputHipersal3"].value.length > 0
                        ? vnode.dom["inputHipersal3"].value
                        : 0,
                    ADRENALINARACENICADOSIS:
                      vnode.dom["inputAdrenalinaRacenica"].value.length > 0
                        ? vnode.dom["inputAdrenalinaRacenica"].value
                        : 0,
                    OTROSDOSIS:
                      vnode.dom["inputOtros"].value.length > 0
                        ? vnode.dom["inputOtros"].value
                        : 0,
                    //NEBULIZACION: isNebulizacionSelected ? 'true' : 'false',
                    NEBULIZACION: formularioModelo.listadoUnitario.NEBULIZACION,
                    ULTRASONIDO: formularioModelo.listadoUnitario.ULTRASONIDO,
                    INHALADORESDOSISMEDIDA:
                      formularioModelo.listadoUnitario.INHALADORESDOSISMEDIDA,
                    DRENAJEPOSTURAL:
                      formularioModelo.listadoUnitario.DRENAJEPOSTURAL,
                    PERCUSIONES: formularioModelo.listadoUnitario.PERCUSIONES,
                    VIBRACIONES: formularioModelo.listadoUnitario.VIBRACIONES,
                    TOSEFECTIVA: formularioModelo.listadoUnitario.TOSEFECTIVA,
                    ASISTENCIADETOS:
                      formularioModelo.listadoUnitario.ASISTENCIADETOS,
                    CHALECOVIBROPRECUTOR:
                      formularioModelo.listadoUnitario.CHALECOVIBROPRECUTOR,
                    NASOTRAQUEAL: formularioModelo.listadoUnitario.NASOTRAQUEAL,
                    TRAQUEAL: formularioModelo.listadoUnitario.TRAQUEAL,
                    OROTRAQUEAL: formularioModelo.listadoUnitario.OROTRAQUEAL,
                    LAVADONASAL: formularioModelo.listadoUnitario.LAVADONASAL,
                    SUBGLOTICA: formularioModelo.listadoUnitario.SUBGLOTICA,
                    ESPUTO: formularioModelo.listadoUnitario.ESPUTO,
                    ISOPADO: formularioModelo.listadoUnitario.ISOPADO,
                    SECRECIONTRAQUEAL:
                      formularioModelo.listadoUnitario.SECRECIONTRAQUEAL,
                    CONSCIENCIA: formularioModelo.listadoUnitario.CONSCIENCIA,
                    INTUBADO: formularioModelo.listadoUnitario.INTUBADO,
                    ESTRIDOR: formularioModelo.listadoUnitario.ESTRIDOR,
                    SIBILANCIAS: formularioModelo.listadoUnitario.SIBILANCIAS,
                    RONCUS: formularioModelo.listadoUnitario.RONCUS,
                    CREPITANTES: formularioModelo.listadoUnitario.CREPITANTES,
                    LOCALIZACION: formularioModelo.listadoUnitario.LOCALIZACION,
                    CIANOSIS: formularioModelo.listadoUnitario.CIANOSIS,
                    RUIDORESPIRATORIO:
                      formularioModelo.listadoUnitario.RUIDORESPIRATORIO,
                    DISMINUIDO: formularioModelo.listadoUnitario.DISMINUIDO,
                    ABOLIDO: formularioModelo.listadoUnitario.ABOLIDO,
                    SONIDODELAVOZ:
                      formularioModelo.listadoUnitario.SONIDODELAVOZ,
                    EDEMA: formularioModelo.listadoUnitario.EDEMA,
                    DISNEA: formularioModelo.listadoUnitario.DISNEA,
                    TOS: formularioModelo.listadoUnitario.TOS,
                    EXPECTORACION:
                      formularioModelo.listadoUnitario.EXPECTORACION,
                    DOLORTORACICO:
                      formularioModelo.listadoUnitario.DOLORTORACICO,
                    HEMOPTISIS: formularioModelo.listadoUnitario.HEMOPTISIS,
                    FIEBRE: formularioModelo.listadoUnitario.FIEBRE,
                    INCENTIVORESPIRATORIO:
                      formularioModelo.listadoUnitario.INCENTIVORESPIRATORIO,
                    PRESIONPOSITIVAVIAAREA:
                      formularioModelo.listadoUnitario.PRESIONPOSITIVAVIAAREA,
                    PRESIONPOSITIVAEXPIRACION:
                      formularioModelo.listadoUnitario
                        .PRESIONPOSITIVAEXPIRACION,
                    KINISIOTERAPIADELTORAX:
                      formularioModelo.listadoUnitario.KINISIOTERAPIADELTORAX,
                    EJERCICIOSRESPIRATORIOS:
                      formularioModelo.listadoUnitario.EJERCICIOSRESPIRATORIOS,
                    MILILITROSPORSEGUNDOINCENTIVO:
                      vnode.dom["inputMililitrosPorSegundo"].value.length > 0
                        ? vnode.dom["inputMililitrosPorSegundo"].value
                        : 0,
                    CENTIMETROSSEGUNDOINCENTIVO:
                      vnode.dom["inputCentimetrosCubicosPorSegundo"].value
                        .length > 0
                        ? vnode.dom["inputCentimetrosCubicosPorSegundo"].value
                        : 0,
                    FRACCIONOXIGENOPORCENTAJE:
                      vnode.dom["inputPorcentajeFraccion"].value.length > 0
                        ? vnode.dom["inputPorcentajeFraccion"].value
                        : 0,
                    FRACCIONIOXIGENOLITROS:
                      vnode.dom["inputLitrosPorMinutoFraccion"].value.length > 0
                        ? vnode.dom["inputLitrosPorMinutoFraccion"].value
                        : 0,
                    ALTOFLUJOPORCENTAJE:
                      vnode.dom["inputPorcentajeAltoFlujo"].value.length > 0
                        ? vnode.dom["inputPorcentajeAltoFlujo"].value
                        : 0,
                    ALTOFLUJOLITROSPORMINUTO:
                      vnode.dom["inputLitroAltoFlujo"].value.length > 0
                        ? vnode.dom["inputLitroAltoFlujo"].value
                        : 0,
                    TIENDAFACIALPORCENTAJE:
                      vnode.dom["inputPorcentajeTiendaFacial"].value.length > 0
                        ? vnode.dom["inputPorcentajeTiendaFacial"].value
                        : 0,
                    TIENDAFACIALLITROSPORMINUTO:
                      vnode.dom["inputLitroPorMinutoTiendaFacial"].value
                        .length > 0
                        ? vnode.dom["inputLitroPorMinutoTiendaFacial"].value
                        : 0,
                    TUBOENTPORCENTAJE:
                      vnode.dom["inputPorcentajeTuboEnT"].value.length > 0
                        ? vnode.dom["inputPorcentajeTuboEnT"].value
                        : 0,
                    TUBOENTLITROSPORMINUTO:
                      vnode.dom["inputLitroTuboEnT"].value.length > 0
                        ? vnode.dom["inputLitroTuboEnT"].value
                        : 0,
                    CANULANASALPORCENTAJE:
                      vnode.dom["inputPorcentajeCanulaNasal"].value.length > 0
                        ? vnode.dom["inputPorcentajeCanulaNasal"].value
                        : 0,
                    CANULANASALLITROSPORMINUTO:
                      vnode.dom["inputLitroPorMinutoCanulaNasal"].value.length >
                      0
                        ? vnode.dom["inputLitroPorMinutoCanulaNasal"].value
                        : 0,
                    MASCARILLAPORCENTAJE:
                      vnode.dom["inputPorcentajeMascarilla"].value.length > 0
                        ? vnode.dom["inputPorcentajeMascarilla"].value
                        : 0,
                    MASCARILLALITROSPORMINUTO:
                      vnode.dom["inputLitroMascarilla"].value.length > 0
                        ? vnode.dom["inputLitroMascarilla"].value
                        : 0,
                    HELIOXPORCENTAJE:
                      vnode.dom["inputPorcentajeHeliox"].value.length > 0
                        ? vnode.dom["inputPorcentajeHeliox"].value
                        : 0,
                    HELIOXLITROSPORMINUTO:
                      vnode.dom["inputLitroPorMinutoHeliox"].value.length > 0
                        ? vnode.dom["inputLitroPorMinutoHeliox"].value
                        : 0,
                    AIREAMBIENTEPORCENTAJE:
                      vnode.dom["inputPorcentajeAireAmbiente"].value.length > 0
                        ? vnode.dom["inputPorcentajeAireAmbiente"].value
                        : 0,
                    VENTILACIONMECANICA:
                      formularioModelo.listadoUnitario.VENTILACIONMECANICA,
                    VENTILACIONNOINVASIVA:
                      formularioModelo.listadoUnitario.VENTILACIONNOINVASIVA,
                    SATURACIONPREVIA:
                      vnode.dom["inputSaturacionPreviaPorcentaje"].value
                        .length > 0
                        ? vnode.dom["inputSaturacionPreviaPorcentaje"].value
                        : 0,
                    SATURACIONPOSTERIOR:
                      vnode.dom["inputSaturacionPosteriorPorcentaje"].value
                        .length > 0
                        ? vnode.dom["inputSaturacionPosteriorPorcentaje"].value
                        : 0,
                    FRECUENCIACARDIACAPREVIA:
                      vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value
                        .length > 0
                        ? vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"]
                            .value
                        : 0,
                    FRECUENCIACARDIACAPOSTERIOR:
                      vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"]
                        .value.length > 0
                        ? vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"]
                            .value
                        : 0,
                    FRECUENCIARESPIRATORIAPREVIA:
                      vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"]
                        .value.length > 0
                        ? vnode.dom[
                            "inputFrecuenciaRespiratoriaPreviaPorMinuto"
                          ].value
                        : 0,
                    FRECUENCIARESPIRATORIAPOS:
                      vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"]
                        .value.length > 0
                        ? vnode.dom[
                            "inputFrecuenciaRespiratoriaPosteriorPorMinuto"
                          ].value
                        : 0,
                    CRITERIO: vnode.dom["textareaCriterio"].value,
                    ESTADO: "Activo", //"1",
                    ID: formularioModelo.listadoUnitario.ID,
                  };
                  if (
                    confirm("¿Estás seguro quieres actualizar este formulario?")
                  ) {
                    // Lógica de eliminación del elemento aquí
                    console.log(formulario);
                    //console.log(Pedido.data.AT_MV);
                    formularioModelo.actualizar(formulario);
                    formularioModelo.listado = [];
                    formularioModelo.loading = true;
                  }

                  //alert("Guardar");
                  //alert("Guardar");
                  //terapiaRespiratoriaController.guardar(formulario);
                },
              },
              "Actualizar"
            ),
            " ",
            m.trust("&nbsp;"),
            " ",
            m.trust("&nbsp;"),
            m(
              "button",
              { class: "btn btn-primary", type: "button" },
              "Imprimir"
            ),
          ])
        : m(loader),
    ];
  },
};

export default VerUnFormulario;
