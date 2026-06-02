const { registrarVenta } = require("./ventas");
const { agregarProducto } = require("./productos");
const { registrarCompra } = require("./compras");
const { actualizarStock } = require("./stock");

console.log("=== SISTEMA KIOSCO ===");

agregarProducto();
registrarVenta ();
registrarCompra();
actualizarStock();

