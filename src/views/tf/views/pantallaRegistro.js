import m from "mithril";

const PantallaRegistro = {
  data: [], // Aquí guardaremos los datos

  oninit: (vnode) => {
    m.request({
      method: "GET",
      url: "http://localhost:5118/api/PhysicalTherapySession/165454",
    })
      .then((result) => {
        if (result.status) {
          PantallaRegistro.data = result.data;
        } else {
          console.error("Error in API response: ", result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  view: (vnode) => {
    return [
      m("table", { class: "table" }, [
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, "cdPreMed"),
            m("th", { scope: "col" }, "cdItpreMed"),
            m("th", { scope: "col" }, "cdAtendimento"),
            m("th", { scope: "col" }, "dhMedicacao"),
            m("th", { scope: "col" }, "dsTipPresc"),
            m("th", { scope: "col" }, "dhChecagem"),
          ])
        ),
        m(
          "tbody",
          PantallaRegistro.data.map((item) =>
            m("tr", [
              m("th", { scope: "row" }, item.cdPreMed),
              m("td", item.cdItpreMed),
              m("td", item.cdAtendimento),
              m("td", item.dhMedicacao),
              m("td", item.dsTipPresc),
              m(
                "td",
                item.dhChecagem
                  ? item.dhChecagem // Mostrar el valor de dhChecagem si no es null
                  : m(
                      "button",
                      {
                        class: "btn btn-primary",
                        type: "button",
                        onclick: function () {
                          const requestData = {
                            cdItpreMed: item.cdItpreMed,
                            dhMedicacao: item.dhMedicacao,
                            nmUsuario: "DBAMV",
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
                              // Aquí puedes actualizar el estado o hacer alguna acción después de la respuesta exitosa
                            })
                            .catch((error) => {
                              console.error("POST failed:", error);
                            });
                        },
                      },
                      "Check"
                    )
              ),
            ])
          )
        ),
      ]),
    ];
  },
};

export default PantallaRegistro;
