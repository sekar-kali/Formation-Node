
const chalk = require('chalk');
module.exports = {
    lottery: function(min, max, count) {
      const results = [];
      while (results.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)+ min) ;
        if (!results.includes(randomNumber)) {
          results.push(chalk.red(randomNumber));
        }
      }
      return results;
    },
  
    gagnant: function(participants) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      return participants[randomIndex];
    }
  };

const participants = ["Alice", "Bob", "Charlie"];

