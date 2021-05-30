const combinatorMaster = require('./Combinators');

/***
 * Factory to pick correct Combinator
 * Author: Murlidhar Varma
 */
class CombinatorFactory{
    getOperator(type, criterias){
        const combinators = Object.keys(combinatorMaster);

        if(combinators.indexOf(type) != -1){
            return new combinatorMaster[type](criterias);
        }else{
            throw new Error(`No Combinator called '${type}'. Please check.`);
        }
    }
}

module.exports = new CombinatorFactory();