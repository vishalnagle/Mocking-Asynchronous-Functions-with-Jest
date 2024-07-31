import mockAxios from "axios";
import getTodos from "../functions/mockingModules";


jest.mock("axios")

mockAxios.get.mockResolvedValue({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
})

test("Should fetch todos", async () => {
    const result = await getTodos();
    expect(result).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
})
