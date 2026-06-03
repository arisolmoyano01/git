const { registrarVenta } = require("./ventas");
const { agregarProducto } = require("./productos");
const { registrarCompra } = require("./compras");
const { actualizarStock } = require("./stock");
const { validarDatos } = require("./validaciones");
const { mostrarReportes } = require("./reportes");
const { mostrarMenu } = require("./menu");
console.log("=== SISTEMA KIOSCO ===");

agregarProducto();
registrarVenta ();
registrarCompra();
actualizarStock();
validarDatos();
mostrarReportes();
mostrarMenu();