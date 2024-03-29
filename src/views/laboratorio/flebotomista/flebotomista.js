import SidebarLab from '../sidebarLab';
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

        if (Flebotomista.searchField.length == 0) {
            model.seconds--;
            if (model.seconds == 0) {
                model.seconds = 100;
                // Flebotomista.reloadData();
            }
            m.redraw();
        }

    },

    start(model) {
        model.interval = setInterval(actions.increment, 1000, model);
    },
    stop(model) {
        model.interval = clearInterval(model.interval);
    },
    reset(model) {
        model.seconds = 30;
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

const tableFlebotomista = {
    oncreate: () => {

        if (Flebotomista.idFiltro == 4 || Flebotomista.idFiltro == 5) {
            Flebotomista.loadFlebotomistaCE();
            if (Flebotomista.searchField.length !== 0) {
                var table = $('#table-flebotomista').DataTable();
                table.search(Flebotomista.searchField).draw();
            }
        } else {
            Flebotomista.loadFlebotomista();
            if (Flebotomista.searchField.length !== 0) {
                var table = $('#table-flebotomista').DataTable();
                table.search(Flebotomista.searchField).draw();
            }
        }



    },

    view: () => {
        return m("div.row.animated.fadeInUp", {}, [

            m("div.col-12", [

                m("div.col-4.offset-7.d-flex.tx-14", [
                    m('.', {
                        class: (Flebotomista.idFiltro == 1 ? 'd-none' : 'd-flex')
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
                                    el.dom.value = (Flebotomista.idFiltro !== 1 ? moment(moment(Flebotomista.fechaDesde, 'DD-MM-YYYY')).format('YYYY-MM-DD') : '');
                                },
                                onchange: (el) => {
                                    Flebotomista.fechaDesde = moment(moment(el.target.value, 'YYYY-MM-DD')).format('DD-MM-YYYY');
                                    Flebotomista.loader = true;
                                    Flebotomista.pedidos = [];
                                    Flebotomista.fetchPedidos();
                                    m.route.set("/laboratorio/flebotomista/?idFiltro=" + Flebotomista.idFiltro + "&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta);
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
                                    el.dom.value = (Flebotomista.idFiltro !== 1 ? moment(moment(Flebotomista.fechaHasta, 'DD-MM-YYYY')).format('YYYY-MM-DD') : '');
                                },
                                onchange: (el) => {
                                    Flebotomista.fechaHasta = moment(moment(el.target.value, 'YYYY-MM-DD')).format('DD-MM-YYYY');
                                    Flebotomista.loader = true;
                                    Flebotomista.pedidos = [];
                                    Flebotomista.fetchPedidos();
                                    m.route.set("/laboratorio/flebotomista/?idFiltro=" + Flebotomista.idFiltro + "&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta);
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
                            m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/flebotomista/?idFiltro=1" }, [
                                "Pedidos de Hoy"
                            ]),
                            m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/flebotomista/?idFiltro=2&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta }, [
                                "Pedidos de Emergencia"
                            ]),
                            m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/flebotomista/?idFiltro=3&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta }, [
                                "Pedidos de Hospitalización"
                            ]),
                            m(m.route.Link, { class: 'dropdown-item', href: "/laboratorio/flebotomista/?idFiltro=4&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta }, [
                                "Pedidos de C. Externa"
                            ]),
                            m(m.route.Link, { class: 'dropdown-item tx-danger', href: "/laboratorio/flebotomista/?idFiltro=5&fechaDesde=" + Flebotomista.fechaDesde + "&fechaHasta=" + Flebotomista.fechaHasta }, [
                                "C. Externa Pendientes"
                            ]),

                        ])
                    ])
                ]),
                m("div.table-content.col-12.pd-r-0.pd-l-0.pd-b-20.", [

                    m("div.d-flex.align-items-center.justify-content-between.mg-b-80.mg-t-10", [
                        m("h5.mg-b-0.tx-20",
                            "LISA:",
                            m("span.badge.tx-semibold.pd-l-10.pd-r-10.mg-l-5.tx-20", {
                                    class: (Flebotomista.idFiltro == 5 ? 'badge-danger' : 'badge-primary'),
                                    oncreate: (el) => {
                                        if (Flebotomista.idFiltro == 1) {
                                            el.dom.innerHTML = 'Pedidos de Hoy';
                                        }
                                        if (Flebotomista.idFiltro == 2) {
                                            el.dom.innerHTML = 'Pedidos de Emergencia';
                                        }
                                        if (Flebotomista.idFiltro == 3) {
                                            el.dom.innerHTML = 'Pedidos de Hospitalización';
                                        }
                                        if (Flebotomista.idFiltro == 4) {
                                            el.dom.innerHTML = 'Pedidos de C. Externa';
                                        }
                                        if (Flebotomista.idFiltro == 5) {
                                            el.dom.innerHTML = 'Pedidos de C. Externa - Pendientes';
                                        }

                                    },
                                    onupdate: (el) => {
                                        if (Flebotomista.idFiltro == 1) {
                                            el.dom.innerHTML = 'Pedidos de Hoy';
                                        }
                                        if (Flebotomista.idFiltro == 2) {
                                            el.dom.innerHTML = 'Pedidos de Emergencia';
                                        }
                                        if (Flebotomista.idFiltro == 3) {
                                            el.dom.innerHTML = 'Pedidos de Hospitalización';
                                        }
                                        if (Flebotomista.idFiltro == 4) {
                                            el.dom.innerHTML = 'Pedidos de C. Externa';
                                        }
                                        if (Flebotomista.idFiltro == 5) {
                                            el.dom.innerHTML = 'Pedidos de C. Externa - Pendientes';
                                        }
                                    }
                                }

                            ),
                            m("span.badge.badge-primary.tx-semibold.pd-l-10.pd-r-10.mg-l-5.tx-20",
                                m("div.tx-white.tx-semibold", {
                                    oncreate: (e) => {
                                        if (localStorage.getItem("peerId") !== undefined) {
                                            Flebotomista.idToma = localStorage.getItem("peerId");
                                        }

                                    },

                                }, [
                                    Flebotomista.idToma
                                ])
                            ),


                        ),

                        m("span.badge.badge-primary.tx-semibold.pd-l-10.pd-r-10.mg-l-5.tx-20",
                            m(
                                "div.wd-60.tx-center", {
                                    class: "pd-10",
                                    onclick: () => {
                                        m.route.set('/laboratorio/flebotomista/inicio');
                                    }

                                },
                                m("i", { class: "fas fa-home tx-30 tx-white" })
                            ),
                        ),




                    ]),



                    m("div.col-sm-12.filemgr-content-header", {
                        class: (Flebotomista.idFiltro == 1 ? "mg-t-35" : "mg-t-40")
                    }, [
                        m("i[data-feather='search']"),
                        m("div.search-form",
                            m("input.form-control[type='search'][placeholder='Buscar'][id='searchField']", {

                                oninput: function(e) { Flebotomista.searchField = e.target.value; },
                                value: Flebotomista.searchField,
                            })
                        ),

                    ]),


                    m("table.table.table-sm.tx-11[id='table-flebotomista'][width='100%']"),


                ])
            ])
        ]);
    }
};

const Flebotomista = {
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
    toma: "",
    atencion: "",
    listaAtenciones: [],
    idToma: '',
    oninit: (_data) => {

        SidebarLab.page = "";

        if (Flebotomista.pedidos.length == 0) {

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



            Flebotomista.fechaDesde = moment().subtract(1, 'days').format('DD-MM-YYYY');
            Flebotomista.fechaHasta = moment().format('DD-MM-YYYY');
            Flebotomista.loader = true;
            Flebotomista.pedidos = [];
            Flebotomista.fetchPedidos();

        }

    },
    oncreate: (_data) => {
        Notificaciones.suscribirCanal('MetroPlus-LisaPedidos');
    },
    getContador: (_at_mv, _sc) => {
        Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
            if (_at_mv == _v.atencion && _sc == _v.sc) {
                return Flebotomista.listaAtenciones[_i].nro;
            } else {
                return Flebotomista.listaAtenciones[_i].nro;

            }
        });
    },
    buscarListaAtenciones: (_at_mv, _sc) => {

        try {

            let existeSC = false;
            Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                if (_sc == _v.sc) {
                    existeSC = true;
                }
            });

            let existeAtencion = false;
            Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                if (_at_mv == _v.atencion) {
                    existeAtencion = true;
                }
            });

            if (existeAtencion && !existeSC) {

                let _totalPedidos = 0;
                Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                    if (_at_mv == _v.atencion) {
                        _totalPedidos = (_totalPedidos + 1)
                    }
                });

                Flebotomista.listaAtenciones.push({
                    atencion: _at_mv,
                    sc: _sc,
                    nro: 1,
                    pedidos: _totalPedidos
                });

                Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                    if (_at_mv == _v.atencion && _sc == _v.sc) {
                        Flebotomista.listaAtenciones[_i].nro = (_totalPedidos + 1);
                    }
                });


                let _totalPedidos_ = 0;
                Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                    if (_at_mv == _v.atencion) {
                        _totalPedidos_ = (_totalPedidos_ + 1)
                    }
                });

                Flebotomista.listaAtenciones.map(function(_v, _i, _contentData) {
                    if (_at_mv == _v.atencion) {
                        Flebotomista.listaAtenciones[_i].pedidos = _totalPedidos_;
                    }
                });


            } else {

                Flebotomista.listaAtenciones.push({
                    atencion: _at_mv,
                    sc: _sc,
                    nro: 1,
                    pedidos: 1
                });

            }


        } catch (error) {

            console.log(error)

        }



    },
    loadFlebotomista: () => {

        $.fn.dataTable.ext.errMode = "none";
        var table = $("#table-flebotomista").DataTable({
            data: Flebotomista.pedidos,
            dom: 'ltp',
            responsive: true,
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
            order: [
                [0, "Desc"]
            ],
            destroy: true,
            columns: [{
                    title: "N°:",
                },
                {
                    title: "Fecha:",
                },
                {
                    title: "SC:",
                },
                {
                    title: "Paciente:",
                },
                {
                    title: "Médico:",
                },
                {
                    title: "Opciones:",
                },


            ],
            aoColumnDefs: [{
                    mRender: function(data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                    },
                    visible: true,
                    aTargets: [0],
                    orderable: true,
                },
                {
                    mRender: function(data, type, full) {
                        return full.fechaPedido;
                    },
                    visible: true,
                    aTargets: [1],
                    orderable: false,

                },
                {
                    mRender: function(data, type, full) {
                        return full.codigoPedido;
                    },
                    visible: true,
                    aTargets: [2],
                    orderable: false,
                },
                {
                    mRender: function(data, type, full) {
                        return full.paciente;
                    },
                    visible: true,
                    aTargets: [3],
                    orderable: false,
                }, {
                    mRender: function(data, type, full) {
                        return full.descPrestadorSolicitante;

                    },
                    visible: true,
                    aTargets: [4],
                    orderable: false,
                },
                {
                    mRender: function(data, type, full) {
                        return 'OPCIONES';

                    },
                    visible: true,
                    aTargets: [5],
                    orderable: false,
                },


            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {

                m.mount(nRow, {
                    view: () => {
                        return [
                            m("td", {
                                class: (aData.tipoPedido == 'R' ? 'bg-primary' : 'bg-danger')
                            }, [

                                (aData.tipoPedido == 'R' ? m("span.badge.badge-pill.badge-primary.wd-100p.mg-b-1",
                                    'R'
                                ) : m("span.badge.badge-pill.badge-danger.wd-100p.mg-b-1",
                                    'U'
                                ))


                            ]),
                            m("td", { "style": {} },
                                aData.fechaPedido
                            ),
                            m("td", { "style": {} },
                                m("span.tx-semibold.tx-dark.tx-15.wd-100p.mg-b-1",
                                    aData.codigoPedido
                                ),
                            ),
                            m("td", { "style": {} }, [
                                    m('.d-inline.mg-r-5', {
                                        class: (aData.sector == 'EMERGENCIA' ? "tx-danger" : "tx-primary")
                                    }, aData.sector),
                                    m('br'),
                                    aData.paciente,
                                ]

                            ),
                            m("td", { "style": {} },
                                aData.descPrestadorSolicitante

                            ),


                            (aData.tipoOperacion == 'I' ? [m("td.tx-white.tx-semibold.tx-center", {
                                    title: 'Status Toma de Muestras',
                                    style: { "background-color": (aData.muestrasProcesadas == 0 ? "#ffc107" : "#0d9448") }
                                },
                                (aData.muestrasProcesadas == 0 ? "Muestras Pendientes" : "Muestras Completo")
                            ), ] : [""]),


                            m("td.tx-center", {
                                    onclick: () => {
                                        m.route.set("/laboratorio/flebotomista/pedido/", {
                                            numeroHistoriaClinica: aData.numeroHistoriaClinica,
                                            numeroAtencion: aData.at_mv,
                                            numeroPedido: aData.codigoPedido,
                                            idTimeRecord: aData.idTimeRecord,
                                            track: "view",
                                        });
                                    },
                                    "style": { "background-color": "rgb(168, 190, 214)", "cursor": "pointer" }
                                },
                                " Ver Pedido "

                            )





                        ];
                    },
                });
            },
            drawCallback: function(settings) {

                Flebotomista.loader = false;


            },
        });

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#searchField').keyup(function(e) {

            table.search($('#searchField').val()).draw();
        });

        return table;
    },
    loadFlebotomistaCE: () => {

        $.fn.dataTable.ext.errMode = "none";
        var table = $("#table-flebotomista").DataTable({
            data: Flebotomista.pedidos,
            dom: 'ltp',
            responsive: true,
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
            pageLength: 100,
            destroy: true,
            columns: [{
                    title: "",
                },
                {
                    title: "Fecha:",
                },
                {
                    title: "SC:",
                },
                {
                    title: "Paciente:",
                },
                {
                    title: "Timbrar:",
                },
                {
                    title: "Ver Pedido:",
                },


            ],
            aoColumnDefs: [{
                    mRender: function(data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                    },
                    visible: true,
                    aTargets: [0],
                    orderable: false,
                    width: '0.5%'
                },
                {
                    mRender: function(data, type, full) {
                        return moment(full.fechaPedido, 'DD-MM-YYYY HH:mm:ss').unix();
                    },
                    visible: true,
                    aTargets: [1],
                    orderable: false,

                },
                {
                    mRender: function(data, type, full) {
                        return full.codigoPedido;
                    },
                    visible: true,
                    aTargets: [2],
                    orderable: false,
                },
                {
                    mRender: function(data, type, full) {
                        return full.paciente;
                    },
                    visible: true,
                    aTargets: [3],
                    orderable: false,
                    width: '50%'
                }, {
                    mRender: function(data, type, full) {
                        return full.descPrestadorSolicitante;

                    },
                    visible: true,
                    aTargets: [4],
                    orderable: false,
                    width: '5%'

                },
                {
                    mRender: function(data, type, full) {
                        return 'OPCIONES';

                    },
                    visible: true,
                    aTargets: [5],
                    orderable: false,
                    width: '5%'

                },


            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {

                Flebotomista.buscarListaAtenciones(aData.cdAtendimento, aData.codigoPedido);

                m.mount(nRow, {
                    view: () => {
                        return [
                            m("td", {
                                class: 'bg-primary'
                            }, [

                                m("span.badge.badge-pill.badge-primary.wd-100p.mg-b-1",
                                    'R'
                                )

                            ]),
                            m("td.tx-semibold", { "style": {} },
                                aData.fechaPedido
                            ),
                            m("td", { "style": {} },
                                m("span.tx-semibold.tx-dark.tx-18.wd-100p.mg-b-1",



                                    m('.d-inline.tx-14.tx-semibold.tx-danger', {}, [
                                        m('i.fas.fa-file.mg-r-5.tx-12'),
                                        (Flebotomista.listaAtenciones[iDisplayIndexFull].nro !== undefined ? Flebotomista.listaAtenciones[iDisplayIndexFull].nro + ' de ' + Flebotomista.listaAtenciones[iDisplayIndexFull].pedidos : '')

                                    ]),
                                    m('br'),
                                    'SC: ' +
                                    aData.codigoPedido,
                                ),
                            ),
                            m("td", { "style": {} }, [
                                    m('.d-inline.mg-r-5', {
                                        class: (aData.sector == 'EMERGENCIA' ? "tx-danger" : "tx-primary")
                                    }, aData.sector),

                                    m('br'),

                                    m('.d-inline.tx-18.tx-semibold', {}, [
                                        'AT: MV:' + Flebotomista.listaAtenciones[iDisplayIndexFull].atencion
                                    ]),
                                    m('br'),

                                    m('.d-inline.tx-18.tx-semibold', {}, 'PTE: ' + aData.paciente),
                                ]

                            ),

                            m("td.tx-center", {
                                    class: (aData.callToma == 0 ? 'bg-warning' : 'bg-success'),
                                    "style": { "cursor": "pointer" },
                                    onclick: () => {
                                        Flebotomista.atencion = aData.cdAtendimento;
                                        Flebotomista.callToma(aData.cdAtendimento);
                                    }
                                }, [

                                    m(".btn[type='button']", {
                                            class: (aData.callToma == 0 ? 'bg-warning' : 'bg-success'),
                                        },
                                        m('i.fas.fa-bell.tx-22'),
                                        m('div.tx-12.tx-semibold', 'Llamar'),
                                        m('div.d-inline.tx-12.tx-semibold.tx-danger', (Flebotomista.atencion == aData.cdAtendimento ? Flebotomista.toma : '')),
                                    )
                                ]

                            ),

                            m("td.tx-center.bg-primary", {
                                    "style": { "cursor": "pointer" }
                                }, [

                                    m(m.route.Link, {
                                        class: 'tx-18',
                                        href: "/laboratorio/flebotomista/pedido/",
                                        target: '_blank',
                                        params: {
                                            numeroHistoriaClinica: aData.numeroHistoriaClinica,
                                            numeroAtencion: aData.at_mv,
                                            numeroPedido: aData.codigoPedido,
                                            idTimeRecord: aData.idTimeRecord,
                                            track: "view",
                                        }
                                    }, [
                                        m(".btn.bg-primary.tx-white[type='button']",
                                            m('i.fas.fa-folder-open.tx-white'),
                                            m('div.tx-12.tx-semibold.tx-white', 'Ver'),

                                        )
                                    ])
                                ]

                            )





                        ];
                    },
                });
            },
            drawCallback: function(settings) {

                Flebotomista.loader = false;


            },
        });

        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity
        });

        $('#searchField').keyup(function(e) {

            table.search($('#searchField').val()).draw();
        });

        return table;
    },
    fetchPedidos: () => {

        let _queryString = '';

        if (Flebotomista.idFiltro == 1) {
            _queryString = '?type=ingresadasFlebotomia&idFiltro=' + Flebotomista.idFiltro;
        } else {
            _queryString = '?type=ingresadasFlebotomia&idFiltro=' + Flebotomista.idFiltro + '&fechaDesde=' + Flebotomista.fechaDesde + '&fechaHasta=' + Flebotomista.fechaHasta;
        }

        m.request({
                method: "GET",
                url: "https://lisa.hospitalmetropolitano.org/v1/listar" + _queryString,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then(function(result) {
                Flebotomista.loader = false;
                Flebotomista.pedidos = result.data;

            })
            .catch(function(e) {
                setTimeout(function() { Flebotomista.fetchPedidos(); }, 2000);
            });


    },
    reproesarMensajeXML: (codigoPedido, idTimeRecord) => {

        Flebotomista.loader = true;


        m.request({
                method: "GET",
                url: "https://lisa.hospitalmetropolitano.org/v1/pedidos/send-pedido?sc=" + codigoPedido + "&idTimeRecord=" + idTimeRecord,
                extract: function(xhr) { return { status: xhr.status, body: xhr.responseText } },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then(function(response) {


                if (response.status == 200) {
                    alert('Preceso realizado con éxito.')
                    setTimeout(function() { window.location.reload(); }, 300);
                } else {
                    alert('Error en envío de este mensaje. Reintente nuevamente.');

                }


            })
            .catch(function(e) {
                alert('Error en envío de este mensaje. Reintente nuevamente.');
            });


    },
    callToma: (atencion) => {

        Flebotomista.toma = 'Procesando...';

        m.request({
                method: "POST",
                url: "https://lisa.hospitalmetropolitano.org/v1/procesos/call-toma",
                body: {
                    atencion: atencion,
                    idToma: Flebotomista.idToma
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then(function(response) {
                if (response.status) {
                    Flebotomista.toma = 'Llamada Lista';
                    Flebotomista.reloadData();
                    setTimeout(function() {
                        Flebotomista.atencion = '';
                        Flebotomista.toma = '';
                    }, 4000);
                    alert('Preceso realizado con éxito.');
                } else {
                    alert('Error. No pudimos llamar al paciente. Intente nuevamente.')
                }




            })
            .catch(function(e) {
                alert('Error: ' + e);
            });
    },
    reloadData: () => {
        var table = $('#table-flebotomista').DataTable();
        table.clear();
        Flebotomista.listaAtenciones = [];
        Flebotomista.fetchPedidos();
        table.rows.add(Flebotomista.pedidos).draw();
    },
    view: (_data) => {

        return Flebotomista.loader ? [
            m(SidebarLab, { oncreate: SidebarLab.setPage(16) }),
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
                            "Pedidos Ingresados"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Pedidos Ingresados:"
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

        ] : Flebotomista.error.length !== 0 ? [
            m(SidebarLab, { oncreate: SidebarLab.setPage(16) }),
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
                            "Pedidos Ingresados"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Pedidos Ingresados:"
                    ),
                    m("div.row.animated.fadeInUp", [

                        m('p', 'No existe información.')
                    ]),





                ])
            ),

        ] : !Flebotomista.loader && Flebotomista.pedidos.length !== 0 ? [
            m(SidebarLab, { oncreate: SidebarLab.setPage(16) }),
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
                            "Pedidos Ingresados"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Pedidos Ingresados:"
                    ),
                    m(tableFlebotomista)





                ])
            ),
            m("div.section-nav", [
                m("label.nav-label",
                    "Pedidos Ingresados"
                ),
                m("div.mg-t-10.bg-white", {

                    },

                    m("div.mg-t-10.bg-white",
                        m("div.card-header.pd-t-20.pd-b-0.bd-b-0", [
                            m("h6.lh-5.mg-b-5",
                                "Pedidos Ingresados:"
                            ),

                        ]),
                        m("div.card-body.pd-0", [
                            m("div.pd-t-10.pd-b-0.pd-x-20.d-flex.align-items-baseline", [
                                m("h1.tx-normal.tx-rubik.mg-b-0.mg-r-5",
                                    Flebotomista.pedidos.length
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

        ] : !Flebotomista.loader && Flebotomista.pedidos.length == 0 ? [
            m(SidebarLab, { oncreate: SidebarLab.setPage(16) }),
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
                            "Pedidos Ingresados"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Pedidos Ingresados:"
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
            m(SidebarLab, { oncreate: SidebarLab.setPage(16) }),
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
                            "Pedidos Ingresados"
                        ),

                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Pedidos Ingresados:"
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


export default Flebotomista;