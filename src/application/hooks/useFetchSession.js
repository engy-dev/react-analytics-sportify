import { useEffect, useState } from "react";
import { getUserAverageSessions } from "../../infrastructure/api/getAverageSession";
import { UserAverageSessions } from "../../domain/models/UserAverageSessions";
import { useMockData } from "../../infrastructure/config/apiUrl";
import { mockUserSession } from "../../infrastructure/mockData/mockData";

const useFetchSession = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          let data = mockUserSession;
          new UserAverageSessions(data.data.userId, data.data.sessions);
          return setData(data);
        }

        let data = await getUserAverageSessions(userId);
        new UserAverageSessions(data.data.userId, data.data.sessions);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { data, error, loading };
};

export default useFetchSession;
