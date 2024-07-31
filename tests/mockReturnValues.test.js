
const myMock = jest.fn();
const filterTestFn = jest.fn();

describe("Mock return values", () => {

    test("Using mockReturnValueOnce", () => {
        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
        console.log(myMock(), myMock(), myMock())
    })

    test("filterTestFn test", () => {
        filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
        const result = [11, 12].filter(num => filterTestFn(num));

        console.log(result);
        // > [11]

        console.log(filterTestFn.mock.calls[0][0]); // 11
        console.log(filterTestFn.mock.calls[1][0]); // 12

    })

})