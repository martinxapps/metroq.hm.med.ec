const ModalNoAdministration = {
  view: ({
    attrs: {
      justification,
      observation,
      showError,
      justifications,
      justificationLoading,
      onConfirm,
      onCancel,
      onJustificationChange,
      onObservationChange,
    },
  }) => {
    const maxObservationLength = 100; // Longitud máxima de la observación

    return m(
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
            m("h5", { class: "modal-title" }, "No Administrar"),
            m(
              "button",
              {
                class: "close",
                type: "button",
                onclick: onCancel,
              },
              m("span", { "aria-hidden": "true" }, m.trust("&times;"))
            ),
          ]),
          m("div", { class: "modal-body" }, [
            justificationLoading
              ? m(
                  "div.pd-10.wd-100p",
                  m("div.placeholder-paragraph", [m("div.line"), m("div.line")])
                )
              : justifications.length === 0 // Si no se pudieron cargar los datos
              ? m(
                  "div",
                  { class: "alert alert-danger", role: "alert" },
                  "Ocurrió un error, intenta de nuevo"
                )
              : m("div.form-group", [
                  m("label", "Justificación (requerida)"),
                  m(
                    "select.form-control",
                    {
                      onchange: (e) => onJustificationChange(e.target.value),
                      value: justification, // Asignamos el valor del idChecagem
                    },
                    [
                      m(
                        "option",
                        { value: "" },
                        "Seleccione una justificación"
                      ),
                      ...justifications.map((justificationItem) =>
                        m(
                          "option",
                          { value: justificationItem.idChecagem },
                          justificationItem.description
                        )
                      ),
                    ]
                  ),
                  showError &&
                    !justification &&
                    m("div.text-danger", "La justificación es requerida."), // Mensaje de error en rojo
                ]),
            m("div.form-group", [
              m("label", "Observación (opcional, máximo 100 caracteres)"),
              m("input.form-control", {
                type: "text",
                maxlength: maxObservationLength, // Restringimos el número de caracteres a 100
                value: observation,
                oninput: (e) => {
                  if (e.target.value.length <= maxObservationLength) {
                    onObservationChange(e.target.value);
                  }
                },
              }),
              observation.length > maxObservationLength &&
                m(
                  "div.text-danger",
                  `La observación no puede exceder ${maxObservationLength} caracteres.`
                ),
            ]),
          ]),
          m("div", { class: "modal-footer" }, [
            m(
              "button",
              {
                class: "btn btn-secondary",
                type: "button",
                onclick: onCancel,
              },
              "Cancelar"
            ),
            m(
              "button",
              {
                class: "btn btn-primary",
                type: "button",
                onclick: onConfirm,
              },
              "Confirmar"
            ),
          ]),
        ])
      )
    );
  },
};

export default ModalNoAdministration;
