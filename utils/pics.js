const sequelize = require('../config/connection');
const { pics } = require('../models');

const picsUpdateVote = async (pictId) => {
  await pics.findOne({
    where: { id: pictId }
  }).then( p => {
      if (p) {
        return p.update(
          { vote: p.vote + 1 }, 
          { where: { id: pictId }} 
        ).then( res => {
          console.log(res)
        }).catch(error => {
          console.error('Failed to create a new record : ', error);
        })
      } else {
        console.error('Error : The Picture Id = [' + pictId + '] does not exist !');
      }
  }).catch(error => {
    console.error('Error : ', error);
  });
  process.exit(0);
};

// For testing
// Update Picture Id
//  const id = 1;
//  picsUpdateVote(3);

module.exports = picsUpdateVote
