const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const { deepKeys, deepExists, deepValues } = require('./deeper-key');

describe('Deep Keys', () => {
    let testData = {
        results: {
            success: true,
            nestedResults: {
                success: true,
                numbers: [1,2,3,4],
                deeplyNestedResults: {
                    success: true
                }
            }
        }
    };

    it('should return an array of all keys of a given object', () => {
        let allKeys = deepKeys(testData);
        expect(allKeys).to.be.an('array').with.lengthOf(7);
    });
});

describe('Deep Exists', () => {
    let testData = {
        results: {
            success: true,
            nestedResults: {
                success: true,
                deeplyNestedResults: {
                    success: true
                }
            }
        }
    };

    it('should return true if the given key exists in the given object', () => {
        let boolValue = deepExists(testData, 'deeplyNestedResults');
        expect(boolValue).to.be.true;
    });

    it('should return false if the given key does not exist in the given object', () => {
        let boolValue = deepExists(testData, 'testKey');
        expect(boolValue).to.be.false;
    });
});

describe('Deep Values', () => {
    let testData = {
        results: {
            success: true,
            nestedResults: {
                success: true,
                deeplyNestedResults: {
                    success: [1,2,3]
                }
            }
        }
    };

    it('should return an array of all values in a given object for the given key', () => {
        let allValues = deepValues(testData, 'success');
        expect(allValues).to.be.an('array').with.lengthOf(5);
    });

    it('should return an empty array if there are no values for a given key', () => {
        let allValues = deepValues(testData, 'nothing');
        expect(allValues).to.be.an('array').that.is.empty;
    });
});