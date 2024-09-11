const ModalNoAdministration = {
  view: ({
    attrs: {
      justification,
      observation,
      showError,
      onConfirm,
      onCancel,
      onJustificationChange,
      onObservationChange,
    },
  }) => {
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
            m("div.form-group", [
              m("label", "Justificación (requerida)"),
              m("input.form-control", {
                type: "text",
                value: justification,
                oninput: (e) => onJustificationChange(e.target.value),
              }),
              showError &&
                !justification &&
                m("div.text-danger", "La justificación es requerida."),
            ]),
            m("div.form-group", [
              m("label", "Observación (opcional)"),
              m("input.form-control", {
                type: "text",
                value: observation,
                oninput: (e) => onObservationChange(e.target.value),
              }),
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
