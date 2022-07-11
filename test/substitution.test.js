// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe(("substitutuon() unit functional test"), ()=> {
    describe("error scenario handling", ()=>{
        it("should return false if input is empty",()=> {
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if alphabet is empty",()=> {
            const input = "suprise party";
            const actual = substitution(input);
            expect(actual).to.be.false;
        });
        it("should return false if alphabet length is not equal to 26",()=> {
            const input = "suprise party";
            const alphabet = "plmoknijbuhvygctfxrdzeswa";
            const actual = substitution(input,alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if does not have unique characters",()=> {
            const input = "suprise party";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(input,alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encode message", ()=>{
        it("should encode the message",()=> {
            const input = "suprise party";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(input,alphabet);
            const expected = "rztxbrk tpxda";
            expect(actual).to.equal(expected);
        });
        it("should encode the message",()=> {
            const input = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(input,alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected);
        });
        
    });

    describe("decode the input and shift opposite",()=>{
        it("decode numbers to message",() =>{
            const input = "rztxbrk tpxda";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(input,alphabet,false);
            const expected = "suprise party";
            expect(actual).to.equal(expected);
        });
    })

})