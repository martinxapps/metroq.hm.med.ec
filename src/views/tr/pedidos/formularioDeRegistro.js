import m from "mithril";
import Pedido from "./pedido";
import Encrypt from "../../../models/encrypt";
import { urlTerapiaRespiratoria } from "./constants";

const Button = {
  estado: "",
  obtenerEstado: function (number) {
    m.request({
      method: "GET",
      url: `http://api.hospitalmetropolitano.org/t/v1/terapia-respiratoria/estados?CD_PRE_MED=${number}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (result) {
        if (result.data.length === 0) {
          Button.estado = "";
        } else {
          Button.estado = result.data[0].ESTADO;
          m.redraw();
        }
      })
      .catch(function (error) {
        alert(
          `Error al enviar los datos, intente de nuevo al recargar la página`
        );
      });
  },
  view: function () {
    let buttonText = "Finalizar Documento";
    let buttonClass = "btn";

    if (
      Button.estado === "" ||
      Button.estado.length === 0 ||
      Button.estado === ""
    ) {
      buttonText = "Terminar Documento";
      buttonClass += " btn-primary";
    } else {
      buttonText = "Documento Finalizado";
      buttonClass += " btn-danger";
    }

    const cancelClick = function (e) {
      if (confirm("¿Estas seguro de finalizar el documento?")) {
        methodPutButton();
        Button.estado = "1";
        buttonText = "Documento Finalizado";
        buttonClass = "btn btn-danger";
        e.target.textContent = buttonText;
        e.target.classList.remove("btn-primary");
        e.target.classList.add("btn-danger");
        e.target.disabled = true;
        m.redraw();
      } else {
        e.target.textContent = buttonText;
        e.target.classList.remove("btn-danger");
        e.target.classList.add("btn-primary");
        e.target.disabled = false;
        m.redraw();
      }
    };

    const button = m(
      "button",
      {
        onclick: cancelClick,
        class: buttonClass,
        type: "button",
        // disabled: false,
        disabled: Button.estado !== "" && Button.estado !== "0",
      },
      buttonText
    );

    return m("main", [button]);
  },
};

function date() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
}

function methodPutButton() {
  m.request({
    method: "POST",
    url: "http://api.hospitalmetropolitano.org/t/v1/nuevo-status-pedido-tr",
    body: {
      CD_PRE_MED: Pedido.numeroPedido,
      FECHA: date(),
      ESTADO: 1,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: localStorage.accessToken,
    },
  })
    .then(function (result) {
      window.location.reload();
      //console.log("Datos enviados con exito")
    })
    .catch(function (error) {
      alert(
        `Error al enviar los datos, intente de nuevo al recargar la página`
      );
    });
}

const FormularioDeRegistro = {
  listaDeFrecuenciaCardiaca: [],
  errorCargandoFrecuenciaCardiaca: "",
  listaDeFrecuenciaRespiratoria: [],
  errorCargandoFrecuenciaRespiratoria: "",
  listaDePeso: [],
  errorCargaDePeso: "",
  listaEscalaDelDolor: [],
  errorCargaDeEscalaDelDolor: "",
  fechaActual: "",
  horaActual: "",
  habilitarCampos: false,
  listaPrescripcion: [],
  errorPrescripcion: "",
  datosGuardados: [],
  errorGuardar: "",
  datosPorSecuencial: [],
  errorDatosPorSecuencial: "",
  datosActualizados: [],
  errorDatosActualizados: "",
  datosEliminados: [],
  errorDatosEliminados: "",

  cargarPeso: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=PESO&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaDePeso = resultado;
          //console.log(FormularioDeRegistro.listaDePeso);
        } else {
          FormularioDeRegistro.errorCargaDePeso += "Peso ";
        } /* else {
          terapiaRespiratoriaController.error = resultado.error;
          alert(terapiaRespiratoriaController.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorCargaDePeso = error;
        alert(FormularioDeRegistro.errorCargaDePeso);
      });
  },

  cargarEscalaDelDolor: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=ESCALA_DOLOR&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (
          resultado.status &&
          resultado.data.length > 0 &&
          resultado.data[0].VALUE != null
        ) {
          FormularioDeRegistro.listaEscalaDelDolor = resultado;
          //console.log(FormularioDeRegistro.listaEscalaDelDolor);
        } else {
          FormularioDeRegistro.errorCargaDeEscalaDelDolor +=
            "Escala del Dolor ";
        } /* else {
          terapiaRespiratoriaController.error = resultado.error;
          alert(terapiaRespiratoriaController.error);
        } */
      })
      .catch(function (error) {
        FormularioDeRegistro.errorCargaDeEscalaDelDolor = error;
        alert(FormularioDeRegistro.errorCargaDeEscalaDelDolor);
      });
  },

  cargarFechaActual: function () {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${anio}`;
    FormularioDeRegistro.fechaActual = fechaFormateada;
    //console.log(FormularioDeRegistro.fechaActual);
  },

  cargarHoraActual: function () {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    FormularioDeRegistro.horaActual = horaFormateada;
    //console.log(FormularioDeRegistro.horaActual);
  },

  cargarPrescripcion: function (numeroDeAtendimiento) {
    m.request({
      method: "GET",
      url: `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=PRESC&&CD_ATENDIMENTO=${numeroDeAtendimiento}`,
      body: {},
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: localStorage.accessToken,
      },
    })
      .then(function (resultado) {
        if (resultado.status && resultado.data.length > 0) {
          FormularioDeRegistro.listaPrescripcion = resultado;
          //console.log(FormularioDeRegistro.listaPrescripcion);
          //terapiaRespiratoriaController.habilitarCampos = true;
        } else {
          //FormularioDeRegistro.listaPrescripcion = [];
          FormularioDeRegistro.errorPrescripcion += "Prescripción ";
          //FormularioDeRegistro.lista = resultado;
          //terapiaRespiratoriaController.error = resultado.error;
          //FormularioDeRegistro.habilitarCampos = true;
          //return m("div", {class: "modal"}, "La lista está vacía");
          //alert(terapiaRespiratoriaController.error);
        }
      })
      .catch(function (error) {
        FormularioDeRegistro.errorPrescripcion = error;
        alert(FormularioDeRegistro.errorPrescripcion);
        //terapiaRespiratoriaController.habilitarCampos = true;
        //alert(terapiaRespiratoriaController.error);
        //alert(terapiaRespiratoriaController.error);
      });
  },
  guardar: (formularioTerapiaRespiratoria) => {
    //throw new Error("No se ha implementado el método guardar");
    m.request({
      method: "POST",
      url: urlTerapiaRespiratoria,
      body: formularioTerapiaRespiratoria,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (result) {
        //resultado = result;
        /* if (result.status) {
          terapiaRespiratoriaController.datosEnviadosDelFormulario = result;
        }else{
          terapiaRespiratoriaController.error = result.error;
          alert(terapiaRespiratoriaController.error);
        } */
        /* if (result.status) {
          FormularioDeRegistro.datosGuardados = result;
          window.location.href = window.location.href;
        } */
        FormularioDeRegistro.datosGuardados = result;
        //FormularioDeRegistro.bloquearCamposCuandoSeGuarda = true;
        window.location.href = window.location.href;
        //FormularioDeRegistro.bloquearCamposCuandoSeGuarda = true;
      })
      .catch(function (error) {
        //terapiaRespiratoriaController.error = `No se pudo enviar los datos ${error}`;

        FormularioDeRegistro.errorGuardar = error;
        alert(FormularioDeRegistro.errorGuardar);
        console.log(error);
      });
  },

  oninit: (_data) => {
    FormularioDeRegistro.cargarPeso(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarEscalaDelDolor(_data.attrs.pedido.AT_MV); // 10090 // _data.attrs.pedido.AT_MV
    FormularioDeRegistro.cargarFechaActual();
    FormularioDeRegistro.cargarHoraActual();
    FormularioDeRegistro.cargarPrescripcion(_data.attrs.pedido.AT_MV); // 1918 //

    FormularioDeRegistro.usuarioConectado = Encrypt.getDataUser(); // Obtener el nombre de usuario
    Button.obtenerEstado(Pedido.numeroPedido);
  },
  usuarioConectado: [],
  view: (vnode) => {
    const printFormData = () => {
      const printWindow = window.open("", "PRINT", "height=800,width=800");
      const inputEscalaDelDolor =
        document.getElementById("inputEscalaDolor").value;
      const inputPeso = document.getElementById("inputPeso").value;
      const inputUsuario = document.getElementById("inputUsuario").value;
      const inputCodigo = document.getElementById("inputCod").value;
      const inputFecha = document.getElementById("inputFecha").value;
      const inputHora = document.getElementById("inputHora").value;
      const inputNumeroPedido =
        document.getElementById("inputNumeroPedido").value;
      const inputFechaPedido =
        document.getElementById("inputFechaPedido").value;
      const inputOrigenPedido =
        document.getElementById("inputOrigenPedido").value;
      const inputMedicoSolicitante = document.getElementById(
        "inputMedicoSolicitante"
      ).value;
      const inputEspecialidad =
        document.getElementById("inputEspecialidad").value;
      const inputApellidosYNombres = document.getElementById(
        "inputApellidosYNombres"
      ).value;
      const inputNHC = document.getElementById("inputNHC").value;
      const inputNumeroAtencion = document.getElementById(
        "inputNumeroAtencion"
      ).value;
      const inputUbicacion = document.getElementById("inputUbicacion").value;
      const inputSalbumatol = document.getElementById("inputSalbumatol").value;
      const inputHipersal = document.getElementById("inputHipersal").value;
      const inputBromuroIpatropio = document.getElementById(
        "inputBromuroIpatropio"
      ).value;
      const inputDexametasona =
        document.getElementById("inputDexametasona").value;
      const inputClorhidratoAmbroxol = document.getElementById(
        "inputClorhidratoAmbroxol"
      ).value;
      const inputSolucionSalina = document.getElementById(
        "inputSolucionSalina"
      ).value;
      const inputHipersal3 = document.getElementById("inputHipersal3").value;
      const inputAdrenalinaRacénica = document.getElementById(
        "inputAdrenalinaRacénica"
      ).value;
      const inputOtros = document.getElementById("inputOtros").value;
      const inputNebulizacion =
        document.getElementById("inputNebulizacion").checked;

      const prescripcion = Pedido.examenes.map(
        ({ EXAMEN, FRECUENCIA }) => `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="inputPrescripcion">
          ${EXAMEN} - ${FRECUENCIA}
        </label>
      </div>
    `
      );

      const printContent = `
          <html>
            <head>
              <title>Print form</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
              <style type="text/css">
    @media print {
        body {
            font-size: 0.75rem;
            margin: 0.5rem;
        }
    }
</style>

            </head>
            <body>
              <fieldset>
              <form class="mx-auto">
              <div>
              <img src="data:image/png;base64,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" class="img-fluid w-200" alt="...">
              </div>
              <!-- Primera Fila -->
        <div class="row">
          <div class="col">
            <div class="mb-4">
              <label for="inputPeso" class="form-label"
                ><b>Número de Pedido</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputNumeroPedido"
                value="${inputNumeroPedido}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputEscalaDolor" class="form-label"
                ><b>Fecha</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputFechaPedido"
                value="${inputFechaPedido}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputUsuario" class="form-label"><b>Origen</b></label>
              <input
                type="text"
                class="form-control"
                id="inputOrigenPedido"
                value="${inputOrigenPedido}"
              />
            </div>
          </div>
        </div>
        <!-- Segunda Fila -->
        <div class="row">
            <div class="col">
              <div class="mb-4">
                <label for="inputPeso" class="form-label"
                  ><b>Medico Solicitante</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputMedicoSolicitante"
                  value="${inputMedicoSolicitante}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputEscalaDolor" class="form-label"
                  ><b>Especialidad</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputEspecialidad"
                  value="${inputEspecialidad}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputUsuario" class="form-label"><b>Apellidos y Nombres del Paciente</b></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputApellidosYNombres"
                  value="${inputApellidosYNombres}"
                />
              </div>
            </div>
        </div>
        <!-- Tercera Fila -->
        <div class="row">
            <div class="col">
              <div class="mb-4">
                <label for="inputPeso" class="form-label"
                  ><b>NHC</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNHC"
                  value="${inputNHC}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputEscalaDolor" class="form-label"
                  ><b>Número de Atención</b></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNumeroAtencion"
                  value="${inputNumeroAtencion}"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-4">
                <label for="inputUsuario" class="form-label"><b>Ubicación</b></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputUbicacion"
                  value="${inputUbicacion}"
                />
              </div>
            </div>
        </div>
            <div class="row">
                <div class="col">
                    <div class="mb-6">
                        <label for="inputEscalaDolor" class="form-label"><b>Escala del Dolor</b></label>
                        <input type="text" class="form-control" id="inputEscalaDolor" value="${inputEscalaDelDolor}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <label for="inputPeso" class="form-label"><b>Peso</b></label>
                        <input type="text" class="form-control" id="inputPeso" value="${inputPeso}" />
                    </div>
                </div>
                <div class="col">
                    <div class="mb-6">
                        <label for="inputUsuario" class="form-label"><b>Usuario</b></label>
                        <input type="text" class="form-control" id="inputUsuario" value="${inputUsuario}">
                    </div>
                </div>

            </div>
            <div class="row">
                
                
                
            </div>

            <!-- Prescripción -->
            <label for="inputPrescripcion" class="form-label"><b>Prescripción</b></label>
            ${prescripcion}
            <br>
            <!-- Código -->
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <label for="inputCod" class="form-label"><b>Código</b></label>
                        <input type="text" class="form-control" id="inputCod" value="${inputCodigo}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="inputFecha" class="form-label"><b>Fecha</b></label>
                        <input type="text" class="form-control" id="inputFecha" value="${inputFecha}">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="inputHora" class="form-label"><b>Hora</b></label>
                        <input type="text" class="form-control" id="inputHora" value="${inputHora}">
                    </div>
                </div>
            </div>
            <!-- Primera Fila -->
        <h1>Medicinas</h1>
        <div class="row">
          <div class="col">
            <div class="mb-4">
              <label for="inputPeso" class="form-label"
                ><b>Salbutamol</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputSalbumatol"
                value="${inputSalbumatol}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputEscalaDolor" class="form-label"
                ><b>Hipersal (7%)</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputHipersal"
                value="${inputHipersal}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputUsuario" class="form-label"
                ><b>Bromuro de Ipatropio</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputBromuroIpatropio"
                value="${inputBromuroIpatropio}"
              />
            </div>
          </div>
        </div>
        <!-- Segunda Fila -->
        <div class="row">
          <div class="col">
            <div class="mb-4">
              <label for="inputPeso" class="form-label"
                ><b>Dexametasona</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputDexametasona"
                value="${inputDexametasona}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputEscalaDolor" class="form-label"
                ><b>Clorhidrato de Ambroxol</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputClorhidratoAmbroxol"
                value="${inputClorhidratoAmbroxol}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputUsuario" class="form-label"
                ><b>Solución Salina (0,9%)</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputSolucionSalina"
                value="${inputSolucionSalina}"
              />
            </div>
          </div>
        </div>
        <!-- Tercera Fila -->
        <div class="row">
          <div class="col">
            <div class="mb-4">
              <label for="inputPeso" class="form-label"
                ><b>Hipersal (3,5%)</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputHipersal3"
                value="${inputHipersal3}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputEscalaDolor" class="form-label"
                ><b>Adrenalina Racénica</b></label
              >
              <input
                type="text"
                class="form-control"
                id="inputAdrenalinaRacénica"
                value="${inputAdrenalinaRacénica}"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <label for="inputUsuario" class="form-label"><b>Otros</b></label>
              <input
                type="text"
                class="form-control"
                id="inputOtros"
                value="${inputOtros}"
              />
            </div>
          </div>
        </div>

        <!-- Medicinas -->
        <h1>Terapia Aerosol</h1>
        <div class="row d-flex justify-content-center">
          <div class="col text-center">
            <div class="mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=${inputNebulizacion}
                id="inputNebulizacion"
              />
              <label for="inputPeso" class="form-label">Nebulización</label>
            </div>
          </div>
          <div class="col text-center">
            <div class="mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="inputUltrasonido"
              />
              <label for="inputPeso" class="form-label">Ultrasonido</label>
            </div>
          </div>
          <div class="col text-center">
            <div class="mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="inputInahaladorDosis"
              />
              <label for="inputPeso" class="form-label"
                >Inhaladores Dosis Medida</label
              >
            </div>
          </div>
        </div>
        </form>
              </fieldset>
              <script>window.print();</script>
            </body>
          </html>
        `;

      printWindow.document.write(printContent);
      printWindow.document.close();
    };
    if (
      FormularioDeRegistro.listaDePeso.length !== 0 &&
      FormularioDeRegistro.listaEscalaDelDolor !== 0
    ) {
      return m("form", [
        m("div", { class: "d-flex flex-row mb-3" }, [
          m(
            "button",
            {
              class: "btn btn-primary",
              type: "button",
              onclick: printFormData,
              disabled: Button.estado !== "" && Button.estado !== "0",
            },
            "Imprimir"
          ),
          " ",
          m.trust("&nbsp;"),
          m.trust("&nbsp;"),
          " ",
          m(Button, { pedido: Pedido.numeroPedido }),
        ]),

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
                value: Pedido.data.CD_PRE_MED,
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
                value: Pedido.data.FECHA_PEDIDO + " " + Pedido.data.HORA_PEDIDO,
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
                value: Pedido.data.SECTOR,
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
                value: Pedido.data.MED_MV,
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
                value: Pedido.data.ESPECIALIDAD,
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
                value: Pedido.data.NM_PACIENTE,
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
                value: Pedido.data.CD_PACIENTE,
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
                value: Pedido.data.AT_MV,
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
                value: Pedido.data.SECTOR + " " + Pedido.data.UBICACION,
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
              value:
                FormularioDeRegistro.listaEscalaDelDolor.data.length > 0
                  ? FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE ===
                    null
                    ? ""
                    : FormularioDeRegistro.listaEscalaDelDolor.data[0].VALUE
                  : "",
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
              value:
                FormularioDeRegistro.listaDePeso.data.length > 0
                  ? FormularioDeRegistro.listaDePeso.data[0].VALUE == null
                    ? ""
                    : FormularioDeRegistro.listaDePeso.data[0].VALUE
                  : "",
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
              value: FormularioDeRegistro.usuarioConectado.user.user,
            }),
          ]),
        ]),
        m("div", { class: "form-row" }, []),
        m("div", { class: "form-group" }, [
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
        ]),

        m("div", { class: "form-group" }, [
          m("label", { for: "inputCod" }, "Cod"),
          m("input", {
            class: "form-control",
            type: "text",
            id: "inputCod",
            placeholder: "Código",
            readonly: "readonly",
            value: Pedido.data.AT_MV,
          }),
        ]),
        m("div", { class: "form-group" }, [
          m("label", { for: "inputFecha" }, "Fecha"),
          m("input", {
            class: "form-control",
            type: "text",
            id: "inputFecha",
            placeholder: "Fecha",
            value: FormularioDeRegistro.fechaActual,
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
            value: FormularioDeRegistro.horaActual,
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
                  id: "inputDrenajePostural",
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
                  type: "text",
                  id: "inputMililitrosPorSegundo",
                  value: "${inputMililitrosPorSegundo}",
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
                  type: "text",
                  id: "inputCentimetrosCubicosPorSegundo",
                  value: "${inputCentimetrosCubicosPorSegundo}",
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
                  type: "text",
                  id: "inputSaturacionPreviaPorcentaje",
                  value: "${inputSaturacionPreviaPorcentaje}",
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
                  type: "text",
                  id: "inputSaturacionPosteriorPorcentaje",
                  value: "${inputSaturacionPosteriorPorcentaje}",
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
                  type: "text",
                  id: "inputFrecuenciaCardiacaPreviaPorMinuto",
                  value: "${inputFrecuenciaCardiacaPreviaPorMinuto}",
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
                  type: "text",
                  id: "inputFrecuenciaCardiacaPosteriorPorMinuto",
                  value: "${inputFrecuenciaCardiacaPosteriorPorMinuto}",
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
                  type: "text",
                  id: "inputFrecuenciaRespiratoriaPreviaPorMinuto",
                  value: "${inputFrecuenciaRespiratoriaPreviaPorMinuto}",
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
                  type: "text",
                  id: "inputFrecuenciaRespiratoriaPosteriorPorMinuto",
                  value: "${inputFrecuenciaRespiratoriaPosteriorPorMinuto}",
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Esputo"),
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Disnea"),
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Tos"),
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Fiebre"),
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Roncus"),
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
                }),
                m("label", { class: "form-label", for: "inputPeso" }, "Edema"),
              ])
            ),
          ]),
        ],
        [
          m(
            "div",
            { class: "d-flex justify-content-center" },
            m("h6", "Criterio")
          ),
          m(
            "div",
            { class: "form-floating" },
            m("textarea", {
              class: "form-control",
              id: "floatingTextarea2",
              style: { height: "100px" },
            })
          ),
        ],
        m(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            //disabled: obtenerDatos.habilitarCampos,
            onclick: function () {
              const valorPrescripcion = () => {
                const valor = `${
                  vnode.dom["inputPrescripcion"].options[
                    vnode.dom["inputPrescripcion"].selectedIndex
                  ].text
                }`;
                let palabraAEnviar = "";
                for (const key in valor) {
                  if (valor[key] === " ") {
                    break;
                  }
                  palabraAEnviar += valor[key];
                }
                return parseInt(palabraAEnviar);
              };
              const formulario = {
                NUMERODEPEDIDO: vnode.dom["inputNumeroPedido"].value,
                /* "FECHAMV": `'${vnode.dom["inputFechaPedido"].value}'`,
                "ORIGEN": `'${vnode.dom["inputOrigenPedido"].value}'`,
                "MEDICOSOLICITANTE": `'${vnode.dom["inputMedicoSolicitante"].value}'`,
                "ESPECIALIDAD": `'${vnode.dom["inputEspecialidad"].value}'`,
                "APELLIDOSNOMBREPACIENTE": `'${vnode.dom["inputApellidosYNombres"].value}'`,
                "NHC": vnode.dom["inputNHC"].value,
                "NUMEROATENCION": vnode.dom["inputNumeroAtencion"].value,
                "UBICACION": `'${vnode.dom["inputUbicacion"].value}'`,
                "ESCALADELDOLOR": `'${vnode.dom["inputEscalaDolor"].value}'`,
                "PESO": vnode.dom["inputPeso"].value,
                "Usuario": `'${vnode.dom["inputUsuario"].value}'`, */
                // "PRESCRIPCION": null,
                // Aqui abajo hay un problema
                /* FECHAHOY: `'${vnode.dom["inputFecha"].value}'`, 
                HORAANTES: `'${vnode.dom["inputHora"].value}'`, */
                // "HORADESPUES": null,
                /* SALBUTAMOLDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputSalbumatol"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSalbumatol"].value)
                }`,
                HIPERSAL7DOSIS: `${
                  isNaN(parseInt(vnode.dom["inputHipersal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputHipersal"].value)
                }`,
                BROMURODELPATROPIODOSIS: `${
                  isNaN(parseInt(vnode.dom["inputBromuroIpatropio"].value))
                    ? 0
                    : parseInt(vnode.dom["inputBromuroIpatropio"].value)
                }`,
                DEXAMETASONADOSIS: `${isNaN(
                  parseInt(vnode.dom["inputDexametasona"].value)
                ) ? 0 : parseInt(vnode.dom["inputDexametasona"].value)}`,
                CLORHIDRATODEAMBROXOLDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputClorhidratoAmbroxol"].value))
                    ? 0
                    : parseInt(vnode.dom["inputClorhidratoAmbroxol"].value)
                }`,
                SOLUCIONSALINADOSIS: `${
                  isNaN(parseInt(vnode.dom["inputSolucionSalina"].value))
                    ? 0
                    : parseInt(vnode.dom["inputSolucionSalina"].value)
                }`,
                HIPERSAL35DOSIS: `${
                  isNaN(parseInt(vnode.dom["inputHipersal3"].value))
                    ? 0
                    : parseInt(vnode.dom["inputHipersal3"].value)
                }`,
                ADRENALINARACENICADOSIS: `${isNaN(parseInt(vnode.dom["inputAdrenalinaRacenica"].value)) ? 0 : parseInt(vnode.dom["inputAdrenalinaRacenica"].value)}`,
                OTROSDOSIS: `${
                  isNaN(parseInt(vnode.dom["inputOtros"].value))
                    ? 0
                    : parseInt(vnode.dom["inputOtros"].value)
                }`, */
                // "NEBULIZACION": null,
                // "ULTRASONIDO": null,
                // "INHALADORESDOSISMEDIDA": null,
                // "DRENAJEPOSTURAL": null,
                // "PERCUSIONES": null,
                // "VIBRACIONES": null,
                // "TOSEFECTIVA": null,
                // "ASISTENCIADETOS": null,
                // "CHALECOVIBROPRECUTOR": null,
                // "NASOTRAQUEAL": null,
                // "TRAQUEAL": null,
                // "OROTRAQUEAL": null,
                // "LAVADONASAL": null,
                // "SUBGLOTICA": null,
                // "ESPUTO": null,
                // "ISOPADO": null,
                // "SECRECIONTRAQUEAL": null,
                // "CONSCIENCIA": null,
                // "INTUBADO": null,
                // "ESTRIDOR": null,
                // "SIBILANCIAS": null,
                // "RONCUS": null,
                // "CREPITANTES": null,
                // "LOCALIZACION": null,
                // "CIANOSIS": null,
                // "RUIDORESPIRATORIO": null,
                // "DISMINUIDO": null,
                // "ABOLIDO": null,
                // "SONIDODELAVOZ": null,
                // "EDEMA": null,
                // "TOS": null,
                // "EXPECTORACION": null,
                // "DOLORTORACICO": null,
                // "HEMOPTISIS": null,
                // "FIEBRE": null,
                // "INCENTIVORESPIRATORIO": null,
                // "PRESIONPOSITIVAVIAAREA": null,
                // "PRESIONPOSITIVAEXPIRACION": null,
                // "KINISIOTERAPIADELTORAX": null,
                // "EJERCICIOSRESPIRATORIOS": null,
                // "MILILITROSPORSEGUNDOINCENTIVO": null,
                // "CENTIMETROSSEGUNDOINCENTIVO": null,
                "FRACCIONOXIGENOPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeFraccion"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeFraccion"].value)
                }`,
                "FRACCIONIOXIGENOLITROS": `${
                  isNaN(parseInt(vnode.dom["inputLitrosPorMinutoFraccion"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitrosPorMinutoFraccion"].value)
                }`,
                "ALTOFLUJOPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeAltoFlujo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeAltoFlujo"].value)
                }`,
                "ALTOFLUJOLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroAltoFlujo"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroAltoFlujo"].value)
                }`,
                "TIENDAFACIALPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeTiendaFacial"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeTiendaFacial"].value)
                }`,
                "TIENDAFACIALLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroPorMinutoTiendaFacial"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroPorMinutoTiendaFacial"].value)
                }`,
                "TUBOENTPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeTuboEnT"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeTuboEnT"].value)
                }`,
                "TUBOENTLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroTuboEnT"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroTuboEnT"].value)
                }`,
                "CANULANASALPORCENTAJE": `${
                  isNaN(parseInt(vnode.dom["inputPorcentajeCanulaNasal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputPorcentajeCanulaNasal"].value)
                }`,
                "CANULANASALLITROSPORMINUTO": `${
                  isNaN(parseInt(vnode.dom["inputLitroPorMinutoCanulaNasal"].value))
                    ? 0
                    : parseInt(vnode.dom["inputLitroPorMinutoCanulaNasal"].value)
                }`,
                // "MASCARILLAPORCENTAJE": null,
                // "MASCARILLALITROSPORMINUTO": null,
                // "HELIOXPORCENTAJE": null,
                // "HELIOXLITROSPORMINUTO": null,
                // "AIREAMBIENTEPORCENTAJE": null,
                // "SATURACION(O2%)": null,
                // "VENTILACIONMECANICA": null,
                // "VENTILACIONNOINVASIVA": null,
                // "SATURACIONPREVIA": null,
                // "SATURACIONPOSTERIOR": null,
                // "FRECUENCIACARDIACAPREVIA": null,
                // "FRECUENCIACARDIACAPOSTERIOR": null,
                // "FRECUENCIARESPIRATORIAPREVIA": null,
                // "FRECUENCIARESPIRATORIAPOS": null,
                // "CRITERIO": null,
                ESTADO: 0, //"1",
                ID: "sec_TerapiaRespiratoria.nextval",
              };
              if (confirm("¿Estás seguro quieres guardar este formulario?")) {
                // Lógica de eliminación del elemento aquí
                console.log(formulario);
                console.log(Pedido.data.AT_MV);
                FormularioDeRegistro.guardar(formulario);
              }

              //alert("Guardar");
              //alert("Guardar");
              //terapiaRespiratoriaController.guardar(formulario);
            },
          },
          "Guardar"
        ),
      ]);
    } else {
      return m(
        "div.pd-10.wd-100p",
        m("div.placeholder-paragraph", [m("div.line"), m("div.line")])
      );
    }
  },
};

export default FormularioDeRegistro;
