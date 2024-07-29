const woof = require("../functions/woof")

test("Testing woof function", () => {
    const result = woof("test");
    expect(result).toBe("4woof");
})

test("Must be a string condition", () => {
    expect(() => woof()).toThrow("Must be a string")
})
