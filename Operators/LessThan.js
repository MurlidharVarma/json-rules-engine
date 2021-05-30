/***
 * Houses all operator classes
 * Author: Murlidhar Varma
 */

/**
 * Less Than Operator Class
 */
 class LessThan{
    constructor({value, attribute}, defaultAttribute = null){        
        this.name = "LessThan";

        if (!(value && value!=null)){
            throw new Error(`${this.name} operator expects 'value' but didnt find`);
        }

        this.value = value;
        this.attribute = (attribute && attribute!=null && attribute.trim().length>0)?attribute.trim():defaultAttribute;
    }

    operate(data){
        let val = data;
        let retVal = false
        if(this.attribute != null){
            val = +data[this.attribute];
        }

        if(val < this.value){
            retVal = true;
        }

        return retVal;
    }
}

module.exports = LessThan;