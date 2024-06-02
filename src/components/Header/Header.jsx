import React from "react";
import style from "./style.module.css";
import logo from "../../assets/img/logo.svg";

export default function () {

    const NAVBAR = [
        {
            title: 'Accueil',
            to: ``
        },
        {
            title: 'Profil',
            to: ``
        },
        {
            title: 'Réglage',
            to: ``
        },
        {
            title: 'Communauté',
            to: ``
        },
    ]

    return<>
        <div className={style.container}>

            {/*Logo place*/}
            <div>
                <img src={logo} className={'object-contain w-44 h-14'} alt={'logo'}/>
            </div>

            {/*Header's navbar place*/}
            {NAVBAR.map((value, index)=> <div className={style.nav_links} key={index}>
                <span>{value.title}</span>
            </div>)}

        </div>
    </>
}