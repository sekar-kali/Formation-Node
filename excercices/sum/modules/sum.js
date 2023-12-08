const chalk = require('chalk');

// module.exports = {
// sum: function ({divisor1,divisor2,number}) {
//         if (typeof number !== 'number') {
//             return "'number' doit être un chiffre.";
//         }
//         const divisibleNumbers = [];

//         for (let i = 1; i <= number; i++) {
//             if (i % divisor1 === 0 || i % divisor2 === 0) {
//                 divisibleNumbers.push(i);
//             }
//         }
//         return divisibleNumbers;
//     }
// };

module.exports = {
    sum: function ({ divisor1, divisor2, number }) {

        const divisibleNumbersSet = new Set();

        for (let i = 1; i < number; i++) {
            if (i % divisor1 === 0 || i % divisor2 === 0) {
                divisibleNumbersSet.add(chalk.red(i));
            }
        }

        const divisibleNumbersArray = Array.from(divisibleNumbersSet);

        return { divisor1, divisor2, result : divisibleNumbersArray };
    }
};