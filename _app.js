"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const NextI18Next = (__webpack_require__(1377)["default"]);
module.exports = new NextI18Next({
    defaultLanguage: "en-CA",
    otherLanguages: [
        "fr-CA"
    ],
    defaultNS: "common",
    localeSubpaths: {
        "fr-CA": "fr"
    },
    //for static translation
    localePath: "public/static/locales"
});


/***/ }),

/***/ 7947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ customTheme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/main/utils/customTheme.ts


const customTheme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#80cbc4",
            contrastText: "#fff"
        },
        secondary: {
            main: "#D4F1F4",
            contrastText: "#000"
        },
        neutral: {
            main: "#64748B",
            contrastText: "#fff"
        },
        footer: {
            main: "#000",
            contrastText: "#fff"
        }
    },
    status: {
        danger: colors_namespaceObject.orange[500]
    }
});



/***/ }),

/***/ 7112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/MailOutline"
var MailOutline_ = __webpack_require__(5974);
var MailOutline_default = /*#__PURE__*/__webpack_require__.n(MailOutline_);
;// CONCATENATED MODULE: external "@mui/icons-material/PhoneAndroid"
const PhoneAndroid_namespaceObject = require("@mui/icons-material/PhoneAndroid");
var PhoneAndroid_default = /*#__PURE__*/__webpack_require__.n(PhoneAndroid_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Copyright"
const Copyright_namespaceObject = require("@mui/icons-material/Copyright");
var Copyright_default = /*#__PURE__*/__webpack_require__.n(Copyright_namespaceObject);
// EXTERNAL MODULE: ./src/main/utils/customTheme.ts + 1 modules
var customTheme = __webpack_require__(7947);
;// CONCATENATED MODULE: ./src/app/blog/presentation/view/components/footer.tsx











function Footer() {
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            pl: 10,
            pr: 10,
            m: 1,
            bgcolor: customTheme/* customTheme.palette.footer.main */.v.palette.footer.main,
            color: customTheme/* customTheme.palette.footer.contrastText */.v.palette.footer.contrastText,
            borderRadius: 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            margin: "auto",
                            padding: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "body2",
                            component: "div",
                            align: "left",
                            gutterBottom: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Copyright_default()), {}),
                                "  2022 LoadStar | All right reserved"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            margin: "auto",
                            padding: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "body2",
                            component: "div",
                            align: "left",
                            gutterBottom: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((PhoneAndroid_default()), {}),
                                "  (+1) 818 751 7877"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            margin: "auto",
                            padding: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "body2",
                            component: "div",
                            align: "left",
                            gutterBottom: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((MailOutline_default()), {}),
                                "  info@loadstartech.com"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            margin: "auto",
                            padding: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            variant: "body2",
                            component: "div",
                            align: "left",
                            gutterBottom: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {}),
                                "  ON, Canada"
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./src/app/blog/data/redux/articleActionTypes.ts
const GET_ARTICLES = "GET_ARTICLES";
const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
const GET_ARTICLES_ByCategory = "GET_ARTICLES_ByCategory";
const GET_ARTICLES_ByCategory_SUCCESS = "GET_ARTICLES_ByCategory_SUCCESS";
const GET_ARTICLE_DETAILS = "GET_ARTICLE_DETAILS";
const GET_ARTICLE_DETAILS_SUCCESS = "GET_ARTICLE_DETAILS_SUCCESS";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/articleReducer.ts

const INITIAL_STATE = {
    articles: undefined,
    article: undefined,
    categoryArticles: undefined,
    isLoadingArticles: false,
    isLoadingSingleArticle: false,
    isLoadingArticlesByCategory: false
};
const articleReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_ARTICLES:
            return {
                ...state,
                isLoadingArticles: true
            };
        case GET_ARTICLE_DETAILS:
            return {
                ...state,
                isLoadingSingleArticle: true
            };
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                isLoadingArticles: false,
                articles: action.articles
            };
        case GET_ARTICLE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoadingSingleArticle: false,
                article: action.article
            };
        case GET_ARTICLES_ByCategory:
            return {
                ...state,
                isLoadingArticlesByCategory: true
            };
        case GET_ARTICLES_ByCategory_SUCCESS:
            return {
                ...state,
                isLoadingArticlesByCategory: false,
                categoryArticles: action.articles
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/app/blog/data/redux/category/categoryActionTypes.ts
const GET_CATEGORIES = "GET_CATEGORIES";
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/category/categoryReducer.ts

const categoryReducer_INITIAL_STATE = {
    categories: undefined,
    isLoadingCategories: false
};
const categoryReducer = (state = categoryReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                isLoadingCategories: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoadingCategories: false,
                categories: action.categories
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/app/blog/data/redux/page/pageActionTypes.ts
const GET_PAGE = "GET_PAGE";
const GET_PAGE_SUCCESS = "GET_PAGE_SUCCESS";
const RESET_PAGE = "RESET_PAGE";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/page/pageReducer.ts

const pageReducer_INITIAL_STATE = {
    page: undefined,
    isLoadingPage: false
};
const pageReducer = (state = pageReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case RESET_PAGE:
            return {
                ...state,
                isLoadingPage: true,
                page: undefined
            };
        case GET_PAGE:
            return {
                ...state,
                isLoadingPage: true
            };
        case GET_PAGE_SUCCESS:
            return {
                ...state,
                isLoadingPage: false,
                page: action.page
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/app/blog/data/redux/service/serviceActionTypes.ts
const GET_SERVICES = "GET_SERVICES";
const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
const GET_SERVICE_DETAILS = "GET_SERVICE_DETAILS";
const GET_SERVICE_DETAILS_SUCCESS = "GET_SERVICE_DETAILS_SUCCESS";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/service/serviceReducer.ts

const serviceReducer_INITIAL_STATE = {
    services: undefined,
    service: undefined,
    isLoadingServices: false,
    isLoadingSingleService: false
};
const serviceReducer = (state = serviceReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_SERVICES:
            return {
                ...state,
                isLoadingServices: true
            };
        case GET_SERVICE_DETAILS:
            return {
                ...state,
                isLoadingSingleService: true
            };
        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                isLoadingServices: false,
                services: action.services
            };
        case GET_SERVICE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoadingSingleService: false,
                service: action.service
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/app/blog/data/redux/project/projectActionTypes.ts
const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
const GET_PROJECT_DETAILS = "GET_PROJECT_DETAILS";
const GET_PROJECT_DETAILS_SUCCESS = "GET_PROJECT_DETAILS_SUCCESS";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/project/projectReducer.ts

const projectReducer_INITIAL_STATE = {
    projects: undefined,
    project: undefined,
    isLoadingProjects: false,
    isLoadingSingleProject: false
};
const projectReducer = (state = projectReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                isLoadingProjects: true
            };
        case GET_PROJECT_DETAILS:
            return {
                ...state,
                isLoadingSingleProject: true
            };
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoadingProjects: false,
                projects: action.projects
            };
        case GET_PROJECT_DETAILS_SUCCESS:
            return {
                ...state,
                isLoadingSingleProject: false,
                project: action.project
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/app/blog/data/redux/menu/menuActionTypes.ts
const GET_MENUS = "GET_MENUS";
const GET_MENUS_SUCCESS = "GET_MENUS_SUCCESS";

;// CONCATENATED MODULE: ./src/app/blog/data/redux/menu/menuReducer.ts

const menuReducer_INITIAL_STATE = {
    menu: undefined,
    isLoadingMenus: false
};
const menuReducer = (state = menuReducer_INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_MENUS:
            return {
                ...state,
                isLoadingMenus: true
            };
        case GET_MENUS_SUCCESS:
            return {
                ...state,
                isLoadingMenus: false,
                menu: action.menus.data
            };
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/main/data/appStoreImplementation.ts








const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    articles: articleReducer,
    categories: categoryReducer,
    page: pageReducer,
    services: serviceReducer,
    projects: projectReducer,
    menus: menuReducer
});
const appStoreImplementation = (0,external_redux_namespaceObject.createStore)(rootReducer, (0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));


;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(3192);
;// CONCATENATED MODULE: external "@mui/material/MenuList"
const MenuList_namespaceObject = require("@mui/material/MenuList");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./src/main/utils/customStyle.ts
var customStyle = __webpack_require__(6602);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/app/blog/data/prebuild/data.json
const data_namespaceObject = JSON.parse('[{"id":1,"attributes":{"createdAt":"2022-06-15T21:53:14.013Z","updatedAt":"2022-06-16T22:53:14.826Z","publishedAt":"2022-06-15T21:53:23.297Z","locale":"en-CA","title":"MainMenu","menu":[{"id":1,"__component":"page.menu","Menu":[{"id":1,"order":0,"title":"Home","url":"/","target":null},{"id":2,"order":1,"title":"About","url":"/about","target":null},{"id":4,"order":2,"title":"Portfolio","url":"/portfolio","target":null},{"id":3,"order":3,"title":"Lab","url":"/lab","target":null}]}]}},{"id":4,"attributes":{"createdAt":"2022-06-16T22:53:14.794Z","updatedAt":"2022-06-17T03:48:17.081Z","publishedAt":"2022-06-16T22:53:17.711Z","locale":"fr-CA","title":"MainMenu","menu":[{"id":2,"__component":"page.menu","Menu":[{"id":5,"order":0,"title":"Accueil","url":"/","target":null},{"id":6,"order":1,"title":"A propos","url":"/about","target":null},{"id":8,"order":2,"title":"Portfolio","url":"/portfolio","target":null},{"id":7,"order":3,"title":"Lab","url":"/lab","target":null}]}]}}]');
;// CONCATENATED MODULE: external "@emotion/styled"
const styled_namespaceObject = require("@emotion/styled");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
;// CONCATENATED MODULE: ./src/app/blog/presentation/view/components/LanguageSwitcher.tsx






const LanguageSwitcher = ()=>{
    const { i18n: { language  }  } = (0,external_react_.useContext)(external_next_i18next_.I18nContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LanguageSwitcherStyled, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: ()=>i18n.i18n.changeLanguage("fr-CA"),
                className: language === "fr-CA" ? "is-active" : "",
                children: "FR"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: ()=>i18n.i18n.changeLanguage("en-CA"),
                className: language === "en-CA" ? "is-active" : "",
                children: "EN"
            })
        ]
    });
};
const LanguageSwitcherStyled = (styled_default()).div`
    button.is-active {
        background: #000;
        color: #fff;
    }
`;
/* harmony default export */ const components_LanguageSwitcher = (LanguageSwitcher);

;// CONCATENATED MODULE: ./src/app/blog/presentation/view/components/HeaderLayout.tsx














function HeaderLayout(props) {
    const { i18n: { language  }  } = (0,external_react_.useContext)(external_next_i18next_.I18nContext);
    const menu = data_namespaceObject.filter(function(item) {
        return item.attributes.locale == language;
    });
    (0,external_react_.useEffect)(()=>{
        const setResponsiveness = ()=>{
            return window.innerWidth < 900 ? setState((prevState)=>({
                    ...prevState,
                    mobileView: true
                })) : setState((prevState)=>({
                    ...prevState,
                    mobileView: false
                }));
        };
        setResponsiveness();
        window.addEventListener("resize", ()=>setResponsiveness());
        return ()=>{
            window.removeEventListener("resize", ()=>setResponsiveness());
        };
    }, []);
    //Mobile logic
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView  } = state;
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { 0: placement , 1: setPlacement  } = (0,external_react_.useState)();
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const anchorRef = (0,external_react_.useRef)(null);
    const { drawerOpen  } = state;
    const handleClose = (event)=>{
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = (0,external_react_.useRef)(open);
    (0,external_react_.useEffect)(()=>{
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [
        open
    ]);
    const handleDrawerOpen = ()=>setState((prevState)=>({
                ...prevState,
                drawerOpen: true
            }));
    const handleDrawerClose = ()=>setState((prevState)=>({
                ...prevState,
                drawerOpen: false
            }));
    const handleClick = (newPlacement)=>(event)=>{
            setAnchorEl(event.currentTarget);
            setOpen((prev)=>placement !== newPlacement || !prev);
            setPlacement(newPlacement);
        };
    const displayDesktop = (menu)=>{
        const imageUrl = "/logo-236x100.png";
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    height: 100
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            padding: 1,
                            width: "20%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(customStyle/* StyledLogo */.ps, {
                            src: imageUrl,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            display: "flex",
                            width: "60%"
                        },
                        children: menu == undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Loading menus"
                        }) : menu != undefined && menu[0].attributes.menu[0].Menu.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(i18n.Link, {
                                    href: item.url,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            minWidth: 100
                                        },
                                        children: item.title
                                    })
                                }, item.title)
                            }, item.title);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            display: "flex",
                            alignSelf: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                alignSelf: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_LanguageSwitcher, {})
                        })
                    })
                ]
            })
        });
    };
    const displayMobile = (menu)=>{
        const imageUrl = "/logo-236x100.png";
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((MenuList_default()), {
                        children: menu == undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Loading menus"
                        }) : menu[0].attributes.menu[0].Menu.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(i18n.Link, {
                                    href: item.url,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            minWidth: 100
                                        },
                                        children: item.title
                                    })
                                }, item.title)
                            }, item.title);
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                padding: 2,
                                width: "100%",
                                height: "80px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: imageUrl,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: "flex",
                                alignSelf: "flex-end"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_LanguageSwitcher, {})
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "fixed",
        color: "primary",
        children: menu == undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading"
        }) : mobileView ? displayMobile(menu) : displayDesktop(menu)
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx














function MyApp({ Component , pageProps  }) {
    const { 0: locale , 1: setLocale  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (window.localStorage.getItem("lang") == "null") {
            setLocale("en-CA");
            window.localStorage.setItem("lang", "en-CA");
        } else {
            setLocale(window.localStorage.getItem("lang"));
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.localStorage.setItem("lang", locale);
    }, [
        locale
    ]);
    function handleLanguageChange(locale) {
        setLocale(locale);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: appStoreImplementation,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
            theme: customTheme/* customTheme */.v,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderLayout, {
                    locale: locale,
                    onLanguageChange: handleLanguageChange
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}
/* harmony default export */ const _app = ((0,i18n.appWithTranslation)(MyApp));


/***/ }),

/***/ 5974:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MailOutline");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [602], () => (__webpack_exec__(7112)));
module.exports = __webpack_exports__;

})();