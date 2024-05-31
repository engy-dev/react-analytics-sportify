import React, {useEffect, useState} from "react";
import style from "./style.module.css";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";
import RadarChartComponent from "../../components/RadarChartComponent/RadarChartComponent";
import DonutChartComponent from "../../components/DonutChartComponent/DonutChartComponent";
import DataCards from "../../components/DataCards/DataCards";
import calory from "../../assets/img/fire.svg";
import protein from "../../assets/img/chicken.svg";
import glucid from "../../assets/img/apple.svg";
import lipide from "../../assets/img/cheeseburger.svg";
import {getUserInfo} from "../../services/getUser";
import {getUserActivity} from "../../services/getUserActivity";
import {getUserAverageSessions} from "../../services/getAverageSession";
import {getUserPerformance} from "../../services/getUserPerformance";

export default function Main() {

    const [userData,setUserData] = useState([]);
    const [userActivity,setUserActivity] = useState([]);
    const [userSession,setUserSession] = useState([]);
    const [userPerformance,setPerformance] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const [data3, setData3] = useState([
        { value: 'Cardio'},
        { value: 'Energie'},
        { value: 'Endurance'},
        { value: 'Force'},
        { value: 'Vitesse'},
        { value: 'Intensité'},
    ]);

    useEffect(()=>{
        fetchDataUser(12);
        fetchDataUserActivity(12);
        fetchDataUserAverageSessions(12);
        fetchDataUserPerformance(12);
    },[])


    const fetchDataUser = async (userId) => {
        try {
            const data = await getUserInfo(userId);
            setUserData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataUserActivity = async (userId) => {
        try {
            const data = await getUserActivity(userId);
            setUserActivity(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataUserAverageSessions = async (userId) => {
        try {
            const data = await getUserAverageSessions(userId);
            setUserSession(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataUserPerformance = async (userId) => {
        try {
            const data = await getUserPerformance(userId);
            setPerformance(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return<>
        <div className={style.container}>

            <div className={'flex items-center gap-3 text-[48px] font-[500] '}>
                <span>Bonjour </span>
                <span className={'text-[#FF0000]'}>{userData?.data?.userInfos?.firstName} </span>
            </div>

            <span className={'text-[18px] font-[400] mt-3'}>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

            <div className={'w-full flex items-start gap-10 '}>


                {/*There are Charts */}
                <div className={'w-full max-w-[700px] flex flex-col '}>

                    {/*Barchart Container*/}
                    <div className={'w-full max-w-[700px] bg-[#FBFBFB] flex flex-col px-4 py-5  mt-7'}>

                        <div className={'w-full max-w-[700px] flex items-center justify-between mb-5'}>

                            <span className={'text-[15px] font-[500]'}>Activité quotidienne</span>

                            <div className={'flex items-center gap-4'}>'
                                <div className={'flex items-center gap-2 text-[15px] font-[500]'}>
                                    <div className={'w-2 h-2 rounded-full bg-[#282D30]'}></div>
                                    <span>Poids (kg)</span>
                                </div>

                                <div className={'flex items-center gap-2 text-[15px] font-[500] mr-4'}>
                                    <div className={'w-2 h-2 rounded-full bg-[#E60000]'}></div>
                                    <span>Calories brûlées (kCal)</span>
                                </div>
                            </div>


                        </div>

                        {/*This bar chart */}
                        <div className={'w-full max-w-[700px] h-36'}>
                            <BarChartComponent data={userActivity?.data?.sessions} height={144}/>
                        </div>
                    </div>

                    <div className={'w-auto h-[220px] bg-[#FBFBFB] flex items-start pt-7 gap-3 mt-10'}>

                        {/*This Line Chart*/}
                        <div className={'w-56 h-auto bg-[#FF0000] flex flex-col items-start '}>

                            <span className={'text-white ml-7 text-[15px] font-[500] my-5 '}>Durée moyenne des sessions</span>

                            <LineChartComponent data={userSession?.data?.sessions}/>

                        </div>

                        {/*This Radar Chart */}
                        <div className={'w-56 h-auto bg-[#282D30] flex flex-col items-start '}>

                            <RadarChartComponent data={userPerformance?.data?.data} labels={data3}/>

                        </div>

                        {/*This Donut Chart*/}
                        <div className={'w-56 h-auto flex flex-col items-start '}>

                            <DonutChartComponent score={userData?.data?.todayScore*100}/>

                        </div>

                    </div>

                </div>

                <div className={'w-full max-w-[300px] flex flex-col items-start gap-3 pt-7'}>

                    {/*Calory stats*/}
                    <DataCards color={`#FF0000`} icon={calory} data={`${userData?.data?.keyData?.calorieCount}kCal`} title={'Calories'}/>

                    {/*Protein stats*/}
                    <DataCards color={`#4AB8FF`} icon={protein} data={`${userData?.data?.keyData?.proteinCount}g`} title={'Proteines'}/>

                    {/*Glucide stats*/}
                    <DataCards color={`#F9CE23`} icon={glucid} data={`${userData?.data?.keyData?.carbohydrateCount}g`} title={'Glucides'}/>

                    {/*Lipides stats*/}
                    <DataCards color={`#FD5181`} icon={lipide} data={`${userData?.data?.keyData?.lipidCount}g`} title={'Lipides'}/>

                </div>

            </div>



        </div>
    </>
}