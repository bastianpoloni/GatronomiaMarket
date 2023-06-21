/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/articulo.js":
/*!*************************!*\
  !*** ./src/articulo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Articulo: () => (/* binding */ Articulo)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Articulo = /*#__PURE__*/function () {\n  function Articulo(nombre, email, telefono) {\n    _classCallCheck(this, Articulo);\n    _defineProperty(this, \"nombre\", void 0);\n    _defineProperty(this, \"email\", void 0);\n    _defineProperty(this, \"telefono\", void 0);\n    this.nombre = nombre;\n    this.email = email;\n    this.telefono = telefono;\n  }\n  _createClass(Articulo, [{\n    key: \"nombre\",\n    get: function get() {\n      return this.nombre;\n    },\n    set: function set(nombre) {\n      this.nombre = nombre;\n    }\n  }, {\n    key: \"email\",\n    get: function get() {\n      return this.email;\n    },\n    set: function set(email) {\n      this.email = email;\n    }\n  }, {\n    key: \"telefono\",\n    get: function get() {\n      return this.telefono;\n    },\n    set: function set(telefono) {\n      this.telefono = telefono;\n    }\n  }, {\n    key: \"getInfoArticulo\",\n    value: function getInfoArticulo() {\n      return \"Articulo: \".concat(this.nombre, \", Email: \").concat(this.email, \", Telefono: \").concat(this.telefono);\n    }\n  }]);\n  return Articulo;\n}();\n\n//# sourceURL=webpack://modulo-4-individual-2/./src/articulo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proveedor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor.js */ \"./src/proveedor.js\");\n/* harmony import */ var _articulo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articulo.js */ \"./src/articulo.js\");\n/* harmony import */ var _tipo_proveedor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipo_proveedor.js */ \"./src/tipo_proveedor.js\");\n\n\n\nfunction calcularImpuesto(proveedor) {\n  var impuesto = proveedor.precio * 0.19;\n  return \"El impuesto total es \".concat(impuesto);\n}\nvar proveedor1 = new _proveedor_js__WEBPACK_IMPORTED_MODULE_0__.Proveedor('Juan Perez', 1000);\nvar proveedor2 = new _tipo_proveedor_js__WEBPACK_IMPORTED_MODULE_2__.Tipo_proveedor('Carlos Perez', 2000, true, 'Argentina');\nvar articulo1 = new _articulo_js__WEBPACK_IMPORTED_MODULE_1__.Articulo('Laptop', 'juan@gmail.com', '12345678-9');\nvar articulo2 = new _articulo_js__WEBPACK_IMPORTED_MODULE_1__.Articulo('Teclado', 'juan@gmail.com', '12345678-9');\nvar articulo3 = new _articulo_js__WEBPACK_IMPORTED_MODULE_1__.Articulo('Mouse', 'juan@gmail.com', '12345678-9');\nproveedor1.addArticulo(articulo1);\nproveedor1.addArticulo(articulo2);\nproveedor1.addArticulo(articulo3);\nconsole.log(proveedor1.getInfoProveedor());\nconsole.log(calcularImpuesto(proveedor1));\nconsole.log(proveedor2.getInfoProveedor());\n\n//# sourceURL=webpack://modulo-4-individual-2/./src/index.js?");

/***/ }),

/***/ "./src/proveedor.js":
/*!**************************!*\
  !*** ./src/proveedor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Proveedor: () => (/* binding */ Proveedor)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Proveedor = /*#__PURE__*/function () {\n  function Proveedor(nombre, precio) {\n    _classCallCheck(this, Proveedor);\n    _defineProperty(this, \"nombre\", void 0);\n    _defineProperty(this, \"articulo\", void 0);\n    _defineProperty(this, \"precio\", void 0);\n    this.nombre = nombre;\n    this.precio = precio;\n    this.articulos = [];\n  }\n  _createClass(Proveedor, [{\n    key: \"nombre\",\n    get: function get() {\n      return this.nombre;\n    },\n    set: function set(nombre) {\n      this.nombre = nombre;\n    }\n  }, {\n    key: \"precio\",\n    get: function get() {\n      return this.precio;\n    },\n    set: function set(precio) {\n      this.precio = precio;\n    }\n  }, {\n    key: \"getInfoProveedor\",\n    value: function getInfoProveedor() {\n      return \"Proveedor: \".concat(this.nombre, \", Precio: $\").concat(this.precio, \", Articulos: \").concat(this.articulos);\n    }\n  }, {\n    key: \"addArticulo\",\n    value: function addArticulo(articulo) {\n      this.articulos.push(articulo);\n    }\n  }]);\n  return Proveedor;\n}();\n\n//# sourceURL=webpack://modulo-4-individual-2/./src/proveedor.js?");

/***/ }),

/***/ "./src/tipo_proveedor.js":
/*!*******************************!*\
  !*** ./src/tipo_proveedor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tipo_proveedor: () => (/* binding */ Tipo_proveedor)\n/* harmony export */ });\n/* harmony import */ var _proveedor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor.js */ \"./src/proveedor.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar Tipo_proveedor = /*#__PURE__*/function (_Proveedor) {\n  _inherits(Tipo_proveedor, _Proveedor);\n  var _super = _createSuper(Tipo_proveedor);\n  function Tipo_proveedor(nombre, precio, inter, pais) {\n    var _this;\n    _classCallCheck(this, Tipo_proveedor);\n    _this = _super.call(this, nombre, precio);\n    _defineProperty(_assertThisInitialized(_this), \"inter\", void 0);\n    _defineProperty(_assertThisInitialized(_this), \"pais\", void 0);\n    _this.articulos = [];\n    _this.inter = inter;\n    _this.pais = pais;\n    return _this;\n  }\n  _createClass(Tipo_proveedor, [{\n    key: \"pais\",\n    get: function get() {\n      return this.pais;\n    },\n    set: function set(pais) {\n      this.pais = pais;\n    }\n  }, {\n    key: \"inter\",\n    get: function get() {\n      return this.inter;\n    },\n    set: function set(inter) {\n      this.inter = inter;\n    }\n  }, {\n    key: \"getInfoProveedor\",\n    value: function getInfoProveedor() {\n      return \"Proveedor: \".concat(this.nombre, \", Precio: $\").concat(this.precio, \", Articulos: \").concat(this.articulos, \", Internacional: \").concat(this.inter, \", Pais: \").concat(this.pais);\n    }\n  }]);\n  return Tipo_proveedor;\n}(_proveedor_js__WEBPACK_IMPORTED_MODULE_0__.Proveedor);\n\n//# sourceURL=webpack://modulo-4-individual-2/./src/tipo_proveedor.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;