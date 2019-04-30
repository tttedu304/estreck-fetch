/*
Functions to fetch to Estreck API
*/
const fetch = require('node-fetch');
exports.getCodes = async() => {
    let res = await fetch('https://estreck.ml/codes');
    return res.json;
};

exports.getUnverifiedCodes = async() => {
    let res = await fetch('https://estreck.ml/nocodes');
    return res.json;
};

exports.fetchCode = async(search) => {
    let res = await fetch(`https://estreck.ml/codes/search/${search}`);
    return res.json;
};

exports.addCode = async() => {
    return `Due to security, post through a npm package is not allowed by Estreck Creator`;
};

