# deeper-key
[![Build Status](https://travis-ci.org/johnmcguin/deeper-key.svg?branch=master)](https://travis-ci.org/johnmcguin/deeper-key.svg?branch=master)
[![Packagist](https://img.shields.io/packagist/v/deeper-key.svg)]()
[![Coverage Status](https://coveralls.io/repos/johnmcguin/deeper-key/badge.svg?branch=master)](https://coveralls.io/r/johnmcguin/deeper-key?branch=master)
Vanilla JS object utility for working with complex JavaScript objects

# Features
- method to get all keys from a given object
- method to return bool whether given key exists in a given object
- method to return an array of all values for a given key in a given object

# Installation
```sh
$ npm install --save deeper-key
```
# Usage

### ```deepKeys```
```javascript
let testData = {
    results: {
        success: true,
        nestedResults: {
            success: true,
            numbers: [1,2,3,4],
            deeplyNestedResults: {
                success: true
            },
            randomErrors: ['something went wrong']
        }
    }
};

let allKeys = deepKeys(testData);
//=> ['results', 'success', 'nestedResults', 'success', 'numbers', 'deeplyNestedResults', 'success']
```

### ```deepValues```
```javascript
let allValues = deepValues(testData, 'randomErrors');
//=> ['something went wrong']
```

### ```deepExists```
```javascript
let keyExists = deepExists(testData, 'deeplyNestedResults');
//=> true
```