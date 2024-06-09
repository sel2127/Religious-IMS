import Map from "../components/Map";
import Contact from "../assets/Images/contact.jpg";
import { useTranslation } from "react-i18next";
import React, { useState} from "react";

function ContactUS() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(t('contact_success')); // Display success message
        setFormData({ name: '', email: '', phoneNumber: '', message: '' }); // Clear form
      } else {
        alert(t('contact_error')); // Display error message
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t('contact_error')); // Display generic error message
    }
  };

  const { t } = useTranslation();
  return (
    // <div className="ml-24 mr-24">
    //   <h1 className="text-center  text-3xl font-bold"> Contact US </h1>
    //   <div className="flex justify-center items-center m-4">
    //     <div className="font-light leading-loose text-left">የጥምቀት፣ የማረጋገጫ፣ የቅዱስ ቁርባን፣ የንስሐ፣ የጽንፈኝነት ተግባር፣ የቅዱስ ትእዛዝ ወይም የቅዱስ ጋብቻ
    //       ምሥጢራትን በተመለከተ ወይም እንደ መሠዊያ ልጅ ማገልገል ከፈለጉ ሬክተሪውን ያነጋግሩ.
    //       የደብሩ አባል ሲያልፍ ቤተሰቡ የቤተክርስቲያኑን ጽ/ቤት ማነጋገር አለበት.
    //       የጥምቀት፣ የማረጋገጫ፣ የቅዱስ ቁርባን፣ የንስሐ፣ የጽንፈኝነት ተግባር፣ የቅዱስ ትእዛዝ ወይም የቅዱስ ጋብቻ
    //       ምሥጢራትን በተመለከተ ወይም እንደ መሠዊያ ልጅ ማገልገል ከፈለጉ ሬክተሪውን ያነጋግሩ.
    //       የደብሩ አባል ሲያልፍ ቤተሰቡ የቤተክርስቲያኑን ጽ/ቤት ማነጋገር አለበት.
    //       የጥምቀት፣ የማረጋገጫ፣ የቅዱስ ቁርባን፣ የንስሐ፣ የጽንፈኝነት ተግባር፣ የቅዱስ ትእዛዝ ወይም የቅዱስ ጋብቻ
    //       ምሥጢራትን በተመለከተ ወይም እንደ መሠዊያ ልጅ ማገልገል ከፈለጉ ሬክተሪውን ያነጋግሩ.
    //       የደብሩ አባል ሲያልፍ ቤተሰቡ የቤተክርስቲያኑን ጽ/ቤት ማነጋገር አለበት.</div>
    //   </div>

    //   <div className="flex justify-center items-center w-[50rem] mx-auto my-8 " >
    //     <div class="w-1/3 p-4">
    //       <strong>Rectory Hours</strong><br />
    //       Monday - Friday<br />
    //       9:30am to 1:30pm
    //     </div>
    //     <div class="w-1/3 p-4">
    //       <strong>Address</strong><br />
    //       727 Fifth Street, NW<br />
    //       Washington, DC 20001
    //     </div>
    //     <div class="w-1/3 p-4">
    //       <strong>Telephone &amp; Email</strong><br />
    //       (202) 289-7771<br />
    //       stmarys20001@gmail.com
    //     </div>
    //   </div>
    //   <div>

    //     <h1 className="text-3xl font-bold text-center"> ለማንኛውም ጥያቄዎች ወይም አስተያየቶች </h1>
    //     <div className="flex  flex-col justify-center items-center w-[50rem] mx-auto my-8 ">
    //       <input type="text" placeholder="Name*" className="bg-gray-100 w-full mb-6 h-[3.5rem] placeholder-black-300 text-lg pl-4" />

    //       <input type="email" placeholder="Email*" className="bg-gray-100 w-full mb-6 h-[3.5rem] placeholder-black-300 text-lg pl-4"/>

    //       <input type="number" placeholder="Phone Number*" className="bg-gray-100 w-full mb-6 h-[3.5rem] placeholder-black-300 text-lg pl-4"/>

    //       <input type="text" placeholder="Message" className="bg-gray-100 w-full mb-6 h-[10rem] placeholder-black-300 text-lg pl-4"/>

    //       <div className="flex justify-center items-center mt-8">
    //                         <button className="bg-dark-blue text-white px-4 py-2 rounded-full transform hover:scale-110 hover:bg-blue-400" style={{ width: '150px' }} >ለግስ</button>
    //                     </div>
    //     </div>

    //   </div>

    //   <h1 className="text-3xl font-bold text-center"> Find Us </h1>
    //   <div className='flex justify-center items-center'>
    //         <Map />
    //       </div>

    // </div>







    // <div className="w-full mt-10">
    //   <div className="flex gap-8 justify-content items-center">
    //     <div className="w-1/2 flex justify-center">
    //       <img src={Contact} alt="contact" className="w-full"/>
    //     </div>
    //     <div className=" w-1/2 flex flex-col gap-y-10 items-center jusify-start">
    //       <div className="w-3/4">
    //         <input
    //           type="text"
    //          placeholder={` ${t('n')} `}
    //           className=" border-b border-gray-200 w-full placeholder-black-300 text-sm"
    //         />
    //       </div>
    //       <div className="w-3/4">
    //         <input
    //           type="text"
    //           placeholder={` ${t('email')} `}
    //           className=" border-b border-gray-200 w-full placeholder-black-300 text-sm"
    //         />
    //       </div>
    //       <div className="w-3/4">
    //         <input
    //           type="text"
    //           placeholder={` ${t('phone_number')} `}
    //           className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
    //         />
    //       </div>
    //       <div className="w-3/4">
    //       <textarea className="border-b border-gray-200 w-full placeholder-black-300 text-sm" placeholder={` ${t('mes')} `}></textarea>
    //       </div>
    //       <div className="flex w-full justify-center items-center">
    //         <button
    //           className="bg-[#2d5986] w-1/6 h-8 hover:bg-[#79a6d2] text-white text-center rounded-full transform hover:scale-110"
    //         >
    //           {t('send')}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>



  


    
      
        <div className="w-full mt-10">
          <div className="flex gap-8 justify-content items-center">
            <div className="w-1/2 flex justify-center">
              <img src={Contact} alt="contact" className="w-full" />
            </div>
            <div className="w-1/2 flex flex-col gap-y-10 items-center jusify-start">
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder={` ${t('name')} `}
                  className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder={` ${t('email')} `}
                  className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder={` ${t('phone_number')} `}
                  className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="w-3/4">
                <textarea
                  className="border-b border-gray-200 w-full placeholder-black-300 text-sm"
                  placeholder={` ${t('mes')} `}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex w-full justify-center items-center">
                <button
                  className="bg-[#2d5986] w-1/6 h-8 hover:bg-[#79a6d2] text-white text-center rounded-full transform hover:scale-110"
                  onClick={handleSubmit}
                >
                  {t('send')}
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}

export default ContactUS;
