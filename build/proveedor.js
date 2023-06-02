"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Proveedor = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Proveedor = /*#__PURE__*/function () {
  function Proveedor(nombre, precio) {
    _classCallCheck(this, Proveedor);
    _defineProperty(this, "nombre", void 0);
    _defineProperty(this, "articulo", void 0);
    _defineProperty(this, "precio", void 0);
    this.nombre = nombre;
    this.precio = precio;
    this.articulo = [];
  }
  _createClass(Proveedor, [{
    key: "nombre",
    get: function get() {
      return this.nombre;
    },
    set: function set(nombre) {
      this.nombre = nombre;
    }
  }, {
    key: "precio",
    get: function get() {
      return this.precio;
    },
    set: function set(precio) {
      this.precio = precio;
    }
  }, {
    key: "getInfoProveedor",
    value: function getInfoProveedor() {
      return "Proveedor: ".concat(this.nombre, ", Precio: ").concat(this.precio, ", Articulos: ").concat(this.articulo);
    }
  }, {
    key: "addArticulo",
    value: function addArticulo(articulo) {
      this.articulo.push(articulo);
    }
  }]);
  return Proveedor;
}();
exports.Proveedor = Proveedor;