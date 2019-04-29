/*
Functions to fetch to Estreck API
*/
exports.getCodes = async() => {
    let toReturn = "";
    fetch('https://estreck.ml/codes')
        .then(function(res) {
        return res.json();
        })
        .then(function(json) {
            toReturn = json;
        });
    return toReturn;
};

exports.getUnverifiedCodes = async() => {
    let toReturn = "";
    fetch('https://estreck.ml/nocodes')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            toReturn = json;
        });
    return toReturn;
};

exports.fetchCode = async(search) => {
    let toReturn = "";
    fetch(`https://estreck.ml/codes/search/${search}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            toReturn = json;
        });
    return toReturn;
};

exports.addCode = async() => {
    return `Due to security, post through a npm package is not allowed by Estreck Creator`;
};

