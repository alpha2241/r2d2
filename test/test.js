const chai = require('chai');
const expect = chai.expect;

describe("simple test",()=>{
    context("inside first",()=>{

        it("test something",()=>{
            expect(2).to.equal(2)
        })

        it("test 2",()=>{
            expect({name : "Foo"}).to.deep.equal({name : "foo"})
        })


        it("test something",()=>{
            expect(2).to.equal(2)
        })

        it("test 2",()=>{
            expect({name : "Foo"}).to.deep.equal({name : "foo"})
        })


        it("test something",()=>{
            expect(2).to.equal(2)
        })

        it("test 2",()=>{
            expect({name : "Foo"}).to.deep.equal({name : "foo"})
        })


        it("test something",()=>{
            expect(2).to.equal(2)
        })

        it("test 2",()=>{
            expect({name : "Foo"}).to.deep.equal({name : "foo"})
        })


    })
})
