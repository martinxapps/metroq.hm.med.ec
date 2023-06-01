import m from "mithril";
import FormularioModels from "./models/formularioModels";
import Pedido from "../pedido";

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
      m("table", { class: "table" }, [
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, m("b", "ID")),
            m("th", { scope: "col" }, m("b", "Fecha/Hora")),
            m("th", { scope: "col" }, m("b", "Estado")),
            m("th", { scope: "col" }, m("b", "Ver")),
            m("th", { scope: "col" }, m("b", "Editar")),
            m("th", { scope: "col" }, m("b", "Cancelar")),
            m("th", { scope: "col" }, m("b", "Finalizar")),
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
                m("button", { class: "btn btn-primary", type: "button" }, "Ver")
              ),
              m(
                "td",
                m(
                  "button",
                  { class: "btn btn-primary", type: "button", disabled: formulario.ESTADO === "Cancelado"},
                  "Editar"
                )
              ),
              m(
                "td",
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    type: "button",
                    disabled: formulario.ESTADO === "Cancelado",
                    onclick: function () {
                      const datos = {
                        ID: formulario.ID,
                        ESTADO: "Cancelado",
                      }
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
                m(
                  "button",
                  { class: "btn btn-primary", type: "button" },
                  "Finalizar"
                )
              ),
            ]);
          })
        ),
      ]),
    ];
  },
};

export default ListadoFormulario;