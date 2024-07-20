import style from "./style.module.css";
import Charts from "../../components/Charts/Charts";
import Cards from "../../components/Cards/Cards";
import useFetchUser from "../../../application/hooks/useFetchUser";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Loading from "../../components/Loading/Loading";

export default function Main() {
  const { data, error, loading } = useFetchUser(12);
  const userData = data;
  if (error) {
    return <ErrorMsg />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className={style.container}>
        {/* Title */}
        <div className={"flex items-center gap-3 text-[48px] font-[500] "}>
          <span>Bonjour </span>
          <span className={"text-[#FF0000]"}>
            {userData?.data?.userInfos?.firstName}{" "}
          </span>
        </div>
        <span className={"text-[18px] font-[400] mt-3"}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </span>

        {/* Contents */}
        <div
          className={
            "w-full flex flex-col lg:flex-row items-start gap-10 pb-10"
          }
        >
          <Charts />
          <Cards />
        </div>
      </div>
    </>
  );
}
