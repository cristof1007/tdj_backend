var DataTypes = require("sequelize").DataTypes;
var _Categorias = require("./Categorias");
var _Fallos = require("./Fallos");
var _Materias = require("./Materias");
var _Procesos = require("./Procesos");
var _SequelizeMeta = require("./SequelizeMeta");

function initModels(sequelize) {
  var Categorias = _Categorias(sequelize, DataTypes);
  var Fallos = _Fallos(sequelize, DataTypes);
  var Materias = _Materias(sequelize, DataTypes);
  var Procesos = _Procesos(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);

  Fallos.belongsTo(Categorias, { as: "idFormaResolucion_Categoria", foreignKey: "idFormaResolucion"});
  Categorias.hasMany(Fallos, { as: "Fallos", foreignKey: "idFormaResolucion"});
  Fallos.belongsTo(Categorias, { as: "idTipoFallo_Categoria", foreignKey: "idTipoFallo"});
  Categorias.hasMany(Fallos, { as: "idTipoFallo_Fallos", foreignKey: "idTipoFallo"});
  Fallos.belongsTo(Categorias, { as: "idTitulo_Categoria", foreignKey: "idTitulo"});
  Categorias.hasMany(Fallos, { as: "idTitulo_Fallos", foreignKey: "idTitulo"});
  Procesos.belongsTo(Materias, { as: "idMateria_Materia", foreignKey: "idMateria"});
  Materias.hasMany(Procesos, { as: "Procesos", foreignKey: "idMateria"});
  Fallos.belongsTo(Procesos, { as: "idProceso_Proceso", foreignKey: "idProceso"});
  Procesos.hasMany(Fallos, { as: "Fallos", foreignKey: "idProceso"});

  return {
    Categorias,
    Fallos,
    Materias,
    Procesos,
    SequelizeMeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
