const User = require('./user');
const pics = require('./pics');

User.hasMany(pics,{
  foreignKey: "user_email",
  onDelete: "CASCADE",
});

pics.belongsTo(User,{
  foreignKey: "user_email",
});



module.exports = { User, pics };

