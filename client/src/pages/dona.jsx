import React from 'react'

const dona = () => {
    return (
        <div>
            <form method="POST" action="https://api.chapa.co/v1/hosted/pay" className='flex flex-col justify-center items-center pt-8 space-y-4' >
               
                <input type="hidden" name="public_key" value="CHAPUBK_TEST-jcYsFaHwWLWb6iNssOiC7Rm75DrykuYI" />
                
                <label htmlFor="tx_ref"> Reference:
                </label>
                <input type="text" name="tx_ref"  placeholder='reference'/>
                <label htmlFor="first-name"> Amount:
                </label>
                <input type="number" name="amount" placeholder='Amount' />
                <label htmlFor="first-name"> ETB:
                </label>
                <input type="text" name="currency" value="ETB" />
                <label htmlFor="first-name"> Email:
                </label>
                <input type="email" name="email" placeholder='enter email'/>
                <label htmlFor="first-name"> First Name:
                </label>
                <input type="string" name="first_name" value="Israel" />
                <label htmlFor="first-name"> Last Name:
                </label>
                <input type="string" name="last_name" value="Goytom" />
    
                <input type="string" name="title" value="Let us do this" />
                <input type="hidden" name="description" value="Paying with Confidence with cha" />
                <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
                <input type="hidden" name="return_url" value="http://localhost:3000/" />
                <input type="hidden" name="meta[title]" value="test" />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    )
}

export default dona
