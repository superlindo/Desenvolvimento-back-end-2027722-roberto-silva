
module.exports = function(sequelize, DataTypes){
    return sequelize.define('loan', {

        loan_date: {
            type: DataTypes.STRING,
            allowNull: false
          },
          return_date: {
            type: DataTypes.STRING,
            allowNull: false
          },

          });
}
       
      
     
     