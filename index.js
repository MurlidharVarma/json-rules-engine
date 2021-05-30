const CriteriaBuilder = require('./CriteriaBuilder');

class Engine{

    static apply(data, rule, defaultAttribute=null){
        const datum = data || null;

        //If rule is not defined then throw error
        if(!(rule && rule!=null)){
            throw new Error("Rule not defined");
        }

        //if no data to validate against then assume that the rule is not statisfied
        if (!(data && data!=null)){
            return false;
        }

        const builder = new CriteriaBuilder(rule, defaultAttribute);

        return builder.getCriteria().validate(data);
    }


}

module.exports = Engine;
