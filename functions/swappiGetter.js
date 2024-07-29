import axios from "axios";

const swapiGetter = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        return response.data.name
    } catch (error) {
        console.log(error)
    }
}

export default swapiGetter