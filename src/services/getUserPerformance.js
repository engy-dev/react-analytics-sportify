// Getting user performance by userId
import axios from "axios";

const apiUrl = `http://localhost:3000`;

export const getUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/user/${userId}/performance`);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; // Forward the error further for processing
    }
};