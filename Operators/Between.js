/**
 * Between Operator Class
 */
 class Between{
    constructor({min, max, attribute}, defaultAttribute = null){
        this.name = "Between";

        if (!((min && min!=null) && (min && min!=null))){
            throw new Error(`${this.name} operator expects 'min' and 'max' but didnt find`);
        }

        this.min = min;
        this.max = max;
        this.attribute = (attribute && attribute!=null && attribute.trim().length>0)?attribute.trim():defaultAttribute;
    }

    operate(data){
        let val = data;
        let retVal = false
        if(this.attribute != null){
            val = +data[this.attribute];
        }

        if(val >= this.min && val < this.max){
            retVal = true;
        }

        return retVal;
    }
}

module.exports = Between;
