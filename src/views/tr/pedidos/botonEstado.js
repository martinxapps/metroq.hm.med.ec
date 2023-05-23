import m from 'mithril';
import Pedido from './pedido';

function date() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
}

const Button = {
    estado: "",
    data: [],
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
            Button.data = result.data[0];
            m.redraw();
          }
        })
        .catch(function (error) {
          alert(
            `Error al enviar los datos, intente de nuevo al recargar la página`
          );
        });
    },
    methodPostButton: function () {
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
    },
    view: function () {
      let buttonText = "Finalizar Documento";
      let buttonClass = "btn";
  
      if (
        Button.estado === "" ||
        Button.estado.length === 0 ||
        Button.estado === ""
      ) {
        buttonText = "Iniciar Documento";
        buttonClass += " btn-primary";
      } else {
        buttonText = "Documento Inicializado";
        buttonClass += " btn-warning";
      }
  
      const cancelClick = function (e) {
        if (confirm("¿Estas seguro de finalizar el documento?")) {
          Button.methodPostButton();
          //Button.estado = "1";
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

export default Button;