// Получение производительности пользователя по userId
import axios from "axios";
import { apiUrl } from "../config/apiUrl";

export const getUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error("Произошла ошибка при выполнении запроса:", error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};
