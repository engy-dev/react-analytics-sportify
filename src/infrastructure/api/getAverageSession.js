import axios from "axios";
import { apiUrl } from "../config/apiUrl";
import { UserAverageSessions } from "../../domain/models/UserAverageSessions";

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/user/${userId}/average-sessions`
    );
    new UserAverageSessions(
      response.data.data.userId,
      response.data.data.sessions
    );
    return response.data;
  } catch (error) {
    console.error("Произошла ошибка при выполнении запроса:", error);
    throw error; // Passing error on for processing
  }
};
