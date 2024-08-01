import { loadTitle } from "../__mocks__/util"


test("Should print an uppercase text", async () => {
    const title = await loadTitle();
    expect(title).toBe("A NEW PIZZA");
})