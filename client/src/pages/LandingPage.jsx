import React, { useState, useEffect } from "react";
// import '../assets/styles/main.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import Slider from "../components/Slider";
import PeopleIcon from "../assets/Images/peopleIcon.png";
import VolunteerIcon from "../assets/Images/volunteerIcon.png";
import DonationIcon from "../assets/Images/donationIcon.png";
import Hntsa from "../assets/Images/hntsa.jpg";
import War from "../assets/Images/war.jpg";
import Drought from "../assets/Images/drought.jpg";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { feedbackCount, fetchDonation, fetchEvents, fetchFeedback, fetchFeedbackCount, fetchUsersCount, getEvents } from "../app/actions/feedbackAction";
import { useTranslation } from "react-i18next";
const LandingPage = () => {
  //const [feedbackData, setFeedbackData] = useState([]);
  const dispatch=useDispatch();

  const { t } = useTranslation();

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
        {t('verse_one')}
        </div>
        <div className="text-lg text-white font-bold mt-4 text-center">
        {t('psalm_25')}
        </div>
      </div>
    </div>,
    <div key={2}>
      <div>
        <div className="text-lg text-white mt-6 text-center">
        {t('verse_two')}
        </div>
        <div className="text-lg text-white font-bold mt-4 text-center">
        {t('The 1st epistle of john')}
        </div>
      </div>
    </div>,
    <div key={3}>
      <div className="text-lg text-white mt-6 text-center">
      {t('verse_three')}
      </div>
      <div className="text-lg text-white font-bold mt-4 text-center">
      {t('psalm_27')}
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
    responsive: {
  0: {
    items: 1
  },
  768: {
    items: 2
  }
  }
}

  const items2 = [
    <div key={1}>
      <div className="flex items-center justify-center lg:gap-8 md:gap-8 sm:gap-2 h-full">
        <div className="bg-white w-3/4 rounded-2xl flex flex-col items-center justify-center lg:p-8 md:p-8 sm:p-2 text-lg">
          <div>            
          </div>
        </div>
      </div>
    </div>,
    <div key={2}>
      <div className="flex items-center justify-center lg:gap-8 md:gap-8 sm:gap-2 h-full">
        <div className="bg-white rounded-2xl w-3/4  flex flex-col items-center justify-center lg:p-8 md:p-8 sm:p-2 text-lg">
          <div>
            
          </div>
          <div className="mt-8">{t('feedback_1')}</div>
          <div className="font-bold">{t('feedback_giver')}</div>
        </div>        
      </div>
    </div>,
    <div key={3}>
      <div className="flex items-center justify-center lg:gap-8 md:gap-8 sm:gap-2 h-full">
        <div className="bg-white w-3/4 rounded-2xl flex flex-col items-center justify-center lg:p-8 md:p-8 sm:p-2 text-lg">
          <div>            
          </div>
          <div className="mt-8">{t('feedback_1')}</div>
          <div className="font-bold">{t('feedback_giver')}</div>
        </div>        
      </div>
    </div>,
  ];
  return (
    <div>
      <div className="pt-4">
        <Slider />
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{t('recent')}</h1>
          {/* <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#a8a8a8" stroke="#a8a8a8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#a8a8a8" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 34.8333,26.9167L 37.2083,12.6667L 38.7917,12.6667L 41.1667,26.9167L 34.8333,26.9167 Z M 42.75,37.2083L 55.4167,49.875L 53.0416,51.4583L 38,35.625L 22.9583,51.4583L 20.5833,49.875L 33.25,37.2083L 33.25,32.0625L 34.8333,32.0625L 34.8333,28.1042L 41.1667,28.1042L 41.1667,32.0625L 42.75,32.0625L 42.75,37.2083 Z M 38,39.5833L 50.6667,52.25L 50.6667,60.1667L 41.1667,60.1667L 41.1667,53.8333C 41.1667,52.0844 39.7489,50.6667 38,50.6667C 36.2511,50.6667 34.8333,52.0844 34.8333,53.8333L 34.8333,60.1667L 25.3333,60.1667L 25.3333,52.25L 38,39.5833 Z "></path> </g></svg> */}
          <p className="mt-5">{t('recent_second')}</p>
        </div>
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
                  <p className="text-lg truncate">{event.eventDesc}</p>
                  <div className="w-1/6 bg-dark-blue border border-gray-200 rounded-full mt-6 h-10 flex items-center">
                    <button className="w-full mx-auto text-lg font-bold text-white">
                    {t('see')}
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
       
        <div className="mt-20 lg:flex md:flex sm:flex-col lg:space-x-8 md:space-x-8 lg:space-x-0 items-center justify-center">
          <div className="flex items-center sm:py-4 justify-center">
            <div className="w-1/3">
              <img src={PeopleIcon} alt="people icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{ucount}</div>
              <div className="text-gray-400 font-bold text-xl">{t('people')}</div>
            </div>
          </div>
          <div className="flex items-center sm:py-4 justify-center">
            <div className="w-1/3">
              <img src={VolunteerIcon} alt="volunteer icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{dcount}</div>
              <div className="text-gray-400 font-bold text-xl">{t('volunteer')}</div>
            </div>
          </div>
          <div className="flex items-center sm:py-4 justify-center">
            <div className="w-1/3">
              <img src={DonationIcon} alt="donation icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">{fcount}</div>
              <div className="text-gray-400 font-bold text-xl">{t('feed')}</div>
            </div>
          </div>
          {/* <div className="flex items-center">
            <div className="w-1/3">
              <img src={SermonIcon} alt="sermon icon" className="w-2/3" />
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="text-dark-blue font-bold text-xl">186</div>
              <div className="text-gray-400 font-bold text-xl">ስብከቶች</div>
            </div>
          </div> */}
        </div>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{t('help')}</h1>
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={Drought} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                  {t('drought')}
                  </h1>
                  <p className="text-sm mt-3 text-center">
                  {t('church_help')}
                  </p>
                </div>
                {/* <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={War} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                  {t('war')}
                  </h1>
                  <p className="text-sm mt-3 text-center">
                  {t('war_help')}
                  </p>
                </div>
                {/* <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="px-6 flex justify-center imgListHeight">
                <img src={Hntsa} alt="sermon icon" className="" />
              </div>
              <div className="flex flex-col items-center py-6 px-10">
                <div className="h-[120px]">
                  <h1 className="text-center font-bold text-xl">
                  {t('build')}
                  </h1>
                  <p className="text-sm mt-3 text-center">
                  {t('build_one')}
                  </p>
                </div>
                {/* <div className="w-1/3 bg-dark-blue border border-gray-200 rounded-full mt-5 h-10 flex items-center">
                  <button className="w-full mx-auto text-lg font-bold text-white">
                    ስጥ
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-light-blue px-8 py-6 flex flex-col justify-center">
          <div className="text-white font-bold lg:text-3xl md:text-3xl sm:text-2xl mx-auto underline text-center">
          {t('verses')}
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
        <div className="mt-10 bg-gray-100 lg:p-6 md:p-6 sm:p-2">
          <h1 className="text-3xl font-bold text-center">{t('comment')}</h1>
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
        {/* <video controls className="w-full">
        <source src="../Images/video1.mp4" type="video/mp4" />
      </video> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;