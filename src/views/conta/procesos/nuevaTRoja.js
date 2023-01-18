import HeaderPrivate from '../../layout/header-private';
import SidebarTRoja from './sidebarTRoja';
import App from '../../app';
import m from 'mithril';


const FOR005 = {
    secs: [],
    nombres: "",
    show: false,
    view: () => {

        let evolucion_medica_texto = "";
        let prescripciones_texto = "";
        let urlFor = "";
        let page = 0;

        if (Formulario.num == 0) {
            setTimeout(function() {
                Formulario.num = Formulario.data.length;
                Formulario.parseFetch();
                m.redraw.sync();
            }, 2000);
        }

        return FOR005.secs.length == 0 ? [
            m("div.pd-10.wd-100p",
                m("div.d-inline.tx-secondary.tx-12", {
                    oncreate: (el) => {
                        el.dom.innerHTML = "Procesando " + Formulario.data.length + " formulario(s) encontrado(s)...";
                    },

                }),
                m("div.placeholder-paragraph", [
                    m("div.line"),
                    m("div.line")
                ])
            ),
        ] : [

            FOR005.secs.map(function(_v, _i, _contentData) {

                if (_v.name == 'prescripciones_texto') {

                    prescripciones_texto = _v.answer;

                }

                if (_v.name == 'evolucion_medica_texto') {

                    evolucion_medica_texto = _v.answer;

                }

                if (_v.name == 'cd_documento_clinico') {

                    urlFor = "http://172.16.253.18/mvpep/api/clinical-documents/" + _v.answer + ".pdf?company=1&department=75";

                }


                if (_v.name == 'Logotipo_archivo') {


                    return [
                        m("div.d-inline.tx-secondary.tx-12", {
                            oncreate: (el) => {
                                el.dom.innerHTML = Formulario.data.length + " formulario(s) encontrado(s).";
                            },

                        }),
                        m("table.table.table-bordered.wd-100p", {
                            "style": {
                                "zoom": Formulario.zoom,
                            }
                        }, [
                            m("thead", [
                                m("tr",
                                    m("th[colspan='12'][scope='col']", [
                                        m("i.tx-light.fas.fa-file-alt.mg-r-2."),
                                        m("div.p-0", " SNS - MSP / HCU-form.005 / 2008 "),


                                    ])
                                ),
                                m("tr", [
                                    m("th[colspan='10'][scope='col']",
                                        m("div.m-0.p-0",
                                            m("img", {
                                                width: "100rem",
                                                src: "data:image/png;base64," + _v.answer
                                            })
                                        )
                                    ),
                                    m("th.tx-right[colspan='2'][scope='col']",
                                        m("a.tx-right.tx-semibold", {
                                                href: urlFor,
                                                target: "_blank"
                                            },
                                            m('i.fas.fa-print.mg-r-2'),
                                            " Imprirmir  "

                                        )

                                    )

                                ])
                            ]),
                            m("tbody", [
                                m("tr", [
                                    m("th[colspan='3'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "ESTABLECIMIENTO"
                                        )
                                    ),
                                    m("th[colspan='3'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "NOMBRE"
                                        )
                                    ),
                                    m("th[colspan='3'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "APELLIDO"
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "SEXO (M-F)"
                                        )
                                    ),
                                    m("th[colspan='1][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "NHCL."
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.tx-bold.text-center.",
                                            "ADM."
                                        )
                                    )
                                ]),
                                m("tr", [
                                    m("th.text-center[colspan='3'][scope='row']",
                                        m("div.m-0.p-0.text-center",
                                            "HOSPITAL METROPOLITANO"
                                        )
                                    ),
                                    m("td.text-center[colspan='3']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.nombres
                                        )
                                    ),
                                    m("td.text-center[colspan='3']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.apellidos_paciente
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.sexo
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.nhcl
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.numero_admision
                                        )
                                    )
                                ]),
                                m("tr", [
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "EDAD"
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "IDENTIFICACION"
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "FECHA ADMISION"
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "FECHA ALTA"
                                        )
                                    ),
                                    m("th[colspan='4'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "UBICACION"
                                        )
                                    ),
                                    m("th[colspan='4'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "MEDICO TRATANTE"
                                        )
                                    )
                                ]),
                                m("tr", [
                                    m("td.text-center[colspan='1'][scope='row']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.edad || FOR005.edad_paciente
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.identificacion
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.fecha_admision
                                        )
                                    ),
                                    m("td.text-center[colspan='1']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.fecha_admision
                                        )
                                    ),
                                    m("td.text-center[colspan='4']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.ubicacion
                                        )
                                    ),
                                    m("td.text-center[colspan='4']",
                                        m("div.m-0.p-0.text-center",
                                            FOR005.medico_tratante
                                        )
                                    )
                                ]),
                                m("tr", [
                                    m("th[colspan='6'][scope='row']", { "style": { "padding": "0", "background-color": "#eef9c8" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "1.- EVOLUCIÓN"
                                        )
                                    ),
                                    m("th[colspan='5'][scope='row']", { "style": { "padding": "0", "background-color": "#eef9c8" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "2.- PRESCRIPCIONES"
                                        )
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#eef9c8" } },
                                        m("div.m-0.p-0.tx-bold.text-center.", [
                                                "FIRMAR AL PIE DE",
                                                m("br"),
                                                "CADA PRESCRIPCIÓN"
                                            ]

                                        )
                                    ),

                                ]),
                                m("tr", [
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.", [
                                            "FECHA",
                                            m("br"),
                                            "día/mes/año"
                                        ])
                                    ),
                                    m("th[colspan='1'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "HORA"
                                        )
                                    ),
                                    m("th[colspan='4'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.",
                                            "NOTAS DE EVOLUCIÓN"
                                        )
                                    ),
                                    m("th[colspan='4'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.", [
                                                "FARMACOTERAPIA E INDICACIONES",
                                                m("br"),
                                                "(PARA ENFERMERÍA Y OTRO PERSONAL)"

                                            ]

                                        )
                                    ),
                                    m("th[colspan='2'][scope='row']", { "style": { "padding": "0", "background-color": "#edfbf5" } },
                                        m("div.m-0.p-0.tx-bold.text-center.", [
                                                "ADMINISTR.",
                                                m("br"),
                                                "FÁRMACOS INSUMOS"

                                            ]

                                        )
                                    ),

                                ]),
                                m("tr", [
                                    m("td[colspan='6'][scope='row']", { "style": { "padding": "0", "width": "50%" } },
                                        m("div.m-0.p-2.tx-bold.text-justify",
                                            (evolucion_medica_texto !== null && evolucion_medica_texto.length !== 0) ? m.trust(evolucion_medica_texto.replace(/(\r\n|\r|\n)/g, "<br/>")) : ""


                                        )
                                    ),
                                    m("td[colspan='6'][scope='row']", { "style": { "padding": "0", "width": "50%" } },
                                        m("div.m-0.p-2.text-justify",
                                            (prescripciones_texto !== null && prescripciones_texto.length !== 0) ? m.trust(prescripciones_texto.replace(/(\r\n|\r|\n)/g, "<br/>")) : ""

                                        )
                                    ),

                                ]),

                            ])
                        ])
                    ]

                }


            })

        ]



    }

};

const Formulario = {
    zoom: 0,
    adm: 1,
    nhc: 1,
    num: 0,
    data: [],
    error: "",
    parseDoc: (_data) => {

        Object.keys(_data.data).map(function(_v, _i, _contentData) {
            FOR005.secs.push(_data.data[_v])
        })

        return FOR005.secs.map(function(_v, _i, _contentData) {




            if (_v.name == 'nombres') {



                FOR005.nombres = _v.answer;

            }


            if (_v.name == 'apellidos_paciente') {



                FOR005.apellidos_paciente = _v.answer;

            }

            if (_v.name == 'sexo de paciente') {

                FOR005.sexo = _v.answer;

            }

            if (_v.name == 'nhcl') {

                FOR005.nhcl = _v.answer;

            }

            if (_v.name == 'numero_admision') {

                FOR005.numero_admision = _v.answer;

            }

            if (_v.name == 'edad') {

                FOR005.edad = _v.answer;

            }

            if (_v.name == 'edad_paciente') {

                FOR005.edad_paciente = _v.answer;

            }

            if (_v.name == 'identificacion_paciente') {

                FOR005.identificacion = _v.answer;

            }

            if (_v.name == 'fecha_admision') {

                FOR005.fecha_admision = _v.answer;

            }

            if (_v.name == 'ubicacion_atencion') {

                FOR005.ubicacion = _v.answer;

            }


            if (_v.name == 'fecha_alta') {

                FOR005.fecha_alta = (_v.answer == null) ? '' : _v.answer;

            }

            if (_v.name == 'medico_tratante') {

                FOR005.medico_tratante = _v.answer;

            }





        })

    },
    parseFetch: () => {
        FOR005.secs = [];

        return Formulario.data.map(function(_v, _i, _contentData) {
            Formulario.parseDoc(Formulario.data[_i])

        })



    },
    fetch: () => {
        Formulario.data = [];
        Formulario.error = "";
        m.request({
                method: "GET",
                url: "https://api.hospitalmetropolitano.org/t/v1/formulario?nhcl=" + Formulario.nhc + "&adm=" + Formulario.adm,

                headers: {
                    "Authorization": localStorage.accessToken,
                },
            })
            .then(function(result) {
                if (result.length !== 0) {
                    Formulario.data = result;
                    Formulario.num = 0;

                } else {
                    Formulario.error = "El documento solicitado no esta disponible.";
                }

            })
            .catch(function(e) {
                setTimeout(function() { Formulario.fetch(); }, 5000);

            })
    },

    view: () => {


        return Formulario.error ? [
            m(".alert.alert-danger[role='alert']",
                Formulario.error
            )
        ] : (Formulario.data.length !== 0) ? [


            m(FOR005)



        ] : [
            m("div.d-inline.tx-secondary.tx-12", {
                oncreate: (el) => {
                    el.dom.innerHTML = "Buscando información...";
                },


            }),
            m("div.pd-10.wd-100p",
                m("div.placeholder-paragraph", [
                    m("div.line"),
                    m("div.line")
                ])
            ),
        ]


    },
}

const Evoluciones = {
    data: [],
    detalle: [],
    error: "",
    showFor: "",
    fetch: () => {
        Evoluciones.data = [];
        Evoluciones.error = "";
        m.request({
                method: "POST",
                url: "https://api.hospitalmetropolitano.org/t/v1/ev-paciente",
                body: {
                    numeroHistoriaClinica: NuevaTRoja.data.CD_PACIENTE + '01'
                },
                headers: {
                    "Authorization": localStorage.accessToken,
                },
            })
            .then(function(result) {



                if (result.status) {
                    Evoluciones.data = result.data;
                    Formulario.adm = Evoluciones.data[0].ADM;
                    Formulario.nhc = Evoluciones.data[0].NHCL;
                    Formulario.fetch();
                } else {
                    Evoluciones.error = result.message;
                }

            })
            .catch(function(e) {
                setTimeout(function() { Evoluciones.fetch(); }, 5000);

            })
    },

    view: () => {


        return Evoluciones.error ? [
            m(".alert.alert-danger[role='alert']",
                Evoluciones.error
            )
        ] : Evoluciones.data.length !== 0 ? [

            m(Formulario)
        ] : [

            m("div.pd-10.wd-100p",
                m("div.placeholder-paragraph", [
                    m("div.line"),
                    m("div.line")
                ])
            ),
        ]


    },
}

const Examenes = {

    view: () => {

        if (NuevaTRoja.examenes.length !== 0) {
            return NuevaTRoja.examenes.map(function(_val, _i, _contentData) {
                return [
                    m('.tx-14.tx-semibold.d-inline', _val.EXAMEN),
                    (_val.OBS_EXAMEN !== null ? [
                        m('br'),
                        m('.d-inline', 'Observaciones:'),
                        m('br'),
                        m('.d-inline', _val.OBS_EXAMEN),
                        m('br'),
                        m('br'),
                    ] : ''),
                ]
            })
        }

    }
}


const NuevaTRoja = {
    data: [],
    examenes: [],
    error: '',
    numeroNuevaTRoja: '',
    numeroAtencion: '',
    numeroHistoriaClinica: '',
    oninit: (_data) => {

        if (_data.attrs.numeroNuevaTRoja !== undefined) {
            document.title = "Detalle de NuevaTRojas N°: " + _data.attrs.numeroNuevaTRoja + " | " + App.title;

            if (NuevaTRoja.data !== undefined && NuevaTRoja.data.length == 0) {
                NuevaTRoja.numeroNuevaTRoja = _data.attrs.numeroNuevaTRoja;
                NuevaTRoja.numeroAtencion = _data.attrs.numeroAtencion;
                NuevaTRoja.numeroHistoriaClinica = _data.attrs.numeroHistoriaClinica;
                NuevaTRoja.fetch();
            } else {
                if (NuevaTRoja.numeroNuevaTRoja !== _data.attrs.numeroNuevaTRoja) {
                    NuevaTRoja.numeroNuevaTRoja = _data.attrs.numeroNuevaTRoja;
                    NuevaTRoja.numeroAtencion = _data.attrs.numeroAtencion;
                    NuevaTRoja.numeroHistoriaClinica = _data.attrs.numeroHistoriaClinica;
                    NuevaTRoja.fetch();

                }

            }
        }
    },
    fetch: () => {
        NuevaTRoja.data = [];
        NuevaTRoja.loader = true;
        m.request({
                method: "POST",
                url: "https://api.hospitalmetropolitano.org/t/v1/status-NuevaTRoja-imagen",
                body: {
                    numeroNuevaTRoja: NuevaTRoja.numeroNuevaTRoja,
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then(function(result) {
                if (result.status) {
                    NuevaTRoja.loader = false;
                    NuevaTRoja.data = result.data;
                    NuevaTRoja.examenes = result.examenes;
                    Evoluciones.fetch();
                } else {
                    NuevaTRoja.error = result.message;
                }

            })
            .catch(function(e) {

            })

    },

    view: (_data) => {

        return [
            m(HeaderPrivate, { oncreate: HeaderPrivate.setPage("contabilidad") }),
            m(SidebarTRoja, { oncreate: SidebarTRoja.setPage(32) }),
            m("div.content.content-components",
                m("div.container.mg-l-0.mg-r-0", {
                    style: { "max-width": "100%" }
                }, [
                    m("ol.breadcrumb.df-breadcrumbs.mg-b-10", [
                        m("li.breadcrumb-item",
                            m(m.route.Link, { href: "/" }, [
                                " MetroPlus "
                            ])
                        ),
                        m("li.breadcrumb-item",
                            m(m.route.Link, { href: "/contabilidad" }, [
                                " Contabilidad "
                            ])

                        ),
                        m("li.breadcrumb-item",
                            m(m.route.Link, { href: "/contabilidad/proceso/tarjeta-roja" }, [
                                " Tarjeta Roja "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Nueva Tarjeta Roja"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Nueva Tarjeta Roja: "
                    ),


                    m("div.row.animated.fadeInUp", [

                        m("div.col-12", [

                            m("div.table-loader.wd-100p", {
                                    oncreate: (el) => {
                                        if (NuevaTRoja.loader) {
                                            el.dom.hidden = false;
                                        } else {
                                            el.dom.hidden = true;

                                        }
                                    },
                                    onupdate: (el) => {
                                        if (NuevaTRoja.loader) {
                                            el.dom.hidden = false;
                                        } else {
                                            el.dom.hidden = true;

                                        }
                                    }

                                }, [
                                    m("div.placeholder-paragraph", [
                                        m("div.line"),
                                        m("div.line")
                                    ])
                                ]


                            ),

                            m("div.table-content.col-12.pd-r-0.pd-l-0.pd-b-20.", {
                                oncreate: (el) => {
                                    if (NuevaTRoja.loader) {
                                        el.dom.hidden = true;
                                    } else {
                                        el.dom.hidden = false;

                                    }
                                },
                                onupdate: (el) => {
                                    if (NuevaTRoja.loader) {
                                        el.dom.hidden = true;
                                    } else {
                                        el.dom.hidden = false;

                                    }
                                }
                            }, [

                                m("div.bg-white.bd.pd-20.pd-lg-30.d-flex.flex-column.justify-content-end", [


                                    m("span.pd-6.wd-100p.wd-md-20p", {
                                        class: "badge badge-danger mg-b-2 mg-r-2",
                                    }, [
                                        m("i.fas.fa-file-alt.mg-r-5"),
                                    ], "FOR TARJETA ROJA"),


                                    m('div.table-responsive', [
                                        m("table.table.table-bordered.table-sm.tx-12", [
                                            m("thead",

                                                m("tr.bg-litecoin.op-9.tx-white", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "DATOS SOLICITUD:"
                                                    ),

                                                ])
                                            ),
                                            m("tbody", [
                                                m("tr", [

                                                    m("th[colspan='8']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Fecha de Solicitud:"
                                                    ),
                                                    m("td[colspan='2']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },

                                                        m("input", { value: moment().format("DD-MM-Y"), "class": "form-control", "type": "text", "placeholder": "Input box" })


                                                    ),

                                                ]),

                                                m("tr", [
                                                    m("th[colspan='2']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Área de Origen:"
                                                    ),
                                                    m("td[colspan='3']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })
                                                    ),
                                                    m("th[colspan='3']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Categpría:"
                                                    ),
                                                    m("td[colspan='2']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })

                                                    )


                                                ]),


                                            ]),
                                            m("thead",

                                                m("tr.bg-litecoin.op-9.tx-white", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "DATOS DEL EQUIPO:"
                                                    ),

                                                ])
                                            ),
                                            m("tbody", [
                                                m("tr", [
                                                    m("th[colspan='2']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Nombre:"
                                                    ),
                                                    m("td[colspan='3']", {
                                                            style: { "background-color": "#eaeff5" }
                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })
                                                    ),
                                                    m("th[colspan='2']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Marca:"
                                                    ),
                                                    m("td[colspan='3']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })

                                                    ),



                                                ]),
                                                m("tr", [
                                                    m("th[colspan='2']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Modelo:"
                                                    ),
                                                    m("td[colspan='3']", {
                                                            style: { "background-color": "#eaeff5" }
                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })
                                                    ),
                                                    m("th[colspan='2']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Serie:"
                                                    ),
                                                    m("td[colspan='3']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        m("input", { "class": "form-control", "type": "text", "placeholder": "Input box" })

                                                    ),



                                                ]),

                                                m("tr.bg-litecoin.op-9.tx-white", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "MOTIVO DE BAJA:"
                                                    ),

                                                ]),
                                                m("tr", [
                                                    m("th[colspan='3']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Motivo de Baja:"
                                                    ),
                                                    m("td[colspan='7']", {
                                                        style: { "background-color": "#eaeff5" }

                                                    }, [
                                                        m("select", { "class": "custom-select" }, [
                                                            m("option", { "selected": "selected" },
                                                                "Open this select menu"
                                                            ),
                                                            m("option", { "value": "1" },
                                                                "One"
                                                            ),
                                                            m("option", { "value": "2" },
                                                                "Two"
                                                            ),
                                                            m("option", { "value": "3" },
                                                                "Three"
                                                            )
                                                        ])
                                                    ]),


                                                ]),

                                                m("tr.d-print-none.bg-litecoin.op-9.tx-white.", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "ACCIÓN SUGERIDA:"
                                                    ),

                                                ]),
                                                m("tr", [
                                                    m("th[colspan='3']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Acción Sugerida:"
                                                    ),
                                                    m("td[colspan='7']", {
                                                        style: { "background-color": "#eaeff5" }

                                                    }, [
                                                        m("select", { "class": "custom-select" }, [
                                                            m("option", { "selected": "selected" },
                                                                "Open this select menu"
                                                            ),
                                                            m("option", { "value": "1" },
                                                                "One"
                                                            ),
                                                            m("option", { "value": "2" },
                                                                "Two"
                                                            ),
                                                            m("option", { "value": "3" },
                                                                "Three"
                                                            )
                                                        ])
                                                    ]),


                                                ]),
                                                m("tr.d-print-none.bg-litecoin.op-9.tx-white.", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "OBSERVACIÓN:"
                                                    ),

                                                ]),
                                                m("tr", [
                                                    m("th[colspan='3']", {
                                                            style: { "background-color": "#a8bed6" }
                                                        },
                                                        "Observación:"
                                                    ),
                                                    m("td[colspan='7']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                                    ),


                                                ]),
                                                m("tr.d-print-none.bg-litecoin.op-9.tx-white.", [
                                                    m("th[scope='col'][colspan='10']",
                                                        "ADJUNTOS:"
                                                    ),

                                                ]),

                                                m("tr.d-print-none", [

                                                    m("td[colspan='10']", {
                                                            style: { "background-color": "#eaeff5" }

                                                        },
                                                        m("ul.nav.nav-tabs[id='myTab'][role='tablist']", [
                                                            m("li.nav-item",
                                                                m("a.nav-link[id='home-tab'][data-toggle='tab'][href='#home'][role='tab'][aria-controls='home'][aria-selected='true']", {
                                                                        style: { "color": "#476ba3" }
                                                                    },
                                                                    m("i.fas.fa-file-alt.pd-1.mg-r-2"),

                                                                    " Adjuntos "
                                                                )
                                                            ),


                                                        ]),
                                                    ),


                                                ]),
                                                m("tr.d-print-none", [

                                                    m("td[colspan='9']", {

                                                        },
                                                        m(".tab-content.bd.bd-gray-300.bd-t-0[id='myTab']", [
                                                            m(".tab-pane.fade[id='home'][role='tabpanel'][aria-labelledby='home-tab']", [
                                                                m(Evoluciones),
                                                            ]),

                                                        ])
                                                    ),


                                                ]),
                                                m("tr.d-print-none", [

                                                ]),

                                            ])
                                        ])
                                    ]),


                                ])


                            ])
                        ])
                    ]),



                ])
            ),

        ];



    }

};


export default NuevaTRoja;