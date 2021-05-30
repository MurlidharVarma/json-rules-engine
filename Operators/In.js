/**
 *  IN Operator Class
 * Author: Murlidhar Varma
 */
 class In{
    constructor({value, attribute}, defaultAttribute = null){
        this.name = "IN";

        if (!(value && value!=null && Array.isArray(value) && value.length>0)){
            throw new Error(`${this.name} operator expects array as 'value' with atleast one element but didnt find`);
        }
        this.value = value;
        this.attribute = (attribute && attribute!=null && attribute.trim().length>0)?attribute.trim():defaultAttribute;
    }

    operate(data){
        let val = data;
        let retVal = false
        if(this.attribute != null){
            val = data[this.attribute];
        }

        if(this.value.indexOf(val) != -1 || this.value.indexOf(`${val}`) != -1){
            retVal = true;
        }

        return retVal;
    }
}

module.exports = In;