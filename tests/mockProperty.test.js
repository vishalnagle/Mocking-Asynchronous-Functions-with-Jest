
const myMock1 = jest.fn();

const a = new myMock1();

console.log(myMock1.mock.instances)
// > [ <a> ]


const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]


test("Mock property",()=>{
    
})