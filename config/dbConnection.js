var mongo = require('mongodb');

var connMongoDB = function () {
    return new mongo.Db(
        'got', //string contendo o nome do banco
        new mongo.Server(
            'localhost', //string contendo o endereço do servidor
            27017, //porta da conexão
            {} // configurações adicionais
        ),
        {} // configurações adicionais
    );
};

module.exports = function () {
    return connMongoDB;
};
