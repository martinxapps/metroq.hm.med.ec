import m from "mithril";
import PedidoTF from "../pedidos/pedido";
import Encrypt from "../../../models/encrypt";

const PantallaRegistro = {
  data: [], // Aquí guardaremos los datos
  loading: true, // Estado de carga
  error: false, // Estado de error
  usuarioConectado: "", // Usuario conectado
  selectedItem: null, // Estado para almacenar el ítem seleccionado
  showModal: false, // Estado para controlar la visibilidad del modal

  oninit: (vnode) => {
    PantallaRegistro.loadData(PedidoTF.numeroAtencion);
    PantallaRegistro.usuarioConectado = Encrypt.getDataUser();
  },

  loadData: (attention) => {
    PantallaRegistro.loading = true;
    PantallaRegistro.error = false; // Reiniciar el estado de error antes de la solicitud
    m.request({
      method: "GET",
      url: `http://localhost:5118/api/PhysicalTherapySession/${attention}`,
    })
      .then((result) => {
        if (result.status) {
          PantallaRegistro.data = result.data;
        } else {
          console.error("Error in API response: ", result);
          PantallaRegistro.error = true;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        PantallaRegistro.error = true; // Marcar el error en caso de fallo
      })
      .finally(() => {
        PantallaRegistro.loading = false; // Finaliza el estado de carga
        m.redraw(); // Redibujar la vista
      });
  },

  handleCheck: (item) => {
    PantallaRegistro.selectedItem = item;
    PantallaRegistro.showModal = true; // Mostrar el modal
  },

  confirmCheck: () => {
    if (PantallaRegistro.selectedItem) {
      PantallaRegistro.loading = true;
      PantallaRegistro.error = false;
      PantallaRegistro.showModal = false; // Ocultar el modal

      const requestData = {
        cdItpreMed: PantallaRegistro.selectedItem.cdItpreMed,
        dhMedicacao: PantallaRegistro.selectedItem.dhMedicacao,
        nmUsuario: PantallaRegistro.usuarioConectado.user.user.toUpperCase(),
      };

      m.request({
        method: "POST",
        url: "http://localhost:5118/api/HritpreConsInsertRequest",
        body: requestData,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("POST successful:", response);
          PantallaRegistro.loadData(PedidoTF.numeroAtencion);
        })
        .catch((error) => {
          console.error("POST failed:", error);
          PantallaRegistro.error = true; // Marcar el error en caso de fallo
          PantallaRegistro.loading = false; // Terminar el loading si falla
          m.redraw(); // Redibujar la vista
        });
    }
  },

  closeModal: () => {
    PantallaRegistro.showModal = false;
  },

  view: (vnode) => {
    return [
      PantallaRegistro.error &&
        m(
          "div",
          { class: "alert alert-danger", role: "alert" },
          "Ocurrio un error, intenta de nuevo"
        ),
      PantallaRegistro.loading
        ? m(
            "div.pd-10.wd-100p",
            m("div.placeholder-paragraph", [m("div.line"), m("div.line")])
          )
        : m("table", { class: "table" }, [
            m(
              "thead",
              m("tr", [
                m("th", { scope: "col" }, "Prescripción"),
                m("th", { scope: "col" }, "Hora Solicitada"),
                m("th", { scope: "col" }, "Hora Chequeo"),
                m("th", { scope: "col" }, "Usuario de Chequeo"),
              ])
            ),
            m(
              "tbody",
              PantallaRegistro.data.map((item) =>
                m("tr", [
                  m("td", item.dsTipPresc),
                  m(
                    "td",
                    new Date(item.dhMedicacao).toLocaleString("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  ),
                  m(
                    "td",
                    item.dhChecagem
                      ? new Date(item.dhChecagem).toLocaleString("es-ES", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : m(
                          "button",
                          {
                            class: "btn btn-primary",
                            type: "button",
                            onclick: function () {
                              PantallaRegistro.handleCheck(item);
                            },
                          },
                          "Check"
                        )
                  ),
                  m("td", item.nmUsuario),
                ])
              )
            ),
          ]),

      // Modal de confirmación
      PantallaRegistro.showModal &&
        m(
          "div",
          {
            class: "modal show",
            style: { display: "block", backgroundColor: "rgba(0,0,0,0.5)" },
            role: "dialog",
          },
          m(
            "div",
            { class: "modal-dialog modal-dialog-centered", role: "document" },
            m("div", { class: "modal-content" }, [
              m("div", { class: "modal-header" }, [
                m("h5", { class: "modal-title" }, "Confirmación"),
                m(
                  "button",
                  {
                    class: "close",
                    type: "button",
                    onclick: PantallaRegistro.closeModal,
                  },
                  m("span", { "aria-hidden": "true" }, m.trust("&times;"))
                ),
              ]),
              m("div", { class: "modal-body" }, [
                `¿Está seguro de que desea confirmar la prescripción `,
                m("strong", PantallaRegistro.selectedItem.dsTipPresc),
                ` a la hora `,
                m(
                  "strong",
                  new Date(
                    PantallaRegistro.selectedItem.dhMedicacao
                  ).toLocaleString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                ),
                `?`,
              ]),
              m("div", { class: "modal-footer" }, [
                m(
                  "button",
                  {
                    class: "btn btn-secondary",
                    type: "button",
                    onclick: PantallaRegistro.closeModal,
                  },
                  "Cancelar"
                ),
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    type: "button",
                    onclick: PantallaRegistro.confirmCheck,
                  },
                  "Confirmar"
                ),
              ]),
            ])
          )
        ),
    ];
  },
};

export default PantallaRegistro;
