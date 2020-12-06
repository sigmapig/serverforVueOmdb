module.exports = (sequelize, Sequelize) => {
    const Rating= sequelize.define("ratings", {
      Source: { /*"Internet Movie.Rating Database"*/
        type: Sequelize.STRING
      },
      Value: { /* "6.9/10" */
        type: Sequelize.STRING
      },
    });
}