let FormularioModels = {
    listado: [],
    listaEscalaDelDolor: [],
    examenes: [],
    error: '',
    secuencialMuestra: '',
    numeroPedido: '',
    numeroAtencion: '',
    numeroHistoriaClinica: '',
    medico: '',
    loading: false,

    cargarEscalaDelDolor: function (numeroDeAtendimiento) {
        FormularioModels.loading = true;
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
          .then(function (result) {
            if (
                result.status &&
                result.data.length > 0 &&
                result.data[0].VALUE != null
            ) {
              FormularioModels.listaEscalaDelDolor = result;
              FormularioModels.loading = false;
              //console.log(FormularioDeRegistro.listaEscalaDelDolor);
            }else {
              FormularioModels.listaEscalaDelDolor.push({data: [{VALUE: ''}]});
              alert(terapiaRespiratoriaController.error);
                FormularioModels.loading = false;
            }
          })
          .catch(function (error) {
            FormularioModels.error = error;
            alert(FormularioModels.error);
            FormularioDeRegistro.loading = false;
          });
      },

    cargarListado: function(numeropedidomv) {
        muestraModel.loading = true;
        m.request({
            method: "GET",
            url: "https://api.hospitalmetropolitano.org/t/v1/tr/formularios/historial?numeroPedido=" + numeropedidomv,
            body: {},
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function(result) {
            FormularioModels.listado = result.data;
            FormularioModels.loading = false;
        })
        .catch(function(error) {
            FormularioModels.loading = false;
            FormularioModels.error = error;
            alert(FormularioModels.error);
        })
    },

    cargarExamenes: (numeropedidomv) => {
        m.request({
            method: "POST",
            url: "https://api.hospitalmetropolitano.org/t/v1/status-pedido-patologia",
            body: {
                numeroPedido: numeropedidomv,
            },
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function(result) {
            if (result.status) {              
                muestraModel.examenes = result.examenes;
            } else {
                muestraModel.error = result.message;
            }
        })
        .catch(function(error) {
            muestraModel.error = error;
            alert(muestraModel.error);
        })
    },

    generarSecuencial: function() {
        m.request({
            method: "GET",
            url: "http://localhost:8000/api/v1/muestras/obtenersecuencial",
            body: {},
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function(result) {
            muestraModel.secuencialMuestra = result.id + 1;
        })
        .catch(function(error) {
            muestraModel.error = error;
            alert(muestraModel.error);
        })   
    },

    guardar: (formulario) => {
        m.request({
            method: 'POST',
            url: "https://api.hospitalmetropolitano.org/t/v1/tr/formularios-terapia",
            body:  formulario,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function(result) {
            //muestraModel.cargarListado(muestraModel.numeroPedido);
            //muestraModel.secuencialMuestra = '';
            FormularioModels.listado.push(result);
            window.location.href = window.location.href;
        })
        .catch(function(error) {
            FormularioModels.error = "Se produjo error guardando el formulario: " + error.response.message;
            alert(FormularioModels.error);
        }) 
    },

    actualizar: (muestra) => {
        m.request({
            method: 'PUT',
            url: "http://localhost:8000/api/v1/muestras/" + muestra.id + "?nopedidomv=" + muestraModel.numeroPedido,
            body:  muestra,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function(result) {
            muestraModel.cargarListado(muestraModel.numeroPedido);
            muestraModel.secuencialMuestra = '';
        })
        .catch(function(error) {
            muestraModel.error = "Se produjo error guardando la muestra: " + error.response.message;
            alert(muestraModel.error);
        }) 
    },  

    asociarExamen: (examen) => {
        m.request({
            method: 'POST',
            url: "http://localhost:8000/api/v1/asociacionexamenes?nopedidomv=" + muestraModel.numeroPedido,
            body:  examen,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function() {
            muestraModel.cargarListado(muestraModel.numeroPedido);
        })
        .catch(function(error) {
            muestraModel.error = "Se produjo error guardando la muestra: " + error.response.message;
            alert(muestraModel.error);
        }) 
    },

    eliminarExamenasociado: (idAsociacion) => {
        m.request({
            method: 'DELETE',
            url: "http://localhost:8000/api/v1/asociacionexamenes/eliminarasociacion/" + idAsociacion + "?nopedidomv=" + muestraModel.numeroPedido,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json",
                "Authorization": localStorage.accessToken,
            },
        })
        .then(function() {
            muestraModel.cargarListado(muestraModel.numeroPedido);
        })
        .catch(function(error) {
            muestraModel.error = "Se produjo error guardando la muestra: " + error.response.message;
            alert(muestraModel.error);
        }) 
    },
}

export default FormularioModels;