import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();
  const questions = [
    'ሙሉ ስምህን አስገባ',
    'ጾታ',
    'ዕድሜ',
    'የኢሜል አድራሻ',
    'ስልክ ቁጥር',
    'የአሁኑ አድራሻዎ',
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResponse = () => {
    const question = questions[currentQuestion];
    let isValid = true;

    if (question === 'ሙሉ ስምህን አስገባ') {
      if (userInput.trim() === '') {
        setErrorMessage('ሙሉ ስምህን አስገባ ያስገቡ');
        isValid = false;
      }
    } else if (question === 'ጾታ') {
      if (userInput !== 'Male' && userInput !== 'Female') {
        setErrorMessage('እባክዎ ተመልክተው Male ወይም Female አምርርቶት ይምረጡ');
        isValid = false;
      }
    } else if (question === 'ዕድሜ') {
      if (userInput <= 0 || userInput > 120) {
        setErrorMessage('እባክዎ ትክክለኛ ዕድሜ ያስገቡ');
        isValid = false;
      }
    } else if (question === 'የኢሜል አድራሻ') {
      if (!userInput.includes('@')) {
        setErrorMessage('የኢሜል አድራሻ ትክክለኛ ያስገቡ');
        isValid = false;
      }
    } else if (question === 'ስልክ ቁጥር') {
      if (userInput.length !== 10) {
        setErrorMessage('የስልክ ቁጥር 10 ሁነት ያስገቡ');
        isValid = false;
      }
    } else if (question === 'የአሁኑ አድራሻዎ') {
      if (userInput.trim() === '') {
        setErrorMessage('የአሁኑ አድራሻዎ ያስገቡ');
        isValid = false;
      }
    }

    if (isValid) {
      setErrorMessage('');
      setResponses((prevResponses) => [...prevResponses, userInput]);
      setUserInput('');
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const renderInput = () => {
    const question = questions[currentQuestion];

    if (question === 'ጾታ') {
      return (
        <div className="flex flex-col rounded-full" style={{ marginLeft: '80px' }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={userInput === 'Male'}
              onChange={(e) => setUserInput(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={userInput === 'Female'}
              onChange={(e) => setUserInput(e.target.value)}
            />
            Female
          </label>
        </div>
      );
    } else if (question === 'ዕድሜ') {
      return (
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mb-4 rounded-full"
          style={{ marginLeft: '80px' }}
        />
      );
    } else if (question === 'የኢሜል አድራሻ') {
      return (
        <input
          type="email"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mb-4 rounded-full"
          style={{ marginLeft: '80px' }}
        />
      );
    } else if (question === 'ስልክ ቁጥር') {
      return (
        <input
          type="tel"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mb-4 rounded-full"
          style={{ marginLeft: '80px' }}
        />
      );
    } else {
      return (
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 mb-4 rounded-full"
          style={{ marginLeft: '80px' }}
        />
      );
    }
  };

  const handleProceedToDonation = () => {
    navigate('/donate/c');
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div className="flex flex-col justify-center mt-24">
          <h1 className="text-lg font-bold mb-4 block" style={{ marginLeft: '80px' }}>
            {questions[currentQuestion]}
          </h1>
          {renderInput()}
          {errorMessage && <p style={{ color: 'red', marginLeft: '80px' }}>{errorMessage}</p>}
          <button
            onClick={handleResponse}
            className="bg-dark-blue text-white px-4 py-2 rounded-full ml-auto"
            style={{ width: '70px' }}>
            ቀጥል
          </button>
        </div>
      ) : (
        <div className=' w-1/4 bg-dark-blue border border-gray-200 rounded-full h-10 flex items-center justify-center'>
          <button className='' onClick={handleProceedToDonation}>የአባልነት ክፍያ ክፈል</button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
