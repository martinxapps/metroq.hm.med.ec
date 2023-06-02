import m from "mithril";
import FormularioModels from "./models/formularioModels";
import loader from "../../../patologia/utils/loader";

let formularioModelo = FormularioModels;
let idFormulario = null;
// 
let pruebaFormulario = null

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
    if (formularioModelo.listadoUnitario.length !== 0) {
        pruebaFormulario =  formularioModelo.listadoUnitario;
    }
  },
  view: (vnode) => {
    return [
        formularioModelo.listadoUnitario.length !== 0
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
                value: formularioModelo.listadoUnitario.APELLIDOSNOMBREPACIENTE,
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
              value: formularioModelo.listadoUnitario.ESCALADOLOR,
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
              value: formularioModelo.listadoUnitario.USUARIO,
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
                  disabled: true,

                  checked: formularioModelo.listadoUnitario.NEBULIZACION === "true" ? "checked" : "",
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
                  disabled: true, 
                  checked: formularioModelo.listadoUnitario.ULTRASONIDO === "true" ? "checked" : "",
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
                  disabled: true,
                  checked: formularioModelo.listadoUnitario.INHALADORESDOSISMEDIDA === "true" ? "checked" : "",
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
                  disabled: true,
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
                  disabled: true,
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
                  disabled: true,
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
                  disabled: true,
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
                  value: formularioModelo.listadoUnitario.CLORHIDRATODEAMBROXOLDOSIS,
                  disabled: true,
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
                  value: formularioModelo.listadoUnitario.SOLUCIONSALINADOSIS,
                  disabled: true,
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
                  value: formularioModelo.listadoUnitario.BROMURODELPATROPIODOSIS,
                  disabled: true,
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
                  value: formularioModelo.listadoUnitario.ADRENALINARACENICADOSIS,
                  disabled: true,
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
                  disabled: true,
                }),
              ])
            ),
          ]),
        ],
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Higiene Bronco Pulmonar")
        //   ),
        //   m("div", { class: "row d-flex justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputDrenajePostural}",
        //           id: "inputDrenajePostural",
        //           onclick: function (event){
        //             isDrenajePosturalSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Drenaje Postural"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputPercursiones}",
        //           id: "inputPercursiones",
        //           onclick: function (event){
        //             isPercusionesSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Percursiones"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputVibraciones}",
        //           id: "inputVibraciones",
        //           onclick: function (event){
        //             isVibracionesSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Vibraciones"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputTosEfectiva}",
        //           id: "inputTosEfectiva",
        //           onclick: function (event){
        //             isTosEfectivaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Tos Efectiva"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputAsistenteTos}",
        //           id: "inputAsistenteTos",
        //           onclick: function (event){
        //             isAsistenteDeTosSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Asistente de Tos"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "${inputChalecoVibroprecutor}",
        //           id: "inputChalecoVibroprecutor",
        //           onclick: function (event){
        //             isChalecoVibroprecutor = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Chaleco Vibroprecutor"
        //         ),
        //       ])
        //     ),
        //   ]),
        // ],
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Terapia Expansiva")
        //   ),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-1" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputIncentivoRespiratorio",
        //           onclick: function (event){
        //             isIncentivoRespiratorioSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Incentivo Respiratorio"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputPresionPositivaContinuaEnLaViaAeria",
        //           onclick: function (event){
        //             isPresionPositivaContinuaEnLaViaAereaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Presión Positiva continua en la vía aérea"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputPresionPositivaAlFinalDeLaExpiracion",
        //           onclick: function (event){
        //             isPresionPositivaAlFinalDeLaExpiracionSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Presión Positiva al final de la expiración"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-1" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputKinesioterapiaDelTorax",
        //           onclick: function (event){
        //             isKinesioterapiaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Kinesioterapia del tórax"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-1" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputEjerciciosRespiratorios",
        //           onclick: function (event){
        //             isEjerciciosRespiratorioSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Ejercicios respiratorios"
        //         ),
        //       ])
        //     ),
        //   ]),
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Incentivo Respiratorio")
        //   ),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Mililitros por segundo")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputMililitrosPorSegundo",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Centimetros cúbicos por segundo")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputCentimetrosCubicosPorSegundo",
        //         }),
        //       ])
        //     ),
        //   ]),
        // ],
        // [
        //   m("br"),
        //   m("br"),
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Oxigenoterapia")
        //   ),
        //   m("h6", "Fracción inspirada de oxigeno (FiO2 %)"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeFraccion",
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-4" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litros por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitrosPorMinutoFraccion",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Alto Flujo (litro por minuto)"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeAltoFlujo",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litro por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroAltoFlujo",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Tienda Facial"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeTiendaFacial",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-4" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litros por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroPorMinutoTiendaFacial",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Tubo en T"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeTuboEnT",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litro por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroTuboEnT",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Canula Nasal"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeCanulaNasal",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-4" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litros por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroPorMinutoCanulaNasal",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Mascarilla"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeMascarilla",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litro por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroMascarilla",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Heliox"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeHeliox",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-4" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Litros por minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputLitroPorMinutoHeliox",
                  
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Aire Ambiente"),
        //   m(
        //     "div",
        //     { class: "row" },
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputPorcentajeAireAmbiente",
                  
        //         }),
        //       ])
        //     )
        //   ),
        // ],
        m("br"),
        m("br"),
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Monitoreo")
        //   ),
        //   m("div", { class: "row d-flex justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-1" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputVentilacionMecanica",
        //           onclick: function (event){
        //             isVentilacionMecanicaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Ventilación Mecánica"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-4" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputVentilacionNoInvasiva",
        //           onclick: function (event){
        //             isVentilacionNoInvasivaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Ventilación no invasiva"
        //         ),
        //       ])
        //     ),
        //   ]),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Previa Saturación O2(%) Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputSaturacionPreviaPorcentaje",
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Posterior Saturación O2(%) Porcentaje")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputSaturacionPosteriorPorcentaje",
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("br"),
        //   m("br"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Previa Frecuencia Cardiaca por Minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputFrecuenciaCardiacaPreviaPorMinuto",
                  
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Posterior Frecuencia Cardiaca por Minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputFrecuenciaCardiacaPosteriorPorMinuto",
        //         }),
        //       ])
        //     ),
        //   ]),
        //   m("br"),
        //   m("div", { class: "row" }, [
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           m("b", "Previa Frecuencia Respiratoria por Minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputFrecuenciaRespiratoriaPreviaPorMinuto",
        //         }),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col" },
        //       m("div", { class: "mb-6" }, [
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputEscalaDolor" },
        //           m("b", "Posterior Frecuencia Respiratoria por Minuto")
        //         ),
        //         m("input", {
        //           class: "form-control",
        //           type: "number",
        //           id: "inputFrecuenciaRespiratoriaPosteriorPorMinuto",
        //         }),
        //       ])
        //     ),
        //   ]),
        // ],
        m("br"),
        m("br"),
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Succión")
        //   ),
        //   m("div", { class: "row justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputNasotraqueal",
        //           onclick: function (event){
        //             isNasotraquealSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Nasotraqueal"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputTraqueal",
        //           onclick: (event) => {
        //             isTraquealSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Traqueal"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputOrotraqueal",
        //           onclick: (event) => {
        //             isOroTraquealSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Orotraqueal"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputLavadoNasal",
        //           onclick: (event) => {
        //             isLavadoNasalSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Lavado Nasal"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-3" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputSubglotica",
        //           onclick: (event) => {
        //             isSubGloticoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Subglótica"
        //         ),
        //       ])
        //     ),
        //   ]),
        // ],
        m("br"),
        m("br"),
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Muestras")
        //   ),
        //   m("div", { class: "row justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputEsputo",
        //           onclick: (event) => {
        //             isEsputoSelected = event.target.checked
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Esputo"),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputHisopado",
        //           onclick: (event) => {
        //             isHisopadoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Hisopado"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputSecrecionTraqueal",
        //           onclick: (event) => {
        //             isSecrecionTraquealSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Secreción Traqueal"
        //         ),
        //       ])
        //     ),
        //   ]),
        // ],
        // [
        //   m(
        //     "div",
        //     { class: "d-flex justify-content-center" },
        //     m("h6", "Observación Clínica")
        //   ),
        //   m("h6", "Síntomas"),
        //   m("div", { class: "row justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputDisnea",
        //           onclick: (event) => {
        //             isDisneaSelected = event.target.checked;
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Disnea"),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputTos",
        //           onclick: (event) => {
        //             isTosSelected = event.target.checked;
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Tos"),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputExpectoacion",
        //           onclick: (event) => {
        //             isExpectoracionSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Expectoración"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputDolorToracico",
        //           onclick: (event) => {
        //             isDolorToracicoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Dolor Torácico"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputHemoptisis",
        //           onclick: (event) => {
        //             isHemoptisisSelected = event.target.checked;
        //           }

        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Hemoptisis"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputFiebre",
        //           onclick: (event) => {
        //             isFiebreSelected = event.target.checked;
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Fiebre"),
        //       ])
        //     ),
        //   ]),
        //   m("h6", "Signos"),
        //   m("div", { class: "row justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputConsciencia",
        //           onclick: (event) => {
        //             isConscienciaSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Consciencia"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputIntubado",
        //           onclick: (event) => {
        //             isIntubadoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Intubado"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputEstridor",
        //           onclick: (event) => {
        //             isEstridorSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Estridor"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputSibilancias",
        //           onclick: (event) => {
        //             isSibilanciasSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Sibilancias"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputRoncus",
        //           onclick: (event) => {
        //             isRoncusSelected = event.target.checked;
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Roncus"),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputCrepitantes",
        //           onclick: (event) => {
        //             isCrepitantesSelected = event.target.checked;
        //           }

        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Crepitantes"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputLocalizacion",
        //           onclick: (event) => {
        //             isLocalizacionSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Localización"
        //         ),
        //       ])
        //     ),
        //   ]),
        //   m("div", { class: "row justify-content-center" }, [
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputCianosis",
        //           onclick: (event) => {
        //             isCianosisSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Cianosis"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputRuidoRespiratorio",
        //           onclick: (event) => {
        //             isRuidoRespiratorioSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Ruido Respiratorio"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputDisminuido",
        //           onclick: (event) => {
        //             isDisminuidoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Disminuido"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputAbolido",
        //           onclick: (event) => {
        //             isAbolidoSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Abolido"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputSonidoDeLaVoz",
        //           onclick: (event) => {
        //             isSonidoDeLaVozSelected = event.target.checked;
        //           }
        //         }),
        //         m(
        //           "label",
        //           { class: "form-label", for: "inputPeso" },
        //           "Sonido de la voz"
        //         ),
        //       ])
        //     ),
        //     m(
        //       "div",
        //       { class: "col text-center" },
        //       m("div", { class: "mb-2" }, [
        //         m("input", {
        //           class: "form-check-input",
        //           type: "checkbox",
        //           value: "",
        //           id: "inputEdema",
        //           onclick: (event) => {
        //             isEdemaSelected = event.target.checked;
        //           }
        //         }),
        //         m("label", { class: "form-label", for: "inputPeso" }, "Edema"),
        //       ])
        //     ),
        //   ]),
        // ],
        // [
        //   m(
        //     "label",
        //     { class: "form-label", for: "textAreaObservacionClinica" },
        //     "Criterio"
        //   ),
        //   m("textarea", {
        //     class: "form-control",
        //     id: "textareaCriterio",
        //     rows: "3",
        //   }),
        // ],
        ])
      : m(loader),
    ]
    
  },
};

export default VerUnFormulario;
