import React from "react";
import abi from "../assets/Images/abi.jpg";
import likawuntizra from "../assets/Images/likawuntizra.jpg";
import abnet from "../assets/Images/abnet.jpg";
import abnet2 from "../assets/Images/abnet2.jpg";
import abnet4 from "../assets/Images/abnet4.jpg";
import abnet5 from "../assets/Images/abnet5.jpg";
import "../assets/styles/abnet.css";

const AbnetPage = () => {
  return (
    <div className="w-full mt-10">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl text-[#2d5986] font-bold text-center justify-center">
          የአብነት ትምህርት ምንድን ነው?
        </h1>
        <p className="">
          አብነት ማለት ምሥክር ማለት ሲሆን ተማሪው(ደቀ መዝሙሩ) ትምህርቱን በሚገባ ተምሮ ከቤተክርስቲያኒቱ የትምህርት
          ዘርፍ በአንድ መመረቅ ሲችል አብነቱን ያዘ ይባላል። ይኸውም ምሳሌ አርዓያ ሆነ አስበ መምህራንን አገኘ ወይም
          የመምህርነት ሞያ አገኘ ማለትን ያጠቃልላል። የአብነት ትምህርት ቤት ማለት ከአባት የተገኘ፥ ከአበው የተወረሰ
          ከጥንት የነበረ፥ የማንነት መገለጫ፣ በራስ ቋንቋ፣ በራስ ፊደል፤ በራስ ስርዓተ ትምህርት የሚሰጥ ከትውልድ ወደ
          ትውልድ የተላለፈ ትምህርት የሚሰጥበት ትምህርት ቤት ማለት ነው። የአንድን ሕዝብ የአንድን ሀገር ጥበብ እና
          ዕውቀት ለዚያ ሕዝብና ለዚያች ሀገር ዜጎች የሚያስተምሩበት ትምህርት ቤት ማለት ነው። በብዛት የአብነት ተማሪዎች
          ትምህርት የሚማሩት ከዘመድ፣ ከወገን፣ ከሀገር(ከቀዬ) ርቀው ረሃቡን እና ጥሙን ታግሰው ነው። ይህ ሲሆን
          ተማሪዎች የዕለት ምግባቸውን(ጉርሳቸውን) የሚያገኙት ከማሕበረሰቡ "በእንተ ስማ ለማሪያም እመ አምላክ
          ትቁምልዎት" ብለው ለምነው ነው። በዚህ ጊዜ ተማሪው የሽንብራ ቆሎ፣ የስንዴ ቆሎ፣ የባቄላ አሹቅ፣ የገብሰ ቆሎ፣
          የአተር(የጓያ) ንፍሮ ወይም የእንጀራ አልያም የገብስ ወይም የስዴና የማሽላ እንጀራ በወጥ ወይም ደረቁን እንጀራ
          ወይም እንጂ የስዴ ዳቦ ብቻ የተገኘውን በአኮፋዳው(መያዣ ነው ከቄጠማ ወይም ከሰሌን የሚሠራ አሁን አሁን እንኳ
          ወደ ፔስታል ተቀይሯል) በአንድ ላይ አጠራቅሞ ያንን አድርቆ ወይም በዕለቱ ከልመና በኋላ የሚመገበው ይሆናል
          የተረፈውን አድርቆ በማጠራቀም የደረቀውን ይመገባል በአጠቃላይ ተማሪ የሚመገበው የደረቀ ነው ይህም የሚሆንበት
          ምክንያት ከእርጥቡ(ከለምለሙ) የተሻለ የመቆየት እድል ስላለው ነው ። በዚያ ላይ ከቤተሰቡም ሲወጣ የደረቀ
          እንጀራ(በተማሪ ዘንድ ኮቸሮ ይባላል በከተሜው ሕዝብ ዘንድ ደግሞ ድርቆሽ ይባላል) ይመገባል ከሌለም ያገኘውን
          ቆሎ ይመገባል በዚህ ምክንያት ስያሜ መቼ እንዳገኘ ባይታወቅም ይህ ስም ከሚመገበው አመጋገብ ጋር ተያይዞ የቆሎ
          ተማሪ(ት/ት ቤት) በማለት እንጠራዋለን ይህ ግን የትምህርቱን ጥልቀትና ምጥቀት የሚገልጽ አይደለም።
        </p>
      </div>

      <div className="abnetcontainer mt-10 mx-auto">
        <img src={abnet} alt="abnet" className="w-full" />
        <div class="abnetcontent p-10 flex flex-col gap-10">
          <div className="flex gap-4 text-white mt-16 font-bold text-lg items-center justify-center">
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline">ንባብ ቤት</div>
              <div className="mt-4">መልዕክተ ዮሐንስ</div>
              <div className="">ውዳሴ ማርያም</div>
              <div className="">መዝሙረ ዳዊት</div>
              <div className="">ወንጌለ ዮሐንስ</div>
            </div>
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline">ዜማ ቤት</div>
              <div className="mt-4">ውዳሴ ማርያም</div>
              <div className="">ቅዳሴ ማርያም</div>
              <div className="">ሰዓታት</div>
              <div className="">ጾመ ድጓ</div>
            </div>
            <div className="w-1/3 flex flex-col text-center">
              <div className="underline">ቅኔ ቤት</div>
              <div className="mt-4">አገባብ</div>
              <div className="">ግስ</div>
              <div className="">ሰምና ወርቅ</div>
              <div className="">ዕጣነ ሞገር</div>
            </div>
          </div>

          <div className="flex gap-4 text-white mt-16 font-bold text-lg items-center justify-center">
            <div className="w-1/2 flex flex-col text-center">
              <div className="underline">መጽሐፍ ቤት</div>
              <div className="mt-4">ብሉያት</div>
              <div className="">ሐዲሳት</div>
              <div className="">መጽሐፈ ሊቃውንት</div>
              <div className="">መጽሐፈ መነኮሳት</div>
            </div>
            <div className="w-1/2 flex flex-col text-center">
              <div className="underline">ቁጥር ቤት</div>
              <div className="mt-4">ባህረ ሐሳብ</div>
              <div className="">አቡሻህር</div>
              <div className="">ስነ ፈለክ</div>
              <div className="">ቀመረ ፊደል</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl text-[#2d5986] font-bold text-center justify-center">
          የጉባዔ ቤቱ መምህራን
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
            ሊቀ ሊቃዉንት መምህር ዕዝራ ሀዲስ
          </h1>
          <p className="text-base">የ4ቱ ጉባያት መምህር</p>
        </div>
      </div>
      <div className="flex flex-col text-center font-bold lg:flex-row bg-gray-100 mt-10">
        <div className="m-auto lg:w-1/2 items-center justify-center lg:ml-10">
          <p className="text-3xl text-[#2d5986] mb-4 ">ሊቀ ጠበብት መምህር ዮፍታሄ</p>
          <p className="text-base">የአቋቋም መምህር</p>
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
          <h1 className="text-3xl text-[#2d5986] mb-4">ሊቀ ትጉሃን መምህር ሞገስ</h1>
          <p className="text-base">የቅኔ መምህር</p>
        </div>
      </div>
    </div>
  );  
};

export default AbnetPage;
