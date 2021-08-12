
module.exports = (sequelize, DataTypes) => {
    const ClockModel = sequelize.define("ClockModel", {
        time : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        title : {
            type : DataTypes.STRING
        }
    });
    return ClockModel;
}