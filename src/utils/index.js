/*
Functions to fetch to Estreck API
*/
const fetch = require('node-fetch');
exports.getCodes = async() => {
    let toReturn = "";
    fetch('https://estreck.ml/codes')
        .then((res) => {
        return res.json();
        })
        .then((json) => {
            toReturn = json;
        })
        .catch(err => console.log(err));
    return toReturn;
};

exports.getUnverifiedCodes = async() => {
    let toReturn = "";
    fetch('https://estreck.ml/nocodes')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            toReturn = json;
        })
        .catch(err => console.log(err));
    return toReturn;
};

exports.fetchCode = async(search) => {
    let toReturn = "";
    fetch(`https://estreck.ml/codes/search/${search}`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            toReturn = json;
        })
        .catch(err => console.log(err));
    return toReturn;
};

exports.addCode = async() => {
    return `Due to security, post through a npm package is not allowed by Estreck Creator`;
};

