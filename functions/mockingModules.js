import axios from "axios";

const getTodos = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
        return response
    } catch (error) {
        console.log(error)
    }
}

export default getTodos