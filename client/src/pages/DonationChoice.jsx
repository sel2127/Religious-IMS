import React, { useState } from 'react';

function DonationChoice(){
    const [currentQuestion_donation, setCurrentQuestion_donation] = useState(0);
    const [responses_donation, setResponses_donation] = useState([]);
    const [userInput_donation, setUserInput_donation] = useState('');
  
    const questions_donation = [
      'የክፍያ ዘዴን ይምረጡ',
      'ጾታ',
      'ዕድሜ',
      'የኢሜል አድራሻ',
      'ስልክ ቁጥር',
      'የአሁኑ አድራሻዎ',
    ];
  
    const handleResponse_donation = () => {
      setResponses_donation([...responses_donation, userInput_donation]);
      setUserInput_donation('');
      setCurrentQuestion_donation(currentQuestion_donation + 1);
    };
  
    const renderInput_donation = () => {
      const question_donation = questions_donation[currentQuestion_donation];
      if (question_donation === 'Gender') {
        return (
          <div className='flex flex-col'
          style={{ marginLeft: '80px' }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={userInput_donation === 'Male'}
                onChange={(e) => setUserInput_donation(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={userInput_donation === 'Female'}
                onChange={(e) => setUserInput_donation(e.target.value)}
              />
              Female
            </label>
          </div>
        );
      } else if (question_donation === 'Age') {
        return (
          <input
            type="number"
            value={userInput_donation}
            onChange={(e) => setUserInput_donation(e.target.value)}
            className="border p-2 mb-4"
            style={{ marginLeft: '80px' }}
          />
        );}
        else if (question_donation === 'Email Address') {
          return (
            <input
              type="email"
              value={userInput_donation}
              onChange={(e) => setUserInput_donation(e.target.value)}
              className="border p-2 mb-4"
              style={{ marginLeft: '80px' }}
            />
          );
      } 
      else if (question_donation === 'Phone number') {
        return (
          <input
            type="tel"
            value={userInput_donation}
            onChange={(e) => setUserInput_donation(e.target.value)}
            className="border p-2 mb-4"
            style={{ marginLeft: '80px' }}
          />
        );
    } 
      else {
        return (
          <input
            type="text"
            value={userInput_donation}
            onChange={(e) => setUserInput_donation(e.target.value)}
            className="border p-2 mb-4"
            style={{ marginLeft: '80px' }}
          />
        );
      }
    };
  

    return (
        <div>
          {currentQuestion_donation < questions_donation.length ? (
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg" style={{ width: '50%', height: '50%' }}>
                <h1 className="m-4 txt-3xl font-bold">{questions_donation[currentQuestion_donation]}</h1>
                {renderInput_donation()}
                <button onClick={handleResponse_donation} className="bg-dark-blue text-white px-4 py-2 rounded-full ml-auto" style={{ width: '70px' }}>
                  ቀጥል
                </button>
              </div>
            </div>
          ) : (
            <div className='bg-gray-100 rounded-lg'>
              <h1 className="flex flex-col text-3xl font-bold mt-24 items-center justify-center">በተሳካ ሁኔታ ተመዝግበዋል!</h1>
              {/* <pre>{JSON.stringify(responses_donation, null, 2)}</pre> */}
            </div>
          )}
        </div>
      );
        }

export default DonationChoice;