const { registrarVenta } = require("./ventas");
const { agregarProducto } = require("./productos");
const { registrarCompra } = require("./compras");
const { actualizarStock } = require("./stock");
const { validarDatos } = require("./validaciones");

console.log("=== SISTEMA KIOSCO ===");

agregarProducto();
registrarVenta ();
registrarCompra();
actualizarStock();
validarDatos();

