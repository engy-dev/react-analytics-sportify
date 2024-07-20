import axios from "axios";
import { apiUrl } from "../config/apiUrl";

// Получение информации о пользователе по userId
export const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Произошла ошибка при выполнении запроса:", error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};
