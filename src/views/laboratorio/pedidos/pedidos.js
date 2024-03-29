import sidebarLab from '../sidebarLab';
import Notificaciones from '../../../models/notificaciones';

import m from 'mithril';

function stopwatchModel() {
    return {
        interval: null,
        seconds: 100,
        isPaused: false
    };
}

const actions = {
    showFilter: true,
    showSearch: true,
    show: false,
    increment(model) {
        model.seconds--;
        if (model.seconds == 0) {
            window.location.reload();
        }
        m.redraw();
    },

    start(model) {
        model.interval = setInterval(actions.increment, 1000, model);
    },
    stop(model) {
        model.interval = clearInterval(model.interval);
    },
    reset(model) {
        model.seconds = 100;
    },
    toggle(model) {
        if (model.isPaused) {
            actions.start(model);
        } else {
            actions.stop(model);
        }
        model.isPaused = !model.isPaused;
    }
};

function Stopwatch() {
    const model = stopwatchModel();
    actions.start(model);
    return {
        view() {
            return [
                m("div.mg-b-0", [
                    m("div.d-flex.align-items-center.justify-content-between.mg-b-5", [
                        m("h6.tx-uppercase.tx-10.tx-spacing-1.tx-color-02.tx-semibold.mg-b-0",
                            "Actualización en:"
                        ),

                    ]),
                    m("div.d-flex.justify-content-between.mg-b-5", [
                        m("h5.tx-normal.tx-rubik.mg-b-0",
                            model.seconds + "s."
                        ),
                        m("h5.tx-normal.tx-rubik.tx-color-03.mg-b-0",
                            m("small.pd-2.tx-15",
                                (model.isPaused ? [m("i.fas.fa-play.pd-2", {
                                    title: "Start",
                                    onclick() {
                                        actions.toggle(model);
                                    },
                                    style: { "cursor": "pointer" }
                                })] : [m("i.fas.fa-pause.pd-2", {
                                    title: "Pause",
                                    onclick() {
                                        actions.toggle(model);
                                    },
                                    style: { "cursor": "pointer" }

                                })]),


                            ),



                        ),


                    ]),
                    m("div.progress.ht-4.mg-b-0.op-5",
                        m(".progress-bar.bg-primary.[role='progressbar'][aria-valuenow='" + model.seconds + "'][aria-valuemin='0'][aria-valuemax='60']", {
                            oncreate: (el) => {
                                el.dom.style.width = "100%";

                            },
                            onupdate: (el) => {
                                el.dom.style.width = model.seconds + "%";

                            },

                        })
                    )
                ]),

            ];



        },
        onremove() {
            actions.stop(model);
        },

    };
};


const tablePedidos = {
    oncreate: () => {
        Pedidos.loadPedidos();
        if (Pedidos.searchField.length !== 0) {
            var table = $('#table-pedidos').DataTable();
            table.search(Pedidos.searchField).draw();
        }

    },

    view: () => {
        return m("div.row.animated.fadeInUp", {}, [

            m("div.col-12", [



                m("div.table-content.col-12.pd-r-0.pd-l-0.pd-b-20.", [

                    m("div.d-flex.align-items-center.justify-content-between.mg-b-80.mg-t-10", [
                        m("h5.mg-b-0",
                            "Pedidos de Laboratorio:",
                            m("span.badge.badge-primary.tx-semibold.pd-l-10.pd-r-10.mg-l-5.tx-15", {
                                oncreate: (el) => {
                                    if (Pedidos.idFiltro == 1) {
                                        el.dom.innerHTML = 'Pedidos de Hoy';
                                    }
                                    if (Pedidos.idFiltro == 2) {
                                        el.dom.innerHTML = 'Pedidos entre Fechas';
                                    }
                                    if (Pedidos.idFiltro == 3) {
                                        el.dom.innerHTML = 'Pedidos de Emergencia';
                                    }
                                    if (Pedidos.idFiltro == 4) {
                                        el.dom.innerHTML = 'Pedidos de C. Externa';
                                    }
                                    if (Pedidos.idFiltro == 5) {
                                        el.dom.innerHTML = 'Pedidos de Hospitalización';
                                    }
                                },
                                onupdate: (el) => {
                                    if (Pedidos.idFiltro == 1) {
                                        el.dom.innerHTML = 'Pedidos de Hoy';
                                    }
                                    if (Pedidos.idFiltro == 2) {
                                        el.dom.innerHTML = 'Pedidos entre Fechas';
                                    }
                                    if (Pedidos.idFiltro == 3) {
                                        el.dom.innerHTML = 'Pedidos de Emergencia';
                                    }
                                    if (Pedidos.idFiltro == 4) {
                                        el.dom.innerHTML = 'Pedidos de C. Externa';
                                    }
                                    if (Pedidos.idFiltro == 5) {
                                        el.dom.innerHTML = 'Pedidos de Hospitalización';
                                    }
                                }
                            }

                            )

                        ),
                        m("div.d-flex.tx-14", [
                            m('.', {
                                class: (Pedidos.idFiltro == 1 ? 'd-none' : 'd-flex')
                            }, [
                                m("div.link-03", {
                                    title: "Desde"
                                },
                                    m(".tx-10.pd-r-0", {
                                        style: { "padding-top": "10px" }
                                    }, 'Desde:')
                                ),
                                m("div.link-03", {
                                    style: { "cursor": "pointer" },
                                    title: "Desde"
                                },

                                    m("input.tx-light.pd-4[type='date'][id='desde']", {
                                        oncreate: (el) => {
                                            el.dom.value = (Pedidos.idFiltro !== 1 ? moment(moment(Pedidos.fechaDesde, 'DD-MM-YYYY')).format('YYYY-MM-DD') : '');
                                        },
                                        onchange: (el) => {
                                            Pedidos.fechaDesde = moment(moment(el.target.value, 'YYYY-MM-DD')).format('DD-MM-YYYY');
                                            Pedidos.loader = true;
                                            Pedidos.pedidos = [];
                                            Pedidos.fetchPedidos();
                                            m.route.set("/laboratorio/pedidos?idFiltro=" + Pedidos.idFiltro + "&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta);
                                        },
                                        style: {
                                            "border": "transparent"
                                        }
                                    })
                                ),
                                m("div.link-03", {
                                    title: "Hasta"
                                },
                                    m(".tx-10.pd-r-0", {
                                        style: { "padding-top": "10px" }
                                    }, 'Hasta:')
                                ),
                                m("div.link-03", {
                                    style: { "cursor": "pointer" },
                                    title: "Hasta"
                                },
                                    m("input.tx-light.pd-4[type='date'][id='hasta']", {
                                        oncreate: (el) => {
                                            el.dom.value = (Pedidos.idFiltro !== 1 ? moment(moment(Pedidos.fechaHasta, 'DD-MM-YYYY')).format('YYYY-MM-DD') : '');
                                        },
                                        onchange: (el) => {
                                            Pedidos.fechaHasta = moment(moment(el.target.value, 'YYYY-MM-DD')).format('DD-MM-YYYY');
                                            Pedidos.loader = true;
                                            Pedidos.pedidos = [];
                                            Pedidos.fetchPedidos();
                                            m.route.set("/laboratorio/pedidos?idFiltro=" + Pedidos.idFiltro + "&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta);
                                        },
                                        style: {
                                            "border": "transparent"
                                        }
                                    })
                                )
                            ]),
                            m("div.dropdown.dropleft", [
                                m("div.link-03.lh-0.mg-l-5[id='dropdownMenuButton'][data-toggle='dropdown'][aria-haspopup='true'][aria-expanded='false']", {
                                    style: { "cursor": "pointer" },
                                    title: "Filtrar"
                                },
                                    m("i.fas.fa-filter.tx-18.pd-5")
                                ),
                                m(".dropdown-menu.tx-13[aria-labelledby='dropdownMenuButton']", [
                                    m("h6.dropdown-header.tx-uppercase.tx-12.tx-bold.tx-inverse",
                                        "FILTROS:"
                                    ),
                                    m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/pedidos/?idFiltro=1" }, [
                                        "Pedidos de Hoy"
                                    ]),

                                    m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/pedidos/?idFiltro=2&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta }, [
                                        "Pedidos entre Fechas"
                                    ]),
                                    m(m.route.Link, { class: 'dropdown-item d-none', href: "/laboratorio/pedidos/?idFiltro=3&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta }, [
                                        "Pedidos de Emergencia"
                                    ]),
                                    m(m.route.Link, { class: 'dropdown-item d-none', href: "/laboratorio/pedidos/?idFiltro=4&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta }, [
                                        "Pedidos de C. Externa"
                                    ]),
                                    m(m.route.Link, { class: 'dropdown-item d-none', href: "/laboratorio/pedidos/?idFiltro=5&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta }, [
                                        "Pedidos de Hospitalización"
                                    ]),
                                    m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/pedidos/?idFiltro=6&fechaDesde=" + Pedidos.fechaDesde + "&fechaHasta=" + Pedidos.fechaHasta }, [
                                        "Tomas Pendientes"
                                    ]),

                                ])
                            ])
                        ])
                    ]),
                    m("div.col-sm-12.filemgr-content-header", {
                        class: (Pedidos.idFiltro == 1 ? "mg-t-35" : "mg-t-40")
                    }, [
                        m("i[data-feather='search']"),
                        m("div.search-form",
                            m("input.form-control[type='search'][placeholder='Buscar'][id='searchField']", {

                                oninput: function (e) { Pedidos.searchField = e.target.value; },
                                value: Pedidos.searchField,
                            })
                        ),

                    ]),


                    m("table.table.table-sm.tx-11[id='table-pedidos'][width='100%']"),


                ])
            ])
        ]);
    }
};

const Pedidos = {
    notificaciones: [],
    pedidos: [],
    showBitacora: "",
    showPedido: "",
    fechaDesde: "",
    fechaHasta: "",
    searchField: "",
    idFiltro: 0,
    loader: false,
    error: "",
    oninit: (_data) => {

        sidebarLab.page = "";

        if (Pedidos.pedidos.length == 0) {

            moment.lang("es", {
                months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
                    "_"
                ),
                monthsShort: "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split(
                    "_"
                ),
                weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split(
                    "_"
                ),
                weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
                weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
            });



            Pedidos.fechaDesde = moment().subtract(1, 'days').format('DD-MM-YYYY');
            Pedidos.fechaHasta = moment().format('DD-MM-YYYY');
            Pedidos.loader = true;
            Pedidos.pedidos = [];
            Pedidos.fetchPedidos();

        }

    },

    oncreate: (_data) => {
        Notificaciones.suscribirCanal('MetroPlus-Laboratorio');
    },

    loadPedidos: () => {




        $.fn.dataTable.ext.errMode = "none";
        var table = $("#table-pedidos").DataTable({
            data: Pedidos.pedidos,
            dom: 'ltp',
            language: {
                searchPlaceholder: "Buscar...",
                sSearch: "",
                lengthMenu: "Mostrar _MENU_ registros por página",
                sProcessing: "Procesando...",
                sZeroRecords: "Todavía no tienes resultados disponibles.",
                sEmptyTable: "Ningún dato disponible en esta tabla",
                sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
                sInfoPostFix: "",
                sUrl: "",
                sInfoThousands: ",",
                sLoadingRecords: "Cargando...",
                oPaginate: {
                    sFirst: "Primero",
                    sLast: "Último",
                    sNext: "Siguiente",
                    sPrevious: "Anterior",
                },
                oAria: {
                    sSortAscending: ": Activar para ordenar la columna de manera ascendente",
                    sSortDescending: ": Activar para ordenar la columna de manera descendente",
                },
            },
            cache: false,

            destroy: true,
            columns: false,
            aoColumnDefs: [{
                mRender: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                },
                visible: false,
                aTargets: [0],
                orderable: true,
            },
            {
                mRender: function (data, type, full) {
                    return full.CD_PED_LAB;
                },
                visible: false,
                aTargets: [1],
                orderable: false,

            },
            {
                mRender: function (data, type, full) {
                    return full.CD_PACIENTE;

                },
                visible: false,
                aTargets: [2],
                orderable: false,

            }, {
                mRender: function (data, type, full) {
                    return full.NM_PACIENTE;

                },
                visible: false,
                aTargets: [3],
                orderable: false,

            }, {
                mRender: function (data, type, full) {
                    return full.MED_MV;

                },
                visible: false,
                aTargets: [4],
                orderable: false,

            }, {
                mRender: function (data, type, full) {
                    return "";

                },
                visible: true,
                aTargets: [5],
                orderable: false,

            },


            ],
            fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {

            },
            drawCallback: function (settings) {

                Pedidos.loader = false;

                settings.aoData.map(function (_i) {

                    $(_i.anCells[5]).css("padding", "0").css("background-color", "#f7fafe");

                    m.mount(_i.anCells[5], {
                        view: function () {

                            return [
                                m("div.d-flex.mg-t-1", {}, [
                                    m("div.pd-0.flex-grow-1",
                                        m("div.pd-2", { "style": { "background-color": "rgb(228 233 242)" } },
                                            m('i.fas.fa-file-alt.tx-semibold.tx-20.pd-2.mg-r-5'),
                                            m('.d-inline.tx-20.mg-r-5', _i._aData.CD_PED_LAB),
                                            m('.tx-semibold.d-inline.tx-12', " SECTOR: "),
                                            m('.d-inline.tx-12.mg-r-5', {
                                                class: (_i._aData.SECTOR == 'EMERGENCIA' ? "tx-danger" : "tx-primary")
                                            }, _i._aData.SECTOR + " " + _i._aData.UBICACION),
                                            m('.tx-semibold.d-inline.tx-12', " MED: "),
                                            _i._aData.MED_MV
                                        ),
                                    ),
                                    m("div.pd-2.tx-medium.mg-l-auto", { "style": { "background-color": "rgb(228 233 242)" } },
                                        "Edad: " + _i._aData.EDAD + " Peso: " + _i._aData.PESO + "Kg. Altura: " + _i._aData.ALTURA + "m."
                                    )
                                ]),
                                m("div.d-flex.mg-b-0", { "style": { "background-color": "rgb(234, 239, 245)" } }, [
                                    m("div.pd-0.flex-grow-1",
                                        m("td.wd-1p.tx-white", { "style": { "background-color": (_i._aData.SECTOR == 'EMERGENCIA' ? "#f10075" : "#0168fa") } },
                                            (_i._aData.SECTOR == 'EMERGENCIA' ? "E" : "H")
                                        ),
                                        m("td.tx-12.tx-semibold", { "style": { "background-color": "rgb(228 233 242)" } },
                                            "FECHA:"
                                        ),
                                        m("td.tx-12", { "style": { "background-color": "rgb(246 250 254)" } },
                                            _i._aData.FECHA_PEDIDO + " " + _i._aData.HORA_PEDIDO
                                        ),
                                        m("td.tx-12.tx-semibold", { "style": { "background-color": "rgb(228 233 242)" } },
                                            "NHC:"
                                        ),
                                        m("td.tx-12", { "style": { "background-color": "rgb(246 250 254)" } },
                                            _i._aData.CD_PACIENTE
                                        ),
                                        m("td.tx-12.tx-semibold", { "style": { "background-color": "rgb(228 233 242)" } },
                                            "N° AT.: "
                                        ),
                                        m("td.tx-12", { "style": { "background-color": "rgb(246 250 254)" } },
                                            _i._aData.AT_MV
                                        ),

                                        m("td.tx-12.tx-semibold", { "style": { "background-color": "rgb(228 233 242)" } },
                                            "PTE: "
                                        ),
                                        m("td", { "style": { "background-color": "rgb(246 250 254)" } },
                                            _i._aData.NM_PACIENTE
                                        ),



                                    ),

                                    m("div.pd-0.mg-l-auto", { "style": { "background-color": "rgb(228 233 242)" } },
                                        m("td.tx-10.tx-primary", {
                                            "style": { "background-color": "rgb(228 233 242)", "cursor": "pointer" },
                                            onclick: () => {
                                                m.route.set("/laboratorio/pedido/", {
                                                    numeroHistoriaClinica: _i._aData.CD_PACIENTE,
                                                    numeroAtencion: _i._aData.AT_MV,
                                                    numeroPedido: _i._aData.CD_PED_LAB,
                                                    track: "view",
                                                });
                                            }
                                        },
                                            m(".tx-12",
                                                m("i.fas.fa-file-alt.pd-1.mg-r-2"),

                                                "Ver Pedido"
                                            )
                                        ),
                                    )
                                ]),


                            ]




                        }
                    });

                })




            },
        });

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#searchField').keyup(function (e) {

            table.search($('#searchField').val()).draw();
        });

        return table;
    },
    fetchPedidos: () => {

        let _queryString = '';

        if (Pedidos.idFiltro == 1) {
            _queryString = '?idFiltro=' + Pedidos.idFiltro;
        } else {
            _queryString = '?idFiltro=' + Pedidos.idFiltro + '&fechaDesde=' + Pedidos.fechaDesde + '&fechaHasta=' + Pedidos.fechaHasta;
        }

        m.request({
            method: "GET",
            url: "https://api.hospitalmetropolitano.org/t/v1/laboratorio/pedidos" + _queryString,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
            .then(function (result) {
                Pedidos.loader = false;
                Pedidos.pedidos = result.data;
            })
            .catch(function (e) {
                setTimeout(function () { Pedidos.fetchPedidos(); }, 2000);
            });


    },
    reloadData: () => {
        var table = $('#table-pedidos').DataTable();
        table.clear();
        table.rows.add(Pedidos.pedidos).draw();
    },

    view: (_data) => {

        return Pedidos.loader ? [
            m(sidebarLab, { oncreate: sidebarLab.setPage(1) }),
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
                            m(m.route.Link, { href: "/laboratorio" }, [
                                " Laboratorio "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Recepción de Pedidos"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Recepción de Pedidos:"
                    ),
                    m("div.row.animated.fadeInUp", [

                        m("div.col-12", [

                            m("div.table-loader.wd-100p", [
                                m("div.placeholder-paragraph", [
                                    m("div.line"),
                                    m("div.line")
                                ])
                            ]


                            ),


                        ])
                    ]),






                ])
            ),

        ] : Pedidos.error.length !== 0 ? [
            m(sidebarLab, { oncreate: sidebarLab.setPage(1) }),
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
                            m(m.route.Link, { href: "/laboratorio" }, [
                                " Laboratorio "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Recepción de Pedidos"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Recepción de Pedidos:"
                    ),
                    m("div.row.animated.fadeInUp", [

                        m('p', 'No existe infrmac dd ncin')
                    ]),





                ])
            ),

        ] : !Pedidos.loader && Pedidos.pedidos.length !== 0 ? [
            m(sidebarLab, { oncreate: sidebarLab.setPage(1) }),
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
                            m(m.route.Link, { href: "/laboratorio" }, [
                                " Laboratorio "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Recepción de Pedidos"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Recepción de Pedidos:"
                    ),
                    m(tablePedidos)





                ])
            ),
            m("div.section-nav", [
                m("label.nav-label",
                    "RECEPCIÓN DE PEDIDOS"
                ),
                m("div.mg-t-10.bg-white", {

                },

                    m("div.mg-t-10.bg-white",
                        m("div.card-header.pd-t-20.pd-b-0.bd-b-0", [
                            m("h6.lh-5.mg-b-5",
                                "N° de Pedidos:"
                            ),

                        ]),
                        m("div.card-body.pd-0", [
                            m("div.pd-t-10.pd-b-0.pd-x-20.d-flex.align-items-baseline", [
                                m("h1.tx-normal.tx-rubik.mg-b-0.mg-r-5",
                                    Pedidos.pedidos.length
                                ),
                                m("div.tx-18", [

                                    m("divv.lh-0.tx-gray-300", 'Pedido(s)')
                                ])

                            ]),

                        ])
                    ),
                    m("div.pd-20",
                        m(Stopwatch)
                    )
                ),

            ])

        ] : !Pedidos.loader && Pedidos.pedidos.length == 0 ? [
            m(sidebarLab, { oncreate: sidebarLab.setPage(1) }),
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
                            m(m.route.Link, { href: "/laboratorio" }, [
                                " Laboratorio "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Recepción de Pedidos"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Recepción de Pedidos:"
                    ),
                    m("div.row.animated.fadeInUp", [

                        m("div.col-12", [

                            m(".alert.alert-danger[role='alert']",
                                "No existe información disponible."
                            )


                        ])
                    ]),






                ])
            ),
        ] : [
            m(sidebarLab, { oncreate: sidebarLab.setPage(1) }),
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
                            m(m.route.Link, { href: "/laboratorio" }, [
                                " Laboratorio "
                            ])

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Recepción de Pedidos"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Recepción de Pedidos:"
                    ),
                    m("div.row.animated.fadeInUp", [

                        m("div.col-12", [

                            m("p", " Error interno."

                            ),


                        ])
                    ]),






                ])
            ),
        ];


    },

};


export default Pedidos;