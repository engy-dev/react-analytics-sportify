import { useEffect, useState } from "react";
import { getUserPerformance } from "../../infrastructure/api/getUserPerformance";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { useMockData } from "../../infrastructure/config/apiUrl";
import { mockUserPerformance } from "../../infrastructure/mockData/mockData";

const useFetchPerformance = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          let data = mockUserPerformance;
          new UserPerformance(data.data.userId, data.data.kind, data.data.data);
          return setData(data);
        }

        const data = await getUserPerformance(userId);
        new UserPerformance(data.data.userId, data.data.kind, data.data.data);
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

export default useFetchPerformance;
