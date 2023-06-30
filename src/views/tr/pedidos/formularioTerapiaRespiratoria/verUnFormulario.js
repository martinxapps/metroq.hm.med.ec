import FormularioModels from "./models/formularioModels";
import loader from "../../../patologia/utils/loader";
import { cargarHoraActual, cargarFechaActual } from "./logic/formulario";
import Encrypt from "../../../../models/encrypt";

let formularioModelo = FormularioModels;
let idFormulario = null;
//
let pruebaFormulario = null;

const inputMedicinas = {
  view: (vnode) => {
    return [
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
              oncreate: (el) => {
                el.dom.value = formularioModelo.listadoUnitario.SALBUTAMOLDOSIS;
              },
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
              type: "text",
              id: "inputHipersal",
              oncreate: (el) => {
                el.dom.value = formularioModelo.listadoUnitario.HIPERSAL7DOSIS;
              },
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
              type: "text",
              id: "inputHipersal3",
              oncreate: (el) => {
                el.dom.value = formularioModelo.listadoUnitario.HIPERSAL35DOSIS;
              },
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
              type: "text",
              id: "inputDexametasona",
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.DEXAMETASONADOSIS;
              },
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
              type: "text",
              id: "inputClorhidratoAmbroxol",
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.CLORHIDRATODEAMBROXOLDOSIS;
              },
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
              type: "text",
              id: "inputSolucionSalina",
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.SOLUCIONSALINADOSIS;
              },
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
              m("b", "Bromuro de Ipratropio")
            ),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputBromuroIpatropio",
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.BROMURODELPATROPIODOSIS;
              },
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
              type: "text",
              id: "inputAdrenalinaRacenica",
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.ADRENALINARACENICADOSIS;
              },
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
              { class: "form-label", for: "inputNAcetilcisteina" },
              m("b", "N Acetilcisteina")
            ),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputNAcetilcisteina",
              oncreate: (el) => {
                el.dom.value = formularioModelo.listadoUnitario.NAcetilcisteina;
              },
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
              m("b", "Otros")
            ),
            m("input", {
              class: "form-control",
              type: "text",
              id: "inputOtros",
              oncreate: (el) => {
                el.dom.value = formularioModelo.listadoUnitario.OTROSDOSIS;
              },
              //disabled: true,
            }),
          ])
        ),
      ]),
    ];
  },
};

const inputIncentivoRespiratorio = {
  view: (vnode) => {
    return [
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.MILILITROSPORSEGUNDOINCENTIVO;
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
              m("b", "Centímetros cúbicos por segundo")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputCentimetrosCubicosPorSegundo",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.CENTIMETROSSEGUNDOINCENTIVO;
              },
            }),
          ])
        ),
      ]),
    ];
  },
};

const inputOxigenoTerapia = {
  view: (vnode) => {
    return [
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRACCIONOXIGENOPORCENTAJE;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRACCIONIOXIGENOLITROS;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.ALTOFLUJOPORCENTAJE;
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
              m("b", "Litro por minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputLitroAltoFlujo",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.ALTOFLUJOLITROSPORMINUTO;
              },
            }),
          ])
        ),
      ]),
      m("br"),
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.TIENDAFACIALPORCENTAJE;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.TIENDAFACIALLITROSPORMINUTO;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.TUBOENTPORCENTAJE;
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
              m("b", "Litro por minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputLitroTuboEnT",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.TUBOENTLITROSPORMINUTO;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.CANULANASALPORCENTAJE;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.CANULANASALLITROSPORMINUTO;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.MASCARILLAPORCENTAJE;
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
              m("b", "Litro por minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputLitroMascarilla",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.MASCARILLALITROSPORMINUTO;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.HELIOXPORCENTAJE;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.HELIOXLITROSPORMINUTO;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.AIREAMBIENTEPORCENTAJE;
              },
            }),
          ])
        )
      ),
    ];
  },
};
const inputMonitoreo = {
  view: (vnode) => {
    return [
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.SATURACIONPREVIA;
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.SATURACIONPOSTERIOR;
              },
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
              m("b", "Previa Frecuencia Cardiaca por Minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputFrecuenciaCardiacaPreviaPorMinuto",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRECUENCIACARDIACAPREVIA;
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
              m("b", "Posterior Frecuencia Cardiaca por Minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputFrecuenciaCardiacaPosteriorPorMinuto",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRECUENCIACARDIACAPOSTERIOR;
              },
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
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRECUENCIARESPIRATORIAPREVIA;
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
              m("b", "Posterior Frecuencia Respiratoria por Minuto")
            ),
            m("input", {
              class: "form-control",
              type: "number",
              id: "inputFrecuenciaRespiratoriaPosteriorPorMinuto",
              placeholder: "Ingrese un valor",
              //disabled: true,
              oncreate: (el) => {
                el.dom.value =
                  formularioModelo.listadoUnitario.FRECUENCIARESPIRATORIAPOS;
              },
            }),
          ])
        ),
      ]),
    ];
  },
};
const inputCriterio = {
  view: (vnode) => {
    return [
      m("textarea", {
        class: "form-control",
        id: "textareaCriterio",
        rows: "3",
        //disabled: true,
        oncreate: (el) => {
          el.dom.value = formularioModelo.listadoUnitario.CRITERIO;
        },
      }),
    ];
  },
};
const VerUnFormulario = {
  usuarioMoficado: "",
  oninit: (vnode) => {
    if (vnode.attrs.id !== undefined) {
      idFormulario = vnode.attrs.id;
    }
    //idFormulario = vnode.attrs.id;

    formularioModelo.cargarUnFormulario(idFormulario);
    VerUnFormulario.usuarioMoficado = Encrypt.getDataUser();
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
    //const checkboxes = formularioModelo.listadoUnitario.PRESCRIPCION;
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

            m("div", { class: "form-group" }, [
              m("label", { for: "inputPrescripcion" }, "Prescripción"),
              m(
                "div",
                {},
                m(
                  "ul",
                  Object.entries(
                    formularioModelo.listadoUnitario.PRESCRIPCION.PRESCRIPCIONANTES
                  ).map(function ([option, checked]) {
                    return m("li", [
                      m("label", [
                        m("input[type=checkbox]", {
                          checked: checked,
                          disabled: true,
                          /* onchange: function (e) {
                            formularioModelo.listadoUnitario.PRESCRIPCION.PRESCRIPCIONANTES[
                              option
                            ] = e.target.checked;
                            m.redraw(); // Redibujar el componente después del cambio
                          }, */
                        }),
                        m("span", option),
                      ]),
                    ]);
                  })
                )

                /* Pedido.examenes.map(function ({ EXAMEN, FRECUENCIA }) {
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
            }) */
              ),
            ]),

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
                value: formularioModelo.listadoUnitario.HORAANTES,
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
              m(inputMedicinas),
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
                      { class: "form-label", for: "inputDrenajePostural" },
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
                      { class: "form-label", for: "inputPercursiones" },
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
                      { class: "form-label", for: "inputVibraciones" },
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
                      { class: "form-label", for: "inputTosEfectiva" },
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
                      { class: "form-label", for: "inputAsistenteTos" },
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
                      { class: "form-label", for: "inputChalecoVibroprecutor" },
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
                      { class: "form-label", for: "inputIncentivoRespiratorio" },
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
                      { class: "form-label", for: "inputPresionPositivaContinuaEnLaViaAeria" },
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
                      { class: "form-label", for: "inputPresionPositivaAlFinalDeLaExpiracion" },
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
                      { class: "form-label", for: "inputKinesioterapiaDelTorax" },
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
                      { class: "form-label", for: "inputEjerciciosRespiratorios" },
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
              m(inputIncentivoRespiratorio),
            ],
            [
              m("br"),
              m("br"),
              m(
                "div",
                { class: "d-flex justify-content-center" },
                m("h6", "Oxigenoterapia")
              ),
              m(inputOxigenoTerapia),
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
                      { class: "form-label", for: "inputVentilacionNoInvasiva" },
                      "Ventilación no invasiva"
                    ),
                  ])
                ),
              ]),
              m(inputMonitoreo),
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
                      { class: "form-label", for: "inputTraqueal" },
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
                      { class: "form-label", for: "inputEsputo" },
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
                      { class: "form-label", for: "inputHisopado" },
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
                      { class: "form-label", for: "inputDisnea" },
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
                      { class: "form-label", for: "inputTos" },
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
                      { class: "form-label", for: "inputFiebre" },
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
                      { class: "form-label", for: "inputConsciencia" },
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
                      { class: "form-label", for: "inputIntubado" },
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
                      { class: "form-label", for: "inputSonidoDeLaVoz" },
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
                      id: "inputSibilancias",
                      //disabled: true,
                      checked:
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
                      { class: "form-label", for: "inputSibilancias" },
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
                      { class: "form-label", for: "inputRoncus" },
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
                      { class: "form-label", for: "inputCrepitantes" },
                      "Crepitantes"
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
                      { class: "form-label", for: "inputLocalizacion" },
                      "Localización"
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
                      { class: "form-label", for: "inputCianosis" },
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
                      { class: "form-label", for: "inputRuidoRespiratorio" },
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
                      { class: "form-label", for: "inputDisminuido" },
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
                      { class: "form-label", for: "inputAbolido" },
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
                      { class: "form-label", for: "inputEstridor" },
                      "Estridor"
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
                      { class: "form-label", for: "inputEdema" },
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
              m(inputCriterio),
            ],
            " ",
            m("br"),
            m(
              "button",
              {
                class: "btn btn-primary",
                type: "button",
                disabled:
                  formularioModelo.listadoUnitario.ESTADO === "Cancelado" ||
                  formularioModelo.listadoUnitario.ESTADO === "Finalizado",
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
                    Usuario: VerUnFormulario.usuarioMoficado.user.user,
                    /* PRESCRIPCION: Pedido.examenes.map(
                ({ Examen, Frecuencia }) => {
                  return `${Examen} ${Frecuencia}`;
                }
              ), */
                    PRESCRIPCION: formularioModelo.listadoUnitario.PRESCRIPCION,
                    //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`,
                    /* FECHAHOY:
                "To_Date(" +
                `'${vnode.dom["inputFecha"].value}'` +
                ", 'DD-MM-YYYY HH24:MI:SS')", */

                    FECHAHOY: cargarFechaActual(),
                    //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`,
                    //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')",
                    //HORAANTES: vnode.dom["inputHora"].value,
                    HORAANTES: cargarHoraActual(),
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
                    VENTILACIONMECANICA:
                      formularioModelo.listadoUnitario.VENTILACIONMECANICA,
                    VENTILACIONNOINVASIVA:
                      formularioModelo.listadoUnitario.VENTILACIONNOINVASIVA,
                      SATURACIONPREVIA: vnode.dom["inputSaturacionPreviaPorcentaje"].value,
                      SATURACIONPOSTERIOR:vnode.dom["inputSaturacionPosteriorPorcentaje"].value,
                      FRECUENCIACARDIACAPREVIA:vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value,
                      FRECUENCIACARDIACAPOSTERIOR:vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value,
                      FRECUENCIARESPIRATORIAPREVIA:vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value,
                      FRECUENCIARESPIRATORIAPOS:vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value,
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
                    m.mount(document.querySelector("#gestion-muestras"), null);
                    m.mount(
                      document.querySelector("#cerrar-gestion-muestras"),
                      null
                    );
                    formularioModelo.listado = [];
                    formularioModelo.loading = true;
                  }

                  //alert("Guardar");
                  //alert("Guardar");
                  //terapiaRespiratoriaController.guardar(formulario);
                },
              },
              "Guardar"
            ),
            m.trust("&nbsp;"),
            m.trust("&nbsp;"),
            m(
              "button",
              {
                class: "btn btn-primary",
                type: "button",
                disabled:
                  formularioModelo.listadoUnitario.ESTADO === "Cancelado" ||
                  formularioModelo.listadoUnitario.ESTADO === "Finalizado",
                onclick: function () {
                  const datos = {
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
                    Usuario: VerUnFormulario.usuarioMoficado.user.user,
                    /* PRESCRIPCION: Pedido.examenes.map(
                ({ Examen, Frecuencia }) => {
                  return `${Examen} ${Frecuencia}`;
                }
              ), */
                    PRESCRIPCION: formularioModelo.listadoUnitario.PRESCRIPCION,
                    //FECHAHOY: `'${vnode.dom["inputFecha"].value}'`,
                    /* FECHAHOY:
                "To_Date(" +
                `'${vnode.dom["inputFecha"].value}'` +
                ", 'DD-MM-YYYY HH24:MI:SS')", */

                    FECHAHOY: cargarFechaActual(),
                    //FECHAHOY: `'To_Date(${vnode.dom["inputFecha"].value}, DD-MM-YYYY HH24:MI:SS)'`,
                    //FECHAHOY: "TO_DATE('23-05-2023 09:30:45', 'DD-MM-YYYY HH24:MI:SS')",
                    // HORAANTES: vnode.dom["inputHora"].value,
                    HORAANTES: cargarHoraActual(),
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
                    VENTILACIONMECANICA:
                      formularioModelo.listadoUnitario.VENTILACIONMECANICA,
                    VENTILACIONNOINVASIVA:
                      formularioModelo.listadoUnitario.VENTILACIONNOINVASIVA,
                      SATURACIONPREVIA: vnode.dom["inputSaturacionPreviaPorcentaje"].value,
                      SATURACIONPOSTERIOR:vnode.dom["inputSaturacionPosteriorPorcentaje"].value,
                      FRECUENCIACARDIACAPREVIA:vnode.dom["inputFrecuenciaCardiacaPreviaPorMinuto"].value,
                      FRECUENCIACARDIACAPOSTERIOR:vnode.dom["inputFrecuenciaCardiacaPosteriorPorMinuto"].value,
                      FRECUENCIARESPIRATORIAPREVIA:vnode.dom["inputFrecuenciaRespiratoriaPreviaPorMinuto"].value,
                      FRECUENCIARESPIRATORIAPOS:vnode.dom["inputFrecuenciaRespiratoriaPosteriorPorMinuto"].value,
                    CRITERIO: vnode.dom["textareaCriterio"].value,
                    ESTADO: "Finalizado", //"1",
                    ID: formularioModelo.listadoUnitario.ID,
                  };
                  if (
                    window.confirm(
                      "Está seguro que deseas finalizar el formulario?"
                    )
                  ) {
                    formularioModelo.actualizar(datos);
                    m.mount(document.querySelector("#gestion-muestras"), null);
                    m.mount(
                      document.querySelector("#cerrar-gestion-muestras"),
                      null
                    );
                    formularioModelo.listado = [];
                    formularioModelo.loading = true;
                  }
                },
              },
              "Finalizar"
            ),
            " ",
            m.trust("&nbsp;"),
            " ",
            m.trust("&nbsp;"),
            /* m(
              "button",
              {
                class: "btn btn-primary",
                type: "button",
                disabled:
                  formularioModelo.listadoUnitario.ESTADO === "Cancelado" ||
                  formularioModelo.listadoUnitario.ESTADO === "Activo",
              },
              "Imprimir"
            ), */
            (formularioModelo.listadoUnitario.ESTADO === "Finalizado" ? 
            m(m.route.Link, {

              href: "http://172.16.1.122:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports&reportUnit=%2Freports%2FTerapiaRespiratoria&standAlone=true&decorate=no&j_username=jasperadmin&j_password=jasperadmin&InformeId=" + formularioModelo.listadoUnitario.ID,

              class: "btn btn-primary",

              target: "_blank",
              type: "button",

          }, "Imprimir")  : null
            )
            
          ])
        : m(loader),
    ];
  },
};

export default VerUnFormulario;
