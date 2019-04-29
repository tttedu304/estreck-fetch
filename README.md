<p align="center"><img align="center" src="https://media.discordapp.net/attachments/546760912384688160/570382812960784394/unknown.png?width=1280&height=640" title="estreck logo"></p>

# **Estreck**

>Estreck is a Base Code Extractor which you can get a base/basic code to use in your application.
>Estreck is made in JavaScript, using Node.js and Express, and uses the mongoose database to store all the codes, using the Levenshtein algorithm among other search functions we can know exactly what code you are referring to 99.9% of the time.

# Using Package

>At the moment, package has 4 avaliable functions, here down how to use them

### getCodes

```javascript
const estreck = require("estreck-fetch");

console.log(estreck.getCodes());
//This will return an array of objects / Verified codes

//Verificated codes = codes that would work perfectly in your project
```

### getUnverifiedCodes

```javascript
const estreck = require("estreck-fetch");

console.log(estreck.getUnverifiedCodes());
//This will return an array of objects / Unverified codes

//Unverified codes = codes that could include malicious code or it has not been accepted by Estreck
```

### fetchCode

```javascript
const estreck = require("estreck-fetch");
let toSearch = "Random";

estreck.fetchCode(toSearch);
```

### addCode

```javascript
const estreck = require("estreck-fetch");

console.log(estreck.addCode());
```