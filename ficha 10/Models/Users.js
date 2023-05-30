
module.exports = function(sequelize, DataTypes){
    return sequelize.define('user', {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          adress: {
            type: DataTypes.STRING,
            allowNull: false
          },
          phone_number: {
            type:DataTypes.INTEGER
          }

          });
}
       
      
     
     