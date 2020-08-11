module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    return app.model.define('buryinfo', {
        _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        type_id: STRING,
        business_desc: STRING,
        parameter: STRING,
        user_email: STRING,
        user_phone: STRING,
        user_name: STRING,
        is_registered: INTEGER,
        disable: INTEGER,
        platform: STRING,
        category: STRING
      });
  };
