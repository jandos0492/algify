'use strict';

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PendingSignUps', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            token: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            hashedPassword: {
                type: Sequelize.STRING.BINARY,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            }
        }, options);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('PendingSignUps');
    }
};