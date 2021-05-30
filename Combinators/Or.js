/**
 * Author: Murlidhar Varma
 */
class OR {
    constructor(criterias){
        this.name = "OR";
        this.criterias = criterias;
    }

    operate(data){
        let retVal = -1;
        if(data && data !=null && this.criterias && this.criterias!=null){
           for(let criteria of this.criterias){
                if(retVal == -1){
                    retVal = criteria.validate(data)
                }else{
                    retVal = retVal || criteria.validate(data);
                }
           }
        }
        return (retVal==-1?true:retVal);
    }
}

module.exports = OR;