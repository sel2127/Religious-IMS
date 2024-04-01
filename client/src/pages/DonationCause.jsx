import bekoji from "../assets/Images/bekoji.jpg";
import { Link } from "react-router-dom";

function DonationCause() {
    return (
        <div>
            <div className='text-3xl font-bold mb-4'>የገንዘብ ድጋፍ</div>
            <div className='flex'>
                <div className='w-3/5'>
                    <img src={bekoji} alt="lalibela rock hewn church" className="rounded-lg mb-4" style={{ width: '860px', height: '500px' }} />


                    <div class=" flex gap-2">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-2 mt-2"></div>
                        <div >
                            <p className="text-sm font-light mt-6">ማት ባርበር ይህንን የገንዘብ ማሰባሰብያ እያዘጋጀ ነው</p>
                        </div>
                    </div>
                    <hr className="mt-4 mb-4" />
                    <p className="ml-8">ከ 3 ቀናት በፊት የተፈጠረ </p>
                    <hr className="mt-4 mb-8" />
                    <p className="font-light leading-loose mb-8">በአሁኑ ጊዜ በቡልፎርድ ማህበረሰብ አዳራሽ እያመለከ ያለው የሊቪንግ ግሬስ አገልግሎት ቤተክርስቲያን ህልም እውን እንድንሆን ለመርዳት ወደ አንተ እየደረሰ ነው.
                        ትንሿ ማህበረሰባችን በችግር ጊዜ ለምመለክ፣ ለመጽናናት እና ለመደጋገፍ የምንሰበሰብበት ልዩ ቦታ ለማግኘት ሁል ጊዜ ይጓጓል.
                        በአንተ ለጋስ ድጋፍ፣ የተስፋ ብርሃን እና ለሁሉም መቅደስ ሆኖ የሚያገለግል ቤተ ክርስቲያን ለመገንባት ዓላማችን ነው.
                    </p>
                    <p className="font-light leading-loose"> ማህበረሰባችን ባለፉት አመታት በርካታ ፈተናዎች አጋጥመውታል፣ነገር ግን በዚህ ሁሉ እምነታችን ጠንካራ ሆኖ ቆይቷል.
                        በተበደሩ ቦታዎች፣ ጊዜያዊ ቦታዎች ላይ ተሰብስበናል፣ አልፎ ተርፎም አካላትን በጸሎት እና በአንድነት እንዲሰበሰቡ ደፍረናል.
                        ሆኖም፣ በእውነት መንፈሳዊ ቤታችን ተብሎ ሊጠራ የሚችል ቋሚ ቦታ የምናገኝበት ጊዜ አሁን ነው.
                    </p>
                    <hr className="mt-8 mb-8" />
                    <div className='text-3xl font-bold mb-4'>ዝማኔዎች</div>
                    <p className="mt-2 mb-10">ማርች 8፣ 2024
                        በ ገብርኤላ ብራውን, አደራጅ
                    </p>
                    <p className="font-light leading-loose mb-8"> ማህበረሰባችን ባለፉት አመታት በርካታ ፈተናዎች አጋጥመውታል፣ነገር ግን በዚህ ሁሉ እምነታችን ጠንካራ ሆኖ ቆይቷል.
                        በተበደሩ ቦታዎች፣ ጊዜያዊ ቦታዎች ላይ ተሰብስበናል፣ አልፎ ተርፎም አካላትን በጸሎት እና በአንድነት እንዲሰበሰቡ ደፍረናል.
                        ሆኖም፣ በእውነት መንፈሳዊ ቤታችን ተብሎ ሊጠራ የሚችል ቋሚ ቦታ የምናገኝበት ጊዜ አሁን ነው.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-dark-blue text-white px-4 py-2 rounded-lg transform hover:scale-110 hover:bg-blue-400 tracking-normal hover:tracking-widest
                    w-40 h-10">ለግስ</button>
                        <button className="bg-dark-blue text-white px-4 py-2 rounded-lg transform hover:scale-110 hover:bg-blue-400 tracking-normal hover:tracking-widest
                    w-40 h-10">አጋራ</button>
                    </div>

                    <div className='text-3xl font-bold mb-8 mt-12'> የድጋፍ ቃላት </div>
                    <p className="mb-4">እባክዎን የድጋፍ ቃላትን ለመለዋወጥ ይለግሱ.</p>
                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4"></div>
                        <div >
                            <h2 class="text-lg font-bold">ስም-አልባ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                            <p>እግዚአብሔር ይባርክህ ሮኮን ብርታት እና ጽናትን፣ ጸሎቶችን በመላክ. ፍቅር፣ የክፍል ጓደኛህ አድሪያና እና ቤተሰብ።</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4"></div>
                        <div >
                            <h2 class="text-lg font-bold">ስም-አልባ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                            <p>እግዚአብሔር ይባርክህ ሮኮን ብርታት እና ጽናትን፣ ጸሎቶችን በመላክ. ፍቅር፣ የክፍል ጓደኛህ አድሪያና እና ቤተሰብ።</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4"></div>
                        <div >
                            <h2 class="text-lg font-bold">ስም-አልባ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                            <p>እግዚአብሔር ይባርክህ ሮኮን ብርታት እና ጽናትን፣ ጸሎቶችን በመላክ. ፍቅር፣ የክፍል ጓደኛህ አድሪያና እና ቤተሰብ።</p>
                        </div>
                    </div>

                    {/* <div><p>የበለጠ ይመልከቱ</p>
                        <hr className="w-1/2" /></div> */}

                    <button className="bg-dark-blue text-white px-4 py-2 rounded-lg transform hover:scale-110 hover:bg-blue-400 tracking-normal hover:tracking-widest
                    w-40 h-10 mt-4">የበለጠ አሳይ</button>
                </div>


                <div className='w-2/6 sticky top-0 h-screen overflow-y-auto bg-gray-100 rounded-lg ml-6 h-30'>
                    <div className='text-3xl font-bold mt-4 mb-4 ml-4 mr-4'>የገንዘብ ድጋፍ</div>
                    <p className="ml-4 mr-4 mb-4"> 21,000 ብር ከ 30,000 ብር ግብ ተሰብስቧል </p>
                    <div className="w-full bg-gray-200 ml-4 mr-4" style={{ width: '90%' }}>
                        <div className="bg-blue-500 text-xs leading-none text-center text-white"
                            style={{ width: '70%' }}>70%</div>
                    </div>
                    <p className="ml-4 mr-4 mb-4 text-sm font-light"> 727 ልገሳዎች </p>
                    <div className="flex items-center justify-center">
                        <button className="bg-dark-blue text-white px-4 py-2 rounded-lg transform hover:scale-110 hover:bg-blue-400 tracking-normal hover:tracking-widest
                    w-40 h-10">ለግስ</button>
                    </div>
                    <div className="flex gap-8 items-center justify-center mt-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path>
                                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path>
                                </g></svg>

                        </div>

                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path>
                            </g></svg></div>
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path>
                            </g></svg></div>
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path>
                            </g></svg></div>
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#000000"></path>
                                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#000000"></path>
                                    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#000000"></path> </g></svg>
                        </div>
                    </div>
                    <hr className="mt-4 mb-6" />

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4"></div>
                        <div >
                            <h2 class="text-lg font-bold">ስም-አልባ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4">

                        </div>
                        <div >
                            <h2 class="text-lg font-bold">ማርታ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4">

                        </div>
                        <div >
                            <h2 class="text-lg font-bold">ማርታ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gray-300 ml-4">

                        </div>
                        <div >
                            <h2 class="text-lg font-bold">ማርታ</h2>
                            <p class="text-sm text-gray-600">1000 ብር</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <p>የበለጠ ይመልከቱ</p>
                        <hr className="w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DonationCause;

