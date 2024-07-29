import swapiGetter from "../functions/swappiGetter"


describe("swappiGetter GET api test", () => {
    test("should return a name", async () => {
        const result = await swapiGetter(1);
        expect(result).toBe("Luke Skywalker")
    })
})