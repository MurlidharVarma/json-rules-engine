const LessThan = require("./LessThan");
const LessThanEqual = require("./LessThanEqual");
const GreaterThan = require("./GreaterThan")
const GreaterThanEqual = require("./GreaterThanEqual");
const Equal = require("./Equal");
const Between = require("./Between");
const In = require("./In");
const Contains = require("./Contains");

module.exports = { 
    "lessThan": LessThan, 
    "lessThanEqual": LessThanEqual,
    "greaterThan": GreaterThan,
    "greaterThanEqual": GreaterThanEqual, 
    "equal": Equal,
    "between": Between,
    "in": In,
    "contains": Contains
}