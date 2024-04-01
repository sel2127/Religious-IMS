import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DonationChoice = () => {
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        let validationErrors = {};

        // Basic validation example: checking if required fields are filled
        if (!formData.get('tx_ref')) {
            validationErrors = { ...validationErrors, tx_ref: 'Reference is required' };
        }
        if (!formData.get('amount')) {
            validationErrors = { ...validationErrors, amount: 'Amount is required' };
        }
        if (!formData.get('currency')) {
            validationErrors = { ...validationErrors, currency: 'Currency is required' };
        }
        if (!formData.get('email')) {
            validationErrors = { ...validationErrors, email: 'Email is required' };
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // If no errors, submit the form
            form.submit();
        }
    };

    return (
        <div className='pt-8'>
            <div className="mx-auto border border-gray-300 w-1/2 mt-10 rounded rounded-3xl text-gray-600 px-20 py-10">
                <form method="POST" action="https://api.chapa.co/v1/hosted/pay" onSubmit={handleSubmit} className='space-y-4'>
                    <input type="hidden" name="public_key" value="CHAPUBK_TEST-jcYsFaHwWLWb6iNssOiC7Rm75DrykuYI" />
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
                    <div className="flex flex-col">
                        <input type="email" name="email" className={`border border-gray-300 rounded-full px-3 py-2 ${errors.email && 'border-red-500'}`} placeholder="Email" />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name="first_name" className={`border border-gray-300 rounded-full px-3 py-2`} placeholder='First Name' />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name="last_name" className={`border border-gray-300 rounded-full px-3 py-2`} placeholder='Last Name' />
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
