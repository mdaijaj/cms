module.exports = (sequelize,Sequelize) => {
    const postTable = sequelize.define("post", {
        post_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title:{
            type:Sequelize.STRING,
        },
        content: {
           type: Sequelize.TEXT
        },
        image: {
            type:Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN,
            default: true
        },
    })
    return postTable;
}