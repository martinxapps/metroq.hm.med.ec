import m from "mithril";
import FormularioModels from "./models/formularioModels";
import Pedido from "../pedido";
import VerUnFormulario from "./verUnFormulario";
import cerrarGestionMuestra from "../../../patologia/muestras/cerrarGestionMuestra";

let formularioModelo = FormularioModels;

const ListadoFormulario = {
  oninit: (vnode) => {
    /* if (vnode.attrs.formulario !== undefined) {
                formularioModelo = vnode.attrs.formulario;
            }  */
    formularioModelo.cargarListado(Pedido.numeroPedido);
  },
  view: (vnode) => {
    return [
      " ",
      m("br"),
      m("table", { class: "table" }, [
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, m("b", "ID")),
            m("th", { scope: "col" }, m("b", "Fecha/Hora")),
            m("th", { scope: "col" }, m("b", "Estado")),
            m("th", { scope: "col" }, m("b", "Visualización")),
            //m("th", { scope: "col" }, m("b", "Editar")),
            m("th", { scope: "col" }, m("b", "Cancelar")),
            m("th", { scope: "col" }, m("b", "Imprimir")),
            //m("th", { scope: "col" }, m("b", "Finalizar")),
          ])
        ),
        m(
          "tbody",
          formularioModelo.listado.map(function (formulario) {
            return m("tr", [
              m("td", { scope: "row" }, formulario.ID),
              m("td", formulario.FECHAHOY),
              m("td", formulario.ESTADO),
              m(
                "td",
                m(
                  "button",
                  {
                    //class: "btn btn-primary",
                    class: formulario.ESTADO === "Cancelado" || formulario.ESTADO === "Finalizado" ? "btn btn-secondary" : "btn btn-primary",
                    type: "button",
                    disabled: formulario.ESTADO === "Cancelado" || formulario.ESTADO === "Finalizado",
                    onclick: function () {
                      formularioModelo.listadoUnitario = null;
                      if (
                        window.confirm(
                          `Estas seguro que deseas ir al formulario ${formulario.ID}?`
                        )
                      ){
                        m.mount(document.querySelector("#gestion-muestras"), {
                          view: () => {
                            return m(VerUnFormulario, { id: formulario.ID });
                          },
                        }),
                        m.mount(
                          document.querySelector("#cerrar-gestion-muestras"),
                          cerrarGestionMuestra
                        );
                      } 
                      
                        
                      /* console.log(formulario.ID);
                      m(VerUnFormulario, { id: formulario.ID }); */
                    },
                  },
                  (formulario.ESTADO === "Cancelado" || formulario.ESTADO === "Finalizado" ? "Visualizar" : "Editar")
                )
              ),
              /* m(
                "td",
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    type: "button",
                    disabled: formulario.ESTADO === "Cancelado",
                  },
                  "Editar"
                )
              ), */
              m(
                "td",
                m(
                  "button",
                  {
                    class: "btn btn-danger",
                    type: "button",
                    disabled: formulario.ESTADO === "Cancelado",
                    onclick: function () {
                      const datos = {
                        ID: formulario.ID,
                        ESTADO: "Cancelado",
                      };
                      if (
                        window.confirm(
                          "Está seguro que deseas modificar el estado a cancelado?"
                        )
                      ) {
                        formularioModelo.modificarEstado(datos);
                        formularioModelo.listado = [];
                        formularioModelo.loading = true;
                      }
                    },
                  },
                  "Cancelar"
                )
              ),
              m(
                "td",
                (formulario.ESTADO === "Finalizado" ? 
            m(m.route.Link, {

              href: "http://172.16.1.122:8080/jasperserver/flow.html?_flowId=viewReportFlow&_flowId=viewReportFlow&ParentFolderUri=%2Freports&reportUnit=%2Freports%2FTerapiaRespiratoria&standAlone=true&decorate=no&j_username=jasperadmin&j_password=jasperadmin&InformeId=" + formulario.ID + "&output=pdf",

              class: "btn btn-primary",

              target: "_blank",
              type: "button",

          }, "Imprimir")  : m("div", {"class":"alert alert-danger","role":"alert"}, 
          "Solo podras imprimir el formulario cuando este finalizado",
        )
            )
              ),
              /* m(
                "td",
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    type: "button",
                    disabled: formulario.ESTADO === "Cancelado",
                  },
                  "Finalizar"
                )
              ), */
            ]);
          })
        ),
      ]),
    ];
  },
};

export default ListadoFormulario;
