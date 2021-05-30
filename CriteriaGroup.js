/**
 * Criteria Group class as composite for all Criteria
 * Author: Murlidhar Varma
 */
const CombinatorFactory = require("./CombinatorFactory");

class CriteriaGroup{
    constructor(operation, criterias=[]){
        this.operation = operation; 
        this.criterias = criterias;
    }

    validate(data){
        this.operator = CombinatorFactory.getOperator(this.operation, this.criterias);
        return this.operator.operate(data);
    }

    addCriteria(criteria){
        this.criterias.push(criteria);
    }
}

module.exports = CriteriaGroup;
