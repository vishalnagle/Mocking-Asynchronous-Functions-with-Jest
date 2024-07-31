import defaultExport, { bar, foo } from "../functions/foo-bar-baz";

// Partial module example

jest.mock("../functions/foo-bar-baz.js", () => {
    const originalModule = jest.requireActual("../functions/foo-bar-baz.js");

    //Mock the default export and named export 'foo'

    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => "mocked baz"),
        foo: "mocked foo"
    }
})

test("Should do a partial mock", () => {
    const defaultExportResult = defaultExport();

    expect(defaultExportResult).toBe("mocked baz")
    expect(defaultExport).toHaveBeenCalled()
    expect(foo).toBe("mocked foo")
    expect(bar()).toBe("bar")

})

