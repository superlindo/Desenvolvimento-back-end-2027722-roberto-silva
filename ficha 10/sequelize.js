//const express = require('express');  
const Sequelize = require('sequelize');




//fazendo a ligaç~so com a base de dados
const sequelize = new Sequelize('ficha_10', 'root', '', {
  host: 'localhost',
    dialect: 'mysq1'
});

const User = UserDataModel(sequelize,DataTypes);
const Book = BookDataModel(sequelize, DataTypes);
const Loan = LoanDataModel(sequelize, DataTypes);

// Defenir relação

User.hasMany(Loan);
Loan.belongsTo(User); // diz em k tabela fica achave estrangeira
Book.hasMany(Loan, { onDelete: 'CASCADE'})
Loan.belongsTo(Book);

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established")
  })
  .catch(err => {
    console.error("Unable to connect", err);
  }); // part d ligaçao