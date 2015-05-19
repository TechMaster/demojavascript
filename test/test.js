/**
 * Created by techmaster on 5/19/15.
 */
var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("./string_methods.js");
/*describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});*/

describe('String', function() {
    describe('reverse()', function(){
        it('should reverse string', function(){
            expect("love".reverse()).to.equal("evol");
        })
    })
});
