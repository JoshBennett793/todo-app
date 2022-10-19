/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/layers.svg */ "./src/assets/layers.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/sunrise.svg */ "./src/assets/sunrise.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/clock.svg */ "./src/assets/clock.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/project-dots.svg */ "./src/assets/project-dots.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --header-height: 70px;\n  --green: #387d72;\n  --light-green: #529f93;\n  --light-green-hover: #529f948f;\n  --navbar-bg-color: #fafafa;\n  --navbar-button-hover: #e6e6e6;\n  --header-border-radius: 3px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", \"Trebuchet MS\", sans-serif;\n  font-weight: 300;\n}\n\nbody {\n  position: relative;\n}\n\n/* ****** Header ****** */\n\nheader {\n  background-color: var(--green);\n  height: var(--header-height);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n\n#header-left {\n  display: flex;\n  align-items: center;\n  margin-right: auto;\n  margin-left: 35px;\n  gap: 20px;\n}\n\nbutton {\n  background: transparent;\n  border: none;\n  border-radius: var(--header-border-radius);\n  cursor: pointer;\n}\n\nbutton.header-btn:hover {\n  background: var(--light-green);\n}\n\n#header-left input[type=\"text\"] {\n  height: 34px;\n  font-size: 1.1rem;\n  background-color: var(--light-green);\n  padding: 4px;\n  padding-left: 34px;\n  margin-bottom: 3px;\n  margin-left: 8px;\n  outline: none;\n  border: none;\n  border-radius: var(--header-border-radius);\n}\n\n#header-left input[type=\"text\"]:focus {\n  background-color: white;\n  width: 300px;\n}\n\n#header-left input[type=\"text\"]:focus + svg {\n  stroke: black;\n}\n\n#search-input-wrapper {\n  position: relative;\n}\n\n#search-input-wrapper > .feather-search {\n  position: absolute;\n  top: 4.5px;\n  left: 14px;\n}\n\n/* ****** Main ****** */\n\n#body-container {\n  display: flex;\n  position: relative;\n}\n\nul {\n  list-style: none;\n}\n\n/* ****** Navbar ****** */\n\n#project-navbar {\n  height: calc(100vh - var(--header-height));\n  width: 300px;\n  background: var(--navbar-bg-color);\n  padding: 50px 0 0 35px;\n\n\tdisplay: none !important;\n  font-size: 1.3rem;\n}\n\n#top-menu {\n  display: flex;\n  flex-direction: column;\n\n  padding-left: 35px;\n  margin-bottom: 30px;\n  gap: 20px;\n\n  position: relative;\n}\n\n#all-tasks-nav:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#today-tasks-nav:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#upcoming-tasks-nav:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.top-menu-items:before {\n  content: \"\";\n  height: 24px;\n  width: 24px;\n\n  position: absolute;\n  left: 0;\n}\n\n#top-menu li,\n#bottom-menu li {\n  cursor: pointer;\n}\n\n#projects-menu-header #projects {\n  font-weight: 500;\n}\n\n#projects-menu-header {\n  display: flex;\n  margin-bottom: 30px;\n  padding-right: 20px;\n  gap: 15px;\n}\n\n#projects {\n  margin-right: auto;\n}\n\n#project-navbar li:hover {\n  color: var(--light-green-hover);\n}\n\n#projects-menu-header button:hover {\n  background-color: var(--navbar-button-hover);\n}\n\n#bottom-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-left: 35px;\n}\n\n#bottom-menu .test:before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  content: \"\";\n  height: 24px;\n  width: 24px;\n\n  position: absolute;\n  left: 35px;\n}\n\n/* ****** Task Container ****** */\n\n#task-container {\n  border: 2px solid red;\n  flex-grow: 1;\n  position: absolute;\n  /* left: 300px; */\n  height: calc(100vh - var(--header-height));\n  /* width: calc(100% - 300px); */\n\twidth: 100%;\n  overflow: auto;\n}\n\n\n@media only screen and (min-width: 600px) {\n\t#project-navbar {\n\t\tdisplay: block !important;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,8BAA8B;EAC9B,0BAA0B;EAC1B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oEAAoE;EACpE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,yBAAyB;;AAEzB;EACE,8BAA8B;EAC9B,4BAA4B;EAC5B,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;AACZ;;AAEA,uBAAuB;;AAEvB;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,yBAAyB;;AAEzB;EACE,0CAA0C;EAC1C,YAAY;EACZ,kCAAkC;EAClC,sBAAsB;;CAEvB,wBAAwB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;;EAET,kBAAkB;AACpB;;AAEA;EACE,yDAA2C;AAC7C;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE,yDAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;;EAEX,kBAAkB;EAClB,OAAO;AACT;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,yDAAiD;EACjD,WAAW;EACX,YAAY;EACZ,WAAW;;EAEX,kBAAkB;EAClB,UAAU;AACZ;;AAEA,iCAAiC;;AAEjC;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,0CAA0C;EAC1C,+BAA+B;CAChC,WAAW;EACV,cAAc;AAChB;;;AAGA;CACC;EACC,yBAAyB;CAC1B;AACD","sourcesContent":[":root {\n  --header-height: 70px;\n  --green: #387d72;\n  --light-green: #529f93;\n  --light-green-hover: #529f948f;\n  --navbar-bg-color: #fafafa;\n  --navbar-button-hover: #e6e6e6;\n  --header-border-radius: 3px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", \"Trebuchet MS\", sans-serif;\n  font-weight: 300;\n}\n\nbody {\n  position: relative;\n}\n\n/* ****** Header ****** */\n\nheader {\n  background-color: var(--green);\n  height: var(--header-height);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n\n#header-left {\n  display: flex;\n  align-items: center;\n  margin-right: auto;\n  margin-left: 35px;\n  gap: 20px;\n}\n\nbutton {\n  background: transparent;\n  border: none;\n  border-radius: var(--header-border-radius);\n  cursor: pointer;\n}\n\nbutton.header-btn:hover {\n  background: var(--light-green);\n}\n\n#header-left input[type=\"text\"] {\n  height: 34px;\n  font-size: 1.1rem;\n  background-color: var(--light-green);\n  padding: 4px;\n  padding-left: 34px;\n  margin-bottom: 3px;\n  margin-left: 8px;\n  outline: none;\n  border: none;\n  border-radius: var(--header-border-radius);\n}\n\n#header-left input[type=\"text\"]:focus {\n  background-color: white;\n  width: 300px;\n}\n\n#header-left input[type=\"text\"]:focus + svg {\n  stroke: black;\n}\n\n#search-input-wrapper {\n  position: relative;\n}\n\n#search-input-wrapper > .feather-search {\n  position: absolute;\n  top: 4.5px;\n  left: 14px;\n}\n\n/* ****** Main ****** */\n\n#body-container {\n  display: flex;\n  position: relative;\n}\n\nul {\n  list-style: none;\n}\n\n/* ****** Navbar ****** */\n\n#project-navbar {\n  height: calc(100vh - var(--header-height));\n  width: 300px;\n  background: var(--navbar-bg-color);\n  padding: 50px 0 0 35px;\n\n\tdisplay: none !important;\n  font-size: 1.3rem;\n}\n\n#top-menu {\n  display: flex;\n  flex-direction: column;\n\n  padding-left: 35px;\n  margin-bottom: 30px;\n  gap: 20px;\n\n  position: relative;\n}\n\n#all-tasks-nav:before {\n  background-image: url(../assets/layers.svg);\n}\n\n#today-tasks-nav:before {\n  background-image: url(../assets/sunrise.svg);\n}\n\n#upcoming-tasks-nav:before {\n  background-image: url(../assets/clock.svg);\n}\n\n.top-menu-items:before {\n  content: \"\";\n  height: 24px;\n  width: 24px;\n\n  position: absolute;\n  left: 0;\n}\n\n#top-menu li,\n#bottom-menu li {\n  cursor: pointer;\n}\n\n#projects-menu-header #projects {\n  font-weight: 500;\n}\n\n#projects-menu-header {\n  display: flex;\n  margin-bottom: 30px;\n  padding-right: 20px;\n  gap: 15px;\n}\n\n#projects {\n  margin-right: auto;\n}\n\n#project-navbar li:hover {\n  color: var(--light-green-hover);\n}\n\n#projects-menu-header button:hover {\n  background-color: var(--navbar-button-hover);\n}\n\n#bottom-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-left: 35px;\n}\n\n#bottom-menu .test:before {\n  background-image: url(../assets/project-dots.svg);\n  content: \"\";\n  height: 24px;\n  width: 24px;\n\n  position: absolute;\n  left: 35px;\n}\n\n/* ****** Task Container ****** */\n\n#task-container {\n  border: 2px solid red;\n  flex-grow: 1;\n  position: absolute;\n  /* left: 300px; */\n  height: calc(100vh - var(--header-height));\n  /* width: calc(100% - 300px); */\n\twidth: 100%;\n  overflow: auto;\n}\n\n\n@media only screen and (min-width: 600px) {\n\t#project-navbar {\n\t\tdisplay: block !important;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/calendar.svg */ "./src/assets/calendar.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --modal-container-width: min(600px, 80%);\n  --modal-container-height: 200px;\n  --modal-border-radius: 10px;\n  --modal-btn-border-radius: 6px;\n\t--invisible-border: rgba(0, 0, 0, 0.0);\n}\n\n#task-modal-container {\n  border-radius: var(--modal-border-radius);\n  width: var(--modal-container-width);\n  height: var(--modal-container-height);\n  padding: 10px 20px 20px;\n\n  position: absolute;\n  top: 100px;\n  left: calc(50% - var(--modal-container-width) / 2);\n\n  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n}\n\n#task-form {\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n#task-input-container {\n  width: 100%;\n\tmargin-top: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#task-title-input,\n#task-description-input {\n\tbackground-color: white;\n  outline: none;\n  border: var(--invisible-border);\n\tborder-radius: var(--modal-border-radius);\n}\n\n#task-title-input {\n\theight: 30px;\n\tfont-size: 1.1rem;\n}\n\n#task-description-input {\n\theight: 50px;\n\tborder: none;\n\toutline: none;\n\tresize: none;\n\tpadding-top: 10px;\n}\n\n#date-input {\n  width: 120px;\n  height: 30px;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: var(--modal-btn-border-radius);\n  margin-top: 10px;\n\tcursor: pointer;\n}\n\n#date-input:hover {\n\tbackground-color: rgba(0, 0, 0, 0.15);\n}\n\n.date-text-input {\n\tpadding-left: 34px;\n\tpadding-bottom: 2px;\n}\n\n.date-input {\n\tpadding-left: 4px;\n}\n\n#due-date-container {\n\twidth: 100%;\n\tposition: relative;\n\tmargin-right: auto;\n}\n\n#due-date-container:before {\n\tcontent: \"\";\n\twidth: 22px;\n\theight: 22px;\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n\tposition: absolute;\n\ttop: 14px;\n\tleft: 5px;\n}\n\n#due-date-container:focus-within:before {\n\tdisplay: none;\n}\n\n#task-modal-bottom-container {\n  margin-top: auto;\n  display: flex;\n  justify-content: flex-end;\n\talign-items: center;\n  gap: 20px;\n}\n\n.feather-flag {\n\tcursor: pointer;\n}\n\n#task-modal-bottom-container button {\n\twidth: 80px;\n  height: 32px;\n\tborder: var(--invisible-border);\n  border-radius: var(--modal-btn-border-radius);\n  cursor: pointer;\n}\n\nbutton#cancel-btn {\n\tmargin-left: auto;\n}\n\nbutton#add-btn {\n  color: white;\n  background-color: var(--light-green);\n}\n\nbutton#add-btn:hover {\n  background-color: var(--green);\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,wCAAwC;EACxC,+BAA+B;EAC/B,2BAA2B;EAC3B,8BAA8B;CAC/B,sCAAsC;AACvC;;AAEA;EACE,yCAAyC;EACzC,mCAAmC;EACnC,qCAAqC;EACrC,uBAAuB;;EAEvB,kBAAkB;EAClB,UAAU;EACV,kDAAkD;;EAElD,gDAAgD;EAChD,wDAAwD;EACxD,qDAAqD;AACvD;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;CACZ,gBAAgB;CAChB,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,uBAAuB;EACtB,aAAa;EACb,+BAA+B;CAChC,yCAAyC;AAC1C;;AAEA;CACC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,aAAa;CACb,YAAY;CACZ,iBAAiB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,6CAA6C;EAC7C,gBAAgB;CACjB,eAAe;AAChB;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,kBAAkB;CAClB,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,WAAW;CACX,YAAY;CACZ,oEAA0D;CAC1D,kBAAkB;CAClB,SAAS;CACT,SAAS;AACV;;AAEA;CACC,aAAa;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;CAC1B,mBAAmB;EAClB,SAAS;AACX;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;EACV,YAAY;CACb,+BAA+B;EAC9B,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;EACE,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[":root {\n  --modal-container-width: min(600px, 80%);\n  --modal-container-height: 200px;\n  --modal-border-radius: 10px;\n  --modal-btn-border-radius: 6px;\n\t--invisible-border: rgba(0, 0, 0, 0.0);\n}\n\n#task-modal-container {\n  border-radius: var(--modal-border-radius);\n  width: var(--modal-container-width);\n  height: var(--modal-container-height);\n  padding: 10px 20px 20px;\n\n  position: absolute;\n  top: 100px;\n  left: calc(50% - var(--modal-container-width) / 2);\n\n  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);\n}\n\n#task-form {\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n#task-input-container {\n  width: 100%;\n\tmargin-top: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#task-title-input,\n#task-description-input {\n\tbackground-color: white;\n  outline: none;\n  border: var(--invisible-border);\n\tborder-radius: var(--modal-border-radius);\n}\n\n#task-title-input {\n\theight: 30px;\n\tfont-size: 1.1rem;\n}\n\n#task-description-input {\n\theight: 50px;\n\tborder: none;\n\toutline: none;\n\tresize: none;\n\tpadding-top: 10px;\n}\n\n#date-input {\n  width: 120px;\n  height: 30px;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: var(--modal-btn-border-radius);\n  margin-top: 10px;\n\tcursor: pointer;\n}\n\n#date-input:hover {\n\tbackground-color: rgba(0, 0, 0, 0.15);\n}\n\n.date-text-input {\n\tpadding-left: 34px;\n\tpadding-bottom: 2px;\n}\n\n.date-input {\n\tpadding-left: 4px;\n}\n\n#due-date-container {\n\twidth: 100%;\n\tposition: relative;\n\tmargin-right: auto;\n}\n\n#due-date-container:before {\n\tcontent: \"\";\n\twidth: 22px;\n\theight: 22px;\n\tbackground: url(/src/assets/calendar.svg) no-repeat center;\n\tposition: absolute;\n\ttop: 14px;\n\tleft: 5px;\n}\n\n#due-date-container:focus-within:before {\n\tdisplay: none;\n}\n\n#task-modal-bottom-container {\n  margin-top: auto;\n  display: flex;\n  justify-content: flex-end;\n\talign-items: center;\n  gap: 20px;\n}\n\n.feather-flag {\n\tcursor: pointer;\n}\n\n#task-modal-bottom-container button {\n\twidth: 80px;\n  height: 32px;\n\tborder: var(--invisible-border);\n  border-radius: var(--modal-btn-border-radius);\n  cursor: pointer;\n}\n\nbutton#cancel-btn {\n\tmargin-left: auto;\n}\n\nbutton#add-btn {\n  color: white;\n  background-color: var(--light-green);\n}\n\nbutton#add-btn:hover {\n  background-color: var(--green);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addToTasks = (task) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("addTask", task);
  };

  renderTask = (task) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("renderTask", task);
  };

  editTask = (id, title, content, priority) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("editTask", id, title, content, priority);
  };

  removeTask = (id) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("removeTask", id);
  };

  updateTaskIDs = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("updateTaskIDs");
  };

  createNote = (note) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("createNote", note);
  };

  editNote = (id, title, content) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("editNote", id, title, content);
  };

  removeNote = (id) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("removeNote", id);
  };

  updateNoteIDs = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("updateNoteIDs");
  };

  renderTaskModal = (modal) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("renderTaskModal", modal);
  };

  removeTaskModal = (modal) => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("removeTaskModal", modal);
  };
}


/***/ }),

/***/ "./src/components/model.js":
/*!*********************************!*\
  !*** ./src/components/model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
class Model {
  constructor() {
    this.projects = [];
    this.tasks = [
      {
        id: 1,
        project: "TOP",
        completed: false,
        title: "Project 1",
        content: "Build Model",
        dueDate: "10-13-2022",
        priority: "high",
      },
      {
        id: 2,
        project: "TOP",
        completed: false,
        title: "Project 2",
        content: "Build Controller",
        dueDate: "10-13-2022",
        priority: "high",
      },
    ];
    this.notes = [];
  }

  addToTasks = (obj) => {
    const task = {
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      project: obj.project,
      completed: false,
      title: obj.title,
      content: obj.content,
      dueDate: obj.dueDate,
      priority: obj.priority,
    };
    this.tasks.push(task);
    console.log(this.tasks);
  };

  editTask = (id, title, content, priority) => {
    const task = this.tasks.find((task) => task.id === id);
    task.title = title ? title : task.title;
    task.content = content ? content : task.content;
    task.priority = priority ? priority : task.priority;
  };

  removeFromTasks = (id) => {
    this.tasks = this.tasks.filter((task) => task.id != id);
  };

  updateTaskIDs = () => {
    for (let task of this.tasks) {
      task.id = task.id - 1;
    }
  };

  addToNotes = (obj) => {
    const note = {
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1] + 1 : 1,
      title: obj.title,
      content: obj.content,
    };
    this.notes.push(note);
  };

  editNote = (id, title, content) => {
    const note = this.notes.find((note) => note.id === id);
    note.title = title ? title : note.title;
    note.content = content ? content : note.content;
  };

  removeFromNotes = (id) => {
    this.notes = this.notes.filter((note) => note.id != id);
  };

  updateNoteIDs = () => {
    for (let note of notes) {
      note.id = note.id - 1;
    }
  };
}


/***/ }),

/***/ "./src/components/pubsub.js":
/*!**********************************!*\
  !*** ./src/components/pubsub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pubsub)
/* harmony export */ });
class Pubsub {
  constructor() {
    this.tracker = {
      // key: eventname, value: [ funcs ]
    };
  }

  subscribe(eventname, func) {
    if (this.tracker[eventname]) {
      this.tracker[eventname].push(func);
    } else {
      this.tracker[eventname] = [func];
    }
    return {
      unsubscribe: () => {
        const funcs = this.tracker[eventname];
        const idx = funcs.indexOf(func);
        if (idx > -1) {
          funcs.splice(idx, 1);
        }
      },
    };
  }

  publish(eventname, ...args) {
    const funcs = this.tracker[eventname];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func.apply(null, args);
      });
    }
  }
}


/***/ }),

/***/ "./src/components/view.js":
/*!********************************!*\
  !*** ./src/components/view.js ***!
  \********************************/
/***/ (() => {

throw new Error("Module parse failed: Identifier 'taskContainer' has already been declared (52:6)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \n| const nav = document.querySelector(\"#project-navbar\");\n> const taskContainer = document.querySelector(\"#task-container\");\n| const showHideBtn = document.querySelector(\"#navbar-toggle\");\n| ");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller),
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
/* harmony import */ var _components_pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pubsub.js */ "./src/components/pubsub.js");
/* harmony import */ var _components_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/model.js */ "./src/components/model.js");
/* harmony import */ var _components_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view.js */ "./src/components/view.js");
/* harmony import */ var _components_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controller.js */ "./src/components/controller.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");








const pubsub = new _components_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

const controller = new _components_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"](new _components_model_js__WEBPACK_IMPORTED_MODULE_1__["default"](), new _components_view_js__WEBPACK_IMPORTED_MODULE_2__.View());

pubsub.subscribe("addTask", controller.model.addToTasks);
pubsub.subscribe("renderTask", controller.view.renderTask);
pubsub.subscribe("editTask", controller.model.editTask);
pubsub.subscribe("removeTask", controller.model.removeFromTasks);
pubsub.subscribe("updateTaskIDs", controller.model.updateTaskIDs);
pubsub.subscribe("createNote", controller.model.addToNotes);
pubsub.subscribe("editNote", controller.model.editNote);
pubsub.subscribe("removeNote", controller.model.removeNote);
pubsub.subscribe("updateNoteIDs", controller.model.updateNoteIDs);
pubsub.subscribe("renderTaskModal", controller.view.renderTaskModal);
pubsub.subscribe("removeTaskModal", controller.view.removeTaskModal);

/***/ }),

/***/ "./src/assets/calendar.svg":
/*!*********************************!*\
  !*** ./src/assets/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10c099b7929c869acc21.svg";

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ced2866f93923597989.svg";

/***/ }),

/***/ "./src/assets/layers.svg":
/*!*******************************!*\
  !*** ./src/assets/layers.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56b6564356a02932e7f9.svg";

/***/ }),

/***/ "./src/assets/project-dots.svg":
/*!*************************************!*\
  !*** ./src/assets/project-dots.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a32051651feb20ee295.svg";

/***/ }),

/***/ "./src/assets/sunrise.svg":
/*!********************************!*\
  !*** ./src/assets/sunrise.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee0dbeadd52c3290834c.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLG9IQUF1QztBQUNuRiw0Q0FBNEMsc0hBQXdDO0FBQ3BGLDRDQUE0QyxrSEFBc0M7QUFDbEYsNENBQTRDLGdJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsMEJBQTBCLHFCQUFxQiwyQkFBMkIsbUNBQW1DLCtCQUErQixtQ0FBbUMsZ0NBQWdDLEdBQUcsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLCtFQUErRSxxQkFBcUIsR0FBRyxVQUFVLHVCQUF1QixHQUFHLDBDQUEwQyxtQ0FBbUMsaUNBQWlDLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsdUJBQXVCLHNCQUFzQixjQUFjLEdBQUcsWUFBWSw0QkFBNEIsaUJBQWlCLCtDQUErQyxvQkFBb0IsR0FBRyw2QkFBNkIsbUNBQW1DLEdBQUcsdUNBQXVDLGlCQUFpQixzQkFBc0IseUNBQXlDLGlCQUFpQix1QkFBdUIsdUJBQXVCLHFCQUFxQixrQkFBa0IsaUJBQWlCLCtDQUErQyxHQUFHLDZDQUE2Qyw0QkFBNEIsaUJBQWlCLEdBQUcsbURBQW1ELGtCQUFrQixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyw2Q0FBNkMsdUJBQXVCLGVBQWUsZUFBZSxHQUFHLGlEQUFpRCxrQkFBa0IsdUJBQXVCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxtREFBbUQsK0NBQStDLGlCQUFpQix1Q0FBdUMsMkJBQTJCLCtCQUErQixzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIseUJBQXlCLHdCQUF3QixjQUFjLHlCQUF5QixHQUFHLDJCQUEyQixzRUFBc0UsR0FBRyw2QkFBNkIsc0VBQXNFLEdBQUcsZ0NBQWdDLHNFQUFzRSxHQUFHLDRCQUE0QixrQkFBa0IsaUJBQWlCLGdCQUFnQix5QkFBeUIsWUFBWSxHQUFHLG9DQUFvQyxvQkFBb0IsR0FBRyxxQ0FBcUMscUJBQXFCLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0Isd0JBQXdCLGNBQWMsR0FBRyxlQUFlLHVCQUF1QixHQUFHLDhCQUE4QixvQ0FBb0MsR0FBRyx3Q0FBd0MsaURBQWlELEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsY0FBYyx1QkFBdUIsR0FBRywrQkFBK0Isc0VBQXNFLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHlCQUF5QixlQUFlLEdBQUcsMkRBQTJELDBCQUEwQixpQkFBaUIsdUJBQXVCLG9CQUFvQixpREFBaUQsa0NBQWtDLGtCQUFrQixtQkFBbUIsR0FBRyxpREFBaUQscUJBQXFCLGdDQUFnQyxLQUFLLEdBQUcsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFFBQVEsS0FBSyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsMEJBQTBCLHFCQUFxQiwyQkFBMkIsbUNBQW1DLCtCQUErQixtQ0FBbUMsZ0NBQWdDLEdBQUcsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLCtFQUErRSxxQkFBcUIsR0FBRyxVQUFVLHVCQUF1QixHQUFHLDBDQUEwQyxtQ0FBbUMsaUNBQWlDLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsdUJBQXVCLHNCQUFzQixjQUFjLEdBQUcsWUFBWSw0QkFBNEIsaUJBQWlCLCtDQUErQyxvQkFBb0IsR0FBRyw2QkFBNkIsbUNBQW1DLEdBQUcsdUNBQXVDLGlCQUFpQixzQkFBc0IseUNBQXlDLGlCQUFpQix1QkFBdUIsdUJBQXVCLHFCQUFxQixrQkFBa0IsaUJBQWlCLCtDQUErQyxHQUFHLDZDQUE2Qyw0QkFBNEIsaUJBQWlCLEdBQUcsbURBQW1ELGtCQUFrQixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyw2Q0FBNkMsdUJBQXVCLGVBQWUsZUFBZSxHQUFHLGlEQUFpRCxrQkFBa0IsdUJBQXVCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxtREFBbUQsK0NBQStDLGlCQUFpQix1Q0FBdUMsMkJBQTJCLCtCQUErQixzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIseUJBQXlCLHdCQUF3QixjQUFjLHlCQUF5QixHQUFHLDJCQUEyQixnREFBZ0QsR0FBRyw2QkFBNkIsaURBQWlELEdBQUcsZ0NBQWdDLCtDQUErQyxHQUFHLDRCQUE0QixrQkFBa0IsaUJBQWlCLGdCQUFnQix5QkFBeUIsWUFBWSxHQUFHLG9DQUFvQyxvQkFBb0IsR0FBRyxxQ0FBcUMscUJBQXFCLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0Isd0JBQXdCLGNBQWMsR0FBRyxlQUFlLHVCQUF1QixHQUFHLDhCQUE4QixvQ0FBb0MsR0FBRyx3Q0FBd0MsaURBQWlELEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsY0FBYyx1QkFBdUIsR0FBRywrQkFBK0Isc0RBQXNELGtCQUFrQixpQkFBaUIsZ0JBQWdCLHlCQUF5QixlQUFlLEdBQUcsMkRBQTJELDBCQUEwQixpQkFBaUIsdUJBQXVCLG9CQUFvQixpREFBaUQsa0NBQWtDLGtCQUFrQixtQkFBbUIsR0FBRyxpREFBaUQscUJBQXFCLGdDQUFnQyxLQUFLLEdBQUcsbUJBQW1CO0FBQ2xqUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SUFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaURBQWlELDZDQUE2QyxvQ0FBb0MsZ0NBQWdDLG1DQUFtQywyQ0FBMkMsR0FBRywyQkFBMkIsOENBQThDLHdDQUF3QywwQ0FBMEMsNEJBQTRCLHlCQUF5QixlQUFlLHVEQUF1RCx1REFBdUQsNkRBQTZELDBEQUEwRCxHQUFHLGdCQUFnQixpQkFBaUIsb0JBQW9CLDJCQUEyQixHQUFHLDJCQUEyQixnQkFBZ0IscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyxpREFBaUQsNEJBQTRCLGtCQUFrQixvQ0FBb0MsOENBQThDLEdBQUcsdUJBQXVCLGlCQUFpQixzQkFBc0IsR0FBRyw2QkFBNkIsaUJBQWlCLGlCQUFpQixrQkFBa0IsaUJBQWlCLHNCQUFzQixHQUFHLGlCQUFpQixpQkFBaUIsaUJBQWlCLG9CQUFvQiwwQ0FBMEMsa0RBQWtELHFCQUFxQixvQkFBb0IsR0FBRyx1QkFBdUIsMENBQTBDLEdBQUcsc0JBQXNCLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcseUJBQXlCLGdCQUFnQix1QkFBdUIsdUJBQXVCLEdBQUcsZ0NBQWdDLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGlGQUFpRix1QkFBdUIsY0FBYyxjQUFjLEdBQUcsNkNBQTZDLGtCQUFrQixHQUFHLGtDQUFrQyxxQkFBcUIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsY0FBYyxHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyx5Q0FBeUMsZ0JBQWdCLGlCQUFpQixvQ0FBb0Msa0RBQWtELG9CQUFvQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxvQkFBb0IsaUJBQWlCLHlDQUF5QyxHQUFHLDBCQUEwQixtQ0FBbUMsR0FBRyxTQUFTLG9GQUFvRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsNkNBQTZDLG9DQUFvQyxnQ0FBZ0MsbUNBQW1DLDJDQUEyQyxHQUFHLDJCQUEyQiw4Q0FBOEMsd0NBQXdDLDBDQUEwQyw0QkFBNEIseUJBQXlCLGVBQWUsdURBQXVELHVEQUF1RCw2REFBNkQsMERBQTBELEdBQUcsZ0JBQWdCLGlCQUFpQixvQkFBb0IsMkJBQTJCLEdBQUcsMkJBQTJCLGdCQUFnQixxQkFBcUIsa0JBQWtCLDJCQUEyQixHQUFHLGlEQUFpRCw0QkFBNEIsa0JBQWtCLG9DQUFvQyw4Q0FBOEMsR0FBRyx1QkFBdUIsaUJBQWlCLHNCQUFzQixHQUFHLDZCQUE2QixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIsc0JBQXNCLEdBQUcsaUJBQWlCLGlCQUFpQixpQkFBaUIsb0JBQW9CLDBDQUEwQyxrREFBa0QscUJBQXFCLG9CQUFvQixHQUFHLHVCQUF1QiwwQ0FBMEMsR0FBRyxzQkFBc0IsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyx5QkFBeUIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLGdCQUFnQixpQkFBaUIsK0RBQStELHVCQUF1QixjQUFjLGNBQWMsR0FBRyw2Q0FBNkMsa0JBQWtCLEdBQUcsa0NBQWtDLHFCQUFxQixrQkFBa0IsOEJBQThCLHdCQUF3QixjQUFjLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLG9DQUFvQyxrREFBa0Qsb0JBQW9CLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLG9CQUFvQixpQkFBaUIseUNBQXlDLEdBQUcsMEJBQTBCLG1DQUFtQyxHQUFHLHFCQUFxQjtBQUNscE07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCOztBQUVBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjs7QUFFQTtBQUNBLElBQUkscURBQWM7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25EZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNEM7QUFDRjtBQUNFO0FBQ1E7O0FBRTNCO0FBQ0E7O0FBRWxCLG1CQUFtQiw2REFBTTs7QUFFekIsdUJBQXVCLGlFQUFVLEtBQUssNERBQUssUUFBUSxxREFBSTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jc3MvbW9kYWwuY3NzP2YzODEiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xheWVycy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc3VucmlzZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY2xvY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3Byb2plY3QtZG90cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDcwcHg7XFxuICAtLWdyZWVuOiAjMzg3ZDcyO1xcbiAgLS1saWdodC1ncmVlbjogIzUyOWY5MztcXG4gIC0tbGlnaHQtZ3JlZW4taG92ZXI6ICM1MjlmOTQ4ZjtcXG4gIC0tbmF2YmFyLWJnLWNvbG9yOiAjZmFmYWZhO1xcbiAgLS1uYXZiYXItYnV0dG9uLWhvdmVyOiAjZTZlNmU2O1xcbiAgLS1oZWFkZXItYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogKioqKioqIEhlYWRlciAqKioqKiogKi9cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlYWRlci1ib3JkZXItcmFkaXVzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmhlYWRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4jaGVhZGVyLWxlZnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWFkZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNoZWFkZXItbGVmdCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNoZWFkZXItbGVmdCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMgKyBzdmcge1xcbiAgc3Ryb2tlOiBibGFjaztcXG59XFxuXFxuI3NlYXJjaC1pbnB1dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dC13cmFwcGVyID4gLmZlYXRoZXItc2VhcmNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNC41cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG5cXG4vKiAqKioqKiogTWFpbiAqKioqKiogKi9cXG5cXG4jYm9keS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogKioqKioqIE5hdmJhciAqKioqKiogKi9cXG5cXG4jcHJvamVjdC1uYXZiYXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmF2YmFyLWJnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDUwcHggMCAwIDM1cHg7XFxuXFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiN0b3AtbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNhbGwtdGFza3MtbmF2OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4jdG9kYXktdGFza3MtbmF2OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jdXBjb21pbmctdGFza3MtbmF2OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4udG9wLW1lbnUtaXRlbXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4jdG9wLW1lbnUgbGksXFxuI2JvdHRvbS1tZW51IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLW1lbnUtaGVhZGVyICNwcm9qZWN0cyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcHJvamVjdHMtbWVudS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1uYXZiYXIgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RzLW1lbnUtaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuI2JvdHRvbS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4jYm90dG9tLW1lbnUgLnRlc3Q6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzVweDtcXG59XFxuXFxuLyogKioqKioqIFRhc2sgQ29udGFpbmVyICoqKioqKiAqL1xcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiBsZWZ0OiAzMDBweDsgKi9cXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXFxuXFx0d2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcblxcdCNwcm9qZWN0LW5hdmJhciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0VBQW9FO0VBQ3BFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxzQkFBc0I7O0NBRXZCLHdCQUF3QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseURBQTJDO0FBQzdDOztBQUVBO0VBQ0UseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UseURBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXOztFQUVYLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7O0VBRVgsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQywrQkFBK0I7Q0FDaEMsV0FBVztFQUNWLGNBQWM7QUFDaEI7OztBQUdBO0NBQ0M7RUFDQyx5QkFBeUI7Q0FDMUI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWhlYWRlci1oZWlnaHQ6IDcwcHg7XFxuICAtLWdyZWVuOiAjMzg3ZDcyO1xcbiAgLS1saWdodC1ncmVlbjogIzUyOWY5MztcXG4gIC0tbGlnaHQtZ3JlZW4taG92ZXI6ICM1MjlmOTQ4ZjtcXG4gIC0tbmF2YmFyLWJnLWNvbG9yOiAjZmFmYWZhO1xcbiAgLS1uYXZiYXItYnV0dG9uLWhvdmVyOiAjZTZlNmU2O1xcbiAgLS1oZWFkZXItYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogKioqKioqIEhlYWRlciAqKioqKiogKi9cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlYWRlci1ib3JkZXItcmFkaXVzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmhlYWRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4jaGVhZGVyLWxlZnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWFkZXItYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNoZWFkZXItbGVmdCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNoZWFkZXItbGVmdCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMgKyBzdmcge1xcbiAgc3Ryb2tlOiBibGFjaztcXG59XFxuXFxuI3NlYXJjaC1pbnB1dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dC13cmFwcGVyID4gLmZlYXRoZXItc2VhcmNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNC41cHg7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG5cXG4vKiAqKioqKiogTWFpbiAqKioqKiogKi9cXG5cXG4jYm9keS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogKioqKioqIE5hdmJhciAqKioqKiogKi9cXG5cXG4jcHJvamVjdC1uYXZiYXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmF2YmFyLWJnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDUwcHggMCAwIDM1cHg7XFxuXFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiN0b3AtbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNhbGwtdGFza3MtbmF2OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2xheWVycy5zdmcpO1xcbn1cXG5cXG4jdG9kYXktdGFza3MtbmF2OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3N1bnJpc2Uuc3ZnKTtcXG59XFxuXFxuI3VwY29taW5nLXRhc2tzLW5hdjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9jbG9jay5zdmcpO1xcbn1cXG5cXG4udG9wLW1lbnUtaXRlbXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4jdG9wLW1lbnUgbGksXFxuI2JvdHRvbS1tZW51IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLW1lbnUtaGVhZGVyICNwcm9qZWN0cyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcHJvamVjdHMtbWVudS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1uYXZiYXIgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuLWhvdmVyKTtcXG59XFxuXFxuI3Byb2plY3RzLW1lbnUtaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItYnV0dG9uLWhvdmVyKTtcXG59XFxuXFxuI2JvdHRvbS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4jYm90dG9tLW1lbnUgLnRlc3Q6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcHJvamVjdC1kb3RzLnN2Zyk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzVweDtcXG59XFxuXFxuLyogKioqKioqIFRhc2sgQ29udGFpbmVyICoqKioqKiAqL1xcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAvKiBsZWZ0OiAzMDBweDsgKi9cXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXFxuXFx0d2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcblxcdCNwcm9qZWN0LW5hdmJhciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvY2FsZW5kYXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1tb2RhbC1jb250YWluZXItd2lkdGg6IG1pbig2MDBweCwgODAlKTtcXG4gIC0tbW9kYWwtY29udGFpbmVyLWhlaWdodDogMjAwcHg7XFxuICAtLW1vZGFsLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtLW1vZGFsLWJ0bi1ib3JkZXItcmFkaXVzOiA2cHg7XFxuXFx0LS1pbnZpc2libGUtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMCk7XFxufVxcblxcbiN0YXNrLW1vZGFsLWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG4gIHdpZHRoOiB2YXIoLS1tb2RhbC1jb250YWluZXItd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1tb2RhbC1jb250YWluZXItaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDBweDtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gdmFyKC0tbW9kYWwtY29udGFpbmVyLXdpZHRoKSAvIDIpO1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDMycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2staW5wdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGFzay10aXRsZS1pbnB1dCxcXG4jdGFzay1kZXNjcmlwdGlvbi1pbnB1dCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiB2YXIoLS1pbnZpc2libGUtYm9yZGVyKTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI3Rhc2stdGl0bGUtaW5wdXQge1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQge1xcblxcdGhlaWdodDogNTBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNkYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1idG4tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RhdGUtaW5wdXQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcblxcbi5kYXRlLXRleHQtaW5wdXQge1xcblxcdHBhZGRpbmctbGVmdDogMzRweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZGF0ZS1pbnB1dCB7XFxuXFx0cGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbiNkdWUtZGF0ZS1jb250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbiNkdWUtZGF0ZS1jb250YWluZXI6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHR3aWR0aDogMjJweDtcXG5cXHRoZWlnaHQ6IDIycHg7XFxuXFx0YmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDE0cHg7XFxuXFx0bGVmdDogNXB4O1xcbn1cXG5cXG4jZHVlLWRhdGUtY29udGFpbmVyOmZvY3VzLXdpdGhpbjpiZWZvcmUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrLW1vZGFsLWJvdHRvbS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mZWF0aGVyLWZsYWcge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stbW9kYWwtYm90dG9tLWNvbnRhaW5lciBidXR0b24ge1xcblxcdHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcblxcdGJvcmRlcjogdmFyKC0taW52aXNpYmxlLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2RhbC1idG4tYm9yZGVyLXJhZGl1cyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiNjYW5jZWwtYnRuIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuYnV0dG9uI2FkZC1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG5idXR0b24jYWRkLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsOEJBQThCO0NBQy9CLHNDQUFzQztBQUN2Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLHVCQUF1Qjs7RUFFdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrREFBa0Q7O0VBRWxELGdEQUFnRDtFQUNoRCx3REFBd0Q7RUFDeEQscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztDQUNaLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLHVCQUF1QjtFQUN0QixhQUFhO0VBQ2IsK0JBQStCO0NBQ2hDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLDZDQUE2QztFQUM3QyxnQkFBZ0I7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLG9FQUEwRDtDQUMxRCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0NBQzFCLG1CQUFtQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztFQUNWLFlBQVk7Q0FDYiwrQkFBK0I7RUFDOUIsNkNBQTZDO0VBQzdDLGVBQWU7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbW9kYWwtY29udGFpbmVyLXdpZHRoOiBtaW4oNjAwcHgsIDgwJSk7XFxuICAtLW1vZGFsLWNvbnRhaW5lci1oZWlnaHQ6IDIwMHB4O1xcbiAgLS1tb2RhbC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLS1tb2RhbC1idG4tYm9yZGVyLXJhZGl1czogNnB4O1xcblxcdC0taW52aXNpYmxlLWJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjApO1xcbn1cXG5cXG4jdGFzay1tb2RhbC1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxuICB3aWR0aDogdmFyKC0tbW9kYWwtY29udGFpbmVyLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tbW9kYWwtY29udGFpbmVyLWhlaWdodCk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIHZhcigtLW1vZGFsLWNvbnRhaW5lci13aWR0aCkgLyAyKTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDMycHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbiN0YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrLWlucHV0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2stdGl0bGUtaW5wdXQsXFxuI3Rhc2stZGVzY3JpcHRpb24taW5wdXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogdmFyKC0taW52aXNpYmxlLWJvcmRlcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiN0YXNrLXRpdGxlLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0cmVzaXplOiBub25lO1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG4jZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9kYWwtYnRuLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkYXRlLWlucHV0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG4uZGF0ZS10ZXh0LWlucHV0IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDM0cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDJweDtcXG59XFxuXFxuLmRhdGUtaW5wdXQge1xcblxcdHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4jZHVlLWRhdGUtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jZHVlLWRhdGUtY29udGFpbmVyOmJlZm9yZSB7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0d2lkdGg6IDIycHg7XFxuXFx0aGVpZ2h0OiAyMnB4O1xcblxcdGJhY2tncm91bmQ6IHVybCgvc3JjL2Fzc2V0cy9jYWxlbmRhci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMTRweDtcXG5cXHRsZWZ0OiA1cHg7XFxufVxcblxcbiNkdWUtZGF0ZS1jb250YWluZXI6Zm9jdXMtd2l0aGluOmJlZm9yZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2stbW9kYWwtYm90dG9tLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZlYXRoZXItZmxhZyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFzay1tb2RhbC1ib3R0b20tY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0d2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuXFx0Ym9yZGVyOiB2YXIoLS1pbnZpc2libGUtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vZGFsLWJ0bi1ib3JkZXItcmFkaXVzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uI2NhbmNlbC1idG4ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5idXR0b24jYWRkLWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbmJ1dHRvbiNhZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfVxuXG4gIGFkZFRvVGFza3MgPSAodGFzaykgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiYWRkVGFza1wiLCB0YXNrKTtcbiAgfTtcblxuICByZW5kZXJUYXNrID0gKHRhc2spID0+IHtcbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlclRhc2tcIiwgdGFzayk7XG4gIH07XG5cbiAgZWRpdFRhc2sgPSAoaWQsIHRpdGxlLCBjb250ZW50LCBwcmlvcml0eSkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdFRhc2tcIiwgaWQsIHRpdGxlLCBjb250ZW50LCBwcmlvcml0eSk7XG4gIH07XG5cbiAgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwicmVtb3ZlVGFza1wiLCBpZCk7XG4gIH07XG5cbiAgdXBkYXRlVGFza0lEcyA9ICgpID0+IHtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZVRhc2tJRHNcIik7XG4gIH07XG5cbiAgY3JlYXRlTm90ZSA9IChub3RlKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJjcmVhdGVOb3RlXCIsIG5vdGUpO1xuICB9O1xuXG4gIGVkaXROb3RlID0gKGlkLCB0aXRsZSwgY29udGVudCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdE5vdGVcIiwgaWQsIHRpdGxlLCBjb250ZW50KTtcbiAgfTtcblxuICByZW1vdmVOb3RlID0gKGlkKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJyZW1vdmVOb3RlXCIsIGlkKTtcbiAgfTtcblxuICB1cGRhdGVOb3RlSURzID0gKCkgPT4ge1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTm90ZUlEc1wiKTtcbiAgfTtcblxuICByZW5kZXJUYXNrTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlclRhc2tNb2RhbFwiLCBtb2RhbCk7XG4gIH07XG5cbiAgcmVtb3ZlVGFza01vZGFsID0gKG1vZGFsKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJyZW1vdmVUYXNrTW9kYWxcIiwgbW9kYWwpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgdGhpcy50YXNrcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2plY3Q6IFwiVE9QXCIsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHRpdGxlOiBcIlByb2plY3QgMVwiLFxuICAgICAgICBjb250ZW50OiBcIkJ1aWxkIE1vZGVsXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMTAtMTMtMjAyMlwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgcHJvamVjdDogXCJUT1BcIixcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6IFwiUHJvamVjdCAyXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQnVpbGQgQ29udHJvbGxlclwiLFxuICAgICAgICBkdWVEYXRlOiBcIjEwLTEzLTIwMjJcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMubm90ZXMgPSBbXTtcbiAgfVxuXG4gIGFkZFRvVGFza3MgPSAob2JqKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IHtcbiAgICAgIGlkOiB0aGlzLnRhc2tzLmxlbmd0aCA+IDAgPyB0aGlzLnRhc2tzW3RoaXMudGFza3MubGVuZ3RoIC0gMV0uaWQgKyAxIDogMSxcbiAgICAgIHByb2plY3Q6IG9iai5wcm9qZWN0LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIHRpdGxlOiBvYmoudGl0bGUsXG4gICAgICBjb250ZW50OiBvYmouY29udGVudCxcbiAgICAgIGR1ZURhdGU6IG9iai5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IG9iai5wcmlvcml0eSxcbiAgICB9O1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcbiAgfTtcblxuICBlZGl0VGFzayA9IChpZCwgdGl0bGUsIGNvbnRlbnQsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZSA/IHRpdGxlIDogdGFzay50aXRsZTtcbiAgICB0YXNrLmNvbnRlbnQgPSBjb250ZW50ID8gY29udGVudCA6IHRhc2suY29udGVudDtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHkgPyBwcmlvcml0eSA6IHRhc2sucHJpb3JpdHk7XG4gIH07XG5cbiAgcmVtb3ZlRnJvbVRhc2tzID0gKGlkKSA9PiB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9IGlkKTtcbiAgfTtcblxuICB1cGRhdGVUYXNrSURzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGhpcy50YXNrcykge1xuICAgICAgdGFzay5pZCA9IHRhc2suaWQgLSAxO1xuICAgIH1cbiAgfTtcblxuICBhZGRUb05vdGVzID0gKG9iaikgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSB7XG4gICAgICBpZDogdGhpcy5ub3Rlcy5sZW5ndGggPiAwID8gdGhpcy5ub3Rlc1t0aGlzLm5vdGVzLmxlbmd0aCAtIDFdICsgMSA6IDEsXG4gICAgICB0aXRsZTogb2JqLnRpdGxlLFxuICAgICAgY29udGVudDogb2JqLmNvbnRlbnQsXG4gICAgfTtcbiAgICB0aGlzLm5vdGVzLnB1c2gobm90ZSk7XG4gIH07XG5cbiAgZWRpdE5vdGUgPSAoaWQsIHRpdGxlLCBjb250ZW50KSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IHRoaXMubm90ZXMuZmluZCgobm90ZSkgPT4gbm90ZS5pZCA9PT0gaWQpO1xuICAgIG5vdGUudGl0bGUgPSB0aXRsZSA/IHRpdGxlIDogbm90ZS50aXRsZTtcbiAgICBub3RlLmNvbnRlbnQgPSBjb250ZW50ID8gY29udGVudCA6IG5vdGUuY29udGVudDtcbiAgfTtcblxuICByZW1vdmVGcm9tTm90ZXMgPSAoaWQpID0+IHtcbiAgICB0aGlzLm5vdGVzID0gdGhpcy5ub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUuaWQgIT0gaWQpO1xuICB9O1xuXG4gIHVwZGF0ZU5vdGVJRHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgbm90ZSBvZiBub3Rlcykge1xuICAgICAgbm90ZS5pZCA9IG5vdGUuaWQgLSAxO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YnN1YiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHJhY2tlciA9IHtcbiAgICAgIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogWyBmdW5jcyBdXG4gICAgfTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudG5hbWUsIGZ1bmMpIHtcbiAgICBpZiAodGhpcy50cmFja2VyW2V2ZW50bmFtZV0pIHtcbiAgICAgIHRoaXMudHJhY2tlcltldmVudG5hbWVdLnB1c2goZnVuYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhY2tlcltldmVudG5hbWVdID0gW2Z1bmNdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZnVuY3MgPSB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXTtcbiAgICAgICAgY29uc3QgaWR4ID0gZnVuY3MuaW5kZXhPZihmdW5jKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZnVuY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1Ymxpc2goZXZlbnRuYW1lLCAuLi5hcmdzKSB7XG4gICAgY29uc3QgZnVuY3MgPSB0aGlzLnRyYWNrZXJbZXZlbnRuYW1lXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFB1YnN1YiBmcm9tIFwiLi9jb21wb25lbnRzL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kZWwuanNcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZpZXcuanNcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbGxlci5qc1wiO1xuXG5pbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL21vZGFsLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgcHVic3ViID0gbmV3IFB1YnN1YigpO1xuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG5ldyBNb2RlbCgpLCBuZXcgVmlldygpKTtcblxucHVic3ViLnN1YnNjcmliZShcImFkZFRhc2tcIiwgY29udHJvbGxlci5tb2RlbC5hZGRUb1Rhc2tzKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJyZW5kZXJUYXNrXCIsIGNvbnRyb2xsZXIudmlldy5yZW5kZXJUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJlZGl0VGFza1wiLCBjb250cm9sbGVyLm1vZGVsLmVkaXRUYXNrKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJyZW1vdmVUYXNrXCIsIGNvbnRyb2xsZXIubW9kZWwucmVtb3ZlRnJvbVRhc2tzKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVUYXNrSURzXCIsIGNvbnRyb2xsZXIubW9kZWwudXBkYXRlVGFza0lEcyk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiY3JlYXRlTm90ZVwiLCBjb250cm9sbGVyLm1vZGVsLmFkZFRvTm90ZXMpO1xucHVic3ViLnN1YnNjcmliZShcImVkaXROb3RlXCIsIGNvbnRyb2xsZXIubW9kZWwuZWRpdE5vdGUpO1xucHVic3ViLnN1YnNjcmliZShcInJlbW92ZU5vdGVcIiwgY29udHJvbGxlci5tb2RlbC5yZW1vdmVOb3RlKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVOb3RlSURzXCIsIGNvbnRyb2xsZXIubW9kZWwudXBkYXRlTm90ZUlEcyk7XG5wdWJzdWIuc3Vic2NyaWJlKFwicmVuZGVyVGFza01vZGFsXCIsIGNvbnRyb2xsZXIudmlldy5yZW5kZXJUYXNrTW9kYWwpO1xucHVic3ViLnN1YnNjcmliZShcInJlbW92ZVRhc2tNb2RhbFwiLCBjb250cm9sbGVyLnZpZXcucmVtb3ZlVGFza01vZGFsKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=