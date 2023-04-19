const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = require("./Connection");

const User = sequelize.define(
    "users", {
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                typeValidator: (value) => {
                    const enums = ["Admin", "applicant"];
                    if (!enums.includes(value)) {
                        throw new Error("Not a valid User type");
                    }
                },
            },
        },
        created_on: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    }, {
        hooks: {
            beforeCreate: async(user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, "a");
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
        },
        timestamps: false,
    }
);
// User.sync().then(() => console.log("Table Users Created"));

module.exports = User;