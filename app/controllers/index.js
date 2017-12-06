module.exports.index = function (application, req, res) {
    res.render('index', {errors: {}});
};

module.exports.autenticar = function (application, req, res) {
    var dadosForm = req.body();

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.render('index', {errors: errors});
        return;
    }

    var connection = application.config.dbConnection;
    var usuariosDAO = application.app.models.UsuariosDAO(connection);

    usuariosDAO.autenticar(dadosForm, req);

};