// Pages here
import App from '../views/app'
import Salir from '../views/salir'
import Login from '../views/login/login'
import Laboratorio from '../views/laboratorio/laboratorio'
import NotificacionesLab from '../views/laboratorio/notificaciones/notificaciones'
import FiltrosLab from '../views/laboratorio/notificaciones/filtros'
import LaboratorioPedidos from '../views/laboratorio/pedidos/pedidos'
import LaboratorioFlebotomista from '../views/laboratorio/flebotomista/flebotomista'
import LaboratorioFormularios from '../views/laboratorio/formularios/formularios'
import MiPerfil from '../views/perfil/perfil';
import _404 from '../views/404';
import Inicio from '../views/inicio/inicio';
import ReloadNotification from '../views/layout/reload-notificacion';
import VerPedido from '../views/laboratorio/pedidos/verPedido'
import Emergencia from '../views/emergencia/emergencia'
import EmergenciaAuxiliarPedidosLaboratorio from '../views/emergencia/auxiliar/pedidos'
import VerPedidoAuxiliarEmergencia from '../views/emergencia/auxiliar/verPedido'
import EmergenciaEnfermeriaPedidosLaboratorio from '../views/emergencia/enfermeria/pedidos'
import VerPedidoEnfermeriaEmergencia from '../views/emergencia/enfermeria/verPedido'
import Farmacia from '../views/farmacia//farmacia'
import FarmaciaRecetasAlta from '../views/farmacia//recetas/recetasAlta'
import Admisiones from '../views/admisiones/admisiones'
import PacientesAdmisiones from '../views/admisiones/pacientes/pacientes'
import Mantenimiento from '../views/mantenimiento/mantenimiento'
import IntegracionHigienizacion from '../views/mantenimiento/higienizacion/higienizacion'
import Hospitalizacion from '../views/hospitalizacion/hospitalizacion'
import Pasaportes from '../views/hospitalizacion/pasaportes/pasaportes'



// Routes here
const Routes = {
    '/': App,
    '/inicio': Inicio,
    '/laboratorio': Laboratorio, //Laboratorio
    '/laboratorio/notificaciones': NotificacionesLab, //NotificacionesLab
    '/laboratorio/notificaciones/filtros': FiltrosLab, //FiltrosLab
    '/laboratorio/flebotomista': LaboratorioFlebotomista, //LaboratorioFlebotomista,
    '/laboratorio/flebotomista?idPedido=:idPedido': LaboratorioFlebotomista, //LaboratorioFlebotomista,
    '/laboratorio/pedidos': LaboratorioPedidos, //LaboratorioPedidos
    '/laboratorio/pedido/:idPedido': VerPedido, //verPedido
    '/laboratorio/formularios': LaboratorioFormularios, //LaboratorioPedidos
    '/emergencia': Emergencia, //Emergencia
    '/emergencia/auxiliar/pedidos/laboratorio': EmergenciaAuxiliarPedidosLaboratorio, //EmergenciaAuxiliarPedidosLaboratorio
    '/emergencia/auxiliar/pedido/:idPedido': VerPedidoAuxiliarEmergencia, //EmergenciaAuxiliarPedidosLaboratorio
    '/emergencia/enfermeria/pedidos/laboratorio': EmergenciaEnfermeriaPedidosLaboratorio, //EmergenciaEnfermeriaPedidosLaboratorio
    '/emergencia/enfermeria/pedido/:idPedido': VerPedidoEnfermeriaEmergencia, //VerPedidoEnfermeriaEmergencia
    '/farmacia': Farmacia, //Farmacia
    '/farmacia/recetas': FarmaciaRecetasAlta, //FarmaciaRecetasAlta
    '/admisiones': Admisiones, //Admisiones
    '/admisiones/pacientes': PacientesAdmisiones, //PacientesAdmisiones
    '/mantenimiento': Mantenimiento, //Mantenimiento
    '/mantenimiento/higienizacion': IntegracionHigienizacion, //IntegracionHigienizacion
    '/hospitalizacion': Hospitalizacion, //Hospitalizacion
    '/hospitalizacion/pasaportes': Pasaportes, //HospitalizacionPB
    '/auth': Login, // Login
    '/mi-perfil': MiPerfil, // MiPerfil
    '/salir': Salir, // Salir
    '/notificaciones': ReloadNotification, // ReloadNotificaciones
    "/:404...": _404
};


const DefaultRoute = '/';

export { Routes, DefaultRoute }