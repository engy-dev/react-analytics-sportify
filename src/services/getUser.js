import axios from 'axios';

// Get the base URL
const apiUrl = `http://localhost:3000`;

// Retrieving information about a user by userId
export const getUserInfo = async (userId) => {
    try {
        const response = await axios.get(`${apiUrl}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; //Forward the error further for processing
    }
};
