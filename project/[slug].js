"use strict";
(() => {
var exports = {};
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 7931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7433);
/* harmony import */ var _main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6602);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_11__]);
react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const ProjectDetailView = (props)=>{
    const { i18n: { language  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(next_i18next__WEBPACK_IMPORTED_MODULE_10__.I18nContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const project = props.projectDetails.filter(function(item) {
        return item.attributes.locale == language;
    });
    let imageUrl = "";
    if (project != undefined) {
        imageUrl = project[0].attributes.image.data.attributes.url;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: project == undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "Loading project details..."
        }) : project != undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledPaper */ .Mt, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        container: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            md: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledSliderCardMedia */ .jc, {
                                image: project[0].attributes.cover.data.attributes.url,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledSliderBox */ .yb, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledSliderContentBox */ .Mf, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            variant: "h2",
                                            component: "div",
                                            align: "center",
                                            gutterBottom: true,
                                            children: project[0].attributes.title
                                        })
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                    container: true,
                    spacing: 4,
                    children: project[0].attributes.blocks[1] != undefined && project[0].attributes.blocks[1].files.data != null && project[0].attributes.blocks[1].files.data.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledCard */ .rg, {
                                elevation: 0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledDivCard */ .t5, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledCardMedia */ .qJ, {
                                        image: slide.attributes.url
                                    })
                                })
                            })
                        }, slide.attributes.name))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_main_utils_customStyle__WEBPACK_IMPORTED_MODULE_8__/* .StyledMainGrid */ .EF, {
                    container: true,
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            md: 8,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: project[0].attributes.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown_lib_react_markdown__WEBPACK_IMPORTED_MODULE_11__/* .ReactMarkdown */ .D, {
                                    children: project[0].attributes.blocks[0] != undefined ? project[0].attributes.blocks[0].body : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            md: 4,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            variant: "h6",
                                            gutterBottom: true,
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: project[0].attributes.description
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "h6",
                                    gutterBottom: true,
                                    children: "Technos"
                                }),
                                project[0].attributes.blocks[2] != undefined && project[0].attributes.blocks[2].buttons.map((button)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        sx: {
                                            marginLeft: 1,
                                            marginTop: 1
                                        },
                                        variant: "contained",
                                        color: "primary",
                                        children: button.title
                                    }, button.title))
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetailView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_blog_presentation_controller_projectViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6660);
/* harmony import */ var _app_blog_data_repositories_projectStoreImplementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6716);
/* harmony import */ var _app_blog_presentation_view_project_projectDetailView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_blog_presentation_view_project_projectDetailView__WEBPACK_IMPORTED_MODULE_3__]);
_app_blog_presentation_view_project_projectDetailView__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function projectView({ projectDetails  }) {
    let props = {
        projectDetails
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_blog_presentation_view_project_projectDetailView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectView);
async function getStaticProps(ctx) {
    const slug = ctx.params.slug;
    const locale = "all";
    const storeProject = (0,_app_blog_data_repositories_projectStoreImplementation__WEBPACK_IMPORTED_MODULE_2__/* .useProjectStoreImplementation */ .V)();
    const { getProjectsDetails ,  } = (0,_app_blog_presentation_controller_projectViewModel__WEBPACK_IMPORTED_MODULE_4__/* .useProjectViewModel */ .W)(storeProject);
    const projectDetailsContents = await getProjectsDetails(slug, locale);
    if (projectDetailsContents.data.length == 0) {
        console.log("No matching Project Details.");
        return;
    }
    return {
        props: {
            projectDetails: projectDetailsContents.data
        }
    };
}
const getStaticPaths = async ()=>{
    return {
        fallback: false,
        paths: [
            {
                params: {
                    slug: "task-manager"
                }
            },
            {
                params: {
                    slug: "subscription-management"
                }
            },
            {
                params: {
                    slug: "single-sign-on-sso"
                }
            }
        ]
    };
};

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

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

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

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

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

/***/ 4566:
/***/ ((module) => {

module.exports = require("style-to-object");

/***/ }),

/***/ 4955:
/***/ ((module) => {

module.exports = import("comma-separated-tokens");;

/***/ }),

/***/ 9492:
/***/ ((module) => {

module.exports = import("hast-util-whitespace");;

/***/ }),

/***/ 6861:
/***/ ((module) => {

module.exports = import("property-information");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 1152:
/***/ ((module) => {

module.exports = import("space-separated-tokens");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 6107:
/***/ ((module) => {

module.exports = import("vfile");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [433,602,307], () => (__webpack_exec__(3019)));
module.exports = __webpack_exports__;

})();