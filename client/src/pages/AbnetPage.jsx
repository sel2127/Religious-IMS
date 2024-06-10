import React from "react";
import abi from "../assets/Images/abi.jpg";
import likawuntizra from "../assets/Images/likawuntizra.jpg";
import abnet from "../assets/Images/abnet.jpg";
import abnet2 from "../assets/Images/abnet2.jpg";
import abnet4 from "../assets/Images/abnet4.jpg";
import abnet5 from "../assets/Images/abnet5.jpg";
import "../assets/styles/abnet.css";
import { useTranslation } from "react-i18next";

const AbnetPage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full mt-10">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl text-[#2d5986] font-bold text-center justify-center">
        {t('ab_def')}
        </h1>
        <p className="">
        {t('ab_do')}
        </p>
      </div>

      <div className="abnetcontainer mt-10 mx-auto py-8 lg:flex md:flex sm:block flex-cols lg:space-x-8 md:space-x-8 overflow-hidden inline-block relative justify-center ">
        <img src={abnet} alt="abnet" className="w-full h-full" />
        <div class="abnetcontent p-10 flex flex-col gap-10 ">
          <div className="flex gap-4 text-white mt-16 font-bold text-lg items-center justify-center">
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline"> {t('li_1')}</div>
              <div className="mt-4">{t('li_2')}</div>
              <div className="">{t('li_3')}</div>
              <div className="">{t('li_4')}</div>
              <div className="">{t('li_5')}</div>
            </div>
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline">{t('li_6')}</div>
              <div className="mt-4">{t('li_3')}</div>
              <div className="">{t('li_8')}</div>
              <div className="">{t('li_9')}</div>
              <div className="">{t('li_10')}</div>
            </div>
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline">{t('li_11')}</div>
              <div className="mt-4">{t('li_12')}</div>
              <div className="">{t('li_13')}</div>
              <div className="">{t('li_14')}</div>
              <div className="">{t('li_15')}</div>
            </div>
          </div>

          <div className="flex gap-4 text-white mt-16 font-bold text-lg items-center justify-center ">
            <div className="w-1/2 flex flex-col text-center">
              <div className="underline">{t('li_16')}</div>
              <div className="mt-4">{t('li_17')}</div>
              <div className="">{t('li_18')}</div>
              <div className="">{t('li_19')}</div>
              <div className="">{t('li_20')}</div>
            </div>
            <div className="w-1/2 flex flex-col text-center">
              <div className="underline">{t('li_21')}</div>
              <div className="mt-4">{t('li_22')}</div>
              <div className="">{t('li_23')}</div>
              <div className="">{t('li_24')}</div>
              <div className="">{t('li_25')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl text-[#2d5986] font-bold text-center justify-center">
        {t('teach')}
        </h1>
      </div>
      <div className="flex flex-col font-bold lg:flex-row bg-gray-100 mt-10">
        <div className="lg:w-1/2 p-4 ">
          <div className="h-auto flex items-center justify-center overflow-hidden">
            <img src={abnet4} alt="" className="w-1/2" />
          </div>
        </div>
        <div className="lg:w-1/2 m-auto ml-10 items-center justify-center">
          <h1 className="text-3xl text-[#2d5986] mb-4">
          {t('te_1')}
          </h1>
          <p className="text-base">{t('teach_1')}</p>
        </div>
      </div>
      <div className="flex flex-col text-center font-bold lg:flex-row bg-gray-100 mt-10">
        <div className="m-auto lg:w-1/2 items-center justify-center lg:ml-10">
          <p className="text-3xl text-[#2d5986] mb-4 ">{t('te_2')}</p>
          <p className="text-base">{t('teach_2')}</p>
        </div>
        <div className="lg:w-1/2 p-4">
          <div className="flex items-center justify-center overflow-hidden">
            <img src={abnet2} alt="" className="w-1/2 " />
          </div>
        </div>
      </div>

      <div className="flex flex-col font-bold lg:flex-row bg-gray-100 mt-10">
        <div className="lg:w-1/2 p-4">
          <div className="flex items-center justify-center overflow-hidden">
            <img src={abnet5} alt="" className="w-1/2" />
          </div>
        </div>
        <div className="lg:w-1/2  m-auto ml-10 items-center justify-center">
          <h1 className="text-3xl text-[#2d5986] mb-4">{t('te_3')}</h1>
          <p className="text-base">{t('te_4')}</p>
        </div>
      </div>
    </div>
  );  
};

export default AbnetPage;
