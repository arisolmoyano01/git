const { registrarVenta } = require("./ventas");
const { agregarProducto } = require("./productos");
const { registrarCompra } = require("./compras");

console.log("=== SISTEMA KIOSCO ===");


agregarProducto();
registrarVenta ();
registrarCompra();