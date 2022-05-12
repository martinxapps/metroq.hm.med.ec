import SidebarRight from './sidebarRight';

const HeaderPrivate = {
    page: "",

    setPage: (page) => {
        HeaderPrivate.page = page;
    },
    view: () => {
        return [
            m("header.navbar.navbar-header.navbar-header-fixed", [
                m("a.burger-menu[href=''][id='sidebarMenuOpen']",
                    m("i[data-feather='arrow-left']")
                ),
                m("div.navbar-brand",
                    m("a.df-logo", { href: "/" }, [
                        "Metro",
                        m("span",
                            "Virtual"
                        )
                    ])
                ),
                m(".navbar-menu-wrapper[id='navbarMenu']", [
                    m("div.navbar-menu-header", [
                        m("a.df-logo", { href: "/" }, [
                            "Metro",
                            m("span",
                                "Virtual"
                            )
                        ]),
                        m("a[id='mainMenuClose'][href='']",
                            m("i[data-feather='x']")
                        )
                    ]),
                    m("ul.nav.navbar-menu", [
                        m("li.nav-label.pd-l-20.pd-lg-l-25.d-lg-none",
                            "Menu"
                        ),
                        m("li.nav-item." + ((HeaderPrivate.page == "laboratorio") ? "active" : ""),
                            m("a.nav-link", { href: "#!/laboratorio" }, [
                                m("i[data-feather='layout']"),
                                " Laboratorio "
                            ])
                        ),
                        m("li.nav-item",
                            m("a.nav-link", { href: "#!/configuracion" }, [
                                m("i[data-feather='layout']"),
                                " Configuración "
                            ])
                        )
                    ])
                ]),
                m(SidebarRight)
            ]),

        ];
    },
};




export default HeaderPrivate;