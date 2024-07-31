import { loadTitle } from "../__mocks__/util"

jest.mock("../__mocks__/http.js")

test("Should print an uppercase text", async () => {
    const title = await loadTitle();
    expect(title).toBe("A NEW PIZZA");
})