import m from "mithril";
import PedidoTF from "../pedidos/pedido";
import Encrypt from "../../../models/encrypt";
import TablePrescription from "../components/TablePrescription";
import ModalConfirmation from "../components/ModalConfirmation";
import ApiService from "../services/ApiService";

const PantallaRegistro = {
  data: [], // Aquí guardaremos los datos
  loading: true, // Estado de carga
  error: false, // Estado de error
  usuarioConectado: "", // Usuario conectado
  selectedItem: null, // Estado para almacenar el ítem seleccionado
  showModal: false, // Estado para controlar la visibilidad del modal

  oninit: () => {
    PantallaRegistro.usuarioConectado = Encrypt.getDataUser();
    PantallaRegistro.loadData(PedidoTF.numeroAtencion);
  },

  loadData: (attention) => {
    PantallaRegistro.loading = true;
    PantallaRegistro.error = false;
    ApiService.getPhysicalTherapySessions(attention)
      .then((result) => {
        if (result.status) {
          PantallaRegistro.data = result.data;
        } else {
          PantallaRegistro.error = true;
        }
      })
      .catch(() => {
        PantallaRegistro.error = true;
      })
      .finally(() => {
        PantallaRegistro.loading = false;
        m.redraw();
      });
  },

  handleCheck: (item) => {
    PantallaRegistro.selectedItem = item;
    PantallaRegistro.showModal = true;
  },

  confirmCheck: () => {
    if (PantallaRegistro.selectedItem) {
      PantallaRegistro.loading = true;
      PantallaRegistro.error = false;
      PantallaRegistro.showModal = false;

      const requestData = {
        cdItpreMed: PantallaRegistro.selectedItem.cdItpreMed,
        dhMedicacao: PantallaRegistro.selectedItem.dhMedicacao,
        nmUsuario: PantallaRegistro.usuarioConectado.user.user.toUpperCase(),
      };

      ApiService
        .postHritpreConsInsertRequest(requestData)
        .then(() => {
          PantallaRegistro.loadData(PedidoTF.numeroAtencion);
        })
        .catch(() => {
          PantallaRegistro.error = true;
          PantallaRegistro.loading = false;
        })
        .finally(() => m.redraw());
    }
  },

  closeModal: () => {
    PantallaRegistro.showModal = false;
  },

  view: () => {
    return [
      PantallaRegistro.error &&
        m(
          "div",
          { class: "alert alert-danger", role: "alert" },
          "Ocurrió un error, intenta de nuevo"
        ),
      PantallaRegistro.loading
        ? m(
            "div.pd-10.wd-100p",
            m("div.placeholder-paragraph", [m("div.line"), m("div.line")])
          )
        : m(TablePrescription, {
            data: PantallaRegistro.data,
            handleCheck: PantallaRegistro.handleCheck,
          }),
      PantallaRegistro.showModal &&
        m(ModalConfirmation, {
          item: PantallaRegistro.selectedItem,
          onConfirm: PantallaRegistro.confirmCheck,
          onCancel: PantallaRegistro.closeModal,
        }),
    ];
  },
};

export default PantallaRegistro;
