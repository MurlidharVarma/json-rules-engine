/**
 * Builds CriteriaGroup and Criteria object based on rules passed
 * Author: Murlidhar Varma
 */
const CriteriaGroup = require("./CriteriaGroup");
const Criteria = require("./Criteria");
const operatorList = Object.keys(require('./Operators'));
const combinatorList = Object.keys(require('./Combinators'));

class CriteriaBuilder{

    OPERATOR = operatorList;
    COMBINATOR = combinatorList;

    constructor(criteriaElement, defaultAttribute=null){
        // Initiate criteria extractions
        if(criteriaElement && criteriaElement!=null){
           this.criteriaElement = this.extractCriteria(criteriaElement, defaultAttribute);
        }
    }

    // recursively run throught the rules tree and compose CriteriaGroup and Criteria
    extractCriteria(criteriaElement, defaultAttribute){
        let result = null;
        const keys = Object.keys(criteriaElement);
        for(let key of keys){
            if(this.COMBINATOR.indexOf(key) != -1){
                let combiVal = criteriaElement[key];
                let criteriaGroup = new CriteriaGroup(key);
                for (const combiValItem of combiVal){
                    criteriaGroup.addCriteria(this.extractCriteria(combiValItem, defaultAttribute));
                }
                result = criteriaGroup;
            }else if(this.OPERATOR.indexOf(key) != -1){
                result = new Criteria(key,criteriaElement[key],defaultAttribute);
            }
        }
        return result;
    }

    // Returns the resultant Criteria Object based on rule passed
    getCriteria(){
        return this.criteriaElement;
    }

    // helper function to debug
    toString(){
        if(this.criteriaElement && this.criteriaElement!=null){
            console.log(JSON.stringify(this.criteriaElement,null, "\\n"));
        }
    }
}

module.exports = CriteriaBuilder;