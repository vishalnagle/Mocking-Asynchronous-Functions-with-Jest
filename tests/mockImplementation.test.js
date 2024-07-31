jest.mock('../functions/mockImplementation.js'); // this happens automatically with automocking
const foo = require('../functions/mockImplementation.js');


test("Mock implementation", () => {

    // foo is a mock function
    foo.mockImplementation(() => 42);
    foo();
    // > 42

    const myMockFn = jest
        .fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));

    myMockFn((err, val) => console.log(val));
    // > true

    myMockFn((err, val) => console.log(val));
    // > false

    const myMockFn1 = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log(myMockFn1(), myMockFn1(), myMockFn1(), myMockFn1());
    // > 'first call', 'second call', 'default', 'default'

})





