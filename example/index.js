const Engine = require("@aipeel/json-rules-engine")

const rule = {
                    "AND": [
                            { 
                                "AND": [
                                    { "lessThan": {"value": "80", "attribute": "price"} },
                                    { "greaterThanEqual": {"value": "20", "attribute": "price"} },
                                    { "between": { "min": "10", "max": "20", "attribute": "discount" }}
                                ]
                            },
                            {
                                "OR":[
                                    { "contains": { "value": "great", "attribute": "desc" }},
                                    { "contains": { "value": "works", "attribute": "features"}},
                                    { "in": { "value": ["C","Javascript","Python"], "attribute": "lang"}},
                                ]
                            }
                        ]
                    }

let data = {
    id: 'ID1001',
    price: 50,
    discount: 10,
    desc: "This is a great product for developers",
    features: ["No Dependencies", "Open to Extension", "Synchronous", "works"],
    tags: ["json", "rule", "engine"],
    lang: "Javascript"
}

// example 1
console.log(`Does the data conform to rule? --> ${Engine.apply(data,rule)?"Yes":"No"}`);

//example 2
data.price = 100;
console.log(`Does the data conform to rule? --> ${Engine.apply(data,rule)?"Yes":"No"}`);

//example 3
data.price = 50;
data.discount = 21;
console.log(`Does the data conform to rule? --> ${Engine.apply(data,rule)?"Yes":"No"}`);

