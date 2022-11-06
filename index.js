"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ useServicesStoreImplementation)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/app/blog/data/models/serviceModel.ts
const create = (services)=>{
    return {
        data: services.data
    };
};


// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(7104);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
;// CONCATENATED MODULE: ./src/app/blog/data/datasources/serviceAPIService.ts



const query = external_qs_default().stringify({
    populate: [
        "image"
    ]
}, {
    encodeValuesOnly: true
});
const queryDetails = external_qs_default().stringify({
    populate: [
        "cover",
        "blocks"
    ]
}, {
    encodeValuesOnly: true
});
function getServices(locale) {
    const url = `${"http://localhost:1337"}/api/services?${query}&locale=${locale}`;
    return external_axios_default().get(url).then((res)=>create(res.data));
}
function getServiceDetails(slug) {
    const url = `${"http://localhost:1337"}/api/articles?${queryDetails}&filters[slug]=` + slug;
    return external_axios_default().get(url).then((res)=>create(res.data));
}
/*   async getEventSingle(eventId, accessToken) {
    let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/article/` + eventId,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  } */ 

;// CONCATENATED MODULE: ./src/app/blog/data/repositories/serviceStoreImplementation.ts

const useServicesStoreImplementation = ()=>{
    const getServicesRepo = (locale)=>getServices(locale).then((services)=>services);
    const getServiceRepo = (slug)=>getServiceDetails(slug);
    return {
        getServicesRepo,
        getServiceRepo
    };
};



/***/ }),

/***/ 6246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ useServiceViewModel)
});

;// CONCATENATED MODULE: ./src/app/blog/domain/usecases/service/getServicesUseCase.ts
const getServicesUseCase = (store, locale)=>{
    return store.getServicesRepo(locale);
};


;// CONCATENATED MODULE: ./src/app/blog/domain/usecases/service/getServiceDetailsUseCase.ts
const getServiceDetailsUseCase = (store, slug)=>{
    store.getService(slug);
};


;// CONCATENATED MODULE: ./src/app/blog/presentation/controller/serviceViewModel.ts


function useServiceViewModel(store) {
    const getServices = function(locale) {
        return getServicesUseCase({
            getServicesRepo: store.getServicesRepo
        }, locale);
    };
    const getServiceDetails = function(slug) {
        return getServiceDetailsUseCase({
            getService: store.getServiceRepo
        }, slug);
    };
    return {
        getServices,
        getServiceDetails
    };
}



/***/ }),

/***/ 3217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Bio)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_utils_customStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6602);
/* harmony import */ var _main_utils_customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7947);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3135);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1871);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__, rehype_raw__WEBPACK_IMPORTED_MODULE_7__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_6__, rehype_raw__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Bio = (props)=>{
    //<ReactMarkdown rehypePlugins={[rehypeRaw]}children={props.content} />
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_4__/* .StyledPaper */ .Mt, {
        elevation: 0,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 2,
            marginBottom: 5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                        sx: {
                            margin: "auto",
                            padding: 5,
                            marginBottom: 5,
                            marginTop: 5,
                            backgroundColor: _main_utils_customTheme__WEBPACK_IMPORTED_MODULE_5__/* .customTheme.palette.secondary.main */ .v.palette.secondary.main
                        },
                        elevation: 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    rehypePlugins: [
                                        rehype_raw__WEBPACK_IMPORTED_MODULE_7__["default"]
                                    ],
                                    children: props.content
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 6,
                    xl: 6,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "flex-start",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                            sx: {
                                margin: "auto",
                                marginTop: 0,
                                backgroundColor: _main_utils_customTheme__WEBPACK_IMPORTED_MODULE_5__/* .customTheme.palette.secondary.main */ .v.palette.secondary.main
                            },
                            elevation: 0,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_3___default()), {
                                component: "img",
                                height: "300",
                                width: "600",
                                image: "/business-home_1920.png",
                                alt: "bio"
                            })
                        })
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ Submission)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5974);
/* harmony import */ var _mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_utils_customStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const Submission = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "background.paper",
            borderRadius: 1
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            sx: {
                width: "50%",
                margin: "auto",
                marginTop: 2,
                marginBottom: 2
            },
            elevation: 0,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            gutterBottom: true,
                            variant: "h2",
                            component: "div",
                            align: "center",
                            children: props.content.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "body1",
                            color: "text.secondary",
                            align: "center",
                            children: props.content.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            sx: {
                                margin: "auto",
                                width: "30%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_4__/* .StyledButton */ .Sn, {
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MailOutline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                onClick: ()=>window.location.href = "mailto:info@loadstartech.com",
                                children: props.content.action.title
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 6485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2791);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_serviceView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9425);
/* harmony import */ var _project_projectView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4427);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3217);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_submission__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5623);
/* harmony import */ var _main_utils_customStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_bio__WEBPACK_IMPORTED_MODULE_7__]);
_components_bio__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const HomeView = (props)=>{
    const { i18n: { language  }  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(next_i18next__WEBPACK_IMPORTED_MODULE_14__.I18nContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const pathname = router.pathname;
    const url = "https://www.loadstartech.com/";
    const page = props.homePage.filter(function(item) {
        return item.attributes.locale == language;
    });
    const homeProjects = props.homeProjects.data.filter(function(item) {
        return item.attributes.locale == language;
    });
    const homeServices = props.homeServices.data.filter(function(item) {
        return item.attributes.locale == language;
    });
    let filter = {
        locale: language,
        pageSize: 2
    };
    let meta = props.homeProjects.meta;
    let pageProps = {
        homeProjects,
        meta,
        filter
    };
    //console.log(JSON.stringify(homeServices, null, 4));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "App",
        children: page == undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            style: {
                margin: "70px"
            },
            children: [
                "Loading Page ",
                pathname,
                " please refresh the page "
            ]
        }) : page != undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
                    children: page[0].attributes.seo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: page[0].attributes.seo.metaTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: page[0].attributes.seo.metaDescription
                            }, "description"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "keywords",
                                content: page[0].attributes.seo.keywords
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }, "twitter:card"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:url",
                                content: url
                            }, "og:url"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: page[0].attributes.seo.metaTitle
                            }, "og:title"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: page[0].attributes.seo.metaDescription
                            }, "og:description"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:image",
                                content: ""
                            }, "og:image"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "canonical",
                                href: url
                            }),
                            page[0].attributes.seo.preventIndexing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                        name: "robots",
                                        content: "noindex"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                        name: "googlebot",
                                        content: "noindex"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_7__/* .Bio */ .w, {
                    content: page[0].attributes.blocks[0].body
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {
                    sx: {
                        marginTop: 5
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        width: "100%",
                        maxWidth: 500,
                        marginTop: 2
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "h4",
                        sx: {
                            fontWeight: "bold",
                            color: "#000"
                        },
                        component: "div",
                        align: "left",
                        gutterBottom: true,
                        children: page[0].attributes.blocks[2].sectionHeader[1].title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        display: "flex",
                        alignContent: "space-around"
                    },
                    container: true,
                    spacing: 20,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_service_serviceView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        homeServices: homeServices
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 2,
                        bgcolor: "background.paper",
                        borderRadius: 1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                variant: "h4",
                                sx: {
                                    fontWeight: "bold",
                                    color: "#000"
                                },
                                component: "div",
                                align: "left",
                                gutterBottom: true,
                                children: page[0].attributes.blocks[2].sectionHeader[0].title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                            style: {
                                textDecoration: "none"
                            },
                            href: "/portfolio",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_10__/* .StyledButton */ .Sn, {
                                variant: "outlined",
                                children: [
                                    "  ",
                                    page[0].attributes.blocks[2].action[0].title
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                    container: true,
                    spacing: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_project_projectView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_submission__WEBPACK_IMPORTED_MODULE_9__/* .Submission */ .G, {
                    content: page[0].attributes.blocks[1]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ serviceView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/main/utils/customStyle.ts
var customStyle = __webpack_require__(6602);
;// CONCATENATED MODULE: ./src/app/blog/presentation/view/components/cardService.tsx







const CardService = ({ service  })=>{
    const imageUrl = service.attributes.image.data.attributes.url;
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            maxWidth: 345,
            height: 400,
            marginBottom: 5
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActionArea, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(customStyle/* StyledServiceCardMedia */.TC, {
                    image: imageUrl
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            gutterBottom: true,
                            variant: "h5",
                            sx: {
                                fontWeight: "bold"
                            },
                            component: "div",
                            children: service.attributes.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            color: "text.secondary",
                            children: service.attributes.description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cardService = (CardService);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: ./src/app/blog/presentation/view/service/serviceView.tsx




const ServiceView = (homeServices)=>{
    const services = homeServices.homeServices;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: services == undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Loading"
        }) : services != undefined && services.map((service)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cardService, {
                    service: service
                }, `service__${service.attributes.slug}`)
            }, `service__${service.attributes.slug}`);
        })
    });
};
/* harmony default export */ const serviceView = (ServiceView);


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

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_blog_data_repositories_pageStoreImplementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(430);
/* harmony import */ var _app_blog_data_repositories_projectStoreImplementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6716);
/* harmony import */ var _app_blog_data_repositories_serviceStoreImplementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1521);
/* harmony import */ var _app_blog_presentation_controller_pageViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2415);
/* harmony import */ var _app_blog_presentation_controller_projectViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6660);
/* harmony import */ var _app_blog_presentation_controller_serviceViewModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6246);
/* harmony import */ var _app_blog_presentation_view_page_homeview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6485);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_blog_presentation_view_page_homeview__WEBPACK_IMPORTED_MODULE_5__]);
_app_blog_presentation_view_page_homeview__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









//import { appStoreImplementation } from "../data/appStoreImplementation";
//import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, Link } from 'next/router';
/* import ArticleCategory from "../../app/blog/presentation/view/article/categoryArticle";
import AboutView from "../../app/blog/presentation/view/page/aboutView";
import ContactView from "../../app/blog/presentation/view/page/contactView";
import Header from "../../app/blog/presentation/view/components/Header";

import Footer from "../../app/blog/presentation/view/components/footer";
import PortfolioView from "../../app/blog/presentation/view/page/portfolioView";
import ProjectDetailView from "../../app/blog/presentation/view/project/projectDetailView";
import { customTheme } from "../utils/customTheme";
import LabView from "../../app/blog/presentation/view/page/labView"; */ function IndexView({ homePage , homeProjects , homeServices  }) {
    let props = {
        homePage,
        homeServices,
        homeProjects
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_blog_presentation_view_page_homeview__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ...props
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexView);
async function getStaticProps() {
    const locale = "all";
    const store = (0,_app_blog_data_repositories_pageStoreImplementation__WEBPACK_IMPORTED_MODULE_1__/* .usePageStoreImplementation */ .I)();
    const storeProject = (0,_app_blog_data_repositories_projectStoreImplementation__WEBPACK_IMPORTED_MODULE_2__/* .useProjectStoreImplementation */ .V)();
    const storeService = (0,_app_blog_data_repositories_serviceStoreImplementation__WEBPACK_IMPORTED_MODULE_3__/* .useServicesStoreImplementation */ .W)();
    const pathname = "/home";
    const { getPage ,  } = (0,_app_blog_presentation_controller_pageViewModel__WEBPACK_IMPORTED_MODULE_4__/* .usePageViewModel */ .R)(store);
    const { getProjects ,  } = (0,_app_blog_presentation_controller_projectViewModel__WEBPACK_IMPORTED_MODULE_7__/* .useProjectViewModel */ .W)(storeProject);
    const { getServices ,  } = (0,_app_blog_presentation_controller_serviceViewModel__WEBPACK_IMPORTED_MODULE_8__/* .useServiceViewModel */ .i)(storeService);
    const projectsContent = await getProjects(locale);
    const homeContents = await getPage(pathname, locale);
    const serviceContents = await getServices(locale);
    if (homeContents.data.length == 0) {
        console.log("No matching Page.");
        return;
    }
    if (projectsContent.data.length == 0) {
        console.log("No matching Projects.");
        return;
    }
    if (serviceContents.data.length == 0) {
        console.log("No matching Services.");
        return;
    }
    return {
        props: {
            homePage: homeContents.data,
            homeProjects: projectsContent,
            homeServices: serviceContents
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 216:
/***/ ((module) => {

module.exports = require("@mui/material/Pagination");

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

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2791:
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,602,17,307,427], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();