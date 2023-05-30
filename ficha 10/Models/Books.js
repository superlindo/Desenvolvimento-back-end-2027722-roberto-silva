
module.exports = function(sequelize, DataTypes){
    return sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
          autor_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          publication_date: {
            type: DataTypes.STRING,
            allowNull: false
          },
          genre: {
            type: DataTypes.STRING,
            allowNull: false
          },
          available_copies: {
            type:DataTypes.STRING,
            allowNull: false
          }

          });
}
       
      
     
     