import React from "react";
import profileData from "../profileData";
import Breadcrumb from "../../common/Breadcrumb";
import Sidebarr from "./SideBarr";

const EditProfile = () => {
  return (
    <div className="w-full">
    <Breadcrumb/>
    <div className=" w-full rounded-lg">
    <h1 className="text-center text-3xl font-bold custom-font mb-4">መረጃዎን እዚህ ላይ ይቀይሩ</h1>

      <div className="flex flex-col lg:flex-row ">
        {/* sidebar */}
        <div>
          <Sidebarr/>
        </div>
        <div className='lg:w-1/2 m-auto'>


        <div className="  bg-gray-200 rounded-xl  flex flex-col  h-screen mt-10">
        <div className=" h-full overflow-hidden shadow  rounded-lg">
        <form className="space-y-4  flex flex-col  text-center lg: w-full  mt-10">

        <input
            type="text"
            id="name"
            defaultValue={profileData.username}
            placeholder="አዲስ መለያ ስም ያስገቡ"
            className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
            required
            onInput={(e) => {
              if (e.target.value.length < 3) {
                e.target.setCustomValidity(
                  "መለያ ስሞ ከ 3 ፊደል መብለጥ አለበት"
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
            autoComplete="name"
          />
          <input
            type="text"
            id="name"
            defaultValue={profileData.username}
            placeholder="አዲስ መለያ ስም ያስገቡ"
            className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
         ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
            required
            onInput={(e) => {
              if (e.target.value.length < 3) {
                e.target.setCustomValidity(
                  "መለያ ስሞ ከ 3 መብለጥ አለበት "
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
            autoComplete="name"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={profileData.email}
            className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
  mt-5 ml-10 mr-10  h-10 px-6 border border-gray-300  rounded-full"
            onInput={(e) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!e.target.value.match(emailRegex)) {
                e.target.setCustomValidity(
                  "ትክክለኛ የኢሜል አድራሻዎን ያስገቡ"
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
            required
            autoComplete="email" 
          />
          <input
            name="phone"
            type="number"
            id="phone"
            defaultValue={profileData.phone}
            placeholder="Phone"
            className="border rounded-3xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500
  mt-5 ml-10 mr-10 h-10 px-6 border border-gray-300 rounded-full"
            minLength={10}
            maxLength={10}
            onInput={(e) => {
              const ethiopianPattern1 = /^(09)[0-9]{8}$/;
              //   const ethiopianPattern2 = /^\+251[0-9]{9}$/;// +251 + 9 digits

              if (!ethiopianPattern1.test(e.target.value)) {
                e.target.setCustomValidity(
                  "ትክክልኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ (09 + 8 digits )"
                );
              } else {
                e.target.setCustomValidity("");
              }
            }}
          />

        
        </form>
        <div className="border-gray-200  flex justify-center space-between  mt-10">
            <button
              id="submit"
              type="submit"
              className="bg-blue-500 text-white text-center  px-6 py-1 rounded-3xl "
            >
              ያዘምኑ
            </button>
            <button
              className="bg-red-500 text-white text-center  px-6 py-1 rounded-3xl ml-10"
              onClick={() => window.history.back()}
            >
              ያጥፋ
            </button>
          </div>
        </div>
</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EditProfile;
