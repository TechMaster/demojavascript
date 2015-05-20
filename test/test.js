/**
 * Created by techmaster on 5/19/15.
 */
var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("../StringExtend.js");
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
        it('reverse string love', function(){
            expect("love".reverse()).to.equal("evol");
        });

        it('reverse string abcdefgh', function(){
            expect("abcdefgh".reverse()).to.equal("hgfedcba");
        });
    });

    describe('camelcase()', function(){
        it('camelize string "all men are created equal"', function(){
            expect("all men are created equal".camelcase()).to.equal("All Men Are Created Equal");
        });
    });
});
