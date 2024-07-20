import { useEffect, useState } from "react";
import { getUserActivity } from "../../infrastructure/api/getUserActivity";
import { UserActivity } from "../../domain/models/UserActivity";
import { mockUserActivityData } from "../../infrastructure/mockData/mockData";
import { useMockData } from "../../infrastructure/config/apiUrl";

const useFetchActivity = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          let data = mockUserActivityData;
          new UserActivity(data.data.userId, data.data.sessions);
          return setData(data);
        }

        let data = await getUserActivity(userId);
        new UserActivity(data.data.userId, data.data.sessions);
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

export default useFetchActivity;
