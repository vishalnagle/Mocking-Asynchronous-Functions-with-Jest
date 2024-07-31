import swapiGetter from "../functions/swappiGetter";
import mockAxios from "axios";


jest.mock("axios")

mockAxios.get.mockResolvedValue({ data: { name: "Luke Skywalker" } })


describe("swappiGetter GET api test", () => {
    afterEach(jest.clearAllMocks)

    test("should return a name", async () => {
        const result = await swapiGetter(1);
        expect(result).toBe("Luke Skywalker")
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    })
})