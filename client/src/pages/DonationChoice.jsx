import React, { useState } from 'react';
import { Link } from "react-router-dom";

function DonationChoice(){
  const questions = [
    'የመክፈያ ዘዴን ይምረጡ',
    'ስም-አልባ መሆን ትፈልጋለህ',
    'የገንዘብ መጠን ያስገቡ',
    'ለአዘጋጆቹ አጭር መልእክት (አማራጭ)',
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResponse = () => {
    const question = questions[currentQuestion];

   
  if (question === 'የመክፈያ ዘዴን ይምረጡ') {
      if (userInput !== 'International' && userInput !== 'Local') {
        setErrorMessage('እባክዎ ተመልክተው International ወይም local አምርርቶት ይምረጡ');
        return;
      }
    }
    else if (question === 'ስም-አልባ መሆን ትፈልጋለህ') {
      if (userInput !== 'Yes' && userInput !== 'No') {
        setErrorMessage('እባክዎ ተመልክተው Yes ወይም No አምርርቶት ይምረጡ');
        return;
      }
    } 
    else if (question === 'የገንዘብ መጠን ያስገቡ') {
      if (userInput.trim() === '') {
        setErrorMessage('የገንዘብ መጠን ያስገቡ');
        return;
      }
    }

    setErrorMessage('');
    setResponses((prevResponses) => [...prevResponses, userInput]);
    setUserInput('');
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const renderInput = () => {
    const question = questions[currentQuestion];

    if (question === 'የመክፈያ ዘዴን ይምረጡ') {
      return (
        <div className="flex flex-col " style={{ marginLeft: '80px' }}>
          <label className='text-lg leading-loose '>
            <input
              type="radio"
              name="payment method"
              value="International"
              checked={userInput === 'International'}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ marginRight:'10px' }}
            />
             International
          </label>
          <label className='text-lg leading-loose'>
            <input
              type="radio"
              name="payment method"
              value="Local"
              checked={userInput === 'Local'}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ marginRight:'10px'}}
            />
            Local
          </label>
        </div>
      );
    } else if (question === 'ስም-አልባ መሆን ትፈልጋለህ')  {
      return (
        <div className="flex flex-col" style={{ marginLeft: '80px' }}>
          <label className='text-lg leading-loose '>
            <input
              type="radio"
              name="anonymity"
              value="Yes"
              checked={userInput === 'Yes'}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ marginRight:'10px' }}
            />
             Yes
          </label>
          <label className='text-lg leading-loose'>
            <input
              type="radio"
              name="anonymity"
              value="No"
              checked={userInput === 'No'}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ marginRight:'10px'}}
            />
            No
          </label>
        </div>
      );
    }
    
    else if (question === "የገንዘብ መጠን ያስገቡ") {
      return (
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mb-4"
          style={{ marginLeft: '80px' }}
        />
      );
    }
    else {
    return (
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="mb-4 p-4 text-lg border border-gray-300 rounded-lg ml-8" placeholder="brief message"
        style={{ width: '645px' , height: '161px' }}
      />
    );
  }
  };
  

    return (
        <div>
        {currentQuestion < questions.length ?(
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg" style={{ width: '50%', height: '50%' }}>
                <h1 className="m-4 text-2xl font-bold"> {questions[currentQuestion]}</h1>
                {renderInput()}
            {errorMessage && <p style={{ color: 'red', marginLeft: '80px' }}>{errorMessage}</p>}
                <button onClick={handleResponse} className="bg-dark-blue text-white px-4 py-2 rounded-full mb-4" style={{ width: '70px' , marginLeft:'200px'}}>
                  ቀጥል
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
            <div className='bg-gray-100 rounded-lg'>
              <h1 className="flex flex-col text-3xl font-bold mt-24 items-center justify-center">በተሳካ ሁኔታ ተመዝግበዋል!</h1>
              {/* <pre>{JSON.stringify(responses_donation, null, 2)}</pre> */}
            </div>
            </div>
          )}
        </div>

        
      );
        }

export default DonationChoice;