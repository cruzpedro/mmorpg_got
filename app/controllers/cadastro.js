module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {errors: {}, dadosForm: {}});
};

module.exports.cadastrar = function (application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();
    req.assert('casa', 'Casa não pode ser vazia').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.render('cadastro', {errors: errors, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    UsuariosDAO.inserirUsuario(dadosForm);

    res.send();
};