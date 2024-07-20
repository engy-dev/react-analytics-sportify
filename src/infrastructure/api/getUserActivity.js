import axios from "axios";
import { apiUrl } from "../config/apiUrl";

// Получение активности пользователя по userId
export const getUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error("Произошла ошибка при выполнении запроса:", error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};
