import React, { useState, useEffect } from "react";
// import '../assets/styles/main.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import Slider from "../components/Slider";
import Event1 from "../assets/Images/event1.jpg";
import Event2 from "../assets/Images/event2.jpg";
import PeopleIcon from "../assets/Images/peopleIcon.png";
import VolunteerIcon from "../assets/Images/volunteerIcon.png";
import DonationIcon from "../assets/Images/donationIcon.png";
import SermonIcon from "../assets/Images/sermonIcon.png";
import Hntsa from "../assets/Images/hntsa.jpg";
import War from "../assets/Images/war.jpg";
import Drought from "../assets/Images/drought.jpg";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { feedbackCount, fetchDonation, fetchEvents, fetchFeedback, fetchFeedbackCount, fetchUsersCount, getEvents } from "../app/actions/feedbackAction";

const LandingPage = () => {
  //const [feedbackData, setFeedbackData] = useState([]);
  const dispatch=useDispatch();


  useEffect(() => {
    const $owlCarousel = $(".owl-carousel");
    if ($owlCarousel.length) {
      require("owl.carousel");
    }
  }, []);
  
  const feedbackData=useSelector(state=>state.feedback.feedbackData);
  const error=useSelector(state=>state.feedback.error);
  useEffect(()=>{
    dispatch(fetchFeedback());

  },[dispatch]);
  if(error){
    //return <div>Error:{error}</div>
  }
  const events=useSelector(state=>state.feedback.event);
  useEffect(()=>{
    dispatch(getEvents());

  },[dispatch])
 
  // number of feedbacks
  const fcount=useSelector(state=>state.feedback.fcount);
  useEffect(()=>{
    dispatch(fetchFeedbackCount());
  },[dispatch])
  

  // number of users
  const ucount=useSelector(state=>state.feedback.ucount);
  useEffect(()=>{
    dispatch(fetchUsersCount());
  },[dispatch])

  // numberof  event
  const ecount=useSelector(state=>state.feedback.ecount);
  useEffect(()=>{
    dispatch(fetchEvents());
  },[dispatch]);
  
//  number of donation
const dcount=useSelector(state=>state.feedback.dcount);
useEffect(()=>{
  dispatch(fetchDonation());
},[dispatch])


  const options = {
    items: 1,
    nav: false,
    rewind: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  const items = [
    <div key={1}>
      <div>
        <div className="text-lg text-white mt-6 text-center">
          አንተን ተስፋ የሚያደርጉ አያፍሩም፥በከንቱ የሚገበዙ ያፍራሉ
        </div>
        <div className="text-lg text-white font-bold mt-4 text-center">
          መዝሙረ ዳዊት 25፥3
        </div>
      </div>
    </div>,
    <div key={2}>
      <div>
        <div className="text-lg text-white mt-6 text-center">
          ማንም እግዚአብሔርን እወዳለሁ እያለ ወንድሙን ቢጠላ ሐሰተኛ ነው፥ ያየውን ወንድሙን የማይወድ ያላየውን
          እግዚአብሔርን ሊወደው እንዴት ይችላል?
        </div>
        <div className="text-lg text-white font-bold mt-4 text-center">
          1ኛ የዮሐንስ መልእክት 4፥20
        </div>
      </div>
    </div>,
    <div key={3}>
      <div className="text-lg text-white mt-6 text-center">
        እግዚአብሔር ብርሃኔና መድኃኒቴ ነው፥የሚያስፈራኝ ማን ነው?
      </div>
      <div className="text-lg text-white font-bold mt-4 text-center">
        መዝሙረ ዳዊት 27፥1
      </div>
    </div>,
  ];

  const options2 = {
    items: 2,
    nav: false,
    rewind: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
  };

  //   mapping of feedbackData
  const items2 = feedbackData && feedbackData.length > 0 ? feedbackData.map((feedback) => (
    <div key={feedback.feedbackId}>
      <div className="flex items-center justify-center gap-8 h-full">
        <div className="bg-white w-3/4 rounded-2xl flex flex-col items-center justify-center p-8 text-lg">
          <div className="mt-8">{feedback.message}</div>
          <div className="font-bold">
            <p>{feedback.writer} </p>
          </div>
        </div>
      </div>
    </div>
  )) : null;

  return (
    <div>
      <div className="pt-4">
        <Slider />
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">የቅርብ ቀን መርሃግብራት</h1>
          {/* <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#a8a8a8" stroke="#a8a8a8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#a8a8a8" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 34.8333,26.9167L 37.2083,12.6667L 38.7917,12.6667L 41.1667,26.9167L 34.8333,26.9167 Z M 42.75,37.2083L 55.4167,49.875L 53.0416,51.4583L 38,35.625L 22.9583,51.4583L 20.5833,49.875L 33.25,37.2083L 33.25,32.0625L 34.8333,32.0625L 34.8333,28.1042L 41.1667,28.1042L 41.1667,32.0625L 42.75,32.0625L 42.75,37.2083 Z M 38,39.5833L 50.6667,52.25L 50.6667,60.1667L 41.1667,60.1667L 41.1667,53.8333C 41.1667,52.0844 39.7489,50.6667 38,50.6667C 36.2511,50.6667 34.8333,52.0844 34.8333,53.8333L 34.8333,60.1667L 25.3333,60.1667L 25.3333,52.25L 38,39.5833 Z "></path> </g></svg> */}
          <p className="mt-5">በደብራችን በቅርብ ግዜ የተከናወኑ መርሃግብራትን እዚህ ያገኛሉ</p>
        </div>
        <div>
         
          {events.map((event) => {
  const eventDateTime = new Date(event.eventdate);

  const ethiopianHour = eventDateTime.getHours() + 6; 
  const ethiopianMinute = eventDateTime.getMinutes();

  let ethiopianHourFormat = ethiopianHour % 12; 
  if (ethiopianHourFormat === 0) ethiopianHourFormat = 12; 

  const period = ethiopianHour < 12 ? "AM" : "PM"; 

  const ethiopianTime = `${ethiopianHourFormat}:${ethiopianMinute.toString().padStart(2, "0")} ${period}`;
  
  const date = new Date(event.eventdate);
  const formattedDates = date.toDateString();
  return (
    <div key={event.id} className="mt-10 bg-gray-100 flex">
      <div className="w-1/4 flex flex-col items-center justify-center">
       
        <p className="text-sm"> {formattedDates}</p>
        <p className="text-sm"> {ethiopianTime}</p>


      </div>
      <div className="w-2/4 flex flex-col justify-center">
        <p className="text-lg">{event.eventDesc}</p>
        <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-6 h-10 flex items-center">
          <button className="w-full mx-auto text-lg font-bold text-white">
            እይ
          </button>
        </div>
      </div>
      <div className="w-1/4 p-5 flex items-center justify-center">
        <img
          src={`/assets/${event.eventImage}`}
          alt={`event-${event.id}`}
          className="w-2/3"
        />
      </div>
    </div>
  );
})}
         
        </div>
        <div className="mt-20 grid grid-cols-4">
          <div className="flex items-center">
            <div className="w-1/3">
              <img src={PeopleIcon} alt="people icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{ucount}</div>
              <div className="text-gray-400 font-bold text-xl">ሰዎች</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <img src={VolunteerIcon} alt="volunteer icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{dcount}</div>
              <div className="text-gray-400 font-bold text-xl">በጎ ፈቃደኛ</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <img src={DonationIcon} alt="donation icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{fcount}</div>
              <div className="text-gray-400 font-bold text-xl">አስተያየቶች</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">
              <img src={SermonIcon} alt="sermon icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{ecount}</div>
              <div className="text-gray-400 font-bold text-xl">መርሃ ግብራት</div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">እርዳታ</h1>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={Drought} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                    በድርቅ ለተጎዱ ወገኖች
                  </h1>
                  <p className="text-sm mt-3">
                    አንዱ ደብራችን የሚሰጠው እርዳታ በድርቅ ለተጎዱ ወገኖች ሲሆን እናንተም የአቅማችሁን በማበርከት
                    የህሊና ግደታችሁን ተወጡ
                  </p>
                </div>
                <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={War} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                    በጦርነት ለተጎዱ ወገኖች
                  </h1>
                  <p className="text-sm mt-3">
                    ሌላው ደብራችን የሚሰጠው እርዳታ በጦርነት ለተጎዱ ወገኖች ሲሆን እናንተም የአቅማችሁን
                    በማበርከት የህሊና ግደታችሁን ተወጡ
                  </p>
                </div>
                <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={Hntsa} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                    ለቤተክርስቲያኗ ሕንጻ ማሰሪያ
                  </h1>
                  <p className="text-sm mt-3">
                    አዲስ የተጀመረውን የሕንጻ ቤተክርስቲያን ለማስፈጸም የበኩልዎን አስተዋጽዖ ያድርጉ
                  </p>
                </div>
                <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-light-blue h-48 px-8 py-4 flex flex-col justify-center">
          <div className="text-white font-bold text-3xl mx-auto underline">
            የመጽሐፍቅዱስ ጥቅሶች
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            //   navText={['prev', 'next']}
            {...options}
          >
            {items}
          </OwlCarousel>
        </div>
        <div className="mt-10 bg-gray-100 h-96 p-6">
          <h1 className="text-3xl font-bold text-center">አስተያየታችሁ ያግዘናል</h1>
          <div className="mt-10">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              //   navText={['prev', 'next']}
              {...options2}
            >
              {items2}
            </OwlCarousel>
          </div>
        </div>
        <div className="mt-10">
          <video controls className="w-full">
            <source src="../Images/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;