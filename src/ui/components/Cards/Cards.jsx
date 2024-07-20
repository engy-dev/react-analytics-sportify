import React from "react";
import DataCards from "../DataCards/DataCards";
import calory from "../../../assets/img/fire.svg";
import protein from "../../../assets/img/chicken.svg";
import glucid from "../../../assets/img/apple.svg";
import lipide from "../../../assets/img/cheeseburger.svg";
import useFetchUser from "../../../application/hooks/useFetchUser";

const Cards = () => {
  const { data, error, loading } = useFetchUser(12);
  const userData = data;

  return (
    <div
      className={
        "w-full lg:max-w-[300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-start gap-3 pt-7"
      }
    >
      {/*Calory stats*/}
      <DataCards
        color={`#FF0000`}
        icon={calory}
        data={`${userData?.data?.keyData?.calorieCount}kCal`}
        title={"Calories"}
        error={error}
        loading={loading}
      />

      {/*Protein stats*/}
      <DataCards
        color={`#4AB8FF`}
        icon={protein}
        data={`${userData?.data?.keyData?.proteinCount}g`}
        title={"Proteines"}
        error={error}
        loading={loading}
      />

      {/*Glucide stats*/}
      <DataCards
        color={`#F9CE23`}
        icon={glucid}
        data={`${userData?.data?.keyData?.carbohydrateCount}g`}
        title={"Glucides"}
        error={error}
        loading={loading}
      />

      {/*Lipides stats*/}
      <DataCards
        color={`#FD5181`}
        icon={lipide}
        data={`${userData?.data?.keyData?.lipidCount}g`}
        title={"Lipides"}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default Cards;
