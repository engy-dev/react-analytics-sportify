import { useEffect, useState } from "react";
import { getUserInfo } from "../../infrastructure/api/getUser";
import { useMockData } from "../../infrastructure/config/apiUrl";
import { mockUser } from "../../infrastructure/mockData/mockData";
import { KeyData, User, UserInfos } from "../../domain/models/User";

const useFetchUser = (userId) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          let data = mockUser;
          const userInfos = new UserInfos(
            data.data.userInfos.firstName,
            data.data.userInfos.lastName,
            data.data.userInfos.age
          );

          const keyData = new KeyData(
            data.data.keyData.calorieCount,
            data.data.keyData.proteinCount,
            data.data.keyData.carbohydrateCount,
            data.data.keyData.lipidCount
          );

          new User(data.data.id, userInfos, data.data.todayScore, keyData);
          return setData(data);
        }

        let data = await getUserInfo(userId);
        const userInfos = new UserInfos(
          data.data.userInfos.firstName,
          data.data.userInfos.lastName,
          data.data.userInfos.age
        );

        const keyData = new KeyData(
          data.data.keyData.calorieCount,
          data.data.keyData.proteinCount,
          data.data.keyData.carbohydrateCount,
          data.data.keyData.lipidCount
        );

        new User(data.data.id, userInfos, data.data.todayScore, keyData);
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

export default useFetchUser;
