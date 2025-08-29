webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./src/modules/admin/section/registrant/index.jsx":
/*!********************************************************!*\
  !*** ./src/modules/admin/section/registrant/index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components */ "./src/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services */ "./src/services/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal */ "./src/modules/admin/section/registrant/Modal.jsx");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controls */ "./src/modules/admin/section/registrant/Controls.jsx");



var _this = undefined,
  _jsxFileName = "E:\\COLLEGE\\CodeLabs\\WEB\\MyCodelabsCompany\\web-codelabs\\src\\modules\\admin\\section\\registrant\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */








var Heading = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])('p').withConfig({
  displayName: "registrant__Heading",
  componentId: "sc-1xab4yj-0"
})(["font-size:20px;text-align:center;padding:20px 0 40px 0;"]);
var Download = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])('a').withConfig({
  displayName: "registrant__Download",
  componentId: "sc-1xab4yj-1"
})(["color:#2080d9;text-decoration:underline;"]);
var Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])('a').withConfig({
  displayName: "registrant__Link",
  componentId: "sc-1xab4yj-2"
})(["color:#2080d9;text-decoration:underline;"]);
var Detail = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])('p').withConfig({
  displayName: "registrant__Detail",
  componentId: "sc-1xab4yj-3"
})(["color:#2080d9;text-decoration:underline;"]);
var FetchingData = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])('div').withConfig({
  displayName: "registrant__FetchingData",
  componentId: "sc-1xab4yj-4"
})(["width:100%;text-align:center;padding:30px 0;"]);
var Registrant = function Registrant(_ref) {
  var registrantData = _ref.registrantData,
    loading = _ref.loading;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
    data = _useState[0],
    setData = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
      angkatan: '2023',
      keyword: ''
    }),
    filterData = _useState2[0],
    setFilterData = _useState2[1];
  var defaultModalData = {
    id: 0,
    nim: '',
    name: '',
    years: '',
    email: '',
    portfolio: '',
    submitted: '',
    telegramID: '',
    linkedin: '',
    motivation: '',
    token: null
  };
  var state = {
    user: Object(_services__WEBPACK_IMPORTED_MODULE_7__["zustandState"])(function (state) {
      return state.user;
    })
  };
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    isModalOpen = _useState3[0],
    setIsModalOpen = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(_objectSpread({}, defaultModalData, {
      token: state.user && state.user.token
    })),
    modalData = _useState4[0],
    setModalData = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
      id: 'no',
      title: 'No',
      Cell: function Cell(_ref2) {
        var row = _ref2.row;
        var index = row.index;
        return __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 16
          }
        }, index + 1);
      }
    }, {
      title: 'NIM',
      accessor: 'nim'
    }, {
      title: 'Nama',
      accessor: 'nama_lengkap'
    }, {
      title: 'Angkatan',
      accessor: 'angkatan'
    }, {
      title: 'No HP',
      accessor: 'no_hp'
    }, {
      title: 'Telegram',
      accessor: 'id_telegram'
    }, {
      title: 'Link linkedin',
      accessor: 'linkedin',
      Cell: function Cell(_ref3) {
        var value = _ref3.value;
        return __jsx(Link, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "".concat(value),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }
        }, "linkedin");
      }
    },
    // {
    //   id: 'portfolio',
    //   title: 'Portfolio',
    //   accessor: 'id',
    //   Cell: ({ value }) => {
    //     const { user } = state;
    //     const { baseURL } = process.env;

    //     return (
    //       <Download
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href={`${baseURL}/api/registrations/${value}/portfolio?token=${user.token}`}
    //       >
    //         Download
    //       </Download>
    //     );
    //   },
    // },
    {
      id: 'detail',
      accessor: 'id',
      title: 'Detail',
      Cell: function Cell(_ref4) {
        var value = _ref4.value;
        return __jsx(Detail, {
          onClick: function onClick() {
            return detailHandler(value);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 16
          }
        }, "Lihat");
      }
    }, {
      id: 'waktu',
      title: 'Time',
      accessor: 'created_at',
      Cell: function Cell(_ref5) {
        var value = _ref5.value;
        return __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 16
          }
        }, Object(moment__WEBPACK_IMPORTED_MODULE_3__["default"])(value).format('HH:mm'));
      }
    }, {
      id: 'submitted',
      title: 'Submitted',
      accessor: 'created_at',
      Cell: function Cell(_ref6) {
        var value = _ref6.value;
        return __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 16
          }
        }, Object(moment__WEBPACK_IMPORTED_MODULE_3__["default"])(value).format('DD/MM/YYYY'));
      }
    }]),
    tableTitle = _useState5[0];
  var detailHandler = function detailHandler(id) {
    setModalData(_objectSpread({}, modalData, {
      id: id
    }));
  };
  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };
  var controlsOnChangeHandler = function controlsOnChangeHandler(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFilterData(_objectSpread({}, filterData, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value)));
  };
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var angkatan = filterData.angkatan,
      keyword = filterData.keyword;
    if (keyword || angkatan) {
      var temp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(registrantData);
      if (angkatan) {
        temp = temp.filter(function (item) {
          var created_at = item.created_at;
          var date = Object(moment__WEBPACK_IMPORTED_MODULE_3__["default"])(created_at).format('YYYY-MM');
          if (angkatan === '2022') {
            return date === "".concat(angkatan, "-02");
          }
          return date >= "2022-11";
        });
      }
      if (keyword) {
        temp = temp.filter(function (item) {
          return item.nim.toString().includes(keyword) || item.nama_lengkap.toLowerCase().includes(keyword.toLowerCase());
        });
      }
      setData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(temp));
    } else {
      setData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(registrantData));
    }
  }, [filterData]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var id = modalData.id;
    if (id) {
      var filtered = registrantData.filter(function (item) {
        return item.id === id;
      });
      if (filtered.length > 0) {
        var _filtered = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filtered, 1),
          item = _filtered[0];
        var nim = item.nim,
          email = item.email,
          angkatan = item.angkatan,
          motivasi = item.motivasi,
          portfolio = item.portfolio,
          created_at = item.created_at,
          id_telegram = item.id_telegram,
          linkedin = item.linkedin,
          nama_lengkap = item.nama_lengkap;
        setModalData(_objectSpread({}, modalData, {
          nim: nim,
          email: email,
          portfolio: portfolio,
          linkedin: linkedin,
          years: angkatan,
          name: nama_lengkap,
          motivation: motivasi,
          submitted: created_at,
          telegramID: id_telegram
        }));
        setIsModalOpen(true);
      }
    } else {
      closeModal();
    }
  }, [modalData.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(registrantData));
  }, [registrantData]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var angkatan = filterData.angkatan;
    var temp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(registrantData);
    if (angkatan) {
      temp = temp.filter(function (item) {
        var created_at = item.created_at;
        var date = Object(moment__WEBPACK_IMPORTED_MODULE_3__["default"])(created_at).format('YYYY-MM');
        if (angkatan === '2022') {
          return date === "".concat(angkatan, "-02");
        }
        return date >= "2022-11";
      });
    }
    setData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(temp));
  }, [registrantData]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }, __jsx(Heading, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, "List of Registrant"), registrantData.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_Controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    filterData: filterData,
    onChange: controlsOnChangeHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["ReactTable"], {
    data: data,
    columns: tableTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  })), registrantData.length === 0 && loading && __jsx(FetchingData, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, "Fetching data...")), registrantData.length === 0 && !loading && __jsx(FetchingData, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, "No Data")), isModalOpen && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: modalData,
    closeModal: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 23
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Registrant);

/***/ })

})
//# sourceMappingURL=admin.js.993bb737561b866b8584.hot-update.js.map