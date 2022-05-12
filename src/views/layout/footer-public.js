const FooterPublic = {
    view: () => {
        return [

            m("footer.footer", [
                m("div", [
                    m("span", [
                        m.trust("&copy;"),
                        new Date().getFullYear() + "  MetroQ v1.0.0. "
                    ]),
                    m("span", [
                        "Created by ",
                        m("a[href='https://www.hospitalmetropolitano.org']",
                            "Hospital Metropolitano"
                        )
                    ])
                ]),
                m("div",
                    m("nav.nav", [

                        m("a.nav-link", { href: "#!/ayuda" },
                            "Ayuda"
                        )
                    ])
                )
            ])


        ];
    },

};

export default FooterPublic;