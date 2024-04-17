import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import Sidebarr from './SideBarr'

function ViewMoreProfile() {
  return (
    <div className="w-full">
    {/* <Breadcrumb /> */}
    <div className=" w-full rounded-lg">
      <div className="flex flex-col lg:flex-row">
        {/* sidebar */}
        <div>
          <Sidebarr />
        </div>
    <div className='lg:w-1/2 m-auto'>
       
          <div className="  bg-gray-200 rounded-xl  flex flex-col  h-screen mt-10">
            
            <div className=" h-full overflow-hidden shadow  rounded-lg">
              <div className="mt-10 px-2 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                 የእርስዎ መረጃዎች
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  እርስዎን የሚገልጹ መረጃዎች.
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                     ሙሉ ስም
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                     አበበ
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                     የኢሜል አድራሻ
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userData.email} */}
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                     ስልክ ቁጥር
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      0987654321
                    </dd>
                  </div>
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                     አድራሻ
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ቃሊቲ
                      <br />
                     አዲስ አባባ፣ ኢትዮጵያ
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ViewMoreProfile