const operatorsMaster = require('./Operators');

/***
 * Factory to pick correct Operator
 * Author: Murlidhar Varma
 */
class OperatorFactory{
    getOperator(type, data, defaultAttribute){

        const operators = Object.keys(operatorsMaster);

        if(operators.indexOf(type) != -1){
            return new operatorsMaster[type](data, defaultAttribute);
        }else{
            throw new Error(`No Operator called '${type}'. Please check.`);
        }
    }
}

module.exports = new OperatorFactory();