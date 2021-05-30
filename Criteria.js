/**
 * Criteria class to identify each criteria item.
 * Author: Murlidhar Varma
 */
const OperatorFactory = require("./OperatorFactory");

class Criteria{
    constructor(operation, data, defaultAttribute=null){
        this.operation = operation;
        this.operator = OperatorFactory.getOperator(this.operation, data, defaultAttribute);
    }

    validate(data){
        return this.operator.operate(data);
    }
}

module.exports = Criteria;