import React from "react";
import style from "./style.module.css";
import meditation from "../../../assets/img/meditation.svg";
import swim from "../../../assets/img/swim.svg";
import bicycle from "../../../assets/img/bicycle.svg";
import train from "../../../assets/img/train.svg";

export default function SideBar() {
  const NAVBAR = [
    {
      title: meditation,
      to: ``,
    },
    {
      title: swim,
      to: ``,
    },
    {
      title: bicycle,
      to: ``,
    },
    {
      title: train,
      to: ``,
    },
  ];

  return (
    <>
      <div className={style.container}>
        {/*Sidebar's navbar place */}
        <div className="h-full flex flex-col justify-center gap-5">
          {NAVBAR.map((value, index) => (
            <div key={index} className={style.nav_link}>
              <img src={value.title} alt={"sportify"} />
            </div>
          ))}
        </div>

        <span className={style.copyright}>Copiryght, SportSee 2020</span>
      </div>
    </>
  );
}
