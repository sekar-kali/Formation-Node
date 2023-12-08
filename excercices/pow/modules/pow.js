const chalk = require('chalk');

module.exports = {
    pow : function ({base,exponent}){
        const expoResult=base**exponent;
        if (typeof base === 'number' && typeof exponent === 'number') {
            return chalk.green(expoResult);
          
        }else  {
            return chalk.red("NaN");
        
    }

}
}