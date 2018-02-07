'use strict';

module.exports = {
  deepKeys, 
  deepExists,
  deepValue
};

// api
function deepKeys(obj) {
  return _deepKeys(obj, []);
}

function deepExists(obj, key) {
  return _deepKeys(obj, []).includes(key);
}

function deepValue(obj, targetKey) {
  let results = [];
  _deepValue(obj, targetKey, results);
  return results;
}


// private functions
function _deepKeys(obj, initializer) {
  let objectKeys = Object.keys(obj);
  return objectKeys.reduce((accumulator, currentKey) => {
    accumulator.push(currentKey);

    if(typeof obj[currentKey] === 'object' && !Array.isArray(obj[currentKey])) {
      _deepKeys(obj[currentKey], accumulator);
    }

    if(Array.isArray(obj[currentKey])) {
      obj[currentKey].forEach(item => {
        _deepKeys(item, accumulator);
      });
    }

    return accumulator;
  }, initializer);
} 

function _deepValue(obj, targetKey, results) {
  if(_isObject(obj)) {
    if(obj[targetKey]) return results.push(obj[targetKey]);
    for(let key in obj) {
      _deepValue(obj[key], targetKey, results);
    }
  }
}

function _isObject(value) {
  let type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}