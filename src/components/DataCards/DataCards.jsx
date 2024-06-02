import React from "react";

export default function DataCards({icon, color, title, data}) {

    return<>
        <div className={'w-full max-w-[300px] h-[115px] bg-[#FBFBFB] flex items-center p-8'}>

            <div style={{backgroundColor:`${color}1A`}} className={`w-14 h-14 flex items-center justify-center `}>
                <img src={icon} className={'w-5 h-5 object-contain '} alt={'icon'}/>
            </div>

            <div className={'flex flex-col items-start ml-6 '}>
                <span style={{fontFamily:`Roboto`}} className={'text-[20px] font-[700]'}>{data}</span>
                <span style={{fontFamily:`Roboto`}} className={'text-[14px] text-[#74798C] font-[500]'}>{title}</span>
            </div>

        </div>
    </>
}