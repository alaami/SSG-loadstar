"use strict";
(() => {
var exports = {};
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1871);
/* harmony import */ var _main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6602);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, rehype_raw__WEBPACK_IMPORTED_MODULE_7__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, rehype_raw__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const LabView = (props)=>{
    const { i18n: { language  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(next_i18next__WEBPACK_IMPORTED_MODULE_10__.I18nContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const pathname = router.pathname;
    const page = props.labPage.filter(function(item) {
        return item.attributes.locale == language;
    });
    let imageUrl = "";
    if (page != undefined) {
        imageUrl = page[0].attributes.cover.data.attributes.url;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "App",
        children: page == undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            children: [
                "Loading Page ",
                pathname
            ]
        }) : page != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledPagePaper */ .Nz, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
                        image: imageUrl,
                        title: page[0].attributes.title,
                        sx: {
                            height: 600
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledSliderBox */ .yb, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledSliderContentBox */ .Mf, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    variant: "h2",
                                    component: "div",
                                    align: "center",
                                    gutterBottom: true,
                                    children: page[0].attributes.title
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            display: "flex",
                            alignItems: "flex-start",
                            p: 1,
                            m: 1,
                            height: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                margin: "auto",
                                padding: 10
                            },
                            children: page[0].attributes.blocks[0] != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                rehypePlugins: [
                                    rehype_raw__WEBPACK_IMPORTED_MODULE_7__["default"]
                                ],
                                children: page[0].attributes.blocks[0].body
                            })
                        })
                    })
                ]
            })
        })
    });
// to addto line 63   <ArticlesView filter={{currentPage:1, pageSize:5}}/>
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7764:
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
/* harmony import */ var _app_blog_presentation_controller_pageViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2415);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_blog_presentation_view_page_labView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_blog_presentation_view_page_labView__WEBPACK_IMPORTED_MODULE_4__]);
_app_blog_presentation_view_page_labView__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function IndexView({ labPage  }) {
    let props = {
        labPage
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_blog_presentation_view_page_labView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexView);
async function getStaticProps() {
    const locale = "all";
    const store = (0,_app_blog_data_repositories_pageStoreImplementation__WEBPACK_IMPORTED_MODULE_1__/* .usePageStoreImplementation */ .I)();
    const pathname = "/lab";
    const { getPage ,  } = (0,_app_blog_presentation_controller_pageViewModel__WEBPACK_IMPORTED_MODULE_2__/* .usePageViewModel */ .R)(store);
    const labContents = await getPage(pathname, locale);
    if (labContents.data.length == 0) {
        console.log("No matching Page.");
        return;
    }
    return {
        props: {
            labPage: labContents.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

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
var __webpack_exports__ = __webpack_require__.X(0, [602,17], () => (__webpack_exec__(7764)));
module.exports = __webpack_exports__;

})();