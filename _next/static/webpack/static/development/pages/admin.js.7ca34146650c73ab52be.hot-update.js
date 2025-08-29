webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/modules/admin/section/registrant/Modal.jsx":
/*!********************************************************!*\
  !*** ./src/modules/admin/section/registrant/Modal.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./src/components/index.js");
var _this = undefined,
  _jsxFileName = "E:\\COLLEGE\\CodeLabs\\WEB\\MyCodelabsCompany\\web-codelabs\\src\\modules\\admin\\section\\registrant\\Modal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* eslint-disable react/prop-types */





var ModalBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div').withConfig({
  displayName: "Modal__ModalBackground",
  componentId: "dhvpai-0"
})(["width:100%;height:100%;position:fixed;left:0;top:0;z-index:100;display:flex;background-color:rgba(0,0,0,0.5);"]);
var ModalContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Modal__ModalContent",
  componentId: "dhvpai-1"
})(["width:100%;max-width:600px;display:flex;flex-direction:column;background-color:#fff;border-radius:16px;margin:20px auto;"]);
var ModalTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('p').withConfig({
  displayName: "Modal__ModalTitle",
  componentId: "dhvpai-2"
})(["font-size:20px;font-weight:bold;text-align:center;"]);
var ModalInfo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div').withConfig({
  displayName: "Modal__ModalInfo",
  componentId: "dhvpai-3"
})(["width:100%;height:100%;display:flex;flex-direction:column;gap:20px;overflow:auto;margin:20px 0;"]);
var ModalSectionTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('p').withConfig({
  displayName: "Modal__ModalSectionTitle",
  componentId: "dhvpai-4"
})(["font-weight:bold;"]);
var ModalButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div').withConfig({
  displayName: "Modal__ModalButton",
  componentId: "dhvpai-5"
})(["text-align:center;"]);
var ModalDownload = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('a').withConfig({
  displayName: "Modal__ModalDownload",
  componentId: "dhvpai-6"
})(["color:#2080d9;text-decoration:underline;"]);
var Modal = function Modal(_ref) {
  var data = _ref.data,
    closeModal = _ref.closeModal;
  var baseURL = "https://codelabs.projectsidn.tech";
  var id = data.id,
    nim = data.nim,
    name = data.name,
    years = data.years,
    email = data.email,
    portfolio = data.portfolio,
    linkedin = data.linkedin,
    submitted = data.submitted,
    telegramID = data.telegramID,
    motivation = data.motivation,
    token = data.token;
  return __jsx(ModalBackground, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(ModalContent, {
    p: 27,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(ModalTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, name), __jsx(ModalInfo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "NIM"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, nim)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Angkatan"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, years)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "E-mail"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, email)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "ID Telegram"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, telegramID)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Link Linkedin"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, linkedin)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Motivasi"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, motivation)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(ModalSectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "Submitted at"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, Object(moment__WEBPACK_IMPORTED_MODULE_1__["default"])(submitted).format('HH:mm DD/MM/YYYY')))), __jsx(ModalButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "Close"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=admin.js.7ca34146650c73ab52be.hot-update.js.map