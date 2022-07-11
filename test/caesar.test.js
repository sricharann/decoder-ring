// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe(("caesar() unit functional test"), ()=> {
    describe("error scenario handling", ()=>{
        it("should shift max limit to 25",()=> {
            const message = "suprise party";
            const shift = 26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        it("should shift limit not equal to 0",()=> {
            const message = "suprise party";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        it("should shift min limit -26",()=> {
            const message = "suprise party";
            const shift = -26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });
    describe("encode values", ()=>{
        it("should encode the input with shift 3 ",()=> {
            const message = "Zebra Magazine";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "cheud pdjdclqh";
            expect(actual).to.equal(expected);
        });
        it("should encode the input with shift 3 ",()=> {
            const message = "supriseparty";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "vxsulvhsduwb";
            expect(actual).to.equal(expected);
        });
        it("should encode the space as is",() =>{
            const message = "suprise party";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "vxsulvh sduwb";
            expect(actual).to.equal(expected);
        });
        it("should encode the input with shift 3 and ignore captial space",() =>{
            const message = "supriseparty for Bob";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "vxsulvhsduwb iru ere";
            expect(actual).to.equal(expected);
        });
        it("should encode the input with shift 3 and ignore captial space",() =>{
            const message = "supriseparty for Bob";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "prmofpbmxoqv clo yly";
            expect(actual).to.equal(expected);
        });
    });

    describe("decode the input and shift opposite",()=>{
        it("should decore message",() =>{
            const message = "vxsulvh";
            const shift  = 3;
            const expected = "suprise";
            const actual = caesar(message, shift, false);
            expect(actual).to.be.equal(expected);
        });
    })

})