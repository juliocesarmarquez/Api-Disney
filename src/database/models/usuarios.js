const { Sequelize, DataTypes, ValidationError } = require('sequelize');
function creaUsuarioModel(connection) {
    const User = connection.define('Usuarios', {
        nombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    },{
        timestamps: false
    });
    return User;
}

module.exports = {
    creaUsuarioModel
}