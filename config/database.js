var sql = require('mssql');
var config = require('./config')();

module.exports = function() {
  var configBanco = {
    user: config.userBanco,
    password: config.passBanco,
    server: config.servidorBanco,
    database: config.nomeBanco,
    port: config.portBanco,
    stream: true,
    options: {}
  }

  sql.connect(configBanco, function(err) {
    console.log('Conectou ao banco!');
    // ... error checks

    // var request = new sql.Request();
    // request.stream = true; // You can set streaming differently for each request
    // request.query('select * from verylargetable'); // or request.execute(procedure);
    //
    // request.on('recordset', function(columns) {
    //     // Emitted once for each recordset in a query
    // });
    //
    // request.on('row', function(row) {
    //     // Emitted for each row in a recordset
    // });
    //
    // request.on('error', function(err) {
    //     // May be emitted multiple times
    // });
    //
    // request.on('done', function(returnValue) {
    //     // Always emitted as the last one
    // });
  });

  sql.on('error', function(err) {
    console.log('Erro ao conectar ao banco!');
    console.log(err);
    // ... error handler
  });
}
