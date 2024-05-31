import axios from "axios";

const apiUrl = `http://localhost:3000`;

export const getUserAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/user/${userId}/average-sessions`);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; // Forward the error further for processing
    }
};