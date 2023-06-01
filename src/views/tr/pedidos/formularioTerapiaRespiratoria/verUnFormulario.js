import m from "mithril";
import FormularioModels from "./models/formularioModels";
import loader from "../../../patologia/utils/loader";

let formularioModelo = FormularioModels;
let idFormulario = null;
// 
let pruebaFormulario = null

const VerUnFormulario = {
  oninit: (vnode) => {
    if (vnode.attrs.id !== undefined) {
      idFormulario = vnode.attrs.id;
    }
    //idFormulario = vnode.attrs.id;

    formularioModelo.cargarUnFormulario(idFormulario);
    //alert(prueba);
    //alert(formularioModelo.listadoUnitario)
    //console.log(formularioModelo.listadoUnitario);
  },
  onupdate: (vnode) => {
    if (formularioModelo.listadoUnitario.length !== 0) {
        pruebaFormulario =  formularioModelo.listadoUnitario;
    }
  },
  view: (vnode) => {
    return [
        formularioModelo.listadoUnitario.length !== 0
      ? [
          m("h1", formularioModelo.listadoUnitario.ID),
          
        ]
      : m(loader),
    ]
    
  },
};

export default VerUnFormulario;
