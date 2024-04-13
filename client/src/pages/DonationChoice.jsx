import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationChoice = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    tx_ref: '',
    amount: '',
    currency: '',
    user_id: ''
  });

  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetchUserId();
  }, []);

  const fetchUserId = async () => {
    try {
      const response = await axios.get('/api/user/id');
      setUserId(response.data.userId);
    } catch (error) {
      console.error('Error fetching user ID:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const requestData = { ...formData, user_id: userId };
        const donationResponse = await axios.post(
          '"http://localhost:5000/api/donations',
          requestData
        );
        console.log('Donation response:', donationResponse.data);
        event.target.submit();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.first_name.trim()) {
      errors.first_name = 'First name is required';
    }

    if (!data.last_name.trim()) {
      errors.last_name = 'Last name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.tx_ref.trim()) {
      errors.tx_ref = 'Reference is required';
    }

    if (!data.amount.trim()) {
      errors.amount = 'Amount is required';
    } else if (!isValidAmount(data.amount)) {
      errors.amount = 'Invalid amount';
    }

    if (!data.currency) {
      errors.currency = 'Currency is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return true;
  };

  const isValidAmount = (amount) => {
    // Add your amount validation logic here
    return true;
  };
    


    return (
        <div className='pt-8'>
            <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600 px-20 py-10">
                <form method="POST" action="https://api.chapa.co/v1/hosted/pay" onSubmit={handleSubmit} className='space-y-4'>
                    <input type="hidden" name="public_key" value="CHAPUBK_TEST-jcYsFaHwWLWb6iNssOiC7Rm75DrykuYI" />

                    <div className="flex flex-col">
                        <input type="text" name="first_name" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.first_name && 'border-red-500'}`} placeholder='First Name' />
                        {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}

                    </div>

                    <div className="flex flex-col">
                        <input type="text" name="last_name" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.last_name && 'border-red-500'}`} placeholder='Last Name' />
                        {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}

                    </div>

                    <div className="flex flex-col">
                        <input type="email" name="email" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.email && 'border-red-500'}`} placeholder="Email" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col">
                        <input type="text" name="tx_ref" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.tx_ref && 'border-red-500'}`} placeholder="Reference" />
                        {errors.tx_ref && <p className="text-red-500 text-sm">{errors.tx_ref}</p>}
                    </div>

                    <div className="flex flex-col">
                        <input type="number" name="amount" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.amount && 'border-red-500'}`} placeholder="Amount" />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                    </div>

                    <div className="flex flex-col">
                        <select name="currency" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.currency && 'border-red-500'}`}>
                            <option value="">Select Currency</option>
                            <option value="ETB">ETB</option>
                            <option value="USD">USD</option>
                        </select>
                        {errors.currency && <p className="text-red-500 text-sm">{errors.currency}</p>}
                    </div>

                    <input type="hidden" name="title" value="Let us do this" />
                    <input type="hidden" name="description" value="Paying with Confidence with cha" />
                    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
                    <input type="hidden" name="return_url" value="http://localhost:3000/" />
                    <input type="hidden" name="meta[title]" value="test" />
                    <div className='flex justify-center'>
                        <div className=" mt-6 w-1/2 bg-dark-blue border border-gray-200 rounded-full h-10 flex  items-center justify-center">
                            <button type="submit" className="w-full mx-auto text-base font-bold text-white">
                                ክፈል
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonationChoice;
