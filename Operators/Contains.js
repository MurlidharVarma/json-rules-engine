/**
 *  Contains Operator Class
 * Author: Murlidhar Varma
 */
 class Contains{
    constructor({value, attribute}, defaultAttribute = null){
        this.name = "Contains";

        if (!(value && value!=null && typeof(value) == "string" && value.trim().length>0)){
            throw new Error(`${this.name} operator expects string as 'value' but didnt find`);
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
        if(val && val!=null && val.indexOf(`${this.value}`) != -1){
            retVal = true;
        }

        return retVal;
    }
}

module.exports = Contains;