import axios from 'axios';

// Get base URL from .env
const apiUrl = `http://localhost:3000`;

// Getting user activity by userId
export const getUserActivity = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/user/${userId}/activity`);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; // Forward the error further for processing
    }
};
