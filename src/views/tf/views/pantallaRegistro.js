import m from "mithril";
import PedidoTF from "../pedidos/pedido";
import Encrypt from "../../../models/encrypt";

const PantallaRegistro = {
  data: [], // Aquí guardaremos los datos
  loading: true, // Estado de carga
  error: false, // Estado de error
  usuarioConectado: "", // Usuario conectado

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
    PantallaRegistro.loading = true;
    PantallaRegistro.error = false; // Reiniciar el estado de error antes de la solicitud
    const requestData = {
      cdItpreMed: item.cdItpreMed,
      dhMedicacao: item.dhMedicacao,
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
        // Volver a cargar los datos después de que el POST sea exitoso
        PantallaRegistro.loadData(PedidoTF.numeroAtencion);
      })
      .catch((error) => {
        console.error("POST failed:", error);
        PantallaRegistro.error = true; // Marcar el error en caso de fallo
        PantallaRegistro.loading = false; // Terminar el loading si falla
        m.redraw(); // Redibujar la vista
      });
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
                        }) // Mostrar el valor de dhChecagem si no es null
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
    ];
  },
};

export default PantallaRegistro;
