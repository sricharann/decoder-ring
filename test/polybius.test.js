// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe(("polybius() unit functional test"), ()=> {
    describe("encode message", ()=>{
        it("should encode values to pairs",()=> {
            const message = "party";
            const actual = polybius(message);
            const expected = "5311244445";
            expect(actual).to.equal(expected);
        });
        it("should encode values to pairs",()=> {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";
            expect(actual).to.equal(expected);
        });
        it("should translate both 'i' and 'j' to 42",() =>{
            const message = "suprise";
            const actual = polybius(message);
            const expected = "34545324423451";
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is",() =>{
            const message = "supriseparty for Bob";
            const actual = polybius(message);
            const expected = "345453244234515311244445 124324 214321";
            expect(actual).to.equal(expected);
        });
    });

    describe("decode the input and shift opposite",()=>{
        it("should decode numbers to message",() =>{
            const message = "5311244445";
            const expected = "party";
            const actual = polybius(message, false);
            expect(actual).to.be.equal(expected);
        });
        it("should translate 42 to both 'i' and 'j'",() =>{
            const message = "42";
            const actual = polybius(message, false);
            expect(actual).to.be.contains("i");
            expect(actual).to.be.contains("j");
        });
    })

})