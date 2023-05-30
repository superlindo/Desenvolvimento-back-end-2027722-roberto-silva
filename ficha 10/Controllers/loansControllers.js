const Loan = require('../sequelize').Loan;
exports.getAllLoans = (req, res, next)=>{
    Loan.findAll().then(results =>{
        res.send(results);
    })
}