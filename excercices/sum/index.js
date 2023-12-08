
const chalk = require('chalk');

const {sum} = require('./modules/sum')

    const result = sum({divisor1:3,divisor2:5,number:20});
    console.log(chalk.green(`Voici les éléments divisibles par ${result.divisor1} ou ${result.divisor2} :`));
    console.log(chalk.red(result.result).replaceAll(',', chalk.green('-')))
